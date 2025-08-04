# 🔍 SearXNG Search & New Tab

**[🇷🇺 Русский](README.md) | 🇺🇸 English**

An elegant Chrome extension that replaces the default search engine and new tab page with private SearXNG search.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Privacy](https://img.shields.io/badge/Privacy-Focused-00C851?style=for-the-badge&logo=shield&logoColor=white)
![Open Source](https://img.shields.io/badge/Open-Source-FF6B35?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

## 📸 Screenshot

![SearXNG New Tab](https://raw.githubusercontent.com/IriyaMitsuki/SearXNGaddon/refs/heads/main/screen.png)

## ✨ Features

- 🔒 **Private Search** - Uses [search.hbubli.cc](https://search.hbubli.cc/), one of the reliable [SearXNG](https://searx.space/) instances
- 🎨 **Beautiful New Tab** - Minimalist design with live clock and greeting
- ⚡ **Quick Links** - Instant access to popular services
- 🌙 **Dark Theme** - Eye-friendly Catppuccin color scheme
- 🚀 **Lightweight & Fast** - Minimal resource consumption

## 🎯 What the Extension Does

### Default Search
Replaces Chrome's default search with SearXNG - a metasearch engine that:
- Doesn't track users
- Doesn't store search queries
- Aggregates results from multiple sources
- Shows no personalized ads

### New Tab Page
Beautiful start page with:
- **Live Clock** - Always current time
- **Smart Greeting** - Changes based on time of day
- **Search Bar** - Direct access to SearXNG
- **Quick Links** - YouTube, GitHub, Telegram, Gmail

## 🚀 Installation

### From Chrome Web Store
*Coming soon*

### Manual Installation
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked extension"
5. Select the folder with extension files
6. Done! 🎉

## 🛠️ Technical Details

### Project Structure
```
SearXNGaddon/
├── manifest.json      # Extension configuration
├── index.html         # New tab page
├── script.js          # Clock and greeting logic
├── icon.png           # Extension icon
├── LICENSE            # MIT License
├── README.md          # Russian documentation
└── README_EN.md       # English documentation
```

### Technologies Used
- **Manifest V3** - Modern Chrome extension standard
- **Vanilla JavaScript** - No external dependencies
- **CSS Custom Properties** - For theming
- **Catppuccin Color Scheme** - Pleasant dark theme

### SearXNG Instance
The extension uses **[search.hbubli.cc](https://search.hbubli.cc/)** - one of the stable and fast SearXNG instances from [searx.space](https://searx.space/) list. This instance was chosen for:
- High availability
- Fast response time
- Stable operation
- HTTPS support

## 🎨 Screenshots

### New Tab Page
Elegant interface with live clock and quick links

### Search
Private search without tracking through SearXNG

## 🔧 Configuration

### Changing Search Instance
If you want to use a different SearXNG instance:

1. Open `manifest.json`
2. Find the `chrome_settings_overrides` section
3. Change `search_url` to desired instance from [searx.space](https://searx.space/)

### Customizing Quick Links
In `index.html` file, find the `#quick-links` section and modify links to your preference.

## 🤝 Contributing

We welcome contributions to the project! You can:

- 🐛 Report a bug
- 💡 Suggest a new feature
- 🔧 Submit a Pull Request
- 📖 Improve documentation

## 📄 License

This project is distributed under the MIT License. See [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SearXNG](https://github.com/searxng/searxng) - For the excellent metasearch engine
- [searx.space](https://searx.space/) - For monitoring SearXNG instances
- [Catppuccin](https://catppuccin.com/) - For the beautiful color scheme
- [Lucide](https://lucide.dev/) - For beautiful icons

---

<div align="center">
  <strong>Made with ❤️ for internet privacy</strong>
</div>
