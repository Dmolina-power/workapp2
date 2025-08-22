import React from "react";


function sidebar(){
    return(
        <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                
                <li class="nav-item">
                  <a class="nav-link" href="/feed">
                    <span data-feather="feed"></span>
                    Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/studio">
                    <span data-feather="studio"></span>
                    Game
                  </a>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      </div>
    )
}

export default sidebar;