# 🚀 HNG Internship Frontend Task __Stage 0__: Testable Profile Card
This project is the Stage 0 task for the HNG Internship Frontend program, focused on building a small, accessible, and testable profile card component using only semantic HTML, modern CSS, and vanilla JavaScript.

## ✨ Features
 * Semantic HTML: Uses appropriate tags (<article>, <figure>, <h2>, <nav>) for improved structure and accessibility.
 * Highly Testable: Every visible, required element includes the specific data-testid attributes required for automated testing.
 * Responsive Layout: The card layout adjusts cleanly for mobile, tablet, and desktop screens using Flexbox or Grid.
 * Dynamic Time: Displays the current time in milliseconds using pure vanilla JavaScript and updates it regularly.
 * Accessibility (A11y) Focused: Ensures proper focus states, keyboard navigation, and alt text for images.
🔗 Live Demo & Repository
| Item | Link |
|---|---|
| Live URL | [INSERT NETLIFY/GH PAGES LINK HERE] |
| GitHub Repository | [INSERT GITHUB REPO LINK HERE] |
🛠️ Tech Stack
| Technology | Purpose |
|---|---|
| HTML5 | Project structure and semantics. |
| CSS3 | Styling and responsive design (Flexbox/Grid). |
| Vanilla JavaScript | Handling dynamic content (e.g., Date.now()). |
⚙️ Setup and Installation
Follow these steps to get a local copy of the project running on your machine.
Prerequisites
You only need a modern web browser (like Chrome, Firefox, or Edge).
Installation
 * Clone the repository:
   git clone [YOUR-REPO-URL]
cd [YOUR-REPO-NAME]

 * Open the file:
   Simply open the index.html file in your preferred web browser.
   (Alternatively, you can use a local development server extension like "Live Server" for VS Code.)
✅ Task Requirements Checklist
The following items were implemented in accordance with the task requirements:
| Requirement | Status | data-testid (where applicable) | Notes |
|---|---|---|---|
| Profile Card Root | Implemented | test-profile-card | Wrapped in <article>. |
| User Name | Implemented | test-user-name |  |
| Short Biography | Implemented | test-user-bio |  |
| Current Time (Milliseconds) | Implemented | test-user-time | Updates every [100] ms using setInterval(Date.now(), 100). |
| Avatar Image | Implemented | test-user-avatar | Includes required alt attribute. |
| Social Links Container | Implemented | test-user-social-links | Links use target="_blank" and rel="noopener noreferrer". |
| Hobbies List | Implemented | test-user-hobbies | Presented as a <ul>. |
| Dislikes List | Implemented | test-user-dislikes | Presented as a <ul>. |
| Responsiveness | Implemented | N/A | Layout adjusts at a [768px] breakpoint. |
| Keyboard Focus | Implemented | N/A | All links are keyboard navigable with visible focus states. |
🤝 Contact
Created by [Your Full Name] – [Your Social Media or Email]
 * [Your GitHub Profile Link]
 * [Your LinkedIn Profile Link]
Project Link: [INSERT GITHUB REPO LINK HERE]
