import Stampacommenti from "./Stampacommenti";
import CreaCommenti from "./CreaCommenti";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useState } from "react";


const Mymodal = (props) => {
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");
    const [selected, setSelected] = useState(false);


    const AggiungiCommento = () => {
        if (selected==false)
        {
        setSelected(true);
        }
        else{
            setSelected(false)
        }
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
                        <Button  variant="secondary">Chiudi</Button>
                        <Button onClick={AggiungiCommento} variant="primary">Aggiungi Commento</Button>
                        {selected && <CreaCommenti imdbID={props.imdbID} rate={rate} comment={comment} />}

                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>

    )

}

export default Mymodal
