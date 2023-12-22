
import { Component } from "react"


class EliminaCommenti extends Component {
    state = {
            
            _id:this.props._id
    }
    Eliminacommento = async () => {
        try {
            const commenti = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state._id}`, {
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
    componentDidMount() {
        this.Eliminacommento()
    }
    render() {
        return (
            console.log("operazione eseguita")
        )
    }
}
export default EliminaCommenti