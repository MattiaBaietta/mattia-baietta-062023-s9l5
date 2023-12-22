import Stampacommenti from "./Stampacommenti";
import CreaCommenti from "./CreaCommenti";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useState } from "react";



const Mymodal = (props) => {
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");
    const [selected, setSelected] = useState(false);
    
    const  fetchCommenti = async (comment,id,rate)=>{
        const comment2={
                comment: comment,
                rate: rate,
                elementId: id,
        }
        try {
            const commenti = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: "POST",
                body: JSON.stringify(comment2),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDE5Y2I1MjViYjAwMThlZDA3ZjEiLCJpYXQiOjE3MDMxNjYzNjQsImV4cCI6MTcwNDM3NTk2NH0.LSqijv9bYVkG0dwQdnI1PUmrn7uVwIw3oCH8lvMmIrA",   
                }
            })
            if (commenti) {
                console.log(comment2)
                alert('Commento inviato')
            } else {
                
                alert('Commento non inserito correttamente')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    

    const aggiungiCommento = () => {
        setSelected(true);
      };
      const chiudiModal = () => {
        setSelected(false);
      };

    return (

        <>
            
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Commenti per il film "titolo film"</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Stampacommenti imdbID={props.imdbID} />
                    <hr />
                    <h2>Testo commento:</h2> 
                    <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}  />
                    <h2>Rate:</h2> 
                    <input type="text"value={rate} onChange={(e) => setRate(e.target.value)} name="" id="" />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button  onClick={chiudiModal} variant="secondary">Chiudi</Button>
                        <Button onClick={()=>fetchCommenti(comment,props.imdbID,rate)} variant="primary">Aggiungi Commento</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>

    )

}

export default Mymodal
