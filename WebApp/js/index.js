const baseUrl = "https://restservicenew2022.azurewebsites.net/api/winds"

Vue.createApp({
    data() {
        return {
            winds: [],
            addData: { direction: "", speed: 0 },
            addMessage: ""
        }
    },
    methods: {
        getAllWind() {
            this.helperGetAndShow(baseUrl)
        },
        async helperGetAndShow(url) { 
            try {
                const response = await axios.get(url)
                this.winds = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        async addWind() {
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllWind()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")