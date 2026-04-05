---
layout: single
title: Configuration
sidebar:
  nav: "docs"
---

## Prerequisites

- A modern web browser
- At least one of the following:
  - A **Google AI Studio API key** — free tier available, recommended starting point
  - An **OpenRouter API key** — pay-per-use, access to hundreds of models
  - A **Local OpenAI Compatible LLM Server** — LM Studio, Ollama, vLLM, etc. (no cloud key needed)
- No installation required

---

## API Providers

SunoForge supports three AI providers. You can configure one, two, or all three simultaneously.

| Provider | Cost | Models |
| --- | --- | --- |
| **Google AI Studio** | Free tier available, cheapest | Gemini models (fetched live from your account) |
| **OpenRouter** | Pay-per-use, more expensive | Hundreds of text models from many providers |
| **Local LLM Server** | Free (hardware cost only) | Any OpenAI-compatible model you have running locally |

The **Model selector** in the top bar determines which provider is used for each generation. SunoForge routes requests automatically based on which provider the selected model belongs to.

> ⚠️ SunoForge is not liable for any costs incurred when using your selected model. Always verify pricing on the provider's website before using a high-cost model.

---

## Setup — Google AI Studio Key

{% include video id="-xJKxCgP8mk" provider="youtube" %}

**[Get a Google AI Studio API key](https://aistudio.google.com/app/apikey)**

1. Sign in with a Google account
2. Click **Create API Key**
3. Give it a name and assign it to a project
4. Make sure billing is enabled on the key/project (the free tier is sufficient)
5. Copy your API key

Then in SunoForge:

1. Open [SunoForge](https://ratava.github.io/SunoForge/index.html) in your browser
2. Enter your key in the **Google AI Studio Key** field in the top bar
3. Click **Save**
4. The status indicator will change to **✓ ready** and the model list will populate with your available Gemini models

---

## Setup — OpenRouter Key

{% include video id="Tt9sCkUjDyQ" provider="youtube" %}

1. Create an account at [openrouter.ai](https://openrouter.ai)
2. Go to **Keys** and create a new API key
3. Add credit to your account (OpenRouter is pay-per-use)
4. In SunoForge, enter your key in the **OpenRouter Key** field in the top bar
5. Click **Save**
6. The status indicator will show **✓ ready** and the full OpenRouter model catalogue will be appended to the model list

---

## Setup — Local/Remote OpenAI Server

This option requires a locally running OpenAI-compatible server (e.g. [LM Studio](https://lmstudio.ai), [Ollama](https://ollama.com), vLLM).

> ⚠️ **CORS must be enabled on your local LLM server.** SunoForge runs in the browser and makes requests directly from the page to your server. Without CORS headers, the browser will block every request — model fetches and generation calls will both fail silently or with a network error.
>
> - **LM Studio** — enable CORS in *Settings → Local Server → Enable CORS*
> - **Ollama** — set the environment variable `OLLAMA_ORIGINS=*` before starting (or your specific origin, e.g. `http://localhost:8080`)
> - **vLLM / other servers** — start with `--allowed-origins "*"` or the equivalent CORS flag for your server

1. Start your local LLM server with CORS enabled and a model loaded
2. In SunoForge, expand the API bar and enter your server address in the **Local/Remote OpenAI Server** field (e.g. `http://localhost:1234`)
3. Optionally enter an **Auth Key** if your server requires one
4. Click **Save** — this also auto-fetches the available models from `/v1/models`
5. Or click **Fetch Models** separately to refresh the model list

> If your server does not require authentication, leave the Auth Key field blank.

### Choosing a Model for SunoForge

Not all local models are equal for this use case. For best results, the model you run must meet all of the following criteria:

| Requirement | Why it matters |
| --- | --- |
| **Text → text chat completion** | SunoForge uses the `/v1/chat/completions` endpoint exclusively. Vision, embedding, and image-generation models will not work. |
| **Instruction following** | SunoForge sends structured, multi-paragraph prompts. A base/completion model will produce poor or garbled output — use an instruct or chat-tuned variant. |
| **Music theory & style knowledge** | The model must understand concepts like chord progressions, song structure, verse/chorus form, genre conventions, and production terminology to produce useful output. |
| **Suno prompt awareness** | Ideally the model has seen Suno-style style prompts in training, or is a general-purpose model with broad creative-writing knowledge. Smaller models (< 7B parameters) often lack the depth needed for consistent quality. |
| **Large context window** | Full song prompts with structure, lyrics, and production notes can be long. A context window of **8k tokens or more** is recommended; 16k+ is ideal. |

**Recommended model types:** General-purpose instruct models in the 8B–34B parameter range tend to work well — for example, Llama 3 Instruct, Mistral Instruct, Qwen2.5 Instruct, or Gemma 2 Instruct. Avoid code-specialist or embedding models.

---

## Clearing / Removing a Provider

To remove a saved key or server address, simply clear the input field and click **Save**. The credential will be removed from browser storage and the provider will be deregistered.

---

## Model Selection

The **Model** dropdown in the top bar lets you choose which AI model to use for generation.

- Google AI Studio key saved → all your Gemini models appear at the top of the list
- OpenRouter key saved → all OpenRouter text-generation models are appended below
- Local LLM server saved → models fetched from your server appear first
- The list is **searchable** — type any part of a model name to filter
- Your selection is saved between sessions
- The default model is `gemini-3.1-flash-lite-preview` (Google) — fast and inexpensive
- Models are labelled **(Google)**, **(OpenRouter)**, or **(Custom)** to indicate their provider

---

## Quick Start

### Basic Workflow

1. **Configure** your song using the left panel tabs
2. **Click "Write My Song"** to generate
3. **Review** the output in the right panel
4. **Export** for use in Suno or other platforms

### Recommended First Steps

1. **Settings Tab** — Enter a song title and concept
2. **Structure Tab** — Choose a genre-appropriate structure
3. **Click Generate** — Let the AI handle the rest
4. **Fine-tune** — Adjust Vocal, Sound, and other options for more control

