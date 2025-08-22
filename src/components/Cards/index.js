import React from "react";
import "./style.css";

function cards() {
  return (
    <>
      <div class="card mb-4 shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1560160990-1c830b639bfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaW50aW5nJTIwY2FudmFzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
          class="card-img-top" preserveAspectRatio="xMidYMid slice"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Artwork Name</h5>
          <p class="card-text">Artwork price and info..</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Buy Now
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default cards;
