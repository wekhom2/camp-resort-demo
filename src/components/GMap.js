import React, { Component } from "react";

export class GMap extends Component {
  render() {
    return (
      <>
        <iframe
          style={{ width: "100%", height: "100%" }}
          src="https://maps.google.com/maps?q=jacaranda%20bush%20camp&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </>
    );
  }
}

export default GMap;
