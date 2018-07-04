new Vue({
    el:"#app",
    data:{
        title: "Becoming a Vue ninja!",
        name: "Braga"
    },
    methods: {
        greet(time) {
            
            return `Hello and good ${time}, ${this.name}`
        }

    }
})
//dfdfdfdfdf