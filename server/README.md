# CSB Helm Charts Packaging API

## API Docs

API Docs are available soon at <https://csb-api.community-lores.gq>.

## Development

Since this code is part of an monorepo, you need to clone this repo first.

```sh
git clone https://github.com/code-server-boilerplates/charts
cd charts/server
```

Theb edit the dot env file:

```
# copy the template dotenv file first
cp .env.ezample .env

# then do this
$EDITOR .env
```

Run the development server with `npm run dev` (with debug messages).

### Required Dependencies

* Node.js 12.x (or above)
* npmjs 7.x (preferred to use lockfileVersion@v2, upgrade with `npm i -g npm@latest` first)
* GitHub PAT and
* To test team membership checks, the `CHARTS_REPO_OWNER` must belong into an Organization.

## WARNING

Do not enable debugging mode in production since it will log PATs to the console, which is dangerous if some malicious person use them to spam workflow dispatches and even clone private repos of vicitims.
