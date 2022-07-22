import React from 'react'
import "../Style/Filter.scss"


function Filter() {
    return (
        <div className='container'>
         <div className='filters_1'>
                    <div className='filter'>
                        <h6>Filters</h6>
                    </div>
                    <hr/>
                    <div className='attribute'>
                        <h6>Attribute</h6>
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Extra Small</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Small</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Medium</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Large</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Extra Large</label> <br />
                        <div className='more'>
                            <a href="#show" class="">
                                show more
                            </a>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <h6>Attribute</h6>
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <hr />
                    </div>


                    <div>
                        <div>
                            <h6>Color</h6>
                        </div>
                        <div className='filter_colors'>
                            <button class="btnclr"></button><br />
                            <button class="btnclr1"></button>
                            <button class="btnclr2"></button>
                            <button class="btnclr3"></button>
                        </div>
                        <br />
                        <div className='filter_colors'>
                            <button class="btnclr4"></button><br />
                            <button class="btnclr5"></button>
                            <button class="btnclr6"></button>
                            <button class="btnclr7"></button>
                        </div>
                        <br />
                        <div className='filter_colors'>
                            <button class="btnclr"></button><br />
                            <button class="btnclr9"></button>
                            

                        </div>


                    </div>

<hr/>
                    <div>
                        <h6>Attribute</h6>
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <hr />
                    </div>
                    </div>
                    </div>
    )
}

export default Filter