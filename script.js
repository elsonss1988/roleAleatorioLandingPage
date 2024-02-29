function toogleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile  img");
  this.getAvatarGithub();

  if (html.classList.contains("light")) {
    //   html.classList.remove("light");
    //   html.classList.add("dark");
    img.setAttribute("src", "./assets/avatar-light.jpeg");
  } else {
    //   html.classList.remove("dark");
    //   html.classList.add("light");
    console.log(sessionStorage.getItem("githubData"));
    const data = sessionStorage.getItem("githubData");

    if (data) {
      img.setAttribute("src", data);
      console.info(JSON.parse(sessionStorage.getItem("allGithubData")));
    } else {
      img.setAttribute("src", "./assets/avatar2.png");
      console.log("local avatar");
    }
  }

  html.classList.toggle("light");
}

function getAvatarGithub() {
  fetch("https://api.github.com/users/elsonss1988").then(async (res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    data = await res.json();
    sessionStorage.setItem("githubData", data.avatar_url);
    sessionStorage.setItem("allGithubData", JSON.stringify(data));
    console.log(data);
  });
}
