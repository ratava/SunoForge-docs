---
layout: single
title: Output Tab
sidebar:
  nav: "docs"
---

The Output tab displays your generated song with interactive controls for editing, copying, and refining the result.

---

## Song Metadata

The top of the output card shows the song's title, genre, tempo, key, and structure as determined by the AI.

---

## Update Settings

A button that appears at the top of the output card after generation. It reads all the settings the AI used or generated — genre, mood, tempo, key, structure, vocal type, sound profile, influences, and more — and writes them back to every field in the left-panel form.

A full preview of what will change is shown, and confirmation is required before applying. This is useful for keeping the form in sync with what the AI actually used, so the next generation starts from the same baseline.

---

## Suno Style Prompt

The condensed style string sent to Suno's **Style of Music** field. Capped at 1000 characters. Includes genre, production style, instrumentation, mood, era, and influences in a compact, Suno-safe format.

A **Copy** button is provided next to the prompt. The character count is displayed below it.

---

## Production Notes

A summary of the AI's musical decisions: key, tempo, time signature, feel, and arrangement notes. Useful as a reference when tweaking or regenerating.

---

## Lyrics

Lyrics are displayed section by section. Each section is an editable textarea — you can change the lyrics, section type, and direction tags directly.

### Per-section Controls

| Control | Description |
| --- | --- |
| **↻ Regen** | Regenerate this section only using AI — all other sections are preserved |
| **Copy to Lyrics Tab** | Send all lyrics to the Lyrics tab in the left panel for further editing |
| **Copy All** | Copy the full assembled lyrics to clipboard |

### Editing a Section

Click directly into a section's text area to edit. The first line is the section type tag (e.g. `[Verse]`). Lines in `[square brackets]` below it are direction tags that guide Suno's performance. Remaining lines are the lyrics body.

Changes are saved automatically to history.

---

## Chord Chart

Displays the core chords and progression suggested by the AI for this song. See the [Chords Tab](/right-panel-chords/) for details.
