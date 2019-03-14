import React,{PureComponent} from 'react'
import {
    BannerContainer
} from "../style";
import bannerImg from '../../../statics/images/test_img(1).jpg'

class Banner extends PureComponent{
    render(){
        return (
            <BannerContainer>
                <img src={bannerImg} alt=""/>
            </BannerContainer>
        )
    }
}
export default Banner