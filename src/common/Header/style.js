import styled from 'styled-components'
import logoPic from '../../statics/images/logo.png'

export const HeaderWrapper = styled.div`
	height:56px;
	border-bottom:1px solid #f0f0f0;
`;
export const HeaderContainer = styled.div`
	height:100%;
	max-width:1440px;
	min-width:768px;
	position:relative;
	margin:0 auto;
`;
export const Logo = styled.a.attrs({
    href: '/index'
})`
	height:100%;
	position:absolute;
	width:100px;
	left:0;
	top:0;
	background:url(${logoPic});
	background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`;
export const NavItem = styled.div`
    padding:0 20px;
    font-size:18px;
    color:#333;
    line-height:56px;
    cursor:pointer;
    .iconfont{
        font-size:20px;
        margin-right:4px;
        margin-top:2px;
    }
    
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
        font-size:16px;
    }
    &.active{
        color:#ea6f5a
    }
    &:hover{
        color:#ea6f5a
    }
`;
export const SearchWrapper=styled.div`
    float:left;
    margin-top:9px;
    position:relative;
    margin-left:20px;
    .icon-search{
        position:absolute;
        right:0;
        width:30px;
        line-height:30px;
        border-radius:15px;
        color:#98a1b4;
        text-align:center;
        color:#969696;
        margin-top:4px;
        margin-right:4px;
        transition:all 0.5s;
    }
`;
export const SearchInput=styled.input.attrs({
    placeholder:'搜索',
    type:'text'
})`
    width:180px;
    height:38px;
    border-radius:19px;
    background:#eee;
    border:0 none;
    outline:0 none;
    padding:0 38px 0 20px;
    box-sizing:border-box;
    color:#333;
    font-size:14px;
    transition:all 0.5s;
    
    &::placeholder{
        color:#999;
    }
    &:focus{
        width:240px;
    }
    &:focus+.iconfont{
        background:#969696;
        color:#fff;
    }
`;
export const Addition=styled.div`
     position:absolute;
     right:0;
     top:0;
     height:100%;
`;
export const Button=styled.button`
     padding:0 20px;
     line-height:38px;
     border-radius:19px;
     font-size:16px;
     margin:9px 5px 0 15px;
     cursor:pointer;
     border:0 none;
     outline:0 none;
     
     &.sign{
        background:#fff;
        color:rgba(236,97,73,.7);
        border:1px solid rgba(236,97,73,.7);
     }
     
     &.writing{
        color:#fff;
        background:rgba(236,97,73,.7);
        .iconfont{
            margin-right:4px;
        }
     }
`;
export const SearchRecommend=styled.div`
    position:absolute;
    top:120%;
    left:0;
    border:1px solid #f0f0f0;
    background:#fff;
    width:250px;
    box-shadow:0 0 10px 2px #f0f0f0;
    padding:20px;
    box-sizing:border-box;
    font-size:14px;
`;
export const RecommendTitle=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#969696;
    margin-bottom:16px;
    .change{
        cursor:pointer;
    }
    .icon-shape{
        font-size:12px;
        margin-right:6px;
        transition:all 0.3s ease-in;
        float:left;
        transform-origin:center center;
    }
`;
export const RecommendList=styled.ul`
    overflow:hidden;
    
`;
export const RecommendItem=styled.li`
    float:left;
    margin:0 10px 10px 0;
    line-height:20px;
    border:1px solid #eee;
    color:#787878;
    padding:0 6px;
    font-size:12px;
    cursor:pointer;
    transition:all 0.3s;
    &:hover{
        border-color:#b4b4b4;
        color:#333;
    }
`;