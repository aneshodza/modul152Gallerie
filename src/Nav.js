import "./css/App.css"

export default function Nav(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">Top</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="/home#projects" style={props.active === 0 ? {"fontWeight": "bold"} : {}}>Bildformate</a></li>
                        <li class="nav-item"><a class="nav-link" href="/fotografie" style={props.active === 1 ? {"fontWeight": "bold"} : {}}>Fotografie</a></li>
                        <li class="nav-item"><a class="nav-link" href="/bilderbearbeitung" style={props.active === 2 ? {"fontWeight": "bold"} : {}}>Bearbeitung</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}