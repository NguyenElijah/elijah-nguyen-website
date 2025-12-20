




const TYPING_STATS_KEY = "TYPING_STATS_KEY";

export interface TypingStat {
  wpm: number,
  rank: number,
  total: number,
  category: number
}

export const fetchStats = async () => {
      //throw new Error();
  const cachedData = localStorage.getItem(TYPING_STATS_KEY);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  try {
    const response = await fetch('https://x5ql3uev5enqqdiq4laluoxof40viiib.lambda-url.us-east-2.on.aws/');


    if (response.status != 200) {
      throw new Error (`Http error retrieving typing stats: ${response.status}`)
    }

    const responseData = await response.json();
    localStorage.setItem(TYPING_STATS_KEY, JSON.stringify(responseData));
    return responseData;
  }
  catch (err) {
    throw new Error (`Error fetching typing stats: ${err}`);
  }
}



