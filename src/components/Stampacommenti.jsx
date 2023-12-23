import { Component } from "react"
import eliminacommento from "./Eliminacommento"

class Stampacommenti extends Component {
    state = {
        elementId: this.props.imdbID,
        risultati: []
    }
    Stampacommento = async () => {
        try {
            const commenti = await fetch(`https://striveschool-api.herokuapp.com/api/books/${this.state.elementId}/comments`, {//
                headers: {
                    method: "GET",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDE5Y2I1MjViYjAwMThlZDA3ZjEiLCJpYXQiOjE3MDMxNjYzNjQsImV4cCI6MTcwNDM3NTk2NH0.LSqijv9bYVkG0dwQdnI1PUmrn7uVwIw3oCH8lvMmIrA",
                }

            })
            if (commenti.ok) {
                const results = await commenti.json()
                console.log(results)
                this.setState({
                    risultati: results,

                })
            } else {
                console.log('error')
                alert('something went wrong')
            }
        }
        catch (error) {
            console.log('error')
        }
    }

    componentDidMount() {
        this.Stampacommento()
    }
    handleEliminaCommento = (commentoId) => {
        this.setState({
            selectedCommentId: commentoId,
        });
    };
    render() {
        return (

            this.state.risultati.map(commento => {
                return (
                    
                       <div key={commento._id}>
                            <div>
                                <h2>Commento: {commento.comment}</h2>
                            </div>
                            <div>
                                <h2>Rating: {commento.rate} stelle</h2>
                            </div>
                            <div>
                                <button onClick={() => eliminacommento(commento._id)}>Elimina Commento</button>
                                {/* {this.state.selectedCommentId === commento._id && <EliminaCommenti _id={commento._id} />} */}
                            </div>
                       </div>
                    
                    
                )
            })


        )
}
}
export default Stampacommenti