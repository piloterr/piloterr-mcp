# Installing the Piloterr MCP server

Instructions for AI agents installing this server for a user.

1. Check that Node.js 20 or newer is available (`node --version`).
2. Ask the user for their Piloterr API key. They can create one at https://app.piloterr.com/register and copy it from https://app.piloterr.com.
   Never print the key back or commit it to a file in a repository.
3. Prefer the hosted server: add it with URL `https://mcp.piloterr.com/` and the header `x-api-key: <key>`:

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

Or run it locally over stdio:

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

4. Restart the client and check that the `search_endpoints` tool is listed.

The server needs no other configuration. Each tool call that reaches the API consumes Piloterr credits.
