export const fetchIssues = async (path: string) => {
  const URL = `https://api.github.com/repos/${path}/issues`;
  const token = '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';

  return await fetch(URL, {
    headers: { Authorization: `${token}` }
  })
    .then(res => res.json())
    .catch(() => alert('Failed in fetchIssues'));
};
