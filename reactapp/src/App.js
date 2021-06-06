import React, { useState } from "react";
import { connect } from "react-redux";
import { listeyeEKLE,isaretle } from "./actions";
import "./styles.css";





const App = (props) => {


    // form useState
    const [text, setText] = useState("")



    return (
        <div className="App">
            <h1>Yapılacaklar Listesi</h1>

            <div className="ekleme_formu">
                <input
                    placeholer="listeye ekle"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button
                    onClick={() => {
                        setText('')
                        props.listeyeEKLE(text)
                    }}>Ekle</button>
            </div>




            <div className="liste">
                {props.liste.map(item => (
                    <div onClick={()=>props.isaretle(item.id)} className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
                ))}
            </div>

            <button className="temizle">Tamamlananları Temizle</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        liste: state.liste
    }
}


export default connect(mapStateToProps, { listeyeEKLE,isaretle })(App)