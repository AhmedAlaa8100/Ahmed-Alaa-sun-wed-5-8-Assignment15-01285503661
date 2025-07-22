export default class Details {
  constructor(id) {
    this.id = id;
  }

  async getDetails() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "11c58c1495msha8e1439e9ac8d74p148750jsn5af3248f7e21",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching game details:", error);
      return null;
    }
  }
}
