---
layout: default
title: Key Features
nav_order: 3
parent: Reference
---

# Key Features

---

## 🔍 Analyze

Auto-configure all settings from existing lyrics or a style description.

### Use Cases

- Paste existing lyrics to detect structure, mood, genre, and tempo automatically
- Describe your ideal sound in natural language ("early Tom Waits meets Nick Cave, dark cabaret")
- Combine both lyrics and a style description for the most accurate analysis

### What It Configures

- Extracts song structure from labeled sections in the pasted lyrics
- Auto-sets: Genre, Mood, Goal, Rhythm, Groove Feel, Tempo, Era, Production Style, Instruments, Instrumentation Focus, Bass, Spatial/Effects, Mix Character
- Suggests influences based on style description
- Updates settings across all tabs

### How to Use

1. Click the **Analyze** button
2. Enter lyrics, a style description, or both in the modal
3. Click **Analyze** in the modal
4. Review the auto-configured settings
5. Make any manual adjustments
6. Generate your song

---

## 📤 Export Modal

Comprehensive export options for your generated song.

### What's Included

| Section | Description |
| --- | --- |
| **Song Title** | Copy separately for Suno's title field |
| **Style Prompt** | Complete style/genre description for Suno's style field |
| **Lyrics** | Formatted lyrics with meta tags stripped for clean Suno input |
| **Exclusions** | Instruments to exclude (if any were specified) |
| **Download .txt** | Save the complete song file with all metadata |

### Export File Format

```text
Title: [Your Song Title]
Style: [Complete style prompt with genre, mood, era, production notes]

[Verse 1]
Your lyrics here...

[Chorus]
Your chorus...
```

---

## 🐛 Debug Mode

Advanced troubleshooting and session logging.

### Enabling Debug Mode

**Double-click the SunoForge logo** in the header to toggle debug mode on or off.

### Features

- Real-time logging of all operations in a debug panel
- Categorized log entries: `SYSTEM`, `STATE`, `TAB_CHANGE`, `ANALYZER`, `SONG_GENERATION`, and more
- Timestamped entries for precise tracing

### Downloading Debug Logs

Click the debug indicator (shown when debug mode is active) to export the full session log as a `.txt` file. The export includes:

- Version info
- All logged events with timestamps
- Current song export
- Full metadata

### When to Use

- Troubleshooting generation failures
- Reporting bugs on the [GitHub Issues page](https://github.com/ratava/SunoForge/issues)
- Understanding how the AI interpreted your settings
- Tracking section-by-section regeneration behaviour

> **Bug reports:** Enable debug mode, reproduce the issue, download the debug logs, and attach the file to your GitHub issue.

---

*Previous: [Right Panel Tabs](right-panel-tabs.md) · Next: [Tips & Best Practices](../tips-and-best-practices.md)*
