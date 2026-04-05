---
layout: article
title: Privacy & Security
aside:
  toc: true
sidebar:
  nav: docs
---

## Data Storage

All data in SunoForge is stored **locally in your browser** and if enabled Google Drive. Nothing is sent to any SunoForge servers.

| Data | Where stored |
| --- | --- |
| API keys (Google AI Studio, OpenRouter) | Browser `localStorage`/`Google Drive` (AES-256-GCM encrypted) |
| Local LLM server address and auth key | Browser `localStorage`/`Google Drive` (AES-256-GCM encrypted) |
| Song history | Browser `localStorage`/`Google Drive` |
| UI language preference | Browser `localStorage`/`Google Drive` |
| Selected model | Browser `localStorage`/`Google Drive` |

---

## Network Connections

SunoForge only connects to the following external services — and only when you trigger a generation or model fetch:

| Service | When | Purpose |
| --- | --- | --- |
| `generativelanguage.googleapis.com` | Generation / model fetch | Google AI Studio (Gemini) API |
| `openrouter.ai` | Generation / model fetch | OpenRouter API |
| `esm.sh` | Page load | ES module CDN (GoogleGenAI SDK) |
| `vercel.app` | Page load, Generation, Analsys | Anonymous Statistic |
| `accounts.google.com` | Page Load / On Demand | Google Drive Authentication |
| `www.googleapis.com/drive/v3/` | Setting / History Sync | Google Drive setting and history storage |
| Your local LLM server address | Generation / model fetch | Local LLM (if configured) |

No telemetry, analytics, or usage data is collected.

---

## API Key Security

API keys are encrypted in `localStorage` and `Google Drive` using **AES-256-GCM** with a per-browser key derived via PBKDF2. Keys are decrypted in memory only when needed for a request and are never written to storage in plaintext.

**Recommendations:**

- Only use SunoForge on trusted personal devices
- Do not share backup files that include your API key — backup exports write keys unencrypted
- If you need to remove a saved key, clear the input field and click **Save**
- Use browser profiles or private/incognito mode if sharing a computer

---

## No Server

SunoForge is a completely client-side application. There is no SunoForge backend, login system, or user account. Your songs and settings exist only in your browser.

See <a href="https://sunoforge.app/Privacy_Policy.html" targer="_blank" alt="Privacy Policy">Privacy Policy</a> for full details on what data is stored and where.
