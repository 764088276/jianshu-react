import React, {PureComponent} from 'react'
import {
    HeaderWrapper,
    HeaderContainer,
    Logo,
    Nav,
    NavItem,
    Addition,
    Button,
    SearchWrapper,
    SearchInput,
    SearchRecommend,
    RecommendTitle,
    RecommendList,
    RecommendItem
} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'


class Header extends PureComponent {


    getRecommendArea() {
        const {recommendList, focused, mouseIn, handleMouseEnter, handleMouseLeave, page, changePage, totalPage} = this.props;
        const _recommendList = recommendList.toJS();
        const listContainer = [];
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            const item = _recommendList[i];
            listContainer.push(
                item ? <RecommendItem key={item}>{item}</RecommendItem> : null
            )
        }
        if (focused || mouseIn) {
            return (
                <SearchRecommend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <RecommendTitle>
                        <span>热门搜索</span>
                        <span className='change' onClick={() => {
                            changePage(page, totalPage,this.rotateIcon)
                        }}>
                                <i className='iconfont icon-shape' ref={(icon)=>{this.rotateIcon=icon}}></i>
                                <span>换一批</span>
                            </span>
                    </RecommendTitle>
                    <RecommendList>
                        {
                            listContainer
                        }

                    </RecommendList>
                </SearchRecommend>
            )
        } else {
            return null
        }
    }

    render() {
        const {props} = this;
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <Logo></Logo>
                    <Nav>
                        <NavItem className='left active'>
                            <i className='iconfont icon-index'></i>
                            首页
                        </NavItem>
                        <NavItem className='left'>
                            <i className='iconfont icon-phone'></i>
                            下载App
                        </NavItem>
                        <SearchWrapper>
                            <SearchInput
                                onBlur={props.handleInputBlur}
                                onFocus={()=>{props.handleInputFocus(props.recommendList)}}
                            ></SearchInput>
                            <i className='iconfont icon-search'></i>
                            {this.getRecommendArea()}
                        </SearchWrapper>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>Aa</NavItem>
                    </Nav>
                    <Addition>
                        <Button className='sign'>注册</Button>
                        <Button className='writing'>
                            <i className='iconfont icon-emaobi'></i>
                            写文章
                        </Button>
                    </Addition>
                </HeaderContainer>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        //等价于state.get('header').get('focused');
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        recommendList: state.getIn(['header', 'recommendList']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            const focusAction = actionCreators.changeInputType(true);
            const getRecommendListAction = actionCreators.getRecommendList();
            if(!list.toJS().length){
                dispatch(getRecommendListAction);
            }
            dispatch(focusAction);
        },
        handleInputBlur() {
            const action = actionCreators.changeInputType(false);
            dispatch(action);
        },
        handleMouseEnter() {
            const action = actionCreators.changeMouseType(true);
            dispatch(action)
        },
        handleMouseLeave() {
            const action = actionCreators.changeMouseType(false);
            dispatch(action)
        },
        changePage(page,totalPage,rotateIcon) {
            //icon的角度旋转
            let curAngle=rotateIcon.style.transform.replace(/[^0-9]/gi,'');
            if(curAngle){
                curAngle=parseInt(curAngle)
            }else{
                curAngle=0
            }
            rotateIcon.style.transform=`rotate(${curAngle+360}deg)`;
            page++;
            if(page>totalPage){
                page=1;
            }
            const action = actionCreators.changePage(page);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)