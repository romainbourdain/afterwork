import "./style.css";

const fetchData = async () => {
  const data = await fetch("https://fouaille.bde-tps.fr/api/member/equipe");
  const dataJson = await data.json();

  for (let i = 0; i < 4; i++) {
    const teamName = document.querySelector(`#team-${i + 1} .name`);
    const teamBalance = document.querySelector(`#team-${i + 1} .balance`);

    teamName.innerHTML = dataJson?.data[i]?.name;
    teamBalance.innerHTML = dataJson?.data[i]?.balance;
  }
};

fetchData();

setInterval(() => {
  console.log("fetch");
  fetchData();
}, 10000);
