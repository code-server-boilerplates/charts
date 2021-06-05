# Helm Charts Repo for Deploying code-server to Kubernetes

You're navigating into an community-maintained Helm Charts repo for all Kubernetes stuff on deploying `code-server`. To learn more, [visit the GitHub repo](https://github.co/code-server-boilerplates/charts)

## Usage

[Helm](https://helm.sh) must be installed to use the charts. Please refer to
Helm's [documentation](https://helm.sh/docs) to get started.

Once Helm has been set up correctly, add the repo as follows:

```sh
helm repo add deploy-code-server https://code-server-boilerplates.github.io/charts
```

If you had already added this repo earlier, run `helm repo update` to retrieve
the latest versions of the packages.  You can then run `helm search repo deploy-code-server` to see the charts.

To install the basic code-server instance in an Kubernetes cluster:

```sh
# download the example file
wget https://raw.githubusercontent.com/cdr/code-server/main/ci/helm-chart/values.yml

# edit it as needed, we assume $EDITOR is Vim.
$EDITOR values.yml

# and hit the road (once successfully depkoyed, check the terminal output
# for any additional steps, under the NOTES section)
$ helm upgrade --install code-server deploy-code-server/code-server -f values.yaml
```

## Maintainers

* [Andrei Jiroh](https://github.com/AndreiJirohHaliliDev2006)
