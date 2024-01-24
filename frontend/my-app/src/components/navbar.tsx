
import "./styles/navbar.css"

function Navbar() {
    return (<>
        <div className="navbar">
            <div className="navbar-container container">
                <div className="navbar-brand">
                    <a href="/">
                        <img className="img-fluid" src="../../../../logo_dago_kos.png" width="358" height="100" alt="Dago Student Living"/>
                    </a>
                </div>

                <button className="navbar-toggler" type="button" aria-controls="navbar-collapse" aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

            </div>
        </div>
    </>)
}

export default Navbar;