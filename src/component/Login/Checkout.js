import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../Style/Checkout.scss'


export default function Checkout() {
  return (
   <div className='container'>
   <div className='container-Checkout'>
    <h5 className='main-text'>Checkout</h5>
    <hr/>
    </div>
    <div class="aem-Grid aem-Grid--12">
    <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
 <div className='guestcheckout'>
  <h4>Guest Checkout</h4>
  <p>Contact information</p>
  <p>We’ll use these details to keep you informed on your delivery.</p>
 </div>
    {/* <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="abc@xyz.com" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="password" placeholder="(222) 222-2222" />
        </Form.Group>
      </Row>
      <Row className ="mb-4">
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select  defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="password"  />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Street Address 2</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>
  

     

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>California</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="password" placeholder="91001" />
         
        </Form.Group>
      </Row>

    </Form> */}
      <div class="aem-Grid aem-Grid--12">
    <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
   
  <label for="fname">Email</label><br/>
  <input type="text" id="fname" className="fname"placeholder='abc@xyz.com'/>
<p className='shipping-info'>1. Shipping Information</p>
<label for="country">Country</label><br/>
  <select id="country" className='fname'>
    <option value="volvo">United States</option>
    <option value="saab">United States</option>
    <option value="fiat">United States</option>
    <option value="audi">United States</option>
  </select>
  <label for="fname">First Name</label><br/>
  <input type="text" id="fname" className="fname"/>
    </div>
    <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
    <label for="fname"className='firstname'>Phone Number</label><br/>
  <input type="text" id="fname"className=' fname' placeholder='(222) 222-2222'/>


  <label for="lname">Last Name</label><br/>
  <input type="text" id="fname" className="fname"placeholder='abc@xyz.com'/>
    </div>
    </div>

    <button className='btn-shipping-1'><p>CONTINUE TO SHIPPING METHOD</p></button>
    <hr/>
    <p>2. Shipping Method</p>
             <p>3. Payment Information</p>
             <hr/>
    </div>
    <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
  <div className='signin-check'>
  <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 ">
    <h5>Sign in for Express <br/>Checkout</h5>
    </div>
    <div className="aem-GridColumn aem-GridColumn--default--6 ">
    <button className='signin-btn'><p>SIGN IN</p></button>
    </div>
    </div>
  </div>
  <div className='pricing-card' >
    <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 ">
                  <h6>Subtotal</h6>
                  <h6>Coupon</h6>
                  <h6>Gift Card</h6>
                  <h6>Estimated tax</h6>
                  <h6 className='h18'>Estimated shipping</h6>
                  <h6><strong>Estimated Total</strong></h6>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6  text-right">
                <h6>$ 388.00</h6>
                  <h6>- $ 77.60</h6>
                  <h6>- $ 100.00</h6>
                  <h6>$ 23.28</h6>
                  <h6>FREE</h6>
                  <h6><strong>$ 233.68</strong></h6>
                </div>
              </div>
</div>
    </div>
    </div>
    </div>

  );
}
