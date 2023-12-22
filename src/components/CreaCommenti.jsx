

import { Component } from "react"



class Creacommenti extends Component {
    state = {
        comment: {
            comment: this.props.comment,
            rate: this.props.rate,
            elementId: this.props.imdbID,
        },
    }
    Aggiungicommento = async () => {
        try {
            const commenti = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: "POST",
                body: JSON.stringify(this.state.comment),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDE5Y2I1MjViYjAwMThlZDA3ZjEiLCJpYXQiOjE3MDMxNjYzNjQsImV4cCI6MTcwNDM3NTk2NH0.LSqijv9bYVkG0dwQdnI1PUmrn7uVwIw3oCH8lvMmIrA",   
                }
            })
            if (commenti.ok) {
                console.log(this.state.comment)
                alert('Commento inviato')
            } else {
                
                alert('Commento non inserito correttamente')
            }
        }
        catch (error) {
            console.log('error')
        }
    }
    render() {
        return (
            null
        )
    }
    componentDidMount() {
        this.Aggiungicommento();
      }
}
export default Creacommenti