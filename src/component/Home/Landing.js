
import React from 'react';
import "../../Style/Landing.scss";
import { BiMap } from "react-icons/bi";
import landing1 from '../../Images/l1.png';
import landing2 from '../../Images/l2.png'
import landing from '../../Images/landing.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import { Link } from "react-router-dom";
import master from '../../Images/12.jpg'


export default function Landing({ setCategory, selectedCategory, ...props }) {
  const categories = [
    {

      filter: "Landing",
      displayName: <Link to="/Header">Home</Link>
    },
    , {

      filter: "women's clothing",
      displayName: 'Women'
    },
    {
      filter: "men's clothing",
      displayName: 'Men'
    }, {
      filter: "jewelery",
      displayName: 'Smart Gear'
    }, {
      filter: "electronics",
      displayName: 'Accessories'
    },
  ]

  return (
    <>
      <div>
      <div className='landing_1'>
        <Carousel >
          <Carousel.Item>
            <div class="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing_left'>
                  <div className='left-content'>
                    <h2>Shop the new<br />Signature Collection</h2>
                    <p className='hide-desktop'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> <p className="hide-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                    <div class="mobile-btn">
                      <button>SHOP NOW</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing-right'>
                  {/* <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22980%22%20height%3D%22650%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20980%20650%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3ECarousel%20Image%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E" className='imgsize' /> */}
                  <img src={master} className='imgsize' />
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div class="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing_left'>
                  <div className='left-content'>
                    <h2>Shop the new<br />Signature Collection</h2>
                    <p className='hide-desktop'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> <p className="hide-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                    <div class="mobile-btn">
                      <button>SHOP NOW</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing-right'>
                  {/* <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22980%22%20height%3D%22650%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20980%20650%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3ECarousel%20Image%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E" className='imgsize' /> */}
                  <img src={master} className='imgsize' />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing_left'>
                  <div className='left-content'>
                    <h2>Shop the new<br />Signature Collection</h2>
                    <p className='hide-desktop'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> <p className="hide-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                    <div class="mobile-btn">
                      <button>SHOP NOW</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className='Landing-right'>
                  {/* <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22980%22%20height%3D%22650%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20980%20650%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3ECarousel%20Image%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E" className='imgsize' /> */}
                  <img src={master} className='imgsize' />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
     
      <div className='container'>
        <div className='landing_2'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--10">
              <div className='landimg1'>
                <div className='card-desc'>
                  <h3>Shop Women</h3>
                  <p>Lorem ipsum dolor sit amet</p>

                </div>
                <div className='line'>
                  <hr />
                </div>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--10">
              <div className='landimg'>
                <div className='card-desc'>
                  <h3>Shop Men</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className='lines'>
                <hr />
              </div>

             
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--10">
              <div className='landimg2'>
             
                <div className='card-desc'>
                  <h3>Jewellery</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>


              </div>
              <div className='lines'>
                <hr />
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--10">
              <div className='landimg3'>
               
                <div className='card-desc'>
                  <h3>Electronics</h3>
                  <p>Lorem ipsum dolor sit amet</p>

                </div>

              </div>
              <div className='lines'>
                <hr />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container'>
        <div className='landing_3'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className='Landing_left'>
                <h2>Take off in the new <br />Signature Legging</h2>
                <h5>Lorem Ipsum Dolor Tempor</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adi<br />ut labore et
                  dolore magna aliqua.Lobortis <br />mattis aliquam faucibus purus.</p>
                <div className='btns'>
                  <button className='btn_1'><p>SHOP COLLECTION</p></button>
                  <button className='btn_2'><p>SHOP NOW</p></button>
                  <hr />
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
      <div className='container'>
        <div className='mob-landing'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className='mob-img'>
                <img src={landing1} />
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className='mob-text'>
                <h2>Take off in the new <br />Signature Legging</h2>
                <h5>Lorem Ipsum Dolor Tempor</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                <div class="aem-Grid aem-Grid--12">
                <div className='btns'>
                  <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <button className='btn_4'><p>SHOP NOW</p></button>
                  </div>
                  </div>
                  <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <div className='btns'>
                      <button className='btn_3'><p>SHOP COLLECTION</p></button>
                    </div>
                    <div className='line'>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='container'>
        <div className='landing_4'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
              <div className='landing-left'>
                <img src={landing2} />
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
              <div className='landing-right'>
                <h2 className='mobile-text'>Conquer your </h2><h2 className='desktop-text'>next adventure</h2>
                <p>Lorem Ipsum Dolor Tempor</p>
                <button className='btn_3'><p>SHOP DEVICES</p></button>

                <a href="#" className='map1'><BiMap /></a>
                <hr />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div> 
     
    </>
  )
}
