export default class Games {
  constructor(category) {
    this.category = category;
  }

  async getList() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
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
      console.error("Error fetching games:", error);
      return [];
    }
  }
}
