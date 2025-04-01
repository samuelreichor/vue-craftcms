import { useCraft } from '@vue-craftcms';

export async function fetchData(url: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: useCraft().authToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
  }

  return await response.json();
}
