import './Link.less';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import siteLinks from "@/assets/siteLinks.json";
import { useState , useEffect } from 'react';
import { Col, Row, Tooltip } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Link = () => {
    const user = useSelector((state) => state.counter);

    let [siteLinksList, changesiteLinksList] = useState([]);

    // 计算网站链接
    
    useEffect(() => {
        const result = [];
        for (let i = 0; i < siteLinks.length; i += 6) {
          const subArr = siteLinks.slice(i, i + 6);
          result.push(subArr);
        }
        changesiteLinksList(result);
    }, [])


    function jumpLink(data) {
        if (data.bs) {
            window.open(data.bsLink, '_blank')
        } else {
            window.open(data.link, "_blank");
        }
    }



    console.log(siteLinksList, '128478123');

    return <>
          <div className="links">
            <div className="line">
                <img src='/images/icon/lianjie.png' alt="这是一张图片" style={{ width: '25px', height: '25px' }}></img>
                <span className="title">网站列表</span>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletElement: 'div',
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                scrollbar={{ draggable: true }}
                mousewheel={true}
            >
                {
                    siteLinksList.map((item,index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Row className='link-all' gutter={[20, 20]}>
                                    {
                                        item.map((ele,i) => {
                                            return (
                                                <Col className='el-col' key={i}  span={8}>
                                                    <Tooltip title={ele.tip}>
                                                        <div
                                                            className="item cards"
                                                            style={{ marginBttom: index < 3 ? '20px' : null }}
                                                            onClick={() => {
                                                                jumpLink(ele)
                                                            }}
                                                            >
                                                            <div>
                                                                <img alt="这是一张图片" style={{ width: '30px', height: '30px' }} src={ele.src}></img>
                                                            </div>
                                                            <div className="name text-hidden">{ ele.name }</div>
                                                        </div>
                                                    </Tooltip>
                                   
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </SwiperSlide>
                        )
                    })
                }
                <div className="swiper-pagination" />

            </Swiper>
          </div>
    </>
}
export default Link;