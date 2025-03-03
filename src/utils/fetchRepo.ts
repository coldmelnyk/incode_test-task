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
  const OPENED_ISSUES_URL = `${REPO_URL}/issues?per_page=100&state=open&filter=created`;
  const OPENED_AND_ASSIGNED_ISSUES__URL = `${REPO_URL}/issues?per_page=100&filter=assigned`;
  const CLOSED_ISSUES__URL = `${REPO_URL}/issues?per_page=100&state=closed&filter=all`;

  return await Promise.all([
    fetchingByUrl(REPO_URL),
    fetchingByUrl(OPENED_ISSUES_URL),
    fetchingByUrl(OPENED_AND_ASSIGNED_ISSUES__URL),
    fetchingByUrl(CLOSED_ISSUES__URL),
  ]);
};
