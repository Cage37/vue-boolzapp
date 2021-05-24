// Istruzioni:
// Milestone 4:
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo icontatti il cui nome contiene le lettere inserite

const app = new Vue ({

    el: "#app",

    data: {

        contacts: [
            {
                name: 'Michele',
                avatar: "./assets/img/avatar_1.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
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
        ],

        topProfile:  {
            name: 'Michele',
            avatar: "./assets/img/avatar_1.jpg",
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
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
            }
            
        
            setTimeout( this.userAnswer, 1000);
        },

        userAnswer () {
            var date = new Date();
                
            var userMessage = {
                date: date.toLocaleString(),
                status: "received",
                text: "ok"
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
        }

    }
})