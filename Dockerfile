# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --ignore-scripts --no-audit --no-fund
COPY tsconfig.json tsconfig.build.json ./
COPY src ./src
RUN npm run build && npm prune --omit=dev

FROM node:${NODE_VERSION}-alpine AS runtime
LABEL org.opencontainers.image.title="Piloterr MCP Server" \
      org.opencontainers.image.description="Scrape 300+ websites (Amazon, LinkedIn, Google, Zillow, Crunchbase…) as structured JSON with one API." \
      org.opencontainers.image.url="https://www.piloterr.com" \
      org.opencontainers.image.source="https://github.com/piloterr/piloterr-mcp" \
      org.opencontainers.image.licenses="MIT"
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
COPY --chown=node:node package.json LICENSE ./
USER node
ENTRYPOINT ["node", "dist/stdio.js"]
