import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed'
import "./widget.css";

class TypeformRight extends React.Component {

    componentDidMount() {
        const popup1 = typeformEmbed.makePopup(
            "https://karinheinzl.typeform.com/to/N75W9teT",
            // "https://bmd9bai2izv.typeform.com/to/BYkr9iLP",
            {
                mode: 'drawer_right',
                autoOpen: false,
                autoClose: 3000,
                hideHeaders: true,
                hideFooter: true,
        
                onSubmit: function() {
                    console.log('Typeform successfully submitted')
                } 
            }
        )

        document.getElementById('bt-popup').addEventListener('click',function()
        {
        popup1.open();
        });
    }


  
    render() {
        return (
            <div className="typeform-widget">
                <h1>MeCademy</h1>
                <h4>Erfolgreich bewerben!</h4>

                <button id="bt-popup" className="my-button">Anmeldung</button>
            </div>
      );
    }
  }
  
  export default TypeformRight;
  