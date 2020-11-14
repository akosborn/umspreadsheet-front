export const fetchTracks = async (page: number) => {
   return fetch(`http://localhost:8082/api/songs?page=${page}`)
      .then(resp => resp.json());
}

export const fetchTracksByDeviation = async () => {
   return fetch(`http://localhost:8082/api/deviation`)
      .then(resp => resp.json());
}
