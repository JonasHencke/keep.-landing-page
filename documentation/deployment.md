# keep. Landing Page

Landing page for keep., built with [Nuxt](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com).

## Environment Variables

Copy `.env.example` to `.env` and adjust:

```
NUXT_PUBLIC_SITE_URL=https://keepcleaner.app
```

`NUXT_PUBLIC_SITE_URL` is used for sitemap, canonical and Open Graph URLs.

## Local Development

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
```

## Deploy as Docker Image (for servers with low RAM)

The Nuxt/Nitro production build is memory-hungry and can OOM on 4GB VPS. The workflow below builds the image locally and lets Coolify only pull & run it.

### 1. Build image locally (must target the server's architecture, e.g. amd64)

```bash
docker build --platform linux/amd64 \
  --build-arg NUXT_PUBLIC_SITE_URL=https://keepcleaner.app \
  --no-cache \
  -t ghcr.io/jonashencke/keep-landing-page:latest .
```

### 2. Push to GitHub Container Registry

```bash
echo "<token>" | docker login ghcr.io --username JonasHencke
docker push ghcr.io/jonashencke/keep-landing-page:latest
```

The token is a GitHub PAT with `write:packages` and `read:packages` scopes.

### 3. Coolify

- Create a new application with deployment type **Docker Image**.
- Image: `ghcr.io/jonashencke/keep-landing-page`
- Tag: `latest`
- Internal port: `80`
- Deploy.

For private images, log in on the Coolify server so it can pull the image:

```bash
docker login ghcr.io --username JonasHencke
```