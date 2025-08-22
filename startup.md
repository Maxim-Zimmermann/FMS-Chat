# start Supabase
in `supabase/docker` run
```sh
docker compose up -d
```
# start Supertokens
in `supertokens` run
```sh
docker run -p 3567:3567 --network supabase_default \
  --env-file .env \
  --name supertokens \
  -d registry.supertokens.io/supertokens/supertokens-postgresql
```
# start cerbos
in `parent` run
```sh
docker run --rm --name cerbos -d \
  -v $(pwd)/cerbos/policies:/policies \
  -p 3592:3592 -p 3593:3593 \
  ghcr.io/cerbos/cerbos:0.46.0
```
# start app
in `ai` run
```sh
npm run dev
```