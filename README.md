# Bjorn Bengtsson Art Gallery

A responsive online gallery showcasing original paintings by Bjorn Bengtsson.

The website is built with HTML, CSS, and vanilla JavaScript and is hosted through GitHub Pages.

## Live Website

[View the live art gallery](https://bjornhbengtsson.github.io/BjornBengtsson.com/)

## About the Project

This repository contains the source code and artwork information for my personal online art gallery.

The gallery includes original paintings with details such as:

- Artwork title
- Medium
- Dimensions
- Year completed
- Related Bible passage or Psalm

Artwork information is stored in `data.js` and dynamically displayed by `index.js`.

## Built With

- HTML5
- CSS3
- JavaScript ES Modules
- GitHub Pages

No frameworks, package managers, or build tools are required.

## Repository Structure

```text
BjornBengtsson.com/
├── GALLERY_IMAGES/    # Artwork images
├── CENTERPAGE.jpeg    # Main gallery banner image
├── data.js            # Artwork filenames and descriptions
├── index.css          # Website styling
├── index.html         # Main webpage
├── index.js           # Gallery rendering logic
├── .gitignore         # Files excluded from Git
└── README.md          # Project documentation


## Step 2: Add a `.gitignore`

```bash
cat > .gitignore <<'EOF'
# Windows
Thumbs.db
desktop.ini

# macOS
.DS_Store

# Editors
.vscode/
.idea/
*.swp
*.swo

# Temporary and backup files
*.tmp
*.temp
*.bak
*~

# Local environment files
.env
.env.*
node_modules/
