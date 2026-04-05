---
layout: single
title: Bug Submission
sidebar:
  nav: "docs"
---

Found a bug or and a problem you can fix? Here's how to report it so it can be reproduced and fixed quickly.

---

## Before Reporting

Check the [FAQ](/faq/) to see if the issue is a known limitation or configuration question. Also confirm you are using the latest version — the app is a single-page app that updates automatically, but a hard refresh (`Ctrl+Shift+R`) ensures you have the latest code.

---

## Enable Debug Mode

Debug Mode captures a detailed session log that is essential for diagnosing most issues.

**Double-click the SunoForge logo** in the header to enable it. A debug indicator will appear while it is active.

Debug Mode records:

| Category | What is logged |
| --- | --- |
| `SYSTEM` | App version, initialisation events |
| `STATE` | Settings changes, tab switches |
| `ANALYZER` | Analyzer input and AI response |
| `SONG_GENERATION` | Full prompt, raw AI response, parse results |
| `TAB_CHANGE` | Every left/right panel tab interaction |

---

## Reproduce the Issue

With Debug Mode active, perform the exact steps that trigger the bug. The more precisely you can repeat it, the more useful the log will be.

---

## Download the Debug Log

Click the debug indicator to export the full session log as a `.txt` file. The file includes:

- App version
- All logged events with timestamps
- Current song export
- Full metadata

---

## Submit the Report

Open a new issue on the [GitHub Issues page](https://github.com/ratava/SunoForge/issues) and include:

1. A clear description of what happened and what you expected to happen
2. Steps to reproduce
3. The downloaded debug log file attached to the issue
4. Browser and OS (e.g. Chrome 123, Windows 11)

> Issues submitted without a debug log are much harder to diagnose. When in doubt, attach it anyway.
