# Operating Systems Knowledge Base

![GravacaodeTela2025-11-24as00 57 29-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/13ea8821-38cb-4344-8b59-945a39c2c287)


A small interactive encyclopedia about Operating Systems — created as a project for Alura's "Imersão Dev". This site is lightweight, attractive, and responsive: perfect for learning, quick reference, or impressing recruiters on your GitHub.

If you've made it this far, congratulations — it means you care about technology and appreciate well-styled code. Grab a coffee, scroll through the page, and enjoy exploring OS curiosities! ☕🖥️

**Fun highlights:**
- Toggle between dark and light themes (preference saved in the browser).
- Real-time search by name or tags.
- Cards with description, year, and a reference link for each OS.
- Responsive layout with special attention to mobile.

---

**Quick demo (what to do when you open the site):**
- Use the search bar at the top to filter by names like `Ubuntu`, `Windows 11` or by tags like `server`, `mobile`.
- Click the round button at the bottom-right corner to switch between light and dark themes.
- Click the title to reset the search.

---

**Project structure**

- `index.html` — Simple HTML, no frameworks.
- `style.css` — Modern styles using CSS variables with support for light/dark themes.
- `script.js` — Search logic, card rendering, and theme toggle (uses `localStorage`).
- `data.json` — Local database containing the operating systems information.
- `LICENSE` — Project license.

---

How the theme works
- The default theme is dark (the one you probably love). When the user clicks the floating button, the `body` gets the `light-theme` class and the preference is saved to `localStorage` (key: `theme`). On the next visit the site loads with the chosen theme.

Tip: to reset the preference, open the browser Console and run:

```
localStorage.removeItem('theme'); location.reload();
```

---

Responsiveness and accessibility
- The layout is designed to work well on desktop, tablet, and mobile. The grid adapts from 3 → 2 → 1 columns depending on viewport width.
- The theme toggle is a real `button` with updated `aria-pressed`, and uses SVG icons for dark/light states.

---

Contributions (welcome!)

Liked the project? Want more? Fork it, edit `data.json` to add more operating systems, improve styles in `style.css`, or open an issue with ideas.

Possible future improvements:
- Search by full description (full-text) instead of only name/tags.
- Add pagination or filters by category (desktop, server, mobile).
- Support images / logos for each card.

How to quickly contribute:

1. Fork this repository.
2. Create a branch for your feature: `git checkout -b my-improvement`
3. Make changes and commit: `git commit -am "My improvement"`
4. Push to your fork: `git push origin my-improvement`
5. Open a Pull Request describing the change.
