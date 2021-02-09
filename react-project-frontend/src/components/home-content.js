import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";

const HomeContent = () => (
  <div className="next-steps">
    <h2 className="my-5 text-center">Current Promotions</h2>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/connections"
          >
            <FontAwesomeIcon icon={faShip} className="mr-2" />
            Alaska
          </a>
        </h6>
        <p>
          Travel for seven days departing from Seattle, WA and arriving in Sitka, AL. Travel aboard our newest ship, the Artic Princess.
          Enjoy watching glaciers calve from your own private balcony. Shore excursions include Native America smoked salmon dinner, and fishing.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/multifactor-authentication"
          >
            <FontAwesomeIcon icon={faShip} className="mr-2" />
            The Caribbean
          </a>
        </h6>
        <p>
          One of our longer cruises, enjoy 14 days in your own Caribbean paradise, departing from Orlando. Destinations include
          Jamaica, Puerto Rico, Belize, Cozumel, and Cancun. Soak up rays on the beach with an all-inclusive cocktail package, 
          or swim with the dolphins or stingrays.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/anomaly-detection"
          >
            <FontAwesomeIcon icon={faShip} className="mr-2" />
            Mexico
          </a>
        </h6>
        <p>
          This cruise departs year-round from San Diego. You'll never find a better way to spend 10 days exploring areas such as 
          Cabo San Lucas, Catalina Island, and Ensenada. Fish for giant tuna in the Sea of Cortez, sail around Catalina Island in a
          luxury skiff, or snorkel with exotic fish species in crystal blue waters.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/rules"
          >
            <FontAwesomeIcon icon={faShip} className="mr-2" />
            Hawaii
          </a>
        </h6>
        <p>
          Hang out on the beach with your favorite sea turtle, hike through active volcanoes, explore the lagoons while snorkeling, and attend
          an authentic Hawaiian luah while you relax away 10 days. Lock in your reservation now for premium add-ons.
        </p>
      </div>
    </div>
  </div>
);

export default HomeContent;
