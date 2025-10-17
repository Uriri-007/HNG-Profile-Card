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

