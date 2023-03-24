import React from "react";
import ForminputGroup from "../components/ForminputGroup";

import "../extra.css";

function Personalinfo({ formData, setFormData }) {
  return (
    <>
      <h5>How many guests will be arriving?</h5>

      <div className="form-row1">
        <div className="half-row">
          <ForminputGroup
            label="Adults"
            className="field-half"
            type="number"
            value={formData.adults}
            onChange={(e) =>
              setFormData({ ...formData, adults: e.target.value })
            }
          />
        </div>

        <div className="half-row">
          <ForminputGroup
            label="Chidren"
            className="field-half"
            type="number"
            value={formData.children}
            onChange={(e) =>
              setFormData({ ...formData, children: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-row1">
        <div className="half-row">
          <ForminputGroup
            label="mobule number"
            className="field-half"
            type="text"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
        </div>

        <div className="half-row">
          <ForminputGroup
            label="nationalify"
            type="text"
            className="field-full"
            value={formData.nationality}
            onChange={(e) =>
              setFormData({ ...formData, nationality: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
}

export default Personalinfo;
