---
layout: default
title: Privacy & Security
nav_order: 6
---

# Privacy & Security

---

## Data Storage

All data in SunoForge is stored **locally in your browser**. Nothing is sent to any SunoForge servers.

| Data | Where stored |
| --- | --- |
| API keys (Google AI Studio, OpenRouter) | Browser `localStorage` (AES-256-GCM encrypted) |
| Local LLM server address and auth key | Browser `localStorage` (AES-256-GCM encrypted) |
| Song history | Browser `localStorage` |
| UI language preference | Browser `localStorage` |
| Selected model | Browser `localStorage` |

---

## Network Connections

SunoForge only connects to the following external services — and only when you trigger a generation or model fetch:

| Service | When | Purpose |
| --- | --- | --- |
| `generativelanguage.googleapis.com` | Generation / model fetch | Google AI Studio (Gemini) API |
| `openrouter.ai` | Generation / model fetch | OpenRouter API |
| `esm.sh` | Page load | ES module CDN (GoogleGenAI SDK) |
| Your local LLM server address | Generation / model fetch | Local LLM (if configured) |

No telemetry, analytics, or usage data is collected.

---

## API Key Security

API keys are encrypted in `localStorage` using **AES-256-GCM** with a per-browser key derived via PBKDF2. Keys are decrypted in memory only when needed for a request and are never written to storage in plaintext.

**Recommendations:**

- Only use SunoForge on trusted personal devices
- Do not share backup files that include your API key — backup exports write keys unencrypted
- If you need to remove a saved key, clear the input field and click **Save**
- Use browser profiles or private/incognito mode if sharing a computer

---

## No Server

SunoForge is a completely client-side application. There is no SunoForge backend, login system, or user account. Your songs and settings exist only in your browser.

---

*Previous: [Interface Language](interface-language.md) · Next: [FAQ](faq.md)*
