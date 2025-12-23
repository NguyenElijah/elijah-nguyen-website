
const TYPING_STATS_KEY = "TYPING_STATS_KEY";

export interface TypingStat {
  wpm: number,
  rank: number,
  total: number,
  category: number
}

export interface TypingStatResponse {
  timestamp: number,
  personalBests: TypingStat[]
}

export const fetchStats = async () => {
  const cachedDataString = localStorage.getItem(TYPING_STATS_KEY);
  if (cachedDataString) {
    const cachedData = JSON.parse(cachedDataString) as TypingStatResponse;

    if (!isCachedResponseExpired(cachedData)) {
      return cachedData.personalBests;
    }
  }
  try {
    const response = await fetch('https://x5ql3uev5enqqdiq4laluoxof40viiib.lambda-url.us-east-2.on.aws/');


    if (response.status != 200) {
      throw new Error (`Http error retrieving typing stats: ${response.status}`)
    }

    const responseData = await response.json() as TypingStatResponse;
    localStorage.setItem(TYPING_STATS_KEY, JSON.stringify(responseData));
    return responseData.personalBests;
  }
  catch (err) {
    throw new Error (`Error fetching typing stats: ${err}`);
  }
}

const isCachedResponseExpired = (cachedTypingStats: TypingStatResponse) => {
  const expirationSeconds = 864000; //24 hours
  const currentTimeStampSeconds = Math.floor(Date.now() / 1000);
  
  return (currentTimeStampSeconds - expirationSeconds) > cachedTypingStats.timestamp;
}

