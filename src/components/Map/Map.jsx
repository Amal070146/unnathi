import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-wrapper">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1972.6601442049277!2d76.9439842!3d8.565169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b91e8f40e879%3A0x3c51eb6bf846806b!2sAmbedkar%20Bhavan!5e0!3m2!1sen!2sin!4v1690675169283!5m2!1sen!2sin"
          style={{
            border: "0",
            width: "100%",
            maxWidth: "100vw",
            height: "45vh",
            borderRadius: "0px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="map-overlapper">
        <h1>Get in Touch</h1>
        <div className=".flex-col-gap10">
          <div className="flex-gap10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M17.3433 18.48L19.5833 16.24C19.885 15.9421 20.2667 15.7381 20.6821 15.6529C21.0975 15.5677 21.5287 15.6049 21.9233 15.76L24.6533 16.85C25.0521 17.0119 25.3941 17.2882 25.6361 17.6441C25.8781 18.0001 26.0094 18.4197 26.0133 18.85V23.85C26.011 24.1428 25.9494 24.4321 25.8324 24.7005C25.7153 24.9688 25.5452 25.2107 25.3321 25.4116C25.1191 25.6125 24.8677 25.7682 24.5929 25.8693C24.3181 25.9704 24.0257 26.0149 23.7333 26C4.60332 24.81 0.743317 8.61004 0.0133175 2.41004C-0.0205696 2.10558 0.0103921 1.79739 0.104166 1.50575C0.197939 1.21411 0.352399 0.945633 0.557385 0.717977C0.76237 0.49032 1.01323 0.308646 1.29348 0.184905C1.57372 0.0611637 1.87698 -0.00183916 2.18332 4.0869e-05H7.01332C7.44433 0.00131666 7.8651 0.131508 8.22151 0.37387C8.57793 0.616232 8.85369 0.959681 9.01332 1.36004L10.1033 4.09004C10.2636 4.48311 10.3045 4.91468 10.2209 5.33085C10.1373 5.74702 9.93292 6.12934 9.63332 6.43004L7.39332 8.67004C7.39332 8.67004 8.68332 17.4 17.3433 18.48Z"
                fill="black"
              />
            </svg>
            <a href="">+91 00000 00000</a>
          </div>
          <div className="flex-gap10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
            >
              <path
                d="M21.7475 0.654278L20.0841 1.95381L13.0016 7.21692L5.91916 1.90183L4.25576 0.602297C3.86389 0.278122 3.38552 0.0760378 2.87993 0.0210806C2.37433 -0.0338766 1.86372 0.0607083 1.41135 0.293117C0.958982 0.525526 0.584739 0.885545 0.334987 1.32857C0.0852339 1.7716 -0.0290538 2.27817 0.00628245 2.78551V17.8471C0.00628245 18.3158 0.192486 18.7654 0.523932 19.0968C0.855377 19.4283 1.30491 19.6145 1.77365 19.6145H5.91916V9.58207L13.0016 14.8972L20.0841 9.58207V19.6145H24.2296C24.6983 19.6145 25.1479 19.4283 25.4793 19.0968C25.8107 18.7654 25.9969 18.3158 25.9969 17.8471V2.78551C26.0213 2.28254 25.8991 1.78332 25.6451 1.34852C25.3911 0.913718 25.0162 0.562071 24.5661 0.336322C24.116 0.110572 23.61 0.0204429 23.1096 0.0768889C22.6092 0.133335 22.136 0.333926 21.7475 0.654278Z"
                fill="black"
              />
            </svg>
            <div>
              <a href="">info@unnathikerala.org </a>
              <a href="">offce@unnathikerala.org</a>
            </div>
          </div>
        </div>
        <a href="" className="flex-gap10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
          >
            <path
              d="M2 22.3909H15.5939M8.79695 2V17.8596M8.79695 17.8596L14.4611 12.1954M8.79695 17.8596L3.13283 12.1954"
              stroke="black"
              stroke-width="2.26565"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Get the Brochure</p>
        </a>
      </div>
    </div>
  );
};

export default Map;