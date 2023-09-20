import React from "react";
import "../bootstrap.min.css";
export default function Modal()
{
    return(
        <div className="modal">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
        <p>Injury text possibly goes here</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    );
}