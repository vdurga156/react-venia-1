import React from 'react'
import "../../Style/Title.scss"
import mobilefriend from '../../Images/mobile-hero-image12.jpeg';

function Title() {
  return (
    <div>
      <div className='main'>
        
          <div className='hero-sec'>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--4">
                <div class="card_1">
                  <div class="card_1-body">
                    <h5 class="card_1_title">Men’s <br/>Outerwear</h5>
                    <div className='lines'>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--8">
                <div class="card-img">
<img src={mobilefriend} class="card-img-top" alt="" />
                </div>
              </div>
            </div>
          </div>
        
      </div>

      <div className='sub hero-sec'>
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div class="card-img">
              <img src="https://img.mensxp.com/media/content/2020/Nov/Abhishek-Bachchans-Masterclass-On-Suiting-Up1400_5fa2a4064015f.jpeg" class="card-img-top" alt="" />
            </div>
          </div>

          <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div class="card_1">
              <div class="card_1-body">
                <h5 class="card_1_title">Men’s <br/>Outerwear</h5>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Title