---
id: quick-start
title: Quick Start
sidebar_position: 3
---
import CurrentUnityVersion from '@site/src/components/UnityVersionedText.js';
import UnityVersionedLink from '@site/src/components/UnityVersionedLink.js';

# Quick Start

:::danger[Important]
This quickstart is only for a straight upload to VRChat.\
This guide assumes you're using a `.unitypackage` avatar purchased from **Booth.pm** and want it running in VRChat with no frills.
:::


---

## Requirements

### Tools

| Tool            | Purpose                              | Source                                      |
|-----------------|--------------------------------------|---------------------------------------------|
| **Unity Hub**   | Unity version management             | [unity.com/download](https://unity.com/download) |
| **VCC / Alcom** | Project setup, SDK + tool management | [VCC](https://vrchat.com/home/download), [Alcom](https://github.com/bdunderscore/alcom) |
| **Modular Avatar** | Menu, toggle, and logic setup     | [GitHub](https://github.com/bdunderscore/modular-avatar), [Homepage](https://modular-avatar.nadena.dev/) |
| **Poiyomi or lilToon Shader** | Avatar visuals               | [Poiyomi Github](https://poiyomi.github.io/vpm/), [lilToon Homepage](https://lilxyzw.github.io/lilToon/)     |

> Use <UnityVersionedLink versionKey="patch" url="https://unity.com/releases/editor/whats-new/<VERSION>"><CurrentUnityVersion/></UnityVersionedLink> unless the avatar creator specifies otherwise.


---

## Step-by-Step

### 1. Create Project

- Open **VCC** or **Alcom**
- Create new avatar project
- Choose Unity version: <CurrentUnityVersion/>
- Name your project
- Launch in Unity

:::info
If you're using Alcom, it handles more automated dependency management than VCC and is built by the same dev as Modular Avatar. Either tool works.
:::

### 2. Install Dependencies

- Import the following into Unity **in this order**:
  1. Shader (Poiyomi or lilToon, whichever your avatar needs)
  2. Modular Avatar
  3. Avatar Optimizer (optional for later)

:::caution
Install shaders *before* importing the avatar. Many avatars reference shader files on import, and missing them causes broken materials.
:::

### 3. Import Avatar

- Drag the `.unitypackage` from Booth into the Unity project
- Wait for all assets to load  
- Drag the avatar prefab into the scene

:::tip
If you can’t find the prefab, try searching for "prefab" in the project window or look in folders named `Avatar`, `Model`, or the creator’s name.
:::

### 4. Fix Errors (if any)

- Check Console: red = critical, yellow = warnings  
- Missing shaders: reimport or manually fix materials  
- Broken prefab: right-click → `Unpack Completely`

:::info
Many errors on import are harmless (like expression parameters already existing). Focus on red errors first.
:::

### 5. Upload

- Open `VRChat SDK → Show Control Panel → Builder`  
- Resolve errors if present  
- Click `Build & Publish for Windows`  
- Fill name, check boxes, upload

:::caution
If you see “You must fix the following errors first” — scroll up and read the red text in the console. Unity will not upload until those are resolved.
:::

---

## You're Done

- In VRChat, open `Avatars → Uploads`  
- Select your avatar  
- Confirm it works in-game  
- Return to Unity to modify and reupload

---

:::info
This guide is meant to get you from point A to point B. The rest of the documentation covers custom menus, toggles, outfits, optimization details, troubleshooting, and advanced features.
:::
