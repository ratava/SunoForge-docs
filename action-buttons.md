---
layout: single
title: Action Buttons
sidebar:
  nav: "docs"
---

The action bar sits above the right panel and contains the primary controls for generating and exporting your song.

---

## Analyze

Opens the **Style & Lyrics Analyzer** — a modal that lets you feed existing material to the AI so it can auto-configure your settings.

You can paste in any combination of:

- **Just lyrics** — with or without Suno-style section tags (`[Verse]`, `[Chorus]`, etc.)
- **Just a style description** — e.g. *"Sound like early Tom Waits meets Nick Cave, dark cabaret, upright bass, 1970s lo-fi"*
- **Both** — a `Style:` line followed by lyrics

On clicking **Analyze**, the AI reads the input and automatically fills in:

> Genre · Mood · Tempo · Era · Production Style · Instrumentation · Mix · Influences

All changes are applied across every left-panel tab at once. This is the fastest way to clone the feel of an existing song or kick-start a session from lyrics you already have.

---

## Write My Song

The main generation button. Sends all your current left-panel settings to the AI and produces:

- **Lyrics** — structured by section, editable inline
- **Suno Style Prompt** — a condensed, Suno-safe style string (≤ 1000 characters)
- **Production Notes** — key, tempo, time signature, feel, and arrangement guidance
- **Chord Chart** — core chords and a full progression with harmonic notes

A confirmation dialog previews the key settings before generation begins, so nothing runs unexpectedly.

> **Genre** and **Song Concept** are required. All other fields are optional — the AI will make intelligent choices for anything left blank.

---

## Copy to Suno

Appears after a song has been generated. Opens the **Export** modal with everything you need to paste into Suno:

| Field | Description |
| --- | --- |
| **Song Title** | The AI-generated title, ready to copy |
| **Style Prompt** | The condensed style string (≤ 1000 chars) |
| **Instrument Exclusions** | Instruments to suppress, formatted for Suno's exclusion field |
| **Full Lyrics** | Complete assembled lyrics with section tags |

Each field has its own **Copy** button, and a **Download .txt** option saves the full export as a text file.

---

## Cover Image Prompt

Appears after a song has been generated. Opens a tool that creates a detailed visual prompt you can use with an AI image generator to produce cover art that matches the mood and theme of your song.

See [Cover Image Prompt](/cover-image-prompt/) for full details.

---

## Reset

Clears the entire form and reloads the app. A confirmation dialog is shown before anything is cleared.

- All form fields (genre, concept, mood, settings, structure, etc.) are reset
- Your **API keys** and **History** are preserved
- The app restarts cleanly from a blank state

Use this when starting a completely new song from scratch.

---

## Help

Opens this documentation site in a new browser tab.
