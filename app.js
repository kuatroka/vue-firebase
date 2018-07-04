new Vue({
    el:"#app",
    data:{
        title: "Becoming a Vue ninja!",
        name: "Ray"
    },
    methods: {
        greet(time) {
            
            return `Hello and good ${time}, ${this.name}`
        }

    }
})