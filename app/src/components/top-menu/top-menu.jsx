import React from 'react'
import './index.module.pcss'
import { TopMenuMobile } from './top-menu-mobile/top-menu-mobile'
import { isMobile } from '../../../../utils/isMobile'
import { useWidthUpdate } from '../../hooks/useWidthUpdate'

export const TopMenu = () => {
    useWidthUpdate()

    if (isMobile()) {
        return <TopMenuMobile />
    }

    return (
        <menu className="wt-container top-menu">
            <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__line">
                <div className="wt-col-2 top-menu__main-logo wt-col_align-self_baseline">
                    Toolbox
                </div>
                <div className="wt-col-10">
                    <div className="wt-row wt-row_align-items_baseline wt-row_justify_end">
                        <a className="top-menu__overview">
                            <span className="top-menu__overview-text">
                                Overview
                            </span>
                        </a>
                        <a className="top-menu__application">
                            <span className="top-menu__application-text">
                                Toolbox App
                            </span>
                        </a>
                        <button className="top-menu__button">
                            <span className="top-menu__button-text">
                                Buy Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </menu>
    )
}
