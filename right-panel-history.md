---
layout: single
title: History Tab
sidebar:
  nav: "docs"
---

The History tab manages all your saved songs. Every generated song is automatically saved here.

---

## Saved Songs List

All previously generated songs are listed with their title, genre, and save timestamp.

| Action | Description |
| --- | --- |
| **Load** | Restores a saved song — reloads all settings into the left-panel form and re-renders the Output, Chords, and Lyrics tabs |
| **Export** | Save an individual song to a `.txt` file |
| **Delete (✗)** | Remove a song from history |

---

## Backup

Exports **all** songs in history to a single `.txt` backup file.

- A confirmation modal shows the song count before exporting
- Optional **Include API Key in backup** checkbox — covers both Google AI Studio and OpenRouter keys
- If API keys are included, they are stored in plain text — keep the backup file in a secure location

---

## Import

Accepts two file types:

| File | Behaviour |
| --- | --- |
| **Single-song `.txt`** | A file exported via the per-song Export button. Adds it to history and loads it immediately. |
| **History backup `.txt`** | A file created with the Backup button. Songs are **merged** into the existing history (duplicates resolved by keeping the most recently saved version). If the backup included API keys or a selected model, those are also restored automatically. |

---

## Clear All

Removes all saved history after confirmation. This cannot be undone — back up first if needed.
