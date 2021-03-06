new Vue({
    name: "App",
    el: '#app',
    data() {
        return {
            message: "default message"
        }
    },
    methods: {
        async getData() {
            const res = await fetch('/api/json');
            const data = await res.json();
            this.message = data.data;
        }
    }
});
