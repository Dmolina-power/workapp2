import React from "react";
import "./style.css";

function carousel() {
  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Welcome to NONAME</h1>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1520207588543-1e545b20c19e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhaW50ZXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <div class="container">
            <div class="carousel-caption">
              <h1>HOW TO PLAY</h1>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1545518514-ce8448f542b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGFydCUyMHNob3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <div class="container">
            <div class="carousel-caption text-right">
              <h1></h1>
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
export default carousel;
