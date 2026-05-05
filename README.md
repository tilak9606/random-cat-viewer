## Random Cat Viewer

A React-based random cat viewer using the Random Cat API.

**Live Demo:** https://random-cat-viewer-iota.vercel.app/

**GitHub Repo:** https://github.com/tilak9606/random-cat-viewer

---

### Tech Stack

- React 
- Vite
- Tailwind CSS 

---

### API Endpoint
https://api.freeapi.app/api/v1/public/cats/cat/random


---

### Features

- Fetches random cat breed data and image
- Split layout: cat image on left, breed data on right
- Displays: name, origin, lifespan, weight, description, temperament tags
- Stats bars for affection, energy, intelligence, child friendly, dog friendly, social needs, grooming, health issues
- Trait badges: indoor, lap cat, hairless, hypoallergenic, natural, rare, experimental
- Centered "Next Cat" button at bottom
- Loading states and error handling with retry
- Responsive: stacks vertically on mobile, side-by-side on desktop

---

### Getting Started

```bash
git clone git@github.com:tilak9606/random-cat-viewer.git
cd random-cat-viewer
npm install
npm run dev


---

## Setup Commands

```bash
# 1. Create project
npm create vite@latest random-cat-viewer -- --template react
cd random-cat-viewer

# 2. Install dependencies
npm install react-dom lucide-react
npm install -D tailwindcss @tailwindcss/vite

# 3. Create all files as shown above

# 4. Run
npm run dev