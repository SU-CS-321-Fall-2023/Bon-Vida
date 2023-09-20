import React from "react";
import "../bootstrap.min.css";
export default function Modal()
{
    return(
        <div class="modal">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
        <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    );
}