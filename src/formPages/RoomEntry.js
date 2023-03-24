import React from "react";
import ForminputGroup from "../components/ForminputGroup";

import "../extra.css";

function RoomEntry({ formData, setFormData }) {
  return (
    <>
      <h5>when are you coming?</h5>

      <div className="form-row1">
        <div className="half-row">
          <ForminputGroup
            label="Check-In"
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
          />
        </div>

        <div className="half-row">
          <ForminputGroup
            label="Check-Out"
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-row">
        <div className="full-row">
          <ForminputGroup
            label="Special Request"
            type="textarea"
            className="msgs"
            value={formData.msgs}
            onChange={(e) => setFormData({ ...formData, msgs: e.target.value })}
          />
        </div>
      </div>

      <div className="field-bay"></div>
    </>
  );
}

export default RoomEntry;
