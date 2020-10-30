import React from "react";
import '../styles/Students.css'
import outside_1 from '../images/outside_1.jpg'
import teach_2 from '../images/teach_2.jpg'
import teach_1 from '../images/teach_1.jpg'

import outside_2 from '../images/outside_2.jpg'




function Students () {
  return (
  
       
 

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={outside_1} className="d-block w-100"  alt="First slide" />
    </div>
    <div  className="carousel-item">
      <img src={outside_2} className="d-block w-100"  alt="Second slide" />
    </div>
    <div  className="carousel-item">
      <img src={teach_1} className="d-block w-100" alt="Third slide" />
    </div>
    <div  className="carousel-item">
      <img src={teach_2} className="d-block w-100"  alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    

  );

  
}

export default Students;