// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue(
    {

        el: '#root',
        data: {
            message: 'Hello Vue JS!',
            colorClass: 'red',
            },
        methods: {
            colorChange: function () {

                if (this.colorClass = "red") {
                    this.colorClass = "blue";
                }
                else if (this.colorClass = "blue") {
                    this.colorClass = "green";
                } else {
                    this.colorClass = "red";
                }
            }
        }
        
    }
);



