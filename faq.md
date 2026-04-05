---
layout: article
title: FAQ
aside:
  toc: true
sidebar:
  nav: docs
---

**Q: Do I need an internet connection?**

Yes, for AI generation only. The app itself loads offline (once cached), but internet is required to call the Google AI or OpenRouter API. If you use a local LLM server, generation works without internet after the app has loaded.

---

**Q: Do I need both a Google AI Studio key and an OpenRouter key?**

No — you only need one. Google AI Studio is recommended as a starting point because it has a free tier. OpenRouter is useful if you want to access other models (Claude, Llama, Mistral, etc.). You can add both at any time and switch between them via the Model selector.

---

**Q: Which model should I use?**

The default `gemini-3.1-flash-lite-preview` is fast and costs very little. For better quality at slightly higher cost, try `gemini-flash` or `gemini-pro`. If using OpenRouter, any instruction-following text model works — look for models with large context windows (32k+) for best results with long lyrics.

---

**Q: Can I write lyrics in a language other than English?**

Yes. Use the **Song Language** dropdown in the Settings tab to select the language for the lyrics. The AI will write all lyrics exclusively in that language. This is independent of the UI language.

---

**Q: What's the difference between Genre presets and custom genre?**

Presets include curated song structures tailored to that genre. Custom genres let you define any style but use universal structures. Genre presets are generally a better starting point.

---

**Q: What's the difference between Instruments and Instrumentation Focus?**

- **Instruments** — specific instrument selection (e.g. "Moog Synthesizer", "Fretless Bass", "Timpani")
- **Instrumentation Focus** — general ensemble approach (e.g. "Acoustic", "Full Band", "Electronic")

Use both together for precise control, or just one for general direction.

---

**Q: Should I fill in all the settings?**

No. You can be as specific or as loose as you want. At minimum, just provide a title or concept. Leave settings unselected or "AI Choose" to let the AI decide based on genre and mood. The more you specify, the more control you have.

---

**Q: Can I save my API key permanently?**

Your key is saved in your browser's `localStorage` on the device you're using, encrypted with AES-256-GCM. It persists between sessions on that device. See [Privacy & Security](privacy-and-security.md) for details.

---

**Q: Why isn't my song generating?**

Check that:

- An API key or local LLM server is saved and the status shows **✓ ready**
- You have an internet connection (unless using a local LLM server)
- You have entered at least a title or concept in the Settings tab
- Enable [Debug Mode](key-features.md#debug-mode) (double-click the logo) to see detailed logs

---

**Q: Can I use SunoForge for commercial music?**

SunoForge generates lyrics and suggestions using AI. Review [Google's Gemini AI terms](https://ai.google.dev/terms), [OpenRouter's terms](https://openrouter.ai/terms), and [Suno's terms](https://suno.com/terms) for commercial usage rights.

---

**Q: How do I report a bug?**

Submit bug reports via the [GitHub Issues page](https://github.com/ratava/SunoForge/issues).

To help us reproduce and fix the problem:

1. Enable Debug Mode (double-click the logo)
2. Reproduce the issue
3. Click the debug indicator to download the debug logs
4. Attach the debug file to your issue report

---