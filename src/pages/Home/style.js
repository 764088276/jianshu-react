import styled from 'styled-components'

export const HomeContainer = styled.div`
    width:960px;
    margin:0 auto;
    background:red;
`;

export const HomeWrapper = styled.div`
    width:100%;
`;
export const HomeLeft = styled.div`
   width:640px;
   float:left;
   padding-top:30px;
`;
export const HomeRight = styled.div`
   width:280px;
   float:right;
   padding-top:30px;
`;
export const BannerContainer = styled.div`
    width:100%;
    height:270px;
    border-radius:6px;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
    }     
`;
export const TopicContainer = styled.div`
    width:100%;
    margin-top:35px;
    overflow:hidden;
`;
export const TopicItem = styled.a`
    display:inline-block;
    margin:0 18px 18px 0;
    background:#f7f7f7;
    border-radius:4px;
    overflow:hidden;
    height:32px;
    border:1px solid #dcdcdc;
    color:#333;
    
    img{
        width:32px;
        height:32px;
        vertical-align:middle;
    }
    .topic-name{
        font-size:14px;
        padding:0 10px;
    }
`;
export const SplitLine = styled.div`
    width:100%;
    margin:15px 0;
    border-top:1px solid #f0f0f0;
`;
export const ArticalList = styled.div``;
export const ArticalItemContainer = styled.div`
    border-bottom:1px solid #f0f0f0;
    padding-bottom:15px;
    margin-bottom:15px;
`;
export const ArticalItem = styled.div`
    position:relative;
`;
export const ArticalContent = styled.div`
    width:100%;
    padding-right:168px;
    box-sizing:border-box;
`;
export const ArticalTitle = styled.h1`
    width:100%;
    font-size:20px;
    line-height:26px;
    font-weight:700;
    color:#333;
    padding:4px 0;
`;
export const ArticalDesc = styled.div`
    font-size:13px;
    line-height:24px;
    color:#999;
    height:48px;
    overflow:hidden;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
`;
export const ArticalWritter = styled.div`
   padding:10px 0;
   font-size:12px;
   color:#b1b1b1;
   .iconfont{
        vertical-align:middle;
        font-size:14px;
        margin-right:2px;
    }
   >a{
    float:left;
    color:#b1b1b1;
    margin-right:10px;
    display:flex;
    align-items:center;
   }
`;
export const ArticalImg = styled.div`
    width:150px;
    height:100px;
    position:absolute;
    right:0;
    top:50%;
    transform:translateY(-50%);
    border-radius:4px;
    overflow:hidden;
    >img{
        width:100%;
        height:100%;
        
    }
`;
export const RecommendWrapper = styled.ul`
    width:100%;
`;
export const RecommendItem = styled.li`
    width:100%;
    height:50px;
    margin-bottom:6px;
    background:url(${props => props.imgUrl});
    background-size:contain;
`;
export const LoadMore=styled.div`
    width:100%;
    line-height: 40px;
    margin: 30px auto 60px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;
    cursor:pointer;
`;
export const BackTop=styled.div`
    width:60px;
    height:60px;
    border:1px solid #999;
    color:#333;
    font-size:14px;
    line-height:60px;
    text-align:center;
    position:fixed;
    bottom:50px;
    right:50px;
    cursor:pointer;
`;