new Vue({
    el:"#app",
    data:{
        title: "Becoming a Vue ninja!",
        name: "Rayu",
        url: "http://youtube.com",
        classes: ["one", "two"]
    },
    methods: {
        greet(time) {
            
            
            return `Hello and good ${time}, ${this.name}`
        }

    }
})
//dfdfdfdfdf