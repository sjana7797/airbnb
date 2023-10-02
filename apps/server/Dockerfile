FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
# Set working directory
WORKDIR /airbnb
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=server --docker

FROM base AS installer
RUN apk update
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /airbnb
COPY --from=builder /airbnb/out/json/ .
COPY --from=builder /airbnb/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

# Build the project
COPY --from=builder /airbnb/out/full/ .
COPY turbo.json turbo.json

RUN pnpm turbo run build --filter=server...

FROM base AS sourcer
WORKDIR /airbnb
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY --from=installer /airbnb/ .
COPY --from=builder /airbnb/out/full/ .
COPY .gitignore .gitignore
RUN pnpm turbo run build --scope=server --include-dependencies --no-deps

FROM base AS runner
WORKDIR /airbnb
COPY --from=sourcer /airbnb/ .
CMD [ "node", "apps/server/dist/main.js" ]