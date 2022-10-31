import img1 from '../img/img1.png'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

function Body() {
    return(
        <div className="container">
            <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block h-100" alt="mountain scene with the word epic written in the foreground"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="girl with American flag"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="dog on ice"></img>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Body