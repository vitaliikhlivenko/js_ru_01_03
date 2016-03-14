import React, { Component, PropTypes } from 'react'
import CommentContent from './CommentContent'

class Comment extends Component {
    mixins: [LinkedStateMixin]

    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render() {
        return (

            <div>
                <CommentContent
                    text = {this.props.comment.text}
                 />
                 <input type="button" value={'Add'} />
            </div>
        )
    }
}

export default Comment
