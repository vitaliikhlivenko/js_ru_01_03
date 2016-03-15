import React, {Component as ReactComponent} from 'react'
//все ок, только это уже не обязательно article
export default (Component) => {
    return class extends ReactComponent {
      state = {
          openArticleId: null
      }

        render() {
            return <Component {...this.props} {...this.state}
                openArticle = {this.openArticle}
            />
        }

        openArticle = (openArticleId) => (ev) => {
            if (ev) ev.preventDefault()
            this.setState({ openArticleId })
        }
    }
}
