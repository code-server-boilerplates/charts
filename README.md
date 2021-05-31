# GitHub Pages-based Helm Charts

The Helm Charts for boilerplates submitted through the 
[template-registry issue tracker](https://github.com/com/code-server-boilerplates/template-registry/issues).

## Usage

[Helm](https://helm.sh) must be installed to use the charts. Please refer to
Helm's [documentation](https://helm.sh/docs) to get started.

Once Helm has been set up correctly, add the repo as follows:

```sh
helm repo add cdrs-deploy https://code-server-boilerplates.github.io/charts
```

If you had already added this repo earlier, run `helm repo update` to retrieve
the latest versions of the packages.  You can then run `helm search repo
<alias>` to see the charts.

**For template maintainers**: If you need to update your charts here, either
manually submit an PR or trigger an CI build through `https://cdrs-deploy.repohubdev.tk/api/updateHelmChart/${template-slug}`
(our bots will trigger an `workflow_dispatch` to clone the repo and copy the `charts` directory
or whatever directory you told us to pull from), commit and push.

## Available Charts

Tk
