# 网页半自动投递

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

准备投递材料与步骤；须用户确认后才能发送。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-apply-plugin
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-apply-plugin": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-apply-plugin/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `prepare_apply` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-apply-plugin/SKILL.md`.

## License

MIT — see `LICENSE`.
