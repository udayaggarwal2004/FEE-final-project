import Logo from "./images/logo.png"
import BagIcon from "./images/bag-icon.png"
import Search from "./images/search-icon.png"
import User from "./images/user-icon.png"

const Part1 = ({refs}) => {
    const navItems = [
        {
            name:"Home", ref :refs.HeadRef
        },
        {
            name:"About", ref:refs.AboutRef
        },
        {
            name:"Products", ref:refs.ProductRef
        },
        {
            name:"Blog", ref:refs.SubRef
        },
        {
            name:"Contact Us", ref:refs.ContactRef
        }
        
    ]

    const handleClick = (item)=>{
        item.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  return (
<div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              {/* <a href="index.html"> */}
                <img src={Logo} />
              {/* </a> */}
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {
                    navItems.map((item, index)=>{
                        return (
                            <li key={index} onClick={()=>handleClick(item)} className="nav-item cursor-pointer">
                            <a className="nav-link" >
                              {item.name}
                            </a>
                          </li>
                        )
                    })
                }
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  GET STARTED
                </button>
              </form>
              <div className="search_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src={User} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={BagIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Search} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
  )
}

export default Part1
