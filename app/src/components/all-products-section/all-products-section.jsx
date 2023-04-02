import React from 'react'
import './index.module.pcss'
import { BREACKPOINTS } from '../../constants/breackpoints'

export const AllProductsSection = () => {
    return (
        <menu className="wt-container all-products-section">
            <div className="wt-row wt-row_justify_around wt-row_align-items_center wt-row-sm_direction_column-reverse all-products-section__row">
                <div className="wt-col-auto-fill wt-col-sm-12 all-products-section__placeholder-image">
                    <img className="all-products-section__image"></img>
                </div>
                <div className="wt-col-auto-fill wt-col-sm-12 all-products-section__placeholder">
                    <div className="wt-row all-products-section__info">
                        <div className="wt-col-sm-12 all-products-section__pack">
                            All Products Pack
                        </div>
                        <div className="wt-col-sm-12 all-products-section__toolkit">
                            The complete full-stack developer toolkit
                        </div>
                        <button className="wt-col_align-self_center wt-col-sm-12 all-products-section__button">
                            I Want it All
                        </button>
                        <div className="wt-col-sm-12 all-products-section__term">
                            An upgrade and switch option available
                        </div>
                    </div>
                </div>
            </div>
        </menu>
    )
}
