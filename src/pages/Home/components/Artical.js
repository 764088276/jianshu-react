import React, {PureComponent} from 'react'
import {
    ArticalList,
    ArticalItemContainer,
    ArticalItem,
    ArticalContent,
    ArticalTitle,
    ArticalDesc,
    ArticalWritter,
    ArticalImg,
    LoadMore
} from '../style'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'

class Artical extends PureComponent {
    render() {
        return (
            <ArticalList>
                {
                    this.props.articalList.map((item,index) => (
                        <Link key={index} to='/detail'>
                            <ArticalItemContainer>
                                <ArticalItem>
                                    <ArticalContent>
                                        <ArticalTitle>
                                            <span>{item.get('title')}</span>
                                        </ArticalTitle>
                                        <ArticalDesc>
                                            <span>{item.get('desc')}</span>
                                        </ArticalDesc>
                                        <ArticalWritter>
                                            <span className="writter-name">
                                                {item.get('writer')}
                                            </span>
                                            <span className="comment-num" href="">
                                                <i className="iconfont icon-comment"></i>
                                                {item.get('commentNum')}
                                            </span>
                                            <span>
                                <i className="iconfont icon-like"></i>
                                                {item.get('like')}
                            </span>
                                        </ArticalWritter>
                                    </ArticalContent>
                                    <ArticalImg>
                                        <img src={item.get('imgUrl')} alt=""/>
                                    </ArticalImg>
                                </ArticalItem>
                            </ArticalItemContainer>
                        </Link>

                    ))
                }
                <LoadMore onClick={this.props.loadMoreData}>
                    <span>加载更多</span>
                </LoadMore>
            </ArticalList>
        )
    }
}

const mapState = (state) => ({
    articalList: state.getIn(['home', 'articalList'])
});
const mapDispatch=(dispatch)=>({
    loadMoreData(){
        const action =actionCreators.thunkMoreArticalData();
        dispatch(action)
    }
});

export default connect(mapState, mapDispatch)(Artical)