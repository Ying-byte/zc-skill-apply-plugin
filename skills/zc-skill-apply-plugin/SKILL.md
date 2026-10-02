---
name: zc-skill-apply-plugin
description: >-
  准备投递材料与步骤；须用户确认后才能发送。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-apply-plugin.
---

# 网页半自动投递 · Skill

## When to use

- User asks for: 网页半自动投递
- 准备投递材料与步骤；须用户确认后才能发送。

## Tools (`zc-skill-apply-plugin`)

| Tool | Args |
|------|------|
| `prepare_apply` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
