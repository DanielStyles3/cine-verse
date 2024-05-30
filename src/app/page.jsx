export const dynamic = "force-dynamic"; // this is the fix

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // Check if API_KEY is defined
  if (!API_KEY) {
    console.error("API_KEY is not defined in the environment variables");
    throw new Error("API_KEY is missing");
  }

  const genre = searchParams?.genre || "fetchTrending";

  let endpoint = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  if (genre === "fetchTopRated") {
    endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  }

  const res = await fetch(endpoint, { next: { revalidate: 10000 } });

  if (!res.ok) {
    // Log detailed information about the error
    console.error("Failed to fetch data", res.status, res.statusText, endpoint);
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
