const fetchingByUrl = async (url: string) => {
  const token = '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';

  try {
    const res = await fetch(url, {
      headers: { Authorization: `${token}` }
    });

    return await res.json();
  } catch {
    return alert('Failed in fetchingByUrl');
  }
};

export const fetchRepo = async (path: string) => {
  const REPO_URL = `https://api.github.com/repos/${path}`;
  const ISSUES_URL = `${REPO_URL}/issues`;

  return await Promise.all([
    fetchingByUrl(REPO_URL),
    fetchingByUrl(ISSUES_URL)
  ]);
};
