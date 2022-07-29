import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../Style/Checkout.scss'


export default function Checkout() {
    // const { cartItems, onAdd, onRemove } = props;
    // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
   <div className='container'>
    <div class="aem-Grid aem-Grid--12">
    <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
    <Form>
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

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button> 
    </Form>
    </div>
    <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
  <div className='pricing-card' >
    <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 ">
                  <h6>Subtotal</h6>
                  <h6>Coupon</h6>
                  <h6>Gift Card</h6>
                  <h6>Estimated tax</h6>
                  <h6>Estimated shipping</h6>
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
