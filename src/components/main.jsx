import React from "react";

const Home = () => {

  

  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../images/Carousel1.jpg" class="d-block mx-auto" style={{height : '500px', width :'1500px'}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../images/carousel3.jpeg" class="d-block mx-auto " style={{height : '500px', width :'1500px'}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../images/Carousel4.jpeg" class="d-block mx-auto " style={{height : '500px', width :'1500px'}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      {/* <div className="hero border-1 pb-3 mt-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img"
            src= "..."
            alt="Card"
            height={700}
          />
          <div align="right" className="card-img-overlay d-flex ">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter "> <p  style={{fontWeight:"500"}}>LAZZY PLAY</p>
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Shopping at Your DoorStep 
              
              </p>
              
            </div>
          </div>
        </div>
      </div> */}
      
    </>
  );
};

export default Home;
