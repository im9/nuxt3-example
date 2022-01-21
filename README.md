# Nuxt 3 Example

[demo](https://nuxt3-example.netlify.app/).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

## DB Seed

```
npx prisma db seed
```

## DB Migrate

```
# migrate
npx prisma migrate dev --name migrate_name

# reset
npx prisma migrate reset
```
