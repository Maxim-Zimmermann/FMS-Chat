# start Supabase
in `supabase` run
```sh
docker compose up -d
```

# start Supertokens
in `supertokens` run
```sh
docker run -p 3567:3567 --rm --network supabase_default \
  --env-file .env \
  --name supertokens \
  -d registry.supertokens.io/supertokens/supertokens-postgresql
```

# start cerbos
in `cerbos` run
```sh
docker run --rm --name cerbos -d \
  -v $(pwd)/policies:/policies \
  -p 3592:3592 -p 3593:3593 \
  ghcr.io/cerbos/cerbos:0.46.0
```

# start app
in `ai` run
```sh
npm run dev
```

# start everything
```sh
cd supabase
docker compose up -d
cd ../supertokens
docker run -p 3567:3567 --rm --network supabase_default \
  --env-file .env \
  --name supertokens \
  -d registry.supertokens.io/supertokens/supertokens-postgresql
cd ../cerbos
docker run --rm --name cerbos -d \
  -v $(pwd)/policies:/policies \
  -p 3592:3592 -p 3593:3593 \
  ghcr.io/cerbos/cerbos:0.46.0
cd ../ai
npm run dev
```
