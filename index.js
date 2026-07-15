import { data } from "./data.js";

class GalleryItem {
    constructor(filename, title, info, verse) {
        const container = document.createElement("div");
        container.className = "GALLERYITEM"
        const img = document.createElement("img");
        img.src = `GALLERY_IMAGES/${filename}`;
        const titleElement = document.createElement("h2");
        titleElement.textContent = title
        const infoElement = document.createElement("h4");
        infoElement.textContent = info;
        let verseElement;
        if (verse) {
            verseElement = document.createElement("h3");
            verseElement.textContent = verse;
        }
        container.appendChild(img);
        container.appendChild(titleElement);
        if (verse) {
            container.appendChild(verseElement);
        }
        container.appendChild(infoElement);
        document.getElementById("GALLERY").appendChild(container);
    }
}

const realGalleryItems = [];

for (const galleryItem of data) {
    const [filename, info, verse] = galleryItem;
    let title;
    if (filename.endsWith(".jpeg")) {
        title = filename.slice(0, -5);
    } else if (filename.endsWith(".jpg")) {
        title = filename.slice(0, -4);
    } else {
        title = "Oops! No Title."
    }
    const newGalleryItem = new GalleryItem(filename, title, info, verse);
};
