import React from 'react'
import Productlist from '../Product-page/Productlist';
import Filter from '../Product-page/Filter';
import Title from '../Home/Title';
import Breadcrumb from '../Product-page/Breadcrumb';

function Header({ category }) {
    return (
        <>
            <Title />
            <div>
                <Breadcrumb />
            </div>
          <div className='container'>
            <div class="aem-Grid aem-Grid--12 ">
                <div class="aem-GridColumn aem-GridColumn--default--3">
                    <Filter />
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    <Productlist category={category} />
                </div>
            </div>
            </div>
        </>

    )
}

export default Header
