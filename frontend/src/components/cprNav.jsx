import React, { useState } from 'react';
import Adults from "../Images/CPR-Adult.jpg"

const CprNav = () => {
    const [activeTab, setActiveTab] = useState('adult-cpr');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className='cpr'>
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
        <img src={Adults} alt='Adult CPR' style={{ float: 'left', marginRight: '500px' }} />
        <ol>
            <li >Make sure the scene is safe</li>
            <li>Check Responsiveness:
                <ul>
                    <li>Tap victim’s Shoulder and shout, “Are you Ok?”</li>
                </ul>
            </li>
            <li>Activate Emergency Response system: Depending on your situation: Phone 911 or Call a Code and get an AED
                <ul>
                    <li>If someone comes to help you, have that person call 911 and get an AED.</li>
                    <li>If you are alone and have a cell phone, call 911 and put the phone on speaker and get an AED if available.</li>
                    <li>If you are alone and do not have a cell phone, leave the person to call 911 and get an AED if available. Return to the person.</li>
                    <li>Use the AED as soon as you have it.</li>
                </ul>
            </li>
            <li>Check for breathing:
                <ul>
                    <li>Look from head to chest to see if the person is breathing</li>
                    <li>Do this for at least 5 seconds but no more than 10.</li>
                    <li>If the person is unresponsive and isn’t breathing normally or is only gasping then START CPR.
                        Check Pulse:
                        <ul>
                            <li>Palpate a carotid pulse</li>
                            <li>If you do not feel a pulse within 10 seconds, begin high-quality CPR, starting with chest compressions.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Give 30 Compressions
                <ul>
                    <li>Make sure the person is lying on his back on a firm flat surface.</li>
                    <li>Move clothes out of the way. If a person’s clothes are difficult to remove, you can still provide compressions over clothing.</li>
                    <li>Put the heel of one hand on the lower half of the breastbone. Put the heel of your other hand on top of the first hand.</li>
                    <li>Compress at least 2 inches at a rate of 100 to 120 compressions per minute.</li>
                    <li>Do not compress deeper than 2.4 inches in adults as it may cause injuries</li>
                    <li>After each compression, allow complete chest recoil.</li>
                </ul>
            </li>
            <li>Open the airway and give breaths
                <ul>
                    <li>Provide effective breaths: open the victim’s airway. Use the appropriate technique to open the airway</li>
                    <li>Head Tilt-Chin Lift: tilt the head back and lift the chin to open the airway</li>
                    <li>Jaw Thrust: If a head or neck injury is suspected</li>
                    <li>Deliver each rescue breath over 1 second</li>
                    <li>The victim’s chest should rise with each breath Open the airway and give breaths- continued</li>
                    <li>Avoid excessive ventilation</li>
                    <li>Use bag-valve mask or barrier device if available</li>
                    <li>Once an advanced airway is placed, continuous compressions are performed without pause for ventilation. Ventilations are delivered at a rate of 1 breath every 6 seconds.</li>
                    <li>If there is a pulse and the victim is not breathing:</li>
                    <li>Provide rescue breathing: 1 breath every 6 seconds (10 breaths/minute)</li>
                </ul>
            </li>
            <li>Continue sets of compressions and breaths
                <ul>
                    <li>Continue giving sets of 30 compression and 2 breaths until help arrives or the person becomes responsive.</li>
                    <li>In two-person CPR the rescuers should change positions after every 2 minutes</li>
                    <li>Ratio stays the same for one-person & two-person CPR ▪ Use the AED as soon as you have it.</li>
                </ul>
            </li>
        </ol>
    </div>
    <div className={`tab-pane fade ${activeTab === 'infant-cpr' ? 'show active' : ''}`} id="infant-cpr" role="tabpanel">
    <h2>Infant CPR Guidelines</h2>
    <ol>
        <li>Make sure the scene is safe</li>
        <li>Check Responsiveness: Tap infant’s heel of foot and shout, “Are you Ok?”</li>
        <li>Activate Emergency Response system:
            <ul>
                <li>Depending on your situation: Phone 911 or Call a Code and get an AED</li>
                <li>Witnessed Arrest: If you are alone with no mobile phone, leave the victim to activate the emergency response system and get the AED before beginning CPR. Otherwise, send someone and begin CPR immediately: use the AED as soon as it is available</li>
                <li>Unwitnessed Arrest: Give 2 minutes of CPR</li>
                <li>Leave the child to activate the emergency response system and get the AED. Return to the infant and resume CPR: use the AED as soon as it is available</li>
                <li>If someone comes to help you, have that person call 911 and get an AED.</li>
                <li>If you are alone and have a cell phone, call 911 and put the phone on speaker and get an AED if available.</li>
                <li>Use the AED as soon as you have it.</li>
            </ul>
        </li>
        <li>Check for Breathing
            <ul>
                <li>Look from head to chest to see if the person is breathing</li>
                <li>Do this for at least 5 seconds but no more than 10.</li>
                <li>If the infant is unresponsive and isn’t breathing normally or is only gasping then START CPR.</li>
            </ul>
        </li>
        <li>Check Pulse:
            <ul>
                <li>Palpate a brachial pulse</li>
                <li>If you do not feel a pulse within 10 seconds, begin high-quality CPR, starting with chest compressions.</li>
            </ul>
        </li>
        <li>Give 30 Compressions
            <ul>
                <li>Make sure the infant is lying on his back on a firm flat surface.</li>
                <li>Move clothes out of the way.</li>
                <li>Compress at least 1/3 the depth of the chest about 1 1/2 inches at a rate of 100 to 120 compressions per minute.</li>
                <li>CPR ratio for one-person CPR is 30 compressions to 2 breaths</li>
                <li>Single rescuer: use 2 fingers, 2 thumb-encircling technique or the heel of 1 hand.</li>
                <li>CPR ratio for two-person CPR is 15 compressions to 2 breaths</li>
                <li>Use 2 Thumb-Encircling technique for compressions</li>
                <li>After each compression, allow complete chest recoil.</li>
            </ul>
        </li>
        <li>Open the airway and give breaths
            <ul>
                <li>Provide effective breaths: open the infant’s airway. Use the appropriate technique to open the airway</li>
                <li>Head Tilt-Chin Lift: tilt the head back and lift the chin to open the airway</li>
                <li>Deliver each rescue breath over 1 second</li>
                <li>The infant’s chest should rise with each breath</li>
                <li>Avoid excessive ventilation</li>
                <li>Use bag-valve mask or barrier device if available</li>
                <li>Once an advanced airway is placed, continuous compressions are performed without pause for ventilation. Ventilations are delivered at a rate of 1 breath every 2-3 seconds (20-30 breaths/minute)</li>
                <li>If there is a pulse and the victim is not breathing:</li>
                <li>Provide rescue breathing: 1 breath every 2-3 seconds (20-30 breaths/minute)</li>
            </ul>
        </li>
        <li>Continue sets of compressions and breaths
            <ul>
                <li>Continue giving sets of 30 compression and 2 breaths until help arrives or the person becomes responsive.</li>
                <li>In two-person CPR the rescuers should change positions after every 2 minutes</li>
                <li>Ratio changes for two-person CPR to 15 compressions to 2 breaths</li>
                <li>Use the AED as soon as you have it.</li>
            </ul>
        </li>
    </ol>
</div>

<div className={`tab-pane fade ${activeTab === 'child-cpr' ? 'show active' : ''}`} id="child-cpr" role="tabpanel">
    <h2>Child CPR Guidelines</h2>
    <ol>
        <li>Make sure the scene is safe</li>
        <li>Check Responsiveness: Tap child’s Shoulder and shout, “Are you Ok?”</li>
        <li>Activate Emergency Response system
            <ul>
                <li>Depending on your situation: Phone 911 or Call a Code and get an AED</li>
                <li>Witnessed Arrest: If you are alone with no mobile phone, leave the child to activate the emergency response system and get the AED before beginning CPR. Otherwise, send someone and begin CPR immediately: use the AED as soon as it is available</li>
                <li>Unwitnessed Arrest: Give 2 minutes of CPR</li>
                <li>Leave the child to activate the emergency response system and get the AED. Return to the child and resume CPR: use the AED as soon as it is available</li>
                <li>If someone comes to help you, have that person call 911 and get an AED.</li>
                <li>If you are alone and have a cell phone, call 911 and put the phone on speaker and get an AED if available.</li>
                <li>Use the AED as soon as you have it.</li>
            </ul>
        </li>
        <li>Check for breathing
            <ul>
                <li>Look from head to chest to see if the person is breathing</li>
                <li>Do this for at least 5 seconds but no more than 10.</li>
                <li>If the child is unresponsive and isn’t breathing normally or is only gasping, then START CPR.</li>
            </ul>
        </li>
        <li>Check Pulse:
            <ul>
                <li>Palpate a carotid pulse</li>
                <li>If you do not feel a pulse within 10 seconds, begin high-quality CPR, starting with chest compressions.</li>
            </ul>
        </li>
        <li>Give 30 Compressions
            <ul>
                <li>Make sure the child is lying on his back on a firm flat surface.</li>
                <li>Move clothes out of the way. If a person’s clothes are difficult to remove, you can still provide compressions over clothing.</li>
                <li>You may use either 1 or 2 hands for chest compressions</li>
                <li>Compress at least 1/3 the depth of the chest about 2 inches at a rate of 100 to 120 compressions per minute.</li>
                <li>CPR ratio for one-person CPR is 30 compressions to 2 breaths</li>
                <li>Single rescuer: use 2 fingers, 2 thumb-encircling technique or the heel of 1 hand.</li>
                <li>CPR ratio for two-person CPR is 15 compressions to 2 breaths</li>
                <li>Use 2 Thumb-Encircling technique for compressions</li>
                <li>After each compression, allow complete chest recoil.</li>
            </ul>
        </li>
        <li>Open the airway and give breaths
            <ul>
                <li>Provide effective breaths: open the child’s airway. Use the appropriate technique to open the airway</li>
                <li>Head Tilt-Chin Lift: tilt the head back and lift the chin to open the airway</li>
                <li>Jaw Thrust: If a head or neck injury is suspected</li>
                <li>Deliver each rescue breath over 1 second</li>
                <li>The child’s chest should rise with each breath</li>
                <li>Avoid excessive ventilation</li>
                <li>Use a bag-valve mask or barrier device if available</li>
                <li>Once an advanced airway is placed, continuous compressions are performed without pause for ventilation. Ventilations are delivered at a rate of 1 breath every 2-3 seconds (20-30 breaths/minute)</li>
                <li>If there is a pulse higher than 60 per minute and inadequate breathing: Provide rescue breathing: 1 breath every 2-3 seconds (20-30 breaths/minute)</li>
            </ul>
        </li>
        <li>Continue sets of compressions and breaths
            <ul>
                <li>Continue giving sets of 30 compression and 2 breaths until help arrives or the person becomes responsive.</li>
                <li>In two-person CPR, the rescuers should change positions after every 2 minutes</li>
                <li>Ratio changes for two-person CPR to 15 compressions to 2 breaths</li>
                <li>Use the AED as soon as you have it.</li>
            </ul>
        </li>
    </ol>
</div>

            </div>
        </div>
        </div>
    );
};

export default CprNav;
