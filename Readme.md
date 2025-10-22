# 🚀 HNG Frontend Wizards Stage 1: Multi-Page Profile-Card

This repository contains the solution for the Frontend Wizards Stage 1 challenge, which involved scaling a single component (Stage 0 Profile Card) into a cohesive, multi-page application. The project adheres strictly to requirements for **semantic HTML, accessibility, responsiveness, and testability**.

## 🌐 Live Demo

**View the application live [👉here👈](https://uriri-007.github.io/HNG-Profile-Card/)**

---

## ✨ Key Features & Technical Highlights

This project demonstrates core modern frontend skills across three fully accessible pages:

1.  **Semantic Structure:** Uses appropriate HTML5 semantics (`<main>`, `<article>`, `<section>`, `<h2>` hierarchy) throughout all pages.
2.  **Full Testability:** Every required element includes the specified `data-testid` attribute, ensuring the application is ready for automated testing.
3.  **Advanced Form Validation (Contact Page):**
    * Implemented robust client-side validation using **Vanilla JavaScript**.
    * Checks for required fields, valid email format (via Regex), and a minimum message length (10 words).
    * Provides clear, accessible error feedback using `aria-describedby` and `aria-live="polite"`.
4.  **Accessibility (A11Y):**
    * All interactive elements are **Keyboard Navigable** with visible focus states.
    * Labels are correctly linked to inputs (`<label for="">`).
    * Proper use of ARIA attributes for screen reader compatibility.
5.  **Responsive Design:** Utilizes modern CSS (Flexbox) to ensure the layout adapts seamlessly from mobile (stacked) to desktop (multi-column) views.

---

## 🛠️ Local Installation and Setup

To run this project on your machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Uriri-007/HNG-Profile-Card.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd HNG-Profile-Card
    ```

3.  **Open the files:**
    Since this is a static HTML/CSS/JS project, you can simply open the primary page, `index.html`, directly in your web browser to view the application.

---

## 📂 Project File Structure

| File/Folder | Description |
| :--- | :--- |
| `index.html` | The Profile Card (Home) page (Stage 0 continuation). |
| `script.js` | The Vanilla JavaScript logic for implementing the current time in milliseconds in the homepage (Stage 0 continuation). |
| `styles.css` | Global styles, responsiveness logic, and component styling. |
| `./pages/contact.html` | The Contact Us page with the validation form (Stage 1). |
| `./pages/about.html` | The About Me reflection page (Stage 1). |
| `./pages/validateForm.js` | All Vanilla JavaScript logic for form validation. |

---

## 💻 Technologies Used

* HTML5 (Semantic Markup)
* CSS3 (Flexbox & Grid)
* Vanilla JavaScript

---

## 🤝 Contact
Created by Ogboumah Ohiomokhai
 * [X twitter](https://x.com/IamOkhai?t=HXGli6Z3fuO4aaFeBNfv6w&s=09)
 * [LinkedIn](https://www.linkedin.com/in/okhai-ogboumah-605166365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)