import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed'

class TypeformRight extends React.Component {

    componentDidMount() {
        const popup1 = typeformEmbed.makePopup(
            "https://bmd9bai2izv.typeform.com/to/BYkr9iLP",
            {
                mode: 'drawer_right',
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
            <div>
                <button id="bt-popup" class="my-button">Anmeldung</button>
            </div>
      );
    }
  }
  
  export default TypeformRight;
  