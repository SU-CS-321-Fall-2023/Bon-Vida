import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Adults from "../Images/CPR-Adult.jpg";
import Infant from "../Images/CPR-Infant.jpg";
import Child from "../Images/CPR-Child.jpg";

const CprNav = () => {
  const [activeTab, setActiveTab] = useState("adult-cpr");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            CPR Guidelines
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor:
                    activeTab === "adult-cpr" ? "#3498db" : "#ddd",
                  borderRadius: 5,
                  marginRight: 5,
                }}
                onPress={() => handleTabClick("adult-cpr")}
              >
                <Text
                  style={{ color: activeTab === "adult-cpr" ? "#fff" : "#333" }}
                >
                  Adult CPR
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor:
                    activeTab === "infant-cpr" ? "#3498db" : "#ddd",
                  borderRadius: 5,
                  marginRight: 5,
                }}
                onPress={() => handleTabClick("infant-cpr")}
              >
                <Text
                  style={{
                    color: activeTab === "infant-cpr" ? "#fff" : "#333",
                  }}
                >
                  Infant CPR
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor:
                    activeTab === "child-cpr" ? "#3498db" : "#ddd",
                  borderRadius: 5,
                }}
                onPress={() => handleTabClick("child-cpr")}
              >
                <Text
                  style={{ color: activeTab === "child-cpr" ? "#fff" : "#333" }}
                >
                  Child CPR
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ padding: 10 }}>
          {activeTab === "adult-cpr" && (
            <>
              <View>
                <Text>Make sure the scene is safe</Text>
                <Text>Check Responsiveness:</Text>
                <View style={{ marginLeft: 20 }}>
                  <Text>Tap victim’s Shoulder and shout, “Are you Ok?”</Text>
                </View>
                <Text>
                  Activate Emergency Response system: Depending on your
                  situation: Phone 911 or Call a Code and get an AED
                </Text>
                <View style={{ marginLeft: 20 }}>
                  <Text>
                    If someone comes to help you, have that person call 911 and
                    get an AED.
                  </Text>
                  <Text>
                    If you are alone and have a cell phone, call 911 and put the
                    phone on speaker and get an AED if available.
                  </Text>
                  <Text>
                    If you are alone and do not have a cell phone, leave the
                    person to call 911 and get an AED if available. Return to
                    the person.
                  </Text>
                  <Text>Use the AED as soon as you have it.</Text>
                </View>
                <Text>Check for breathing:</Text>
                <View style={{ marginLeft: 20 }}>
                  <Text>
                    Look from head to chest to see if the person is breathing
                  </Text>
                  <Text>
                    Do this for at least 5 seconds but no more than 10.
                  </Text>
                  <Text>
                    If the person is unresponsive and isn’t breathing normally
                    or is only gasping then START CPR.
                  </Text>
                  <Text>Check Pulse:</Text>
                  <View style={{ marginLeft: 20 }}>
                    <Text>Palpate a carotid pulse</Text>
                    <Text>
                      If you do not feel a pulse within 10 seconds, begin
                      high-quality CPR, starting with chest compressions.
                    </Text>
                  </View>
                </View>
                <Text>Give 30 Compressions:</Text>
                <View style={{ marginLeft: 20 }}>
                  <Text>
                    Make sure the person is lying on his back on a firm flat
                    surface.
                  </Text>
                  <Text>
                    Move clothes out of the way. If a person’s clothes are
                    difficult to remove, you can still provide compressions over
                    clothing.
                  </Text>
                  <Text>
                    Put the heel of one hand on the lower half of the
                    breastbone. Put the heel of your other hand on top of the
                    first hand.
                  </Text>
                  <Text>
                    Compress at least 2 inches at a rate of 100 to 120
                    compressions per minute.
                  </Text>
                  <Text>
                    Do not compress deeper than 2.4 inches in adults as it may
                    cause injuries
                  </Text>
                  <Text>
                    After each compression, allow complete chest recoil.
                  </Text>
                </View>
                <Text>Open the airway and give breaths:</Text>
                <View style={{ marginLeft: 20 }}>
                  <Text>
                    Provide effective breaths: open the victim’s airway. Use the
                    appropriate technique to open the airway
                  </Text>
                  <Text>
                    Head Tilt-Chin Lift: tilt the head back and lift the chin to
                    open the airway
                  </Text>
                  <Text>Jaw Thrust: If a head or neck injury is suspected</Text>
                  <Text>Deliver each rescue breath over 1 second</Text>
                  <Text>
                    The victim’s chest should rise with each breath Open the
                    airway and give breaths- continued
                  </Text>
                  <Text>Avoid excessive ventilation</Text>
                  <Text>Use bag-valve mask or barrier device if available</Text>
                  <Text>
                    Once an advanced airway is placed, continuous compressions
                    are performed without pause for ventilation. Ventilations
                    are delivered at a rate of 1 breath every 6 seconds.
                  </Text>
                  <Text>
                    If there is a pulse and the victim is not breathing:
                  </Text>
                  <Text>
                    Provide rescue breathing: 1 breath every 6 seconds (10
                    breaths/minute)
                  </Text>
                </View>
                <Text>Continue sets of compressions and breaths:</Text>
                <View style={{ marginLeft: 20 }}>
                  <Text>
                    Continue giving sets of 30 compression and 2 breaths until
                    help arrives or the person becomes responsive.
                  </Text>
                  <Text>
                    In two-person CPR the rescuers should change positions after
                    every 2 minutes
                  </Text>
                  <Text>
                    Ratio stays the same for one-person & two-person CPR ▪ Use
                    the AED as soon as you have it.
                  </Text>
                </View>
              </View>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}
              >
                Adult CPR Guidelines
              </Text>
              {/* Add other components like images and text here */}
              <Image
                source={Adults}
                style={{ width: 200, height: 200, alignSelf: "flex-end" }}
              />
            </>
          )}

          {activeTab === "infant-cpr" && (
            <>
              {/* Infant CPR content */}
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}
              >
                Infant CPR Guidelines
              </Text>
              {/* Add other components like images and text here */}
              <Image
                source={Infant}
                style={{ width: 200, height: 200, alignSelf: "flex-end" }}
              />
            </>
          )}

          {activeTab === "child-cpr" && (
            <>
              {/* Child CPR content */}
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}
              >
                Child CPR Guidelines
              </Text>
              {/* Add other components like images and text here */}
              <Image
                source={Child}
                style={{ width: 200, height: 200, alignSelf: "flex-end" }}
              />
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CprNav;
