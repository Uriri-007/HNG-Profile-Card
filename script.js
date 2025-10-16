(function Domaccess() {
  const userImg = document.querySelector("[data-testid='user-profile-picture']")
  const userName = document.querySelector("[data-testid='user-profile-name']")
  const userTitle = document.querySelector("[data-testid='user-profile-title']")

  return {
    userImg,
    userName,
    userTitle,
  };
})();

const profileData = {
  name: "Uri Okhai",
  image: "",
  title: "Frontend Web Developer",
  address: "Age-Mowo",
  bio: "I am a modern frontend web developer with an undying paddion for more knowledge.",
  socialLinks: [
    {
      type: "LinkedIn",
      link: "",
      iconClass: "fa-brands fa-linked-in",
    },
    {
      type: "Github",
      link: "",
      iconClass: "fa-brands fa-github",
    },
    {
      type: "X (twitter)",
      link: "",
      iconClass: "fa-brands fa-x-twitter",
    }
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Version Control (Git)",
    "ReactJS",
    "Bootstrap",
    "Tailwind CSS"
  ]
};
