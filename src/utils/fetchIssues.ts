export const fetchIssues = async (path: string) => {
  const URL = `https://api.github.com/repos/${path}/issues`;
  const token = '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';

  return await fetch(URL, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => res.json())
    .catch(() => alert('Failed in fetchIssues'));
};
