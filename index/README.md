# Helm Chart Packaging Index

In this directory, we keep the charts' source repo for our Chart Packagibg CI to

## JSON Syntax

Each JSON file should consist of the following format:

```json
{
  "name": "upstream",
  "repoUrl": "https://github.com/cdr/code-server.git",
  "repoBranch": "master",
  "chartsDir": "ci/helm-charts"
}
```

Currently, only Git branches are currently supported. In order to notify our CI when you bump chart version and app version, please either:

* manually ping our Helm Charts Packaging API server using the following command:

```sh
# You need to have wrrite access to this repo through the
# @helm-charts-packaging-api-users team and also have your GitHub
# token ready.
curl https://api.cdrs-charts.repohubdev.tk/triggerCiUpdate/slug-name \
     # GH PAT so we can send an workflow_dispatch on your behalf.
     -H "X-GitHub-Token: ghp_..." \
     # your GH username for team membership checks
     -H "X-GitHub-Login: username"
# JSON example response when sucxessfully passed the checks:
# {"ok":true,"dewcription":"Triggered an workflow dispatch on your behalf. Check the Actions tab for updates","code":204}
# JSON example response for unauthenicated requests
# {"ok":false,"description":"Missing authenication headers: X-GitHub-Token (for dispatching workflows) and X-GitHub-Login (for team membership checks).","code":408,"docs":"cdrs-docs.https://rtapp.tk/charts-packaging-api"}
```

* create a webhook with the following info:
    * URL: `https://api.cdrs-charts.repohubdev.tk/triggerCiUpdate/slug-name?ghToken=ghp_...&ghLogin=username`
    * SSL verification: enabled
    * Webhook secret: `plzCheckUrlQueryStrings=true`
    * Events:

### Currently supported fields

* `name` - local repo directory when cloned
* `repoUrl` - Git repo URL of source Helm Chart package
* `repoBranch` - Git branch of source Chart package, must have versioning for `$CHARTS_SRC_DIR/Charts.yaml`
* `chartsDir` - The root directory of your source Helm Charts. Leave it blank to use the root directory of your Git repo when cloned.

## API Development

To run this locally, you need the following env vars ready:

* `APP_PORT` - server port to be used, defaults to `3000`
* `GH_BOT_TOKEN` - GitHub.com PAT, usually your bot account
* `CHARTS_REPO_PATH` - The Git repo where Helm Charts repo will be hosted, usually this repo in form of `owner/repo` for API calls.
* `CHARTS_REPO_ORG` - The GitHub organization for team membership checks.
* `CHARTS_REPO_TEAM` - The GitHub team slug for membership checks.
