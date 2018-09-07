export const buildUrl = (baseUrl: string, inputBatch: any) => {
  let url = baseUrl;

  const query = inputBatch
    .filter((input: any) => input.in === "query")
    .map((input: any) => `${input.name}=${input.value}`)
    .join("&");

  if (query) {
    url += `?${query}`;
  }

  inputBatch
    .filter((input: any) => input.in === "path")
    .forEach((input: any) => {
      url = url.replace(`\{${input.name}\}`, input.value);
    });

  return url;
};
