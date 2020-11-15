export const fetchShows = async (page: number) => {
   return fetch(`https://umspreadsheet.akosborn.com/api/shows?page=${page}`)
      .then(resp => resp.json());
}
