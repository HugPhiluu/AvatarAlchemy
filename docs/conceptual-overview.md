---
id: conceptual-overview
title: Conceptual Overview
sidebar_position: 2
---

# 🧩 Conceptual Overview

> **Before touching Unity, understand what you're building.**

---

## 🧍 What Is a VRChat Avatar?

A **VRChat avatar** is a Unity-based 3D humanoid model configured with VRChat-specific components. It is:

- Your **presence** in the world  
- A bundle of **meshes, bones, materials, and logic**  
- A container for **expressions, gestures, toggles, and animations**

At its core, it's not just a character—it's a programmable object built on a very specific structure that VRChat understands.

---

## 🧱 Key Components

| Component       | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| **Model**       | 3D mesh with bones/rigging to deform properly                           |
| **Materials**   | Shaders + textures to define how it looks (e.g., **lilToon**, **Poiyomi**) |
| **Descriptor**  | VRC Avatar Descriptor – sets up view position, lip sync, pipeline info  |
| **Animations**  | Idle/gesture/toggle-based movement and behavior                         |
| **Menus & Parameters** | VRChat Expression Menu system for interacting with your avatar         |
| **Tools**       | Modular Avatar, Avatar Optimizer, VCC, Alcom — help with structure, optimization, project management |

---

## ⚙️ Workflow Summary

> This is the high-level pipeline we’ll walk through in detail later.

1. **🛍️ Acquire an avatar**  
   Buy and download a Unity package from [Booth.pm](https://booth.pm)

2. **📦 Set up your Unity project**  
   Use **VCC** or **Alcom**, import required tools and shaders

3. **🧹 Clean up the project**  
   Fix errors, remove clutter, verify materials and rigging

4. **🧩 Customize**  
   Add outfits, create toggles, set up menus using **Modular Avatar**

5. **🔍 Test and refine**  
   Check functionality with **Build & Test** inside Unity

6. **🚀 Upload**  
   Push your avatar to VRChat for in-game use

---

:::info
Everything else in this documentation breaks down the steps above into digestible, modern workflows—with tool guidance and problem-solving built in.
:::
