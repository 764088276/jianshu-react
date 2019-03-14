import React, {PureComponent} from 'react'
import {
    HomeContainer,
    HomeWrapper,
    HomeLeft,
    HomeRight,
    SplitLine,
    BackTop
} from './style'
import Banner from './components/Banner'
import Topic from './components/Topic'
import Artical from './components/Artical'
import Recommend from './components/recommend'
import * as actionCreators from './store/actionCreators'
import {connect} from 'react-redux'


class Home extends PureComponent {
    componentDidMount() {
        this.props.getTopicList();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            this.props.checkBackTop()
        })
    }
    backTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeContainer>
                <HomeWrapper>
                    <HomeLeft>
                        <Banner></Banner>
                        <Topic></Topic>
                        <SplitLine></SplitLine>
                        <Artical></Artical>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                    </HomeRight>
                </HomeWrapper>
                {
                    this.props.showBackTop ?
                        <BackTop onClick={this.backTop}>
                            回到顶部
                        </BackTop>:null
                }

            </HomeContainer>
        )
    }
}

const mapState = (state) => ({
    showBackTop: state.getIn(['home', 'showBackTop'])
});
const mapDispatchToProps = (dispatch) => {
    return {
        getTopicList() {
            const action = actionCreators.thunkHomeData();
            dispatch(action)
        },
        checkBackTop(e){
            const scrollTop=document.documentElement.scrollTop;
            if(scrollTop>200){
                dispatch(actionCreators.showBackTop(true))
            }else{
                dispatch(actionCreators.showBackTop(false))
            }
        }
    }
};
export default connect(mapState, mapDispatchToProps)(Home)