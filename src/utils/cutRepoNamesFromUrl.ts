export const cutRepoNamesFromUrl = (url: string) => {
  if (url.includes('github.com/')) {
    let arrayOfPathsFromUrl = url.split('github.com/')[1].split('/');

    if (arrayOfPathsFromUrl[1].includes('?')) {
      arrayOfPathsFromUrl = arrayOfPathsFromUrl.join('?').split('?');
    }

    arrayOfPathsFromUrl.length = 2;

    return arrayOfPathsFromUrl;
  }

  return [];
};
