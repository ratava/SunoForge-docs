---
layout: default
title: Cover Image Prompt
nav_order: 4
parent: Reference
---

# Cover Image Prompt Generator

After generating a song, SunoForge can generate a detailed image prompt for your cover art — ready to paste into any AI image generator (Midjourney, DALL-E, Stable Diffusion, etc.).

---

## How to Access

The **Cover Image Prompt** button appears in the Output tab once a song has been generated. Click it to open the cover image modal.

---

## Options

### Image Shape

| Option | Aspect Ratio |
| --- | --- |
| Unspecified | Let the image generator decide |
| Square | 1:1 |
| Landscape | 16:9 |
| Portrait | 9:16 |

### Image Resolution

| Option | Detail |
| --- | --- |
| Unspecified | Not specified in the prompt |
| 1K / 2K / 4K / 8K | Added as a resolution target to the prompt |

---

### Song Title Overlay

Control whether the song title should appear in the image prompt as typographic text:

| Setting | Effect |
| --- | --- |
| **No** | Title not included |
| **Top / Middle / Bottom** | Title text positioned at that location |

When a position is selected, further options appear:

- **Color** — colour picker for the title text
- **Font** — Sans-Serif, Serif, or a custom font name you specify
- **Capitalise** — adds capitalisation instruction to the prompt

### Artist Name Overlay

Same options as Song Title above, plus an **Artist Name** text field where you enter the name to display.

---

### Base Image on Song Lyrics & Concept

| Setting | Effect |
| --- | --- |
| **Yes** (default) | The AI uses the generated song title, concept, genre, and mood to create a thematically matched image prompt |
| **No** | A free-form **image description** textarea appears for you to describe the visual content yourself |

### Additional Instructions

An optional free-text field for any extra direction — visual style, colour palette, specific elements to include or avoid, reference artists, etc.

---

## Generating the Prompt

Click **Generate Image Prompt**. The AI creates a detailed, optimised prompt based on your settings, displayed in a read-only text box.

Click **Copy Prompt to Clipboard** to copy it for use in your image generator of choice.

---

## Tips

- For best Suno cover art (512×512), use **Square (1:1)** shape
- Leave resolution unspecified if your image generator has its own resolution settings
- Adding song title text in the prompt works best with image generators that support text rendering (e.g. DALL-E 3, Ideogram)
- The "Additional Instructions" field is powerful — use it to specify a visual style: *"oil painting, muted earth tones, 1970s album art aesthetic"*

---

*Previous: [Right Panel Tabs](right-panel-tabs.md) · Next: [Tips & Best Practices](../tips-and-best-practices.md)*
