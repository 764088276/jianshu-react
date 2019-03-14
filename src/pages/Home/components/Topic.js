import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    TopicContainer,
    TopicItem
} from '../style'

class Topic extends PureComponent{
    render() {
        return (
            <TopicContainer>
                {
                    this.props.topicList.map((item) => (
                        <TopicItem key={item.get('id')} href={item.get('linkUrl')}>
                            <img src={item.get('imgUrl')} alt=""/>
                            <span className='topic-name'>{item.get('title')}</span>
                        </TopicItem>
                    ))
                }
            </TopicContainer>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic)
