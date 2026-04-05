---
layout: single
title: Right Panel Tabs
sidebar:
  nav: "docs"
---

# Right Panel Tabs

The right panel displays your generated song and provides tools for reviewing, editing, and saving your work.

---

## 📄 Output

Displays your generated song with interactive controls.

### Song Metadata

The top of the output card shows the song's title, genre, tempo, key, and structure as determined by the AI.

### ↑ Update Settings

A button that appears at the top of the output card after generation. It reads all the settings the AI used or generated — genre, mood, tempo, key, structure, vocal type, sound profile, influences, and more — and writes them back to every field in the left-panel form.

A full preview of what will change is shown, and confirmation is required before applying. This is useful for keeping the form in sync with what the AI actually used, so the next generation starts from the same baseline.

### Full Lyrics

Lyrics are displayed organized by section, each with its own set of controls:

| Control | Description |
| --- | --- |
| **↻ Regen** | Regenerate this section only using AI — preserves all other sections |
| **✎ Edit** | Manually edit the section's lyrics, type, and direction tags |
| **Chord progression** | View the suggested chords for this section |
| **Copy** | Copy this section's lyrics to clipboard |

### Action Buttons

| Button | Description |
| --- | --- |
| **⤴ Copy to Lyrics Tab** | Send the generated lyrics to the Lyrics tab for further refinement |
| **Copy All** | Copy all lyrics to clipboard |
| **Export** | Open the full export modal |
| **Save to History** | Save this version to the History tab |

---

## 🎸 Chords

Displays suggested chord progressions for your song, organized by section.

- Roman numeral notation alongside chord names
- Updates automatically with each generation or section regeneration

---

## 📚 History

Manage saved songs and project versions.

### Saved Songs List

All previously saved songs are listed with their title, genre, and save timestamp.

### Actions

| Action | Description |
| --- | --- |
| **Load** | Restores a saved song — reloads all settings into the left panel form and re-renders the output, chords, and lyrics tabs |
| **Export** | Save an individual song to a `.txt` file |
| **Delete (✗)** | Remove a song from history |

### Backup

Exports **all** songs in history to a single `.txt` backup file.

- A confirmation modal shows the song count before exporting
- Optional **Include API Key in backup** checkbox — covers both Google AI Studio and OpenRouter keys
- If API keys are included, they are stored in plain text — keep the backup file in a secure location

### Import

Accepts two file types:

| File | Behaviour |
| --- | --- |
| **Single-song `.txt`** | A file exported via the per-song Export button. Adds it to history and loads it immediately. |
| **History backup `.txt`** | A file created with the Backup button. Songs are **merged** into the existing history (duplicates resolved by keeping the most recently saved version). If the backup included API keys or a selected model, those are also restored automatically. |

### Clear All

Removes all saved history after confirmation.
