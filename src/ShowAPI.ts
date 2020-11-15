export const fetchShows = async (page: number) => {
   return fetch(`https://localhost:8082/api/shows?page=${page}`)
      .then(resp => resp.json());
}
