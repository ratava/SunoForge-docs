---
layout: single
title: Suno Integration
sidebar:
  nav: "docs"
---

SunoForge is designed to export songs in a format ready for direct use in [Suno](https://suno.com).

## Export Workflow

1. Generate your song in SunoForge
2. Click **Export** in the Output tab
3. Use the individual copy buttons in the export modal:

| Button | Paste into Suno |
| --- | --- |
| **Copy Song Title** | Suno's **Title** field |
| **Copy Style Prompt** | Suno's **Style of Music** field |
| **Copy Lyrics** | Suno's **Lyrics** field |

4. Create your track in Suno

---

## Export File Format

If you click **Download .txt**, the file contains all song data in a structured format:

```text
Title: [Your Song Title]
Style: [Complete style prompt — genre, mood, era, production notes]

[Verse 1]
Your lyrics here...

[Chorus]
Your chorus...
```

The **Copy Lyrics** button strips Suno-incompatible meta tags automatically, giving you clean lyrics ready to paste.

---

## Style Prompt

SunoForge generates a complete style prompt that combines:

- Genre and sub-genre
- Mood and emotional tone
- Era/decade
- Production style
- Instrumentation highlights
- Vocal characteristics (if applicable)
- Any influences you specified

This is designed to be pasted directly into Suno's **Style of Music** field.

---

## Tips for Suno

- Keep the style prompt under Suno's character limit — SunoForge warns you if the assembled lyrics are too long
- Use **Copy Lyrics** (not Copy All) to get clean lyrics without metadata lines
- Suno works best with clearly labelled song sections: `[Verse]`, `[Chorus]`, `[Bridge]`, etc. — SunoForge outputs these automatically
- If Suno ignores parts of the style prompt, try simplifying — fewer, stronger keywords often work better
