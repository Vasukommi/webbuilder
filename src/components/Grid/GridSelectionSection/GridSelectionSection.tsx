import "./GridSelectionSection.scss";

const GridSelectionSection = () => {
    return (
        <div className="column-selector-section">
            <p>SELECT STRUCTURE OR DRAG ELEMENT HERE</p>
            <div className="column-selector-flex">
                <ul className="column-selector-container">
                    <div>
                        <li style={{ width: '70px', height: '32px' }}></li>
                    </div>
                </ul>
                <ul className="column-selector-container">
                    <div>
                        <li style={{ width: '70px', height: '16px' }}></li>
                        <li style={{ width: '70px', height: '16px' }}></li>
                    </div>
                </ul>
                <ul className="column-selector-container">
                    <div className="column-selector-flex-container">
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                    </div>
                    <div>
                        <li style={{ width: '70px', height: '16px' }}></li>
                    </div>
                </ul>
                <ul className="column-selector-container">
                    <div>
                        <li style={{ width: '70px', height: '16px' }}></li>
                    </div>
                    <div className="column-selector-flex-container">
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                    </div>
                </ul>
                <ul className="column-selector-container">
                    <div className="column-selector-flex-container">
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                    </div>
                    <div className="column-selector-flex-container">
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                    </div>
                </ul>
                <ul className="column-selector-container">
                    <div className="column-selector-flex-container">
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                    </div>
                    <div className="column-selector-flex-container">
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                        <li style={{ width: '34px', height: '16px' }}></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default GridSelectionSection