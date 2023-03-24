import React from "react";
import ForminputGroup from "../components/ForminputGroup";

import "../extra.css";

function Intro({ formData, setFormData }) {
  return (
    <>
      <div className="form-row1">
        <div className="half-row">
          <ForminputGroup
            label="First Name"
            type="text"
            value={formData.firstName}
            className="field-half"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>

        <div className="half-row">
          <ForminputGroup
            label="Last Name"
            type="text"
            className="field-half"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-row">
        <div className="full-row">
          <ForminputGroup
            label="Email"
            type="email"
            className="field-full"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
}

export default Intro;
