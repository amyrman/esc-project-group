export class DataRetriever {
  constructor() {
    this.challenges = null;
  }
  async load() {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
    if (!this.challenges) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.challenges = data.challenges;
        // console.log(this.challenges); // remove after test
      } catch (error) {
        console.log(error);
      }
    }

    return this.challenges;
  }
}