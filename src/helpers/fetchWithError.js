export const fetchWithError = async (url, options) => {
  const response = await fetch(url, options);

  if (response.status === 200) {
    const res = response.json();

    if (res.error) {
      throw new Error(res.error);
    }

    return res;
  }

  throw new Error(`Error ${res}`);
};
