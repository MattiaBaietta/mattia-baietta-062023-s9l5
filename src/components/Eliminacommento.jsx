const eliminacommento = async (id) => {
    try {
        const commenti = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        method: "DELETE",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDE5Y2I1MjViYjAwMThlZDA3ZjEiLCJpYXQiOjE3MDMxNjYzNjQsImV4cCI6MTcwNDM3NTk2NH0.LSqijv9bYVkG0dwQdnI1PUmrn7uVwIw3oCH8lvMmIrA",
            }

        })
        
        if (commenti.ok) {
            console.log('eliminato correttamente')
           
        } else {
            console.log('error')
            alert('Commento non eliminato correttamente')
        }
    }
    catch (error) {
        console.log('error')
    }
}
export default eliminacommento


