export function getData(searchParams: string) {
  const requestOptions: RequestInit = {
    method: "GET",
  };
  // console.log("searchParams", searchParams);
  return fetch(
    `http://localhost:5000/api/glossary/${searchParams}`,
    requestOptions
  ).then((res) => res.json());
}
