// Istruzioni:
// Bonus:
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

const app = new Vue ({

    el: "#app",

    data: {

        contacts: [
            {
                name: 'Simone',
                avatar: "./assets/img/avatar_8.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Il gatto sta ancora dormendo?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: "Ricordati di darle lo sciroppo per il raffreddore",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: "./assets/img/avatar_2.jpg",
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: "./assets/img/avatar_3.jpg",
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: "./assets/img/avatar_6.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Michele',
                avatar: "./assets/img/avatar_1.jpg",
                visible: true,
                messages: [
                    {
                        date: '15/01/2020 23:30:55',
                        text: 'Siamo noi, siamo noi...',
                        status: 'sent'
                    },
                    {
                        date: '16/01/2020 11:50:00',
                        text: "I campioni dell'Italia siamo noi!",
                        status: 'sent'
                    },
                    {
                        date: '16/01/2020 17:15:22',
                        text: 'FORZA INTER!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Gianmarco',
                avatar: "./assets/img/avatar_4.jpg",
                visible: true,
                messages: [
                    {
                        date: '15/04/2020 13:30:55',
                        text: 'Sushi stasera?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Passo a prenderti io',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Non posso, stasera sono a cena con i miei',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Dario',
                avatar: "./assets/img/avatar_5.jpg",
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'Warzonata?',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sono pronto alla guerra',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Daje!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giovanni',
                avatar: "./assets/img/avatar_7.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Quando uscirà il nuovo album?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Presto, stay tuned!',
                        status: 'received'
                    }
                ],
            },
        ],

        topProfile:  {
                name: 'Simone',
                avatar: "./assets/img/avatar_8.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Il gatto sta ancora dormendo?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: "Ricordati di darle lo sciroppo per il raffreddore",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },

        newMessage: {
            date: "",
            status: "sent",
            text: ""
        },

        userFilter: "",

    },

    methods: {

        selectProfile(index) {
            this.topProfile = this.contacts[index];
        },

        colorSelect(message) {
            if(message.status == "sent") {
                return `contmessagegreen`
            } else {
                return "contmessagewhite"
            }
        },

        messageSelect(message) {
            if(message.status == "sent") {
                return `messagegreen`
            } else {
                return "messagewhite"
            }
        },

        addMessage () {
            var date = new Date();
            this.newMessage.date = date.toLocaleString();

            this.topProfile.messages.push(this.newMessage)
            this.newMessage = {
                date: "",
                status: "sent",
                text: ""
            },

            setTimeout( this.userAnswer, 1000);
        },

        userAnswer () {
            var date = new Date();
                
            var userMessage = {
                date: date.toLocaleString(),
                status: "received",
                text: "Ok"
            };

            this.topProfile.messages.push(userMessage)
        },
        
        searchName () {
            for (let index = 0; index < this.contacts.length; index++) {    
                if (this.contacts[index].name.toLowerCase().indexOf(this.userFilter.toLowerCase()) == 0) {
                    this.contacts[index].visible = true;
                } else {
                    this.contacts[index].visible = false;
                }
           
            }
        },

        addInfoMessage (index) {
            if (document.getElementById(index).style.opacity== 0) { 
                document.getElementById(index).style.opacity= 1; 
            } else { 
               document.getElementById(index).style.opacity= 0;
            } 
       },

        deleteMessage (index) {
           this.topProfile.messages.splice(index, 1);
        }

    },   
})