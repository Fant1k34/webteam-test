import React from 'react'
import './index.module.pcss'

export const AllProductsSection = () => {
    return (
        <div className="wt-container all-products-section">
            <div className="wt-row wt-row_justify_around wt-row_align-items_center wt-row-sm_direction_column-reverse all-products-section__row">
                <nav className="wt-col-auto-fill wt-col-sm-12 all-products-section__placeholder-image">
                    <img className="all-products-section__image" />
                </nav>
                <article className="wt-col-auto-fill wt-col-sm-12 all-products-section__placeholder">
                    <div className="wt-row all-products-section__info">
                        <section className="wt-col-sm-12 all-products-section__pack">
                            All Products Pack
                        </section>
                        <section className="wt-col-sm-12 all-products-section__toolkit">
                            The complete full-stack developer toolkit
                        </section>
                        <section>
                            <button className="wt-col_align-self_center wt-col-sm-12 all-products-section__button">
                                I&nbsp;Want it&nbsp;All
                            </button>
                        </section>
                        <section className="wt-col-sm-12 all-products-section__term">
                            An&nbsp;upgrade and switch option available
                        </section>
                    </div>
                </article>
            </div>
        </div>
    )
}
