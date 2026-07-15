# Bjorn Bengtsson Art Gallery

A responsive online gallery showcasing original paintings by Bjorn Bengtsson.

## Live Website

[View the live art gallery](https://bjornhbengtsson.github.io/BjornBengtsson.com/)

## About the Project

This repository contains the source code and artwork information for my personal online art gallery.

Gallery entries may include:

- Artwork title
- Medium and dimensions
- Year completed
- Location or description
- A related Bible verse or Psalm

Artwork information is stored in `data.js` and dynamically displayed by `index.js`.

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

No frameworks, package managers, or build tools are required.

## Repository Structure

```text
BjornBengtsson.com/
├── GALLERY_IMAGES/    # Artwork images
├── CENTERPAGE.jpeg    # Main featured image
├── data.js            # Artwork information
├── index.css          # Website styling
├── index.html         # Main webpage
├── index.js           # Gallery rendering logic
├── .gitignore         # Files excluded from Git
└── README.md          # Project documentation
```

## Running Locally

Run a local server from the repository folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

Press `Ctrl+C` in Git Bash to stop the server.

## Adding New Artwork

1. Add the artwork image to `GALLERY_IMAGES`.
2. Add a matching entry to `data.js`.
3. Test the website locally.
4. Commit and push the changes.

The filename in `data.js` must exactly match the image filename.

## Author

**Bjorn Bengtsson**

- [GitHub](https://github.com/bjornhbengtsson)
- [LinkedIn](https://www.linkedin.com/in/bjorn-bengtsson-love/)

## Artwork Copyright

Copyright © 2026 Bjorn Bengtsson. All rights reserved.

Unless otherwise stated, all artwork and artwork photography in this repository are copyrighted by Bjorn Bengtsson. The artwork may not be copied, reproduced, modified, distributed, or used commercially without prior written permission.
