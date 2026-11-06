# Piloterr MCP Server

Official [Model Context Protocol](https://modelcontextprotocol.io) server for the [Piloterr](https://www.piloterr.com) web scraping API.

Scrape 300+ websites (Amazon, LinkedIn, Google, Zillow, Crunchbase…) as structured JSON with one API.

It lets Claude, Cursor, VS Code, Windsurf and any MCP client call the API as tools. Runs over **stdio** (local) or **Streamable HTTP** (self-hosted).

## Requirements

- Node.js 20 or newer
- a Piloterr API key — [sign up](https://app.piloterr.com/register), then copy it from the [dashboard](https://app.piloterr.com)

## Hosted server (recommended)

Piloterr runs this server for you at **`https://mcp.piloterr.com/`** (Streamable HTTP). Send your API key in the `x-api-key` header; nothing to install.

```sh
claude mcp add --transport http piloterr https://mcp.piloterr.com/ --header "x-api-key: YOUR_API_KEY"
```

```json
{
  "mcpServers": {
    "piloterr": {
      "url": "https://mcp.piloterr.com/",
      "headers": {
        "x-api-key": "YOUR_API_KEY"
      }
    }
  }
}
```

The hosted server and this package expose the same API; run the package locally when you want stdio, your own network egress, or to self-host it.

## Run it locally

### Claude Code

```sh
claude mcp add piloterr --env PILOTERR_API_KEY=YOUR_API_KEY -- npx -y @piloterr/mcp
```

### Claude Desktop, Cursor, Windsurf and other clients

Add the server to the client's MCP configuration (`claude_desktop_config.json`, `.cursor/mcp.json`…):

```json
{
  "mcpServers": {
    "piloterr": {
      "command": "npx",
      "args": ["-y", "@piloterr/mcp"],
      "env": {
        "PILOTERR_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

### VS Code

```json
{
  "servers": {
    "piloterr": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@piloterr/mcp"],
      "env": {
        "PILOTERR_API_KEY": "${input:piloterr-api-key}"
      }
    }
  },
  "inputs": [
    {
      "type": "promptString",
      "id": "piloterr-api-key",
      "description": "Piloterr API key",
      "password": true
    }
  ]
}
```

### Claude Desktop extension

Download the `.mcpb` bundle from the releases page and open it; Claude Desktop asks for your API key.

### Docker

```sh
docker build -t piloterr-mcp .
docker run -i --rm -e PILOTERR_API_KEY=YOUR_API_KEY piloterr-mcp
```

## Tools

Piloterr has 391 endpoints, more than a client should load as separate tools. The server exposes a small catalog instead: the model searches it, reads an endpoint's parameters, then calls it.

| Tool               | Description                                       |
| ------------------ | ------------------------------------------------- |
| `search_endpoints` | Search the 391 Piloterr endpoints.                |
| `get_endpoint`     | Describe the parameters of one endpoint.          |
| `call_endpoint`    | Call one Piloterr endpoint and return the result. |
| `usage`            | Show API usage and remaining credits.             |

Every tool that calls the API consumes credits. JSON results are returned as text; images are returned inline and other files (PDF…) as embedded resources, up to 4 MB.

## Streamable HTTP

```sh
npx @piloterr/mcp --http --port 3000
```

The endpoint is `POST /mcp` (stateless, JSON responses). Each client sends its own key in the `x-api-key` header (or `Authorization: Bearer <key>`); the server never uses a key of its own. It binds to `127.0.0.1` by default and rejects browser origins unless you allow them — put it behind TLS before exposing it.

`createHttpHandler()` is exported for Fetch-compatible runtimes (Cloudflare Workers, Deno, Bun):

```ts
import { createHttpHandler } from "@piloterr/mcp";

export default { fetch: createHttpHandler({ allowedOrigins: [] }) };
```

## Security

- The API key is read from `PILOTERR_API_KEY` (stdio) or the request headers (HTTP) and removed from error messages.
- Content fetched from websites is untrusted: the server instructions tell the model to treat it as data, not instructions.
- See [SECURITY.md](SECURITY.md) to report a vulnerability.

## Development

```sh
npm install
npm test
npm run build
npx @modelcontextprotocol/inspector node dist/stdio.js
```

## Built on the SDK

The server uses the official [Node.js SDK](https://github.com/piloterr/piloterr-node) (`@piloterr/sdk`).

## License

MIT — see [LICENSE](LICENSE).
