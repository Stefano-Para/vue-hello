// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue(
    {

        el: '#root',
        data: {
            message: 'Hai voglia di fare due passi?',
            buttonText: "Vai via dalla città",
            colorClass: 'red',
            imgSrc: "https://www.turismo-oggi.com/wp-content/uploads/2018/02/Genova-770x405.jpg"
            },
            methods: {
                colorChange: function () {

                    if (this.colorClass == "red") {
                        this.colorClass = "blue";
                    }
                    else if (this.colorClass == "blue") {
                        this.colorClass = "green";
                    } else {
                        this.colorClass = "red";
                    }
                },
            
                imgChange: function () {
                    if (this.imgSrc == "https://www.turismo-oggi.com/wp-content/uploads/2018/02/Genova-770x405.jpg") {

                        this.imgSrc = "https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/4855/top_item_image/NClimate_Hero_MAY-21-6c5764f2b141511b4f3a7f71f670376a.jpg";
                        this.buttonText = "fai un altro tentativo";

                    } else if (this.imgSrc == "https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/4855/top_item_image/NClimate_Hero_MAY-21-6c5764f2b141511b4f3a7f71f670376a.jpg") {
                        this.imgSrc = "https://static.wikia.nocookie.net/lotr/images/b/b0/Fotr6.jpg/revision/latest?cb=20130419144638";
                        this.buttonText = "Alla fine la città non è così male..";
                    } else {
                        this.imgSrc = "https://www.turismo-oggi.com/wp-content/uploads/2018/02/Genova-770x405.jpg"
                        this.buttonText = "Vai via dalla città"
                    }
                }
            }
    }
);



