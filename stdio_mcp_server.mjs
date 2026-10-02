#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "apply-plugin",
  "titleZh": "网页半自动投递",
  "summary": "准备投递材料与步骤；须用户确认后才能发送。",
  "tools": [
    "prepare_apply"
  ],
  "proxyTools": {
    "prepare_apply": "zc_apply_prepare"
  },
  "localKind": "checklist"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
