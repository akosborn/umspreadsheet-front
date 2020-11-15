export const fetchTracks = async (page: number) => {
   return fetch(`https://umspreadsheet.akosborn.com/api/songs?page=${page}`)
      .then(resp => resp.json());
}

export const fetchTracksByDeviation = async () => {
   return fetch(`https://umspreadsheet.akosborn.com/api/deviation`)
      .then(resp => resp.json());
}
