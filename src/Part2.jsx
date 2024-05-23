import LeftArrow from "./images/left-arrow.png"
import Img1 from "./images/img-1.png"
import RightArrow from "./images/right-arrow.png"


const Part2 = () => {
  return (
    <div className="banner_section layout_padding">
    <div className="container">
      <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <h1 className="your_text">Your Favorite</h1>
                <h1 className="Shows_text">Shows And Movies</h1>
                <p className="there_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or
                </p>
                <div className="start_bt">
                  <a href="#">Start Now</a>
                </div>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="images_1">
                  <img src={Img1} />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <h1 className="your_text">Your Favorite</h1>
                <h1 className="Shows_text">Shows And Movies</h1>
                <p className="there_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or
                </p>
                <div className="start_bt">
                  <a href="#">Start Now</a>
                </div>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="images_1">
                  <img src={Img1} />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <h1 className="your_text">Your Favorite</h1>
                <h1 className="Shows_text">Shows And Movies</h1>
                <p className="there_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or
                </p>
                <div className="start_bt">
                  <a href="#">Start Now</a>
                </div>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="images_1">
                  <img src={Img1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#main_slider"
          role="button"
          data-slide="prev"
        >
          <i className="fa-arrow-left">
            <img src={LeftArrow} />
          </i>
        </a>
        <a
          className="carousel-control-next"
          href="#main_slider"
          role="button"
          data-slide="next"
        >
          <i className="fa-angle-right">
            <img src={RightArrow} />
          </i>
        </a>
      </div>
      <div className="banner_section_2">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="box_main">
              <div className="internet_icon"></div>
              <h4 className="broadband_text">Broadband</h4>
              <p className="many_text">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, m Ipsum, you need to be
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="box_main active">
              <div className="internet_icon1"></div>
              <h4 className="broadband_text active">Broadband</h4>
              <p className="many_text active">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, m Ipsum, you need to be
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="box_main">
              <div className="internet_icon2"></div>
              <h4 className="broadband_text">Broadband</h4>
              <p className="many_text">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, m Ipsum, you need to be
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Part2
