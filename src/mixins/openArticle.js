export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },

    openArticle = (openArticleId) => (ev) => {
        if (ev) ev.preventDefault()
        this.setState({ openArticleId })
    }

}
