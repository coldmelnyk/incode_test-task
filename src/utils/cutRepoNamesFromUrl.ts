export const cutRepoNamesFromUrl = (url: string) => {
  if (url.includes('github.com/')) {
    let arrayOfPathsFromUrl = url.split('github.com/')[1]?.split('/') || [];

    if (arrayOfPathsFromUrl[1]?.includes('?')) {
      arrayOfPathsFromUrl = arrayOfPathsFromUrl.join('?').split('?');
    }

    return arrayOfPathsFromUrl.length > 1
      ? [arrayOfPathsFromUrl[0], arrayOfPathsFromUrl[1]]
      : [];
  }

  return [];
};
