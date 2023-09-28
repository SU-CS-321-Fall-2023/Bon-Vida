import React, { useState } from 'react';

const CprNav = () => {
    const [activeTab, setActiveTab] = useState('adult-cpr');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'adult-cpr' ? 'active' : ''}`}
                        onClick={() => handleTabClick('adult-cpr')}
                        role="tab"
                    >
                        Adult CPR
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'infant-cpr' ? 'active' : ''}`}
                        onClick={() => handleTabClick('infant-cpr')}
                        role="tab"
                    >
                        Infant CPR
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'child-cpr' ? 'active' : ''}`}
                        onClick={() => handleTabClick('child-cpr')}
                        role="tab"
                    >
                        Child CPR
                    </a>
                </li>
            </ul>
            <div id="myTabContent" className="tab-content">
                <div className={`tab-pane fade ${activeTab === 'adult-cpr' ? 'show active' : ''}`} id="adult-cpr" role="tabpanel">
                    <h2>Adult CPR Guidelines</h2>
                    <p>Here are the CPR guidelines for adults...</p>
                </div>
                <div className={`tab-pane fade ${activeTab === 'infant-cpr' ? 'show active' : ''}`} id="infant-cpr" role="tabpanel">
                    <h2>Infant CPR Guidelines</h2>
                    <p>Here are the CPR guidelines for infants...</p>
                </div>
                <div className={`tab-pane fade ${activeTab === 'child-cpr' ? 'show active' : ''}`} id="child-cpr" role="tabpanel">
                    <h2>Child CPR Guidelines</h2>
                    <p>Here are the CPR guidelines for children...</p>
                </div>
            </div>
        </div>
    );
};

export default CprNav;
