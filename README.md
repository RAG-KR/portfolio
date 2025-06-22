Project Setup & Development Guide
🚀 Tech Stack
This project is built using:

Vite

TypeScript

React

shadcn/ui

Tailwind CSS

🛠️ Getting Started
To run this project locally, ensure you have Node.js and npm installed. It's recommended to use nvm for managing Node versions.

1. Clone the repository
bash
Copy
Edit
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm run dev
The server will auto-reload on file changes and provide an instant preview at http://localhost:5173 (or the port configured in Vite).

💻 Editing Code
Option 1: Use your local IDE
Open the project folder in your preferred IDE (e.g., VS Code).

Make changes and commit as needed.

Option 2: Edit directly in GitHub
Navigate to the desired file on GitHub.

Click the pencil (✏️) icon to edit.

Commit your changes.

Option 3: Use GitHub Codespaces
If you prefer a cloud IDE:

Go to your repository on GitHub.

Click Code → Codespaces → New codespace.

Make changes and push commits directly.

🌐 Deployment
You can deploy this project using any static hosting provider that supports Vite apps, such as:

Vercel: https://vercel.com

Netlify: https://netlify.com

GitHub Pages (with some setup)

Just build the project and follow the respective provider’s deployment guide.

bash
Copy
Edit
npm run build
The production-ready files will be located in the dist/ directory.

🔗 Custom Domain
If using a platform like Vercel or Netlify, you can connect your custom domain via their dashboard. Follow the domain configuration steps specific to your hosting provider.
