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
docker compose up -d
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
docker compose up -d
cd ../ai
npm run dev
```
