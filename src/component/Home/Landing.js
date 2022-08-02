
import React from 'react';
import "../../Style/Landing.scss";
import { BiMap } from "react-icons/bi";
import landing1 from '../../Images/l1.png';
import landing2 from '../../Images/l2.png'
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import { Link } from "react-router-dom";

export default function Landing() {


  return (
    <div>
      <div className='landing_1'>
        <Carousel >
          <Carousel.Item>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing_left'>
                  <h2>Shop the new<br /> Women’s Collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                  <button><p>SHOP NOW</p></button>
                </div>

              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing-right'>
                  <img src="https://thumbs.dreamstime.com/b/group-happy-friends-shopping-store-picture-showing-88282438.jpg" /> */

                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing_left'>
                  <h2>Shop the new<br />Men's Collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                  <button><p>SHOP NOW</p></button>
                </div>

              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing-right'>
                  <img src="https://thumbs.dreamstime.com/b/picture-group-happy-friends-shopping-clothes-mall-143746152.jpg" /> */

                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>

            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing_left'>
                  <h2>Shop the new<br /> Jewellery Collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                  <button><p>SHOP NOW</p></button>
                </div>

              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing-right'>
                  <img src="https://talker.news/wp-content/uploads/2022/06/shutterstock-297265649-huge-licensed-scaled-1000x600.jpg" /> 

                </div>
              </div>
            </div>

          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container-landing'>
        <div className='landing_2'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className='card' onClick={<Header/>}>
                <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg

" />
                <div className='card-desc'>
                  <h3>Shop Women</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className='card'>
              <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
               <div className='card-desc'>
                  <h3>Shop Men</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />

              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className='card'>
                <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
                <div className='card-desc'>
                  <h3>Jewellery</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />

              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className='card'>
                <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />
                <div className='card-desc'>
                  <h3>Electronics</h3>
                  <p>Lorem ipsum dolor sit amet</p>

                </div>
                <hr />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container-landing'>
        <div className='landing_3'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className='Landing_left'>
                <h2>Take off in the new <br />Signature Legging</h2>
                <h5>Lorem Ipsum Dolor Tempor</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                <div className='btns'>
                  <button className='btn_1'><p>SHOP COLLECTION</p></button>
                  <button className='btn_2'><p>SHOP NOW</p></button>
<hr/>
                </div>
              </div>

            </div>
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className='Landing-right'>
                <img src={landing1} />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='container-landing'>
        <div className='landing_4'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
              <div className='landing-left'>
                <img src={landing2} />
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
              <div className='landing-right'>
                <h2>Conquer your next adventure</h2>
                <p>Lorem Ipsum Dolor Tempor</p>
                <button className='btn_3'><p>SHOP DEVICES</p></button>
                
                <a href="#" className='map1'><BiMap /></a>            
<hr/>
</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
