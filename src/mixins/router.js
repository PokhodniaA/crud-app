export default {
    methods: {
        toEditPage(params) {
            this.$router.push({ name: "EditPage", params: params })
        },
        toMainPage() {
            this.$router.push('/')
        }
    },
}