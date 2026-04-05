---
layout: article
title: Google Drive Sync
aside:
  toc: true
sidebar:
  nav: docs
---

SunoForge can store your song history and settings in your Google Drive account, giving you access to your songs from any browser and keeping everything backed up automatically.

---

## How It Works

When Drive sync is enabled, your song history, settings, presets, and model selection are saved to a **private app data folder** in your Google Drive. This folder is invisible in Google Drive's regular file browser — only SunoForge can access it. No files appear in "My Drive".

**API keys are not synced to Drive.** They remain encrypted in the local browser only, for security. You will need to re-enter your API keys on each new device.

---

## Setting Up Drive Sync

1. Open the **API bar** (click the bar at the top of the app)
2. Find the **Storage** row and change the selector from **Browser local storage** to **Store in Google Drive**
3. The **Drive Sync** row will appear — click **Log In to Google Drive**
4. Complete the Google sign-in flow in the popup
5. Click **Connect** to link your account
6. The status indicator will show **connected**

Once connected, SunoForge syncs automatically in the background whenever you save, generate, or change settings.

---

## Sync Controls

| Button | Action |
| --- | --- |
| **Log In to Google Drive** | Opens Google sign-in popup |
| **Connect** | Links the signed-in account and starts sync |
| **Sync Now** | Forces an immediate sync — useful after restoring a backup or importing songs on another device |
| **Disconnect** | Unlinks Drive and returns to local-only storage |

A **sync indicator** (spinning arrow) appears in the header while a sync is in progress.

---

## What Gets Synced

| Data | Synced to Drive |
| --- | --- |
| Song history | ✓ |
| Settings and selected model | ✓ |
| Song Presets | ✓ |
| API keys | ✗ — local browser only |

---

## Using Across Multiple Devices

1. Sign in on a second browser or device
2. Set Storage to **Store in Google Drive**
3. Log in with the same Google account and click **Connect**
4. Click **Sync Now** to pull all your songs and settings immediately

Any songs generated on either device will merge correctly — there is no conflict overwrite.

---

## Privacy

Your Drive app data folder is private to SunoForge by Google's design. Google cannot read its contents; no other app or user can access it. SunoForge requests only the minimum OAuth scope required: `drive.appdata`.

See <a href="https://sunoforge.app/Privacy_Policy.html" targer="_blank" alt="Privacy Policy">Privacy Policy</a> for full details on what data is stored and where.
