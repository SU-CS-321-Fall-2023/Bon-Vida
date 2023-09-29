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
                    <ol>
                        <li>Make sure the scene is safe</li>
                        <li>Check Responsiveness: 
                            <ul>Tap victim’s Shoulder and shout, “Are you Ok?”</ul>
                        </li>
                        <li>Activate Emergency Response system: Depending on your situation: Phone 911 or Call a Code and get an AED</li>
                            <ul>▪ If someone comes to help you, have that person call 911 and get an AED.
                            ▪ If you are alone and have a cell phone, call 911 and put the phone on
                            speaker and get an AED if available.
                            ▪ If you are alone and do not have a cell phone, leave the person to call 911
                            and get an AED if available. Return to the person.
                            ▪ Use the AED as soon as you have it.
                            </ul>
                        <li>Check for breathing: </li>
                            <ul>▪ Look from head to chest to see if the person is breathing
                            ▪ Do this for at least 5 seconds but no more than 10.
                            ▪ If the person is unresponsive and isn’t breathing normally or is only gasping
                            then START CPR.
                            Check Pulse:
                            • Palpate a carotid pulse
                            • If you do not feel a pulse within 10 seconds, begin high-quality CPR,
                            starting with chest compressions.
                            </ul>
                        <li>Give 30 Compressions
                        </li>
                            <ul>▪ Make sure the person is lying on his back on a firm flat surface.
                            ▪ Move clothes out of the way. If a person’s clothes are difficult to remove,
                            you can still provide compressions over clothing.
                            ▪ Put the heel of one hand on the lower half of the breastbone. Put the heel of
                            your other hand on top of the first hand.
                            ▪ Compress at least 2 inches at a rate of 100 to 120 compressions per
                            minute.
                            ▪ Do not compress deeper than 2.4 inches in adults as it may cause injuries
                            ▪ After each compression, allow complete chest recoil.
                            </ul>
                        <li>Open the airway and give breaths</li>
                            <ul>• Provide effective breaths: open the victim’s airway. Use the appropriate
                            technique to open the airway
                            • Head Tilt-Chin Lift: tilt the head back and lift the chin to open the airway
                            • Jaw Thrust: If a head or neck injury is suspected
                            Deliver each rescue breath over 1 second
                            • The victim’s chest should rise with each breath Open the airway and give breaths- continued
                            • Avoid excessive ventilation
                            • Use bag-valve mask or barrier device if available
                            • Once an advanced airway is placed, continuous compressions are
                            performed without pause for ventilation. Ventilations are delivered at a rate
                            of 1 breath every 6 seconds.
                            • If there is a pulse and the victim is not breathing:
                            • Provide rescue breathing: 1 breath every 6 seconds (10breaths/minute)
                            </ul>
                        <li>Continue sets of compressions and breaths</li>
                            <ul>▪ Continue giving sets of 30 compression and 2 breaths until help arrives or the person becomes responsive.
                            ▪ In two-person CPR the rescuers should change positions after every 2 minutes
                            ▪ Ratio stays the same for one-person & two-person CPR ▪ Use the AED as soon as you have it.</ul>
                    </ol>
                </div>
                <div className={`tab-pane fade ${activeTab === 'infant-cpr' ? 'show active' : ''}`} id="infant-cpr" role="tabpanel">
                    <h2>Infant CPR Guidelines</h2>
                    <p>
                    </p>
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
