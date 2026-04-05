---
layout: single
title: Mobile Version
sidebar:
  nav: "docs"
---

SunoForge includes a dedicated mobile interface optimised for phones and tablets.

---

## Automatic Redirect

When you open SunoForge on a touch device or a screen narrower than 1024px, you are automatically redirected to the mobile version (`mobile.html`). No manual action is needed.

Detection is based on:
- User agent matching (Android, iPhone, iPad, iPod, Opera Mini, IEMobile)
- Touch screen with `window.innerWidth < 1024px`

To use the desktop version on a tablet, switch your browser to **desktop mode** in its settings.

---

## Layout

The mobile UI is a single-page layout with a bottom navigation bar. All the same features are available as the desktop version, reorganised for smaller screens:

| Navigation Area | Contents |
| --- | --- |
| **Top header** | Logo, API bar toggle, language selector, Drive sync indicator |
| **Main area** | The currently active panel (scrollable) |
| **Bottom nav bar** | Settings · Vocal · Structure · Sound · Lyrics · Output · Chords · History |

Tapping a nav button switches the visible panel. Only one panel is visible at a time.

---

## Feature Parity

The mobile version includes all features of the desktop version:

- All five left-panel tabs (Settings, Vocal, Structure, Sound, Lyrics)
- All three right-panel tabs (Output, Chords, History)
- Song generation, section regeneration, and manual section editing
- Cover Image Prompt generator
- Song Presets (save, load, delete)
- Google Drive sync
- Export, Backup, and Import
- Debug mode (double-tap the logo)
- 11-language UI

---

## API Bar

Tap the top bar to expand the API configuration panel, which works identically to the desktop version — Google AI Studio key, OpenRouter key, Local/Remote OpenAI Server address, model selection, and Drive sync controls.
