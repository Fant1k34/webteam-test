import React, { useState } from 'react'
import { products as ides } from '../../constants/products'
import { useWidthUpdate } from '../../hooks/useWidthUpdate'
import { isMobile } from '../../../../utils/isMobile'

import './index.module.pcss'

export const ProductsNameSection = () => {
    const [chosenIde, setChosenIde] = useState()

    useWidthUpdate()

    const handleChooseIde = (ide) => () => {
        setChosenIde(ide.name)
    }

    const handleDenyIde = () => {
        setChosenIde(null)
    }

    if (isMobile()) {
        return (
            <section className="wt-container products-name-section">
                <div className="products-name-section__info-table-name_mobile">
                    Get access to all JetBrains desktop tools including 10 IDEs,
                    2 extensions and 3 profilers
                </div>
                <div className="products-name-section__table-name_mobile">
                    10 IDEs
                </div>
                <div className="products-name">
                    {ides
                        .sort((a, b) => a.mobileIndex - b.mobileIndex)
                        .map((ide) => (
                            <div>
                                <div className="products-name__ide-card-image_mobile">
                                    <img
                                        className="products-name__image"
                                        srcSet={`${ide.logoPath.oneX} 1x, ${ide.logoPath.twoX} 2x, ${ide.logoPath.threeX} 3x`}
                                        alt={`${ide.name} logo`}
                                    />
                                </div>
                                <div className="products-name__ide-card-name_mobile">
                                    {ide.name}
                                </div>
                                <div className="products-name__competencies">
                                    {ide.competencies.map((competency) => (
                                        <div key={competency}>
                                            <div>{competency}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        )
    }

    return (
        <section className="wt-container products-name-section">
            <div className="wt-row products-name">
                <div className="wt-col-auto-fill">
                    <div className="products-name__table-name">10 IDEs</div>
                    <div className="products-name__table">
                        {ides
                            .sort(
                                (a, b) =>
                                    a.desktopImageIndex - b.desktopImageIndex
                            )
                            .map((ide) => (
                                <div
                                    key={ide.id}
                                    className="products-name__ide"
                                >
                                    <img
                                        className={
                                            'products-name__image ' +
                                            (chosenIde && chosenIde !== ide.name
                                                ? 'products-name__image_blur'
                                                : '')
                                        }
                                        srcSet={`${ide.logoPath.oneX} 1x, ${ide.logoPath.twoX} 2x, ${ide.logoPath.threeX} 3x`}
                                        alt={`${ide.name} logo`}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="wt-col-auto-fill">
                    <div className="products-name__info-table-name">
                        Get access to all JetBrains desktop tools including 10
                        IDEs, 2 extensions and 3 profilers
                    </div>
                    <div className="products-name__info-table">
                        {ides
                            .sort(
                                (a, b) =>
                                    a.desktopDescriptionIndex -
                                    b.desktopDescriptionIndex
                            )
                            .map((ide) => (
                                <div
                                    className="products-name__ide-info"
                                    key={ide.id}
                                >
                                    <div
                                        className="products-name__ide-name"
                                        onMouseOver={handleChooseIde(ide)}
                                        onMouseLeave={handleDenyIde}
                                    >
                                        {ide.name}
                                    </div>
                                    <div className="products-name__competencies">
                                        {ide.competencies.map((competency) => (
                                            <div key={competency}>
                                                <div>{competency}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
