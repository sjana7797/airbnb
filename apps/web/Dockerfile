FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
# set working directory
WORKDIR /airbnb
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=web --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /airbnb

COPY .gitignore .gitignore
COPY --from=builder /airbnb/out/json/ .
COPY --from=builder /airbnb/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

# Build the project
COPY --from=builder /airbnb/out/full/ .
COPY turbo.json turbo.json

COPY .env ./apps/web/

RUN pnpm turbo run build --filter=web...

FROM base AS runner
WORKDIR /airbnb

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs


COPY --from=installer /airbnb/apps/web/next.config.js .
COPY --from=installer /airbnb/apps/web/package.json .

COPY --from=installer --chown=nextjs:nodejs /airbnb/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /airbnb/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /airbnb/apps/web/public ./apps/web/public

ENV HOSTNAME "0.0.0.0"
CMD node apps/web/server.js