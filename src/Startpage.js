import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css"
import Footer from "./Footer"
import Nav from "./Nav"

export default function Startpage() {
    return (
        <body id="page-top">

            <Nav active={0}/>

            <header class="masthead">
                <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div class="d-flex justify-content-center">
                        <div class="text-center">
                            <h1 class="mx-auto my-0 text-uppercase">SKI</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5">A Webpage all about photography, editing of images, videos and so on. Based on Bootstrap 5</h2>
                            <a class="btn btn-primary" href="#projects">Learn more</a>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">

                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={require("./assets/img/bg-masthead-bot2.jpeg")} alt="..." /></div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Bildformate</h4>
                                <p class="text-black-50 mb-0">In diesem Teil werden die Verschiedenen Bildformate (PNG, JPG, GIF, SVG etc.) erklärt und gezeigt. Alle dieser Dateitypen haben etwas spezielles an sich und in diesem Kapitel werden diese erläutert</p>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src={require("./assets/img/JPEG.jpeg")} alt="..." /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">JPEG</h4>
                                        <p class="mb-0 text-white-50">Ein "Joint Photographic Experts Group" ist die meistbenutzte Dateiendung für Bilder. Kameras speichern digitale Bilder meistens in diesem Format.<br />Im Gegenzug zu einem PNG benutzt JPEG eine verlustbehaftete Komprimierung. Das bedeutet, dass beim Herunterskalieren des Bildes die Qualität auch sinkt. Falls man es grösser machen will, bekommt es die ursprüngliche Qualität nicht mehr. Das ist zwar gut bei statischen Bildern wie auf Webseiten, doch falls man scharfe Kanten braucht, ist es definitiv nicht geeignet. Auf diesem Bild sieht man das gut. Ich habe die 1824 Pixel Breite zu 300 Pixel herunter skaliert, und es dann wieder grösser gemacht. Links ist die skalierte häflte während rechts die originale hälfte ist.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src={require("./assets/img/PNGMitHintergrund.png")} alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">PNG</h4>
                                        <p class="mb-0 text-white-50">"Portable Network Graphics" ist ein Bildformat, welches durch seine "ineffiziente" Codierungsart verlustlos bleibt, auch wenn man die grösse anpasst und dann wieder grösser macht. Es unterstüzt Palleten-Baiserte, Grauton und Nicht Paletten-Basierte Bilder.<br /> Was aber PNG so speziell macht, ist dass es durchsichtige Elemente unterstüzt. Hier sieht man das am Himmel, welchen ich raus-editiert habe. Die durchsichtigen Elemente werden mit einer Grau-Weiss karrierten Fläche gekennzeichnet.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src={require("./assets/img/GIF.gif")} alt="..." style={{ "height": '100%', "width": "100%" }} /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">GIF</h4>
                                        <p class="mb-0 text-white-50">Der "Graphics Interchange Format" Datentyp ist ein bitmap Bilder Format, welches in 1987 an die Öffentlichkeit kam. Es wird noch heute verwendet, da es kompatibel zwischen Betriebssystemen und Browsern ist. Man kann 8 Bit per Pixel einstellen, weshalb man nur 256 Farben vom 24-Bit RGB verwenden kann. Es benutzt gleich wie ein PNG eine Verluslose Kompression. <br />Speziell sind GIFs für kurze, unscharfe Videos geeignet, welche der Seite ein bisschen Leben geben können.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center" >
                        <div class="col-lg-6">
                            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="triangles">
                                <g id="lightGroup">
                                    <path id="light1" opacity="0.6"
                                        d="M53.4872 46.3509C55.7436 47.6536 55.7436 50.9105 53.4872 52.2132L13.718 75.174C11.4615 76.4767 8.64104 74.8483 8.64104 72.2428L8.64104 26.3213C8.64104 23.7158 11.4616 22.0874 13.718 23.3901L53.4872 46.3509Z" />
                                </g>
                                <g id="darkGroup">
                                    <path id="dark1" opacity="0.8"
                                        d="M74.9231 46.915C77.1795 48.2177 77.1795 51.4746 74.9231 52.7773L34.3077 76.2266C32.0513 77.5294 29.2308 75.9009 29.2308 73.2955L29.2308 26.3968C29.2308 23.7914 32.0513 22.1629 34.3077 23.4657L74.9231 46.915Z" />
                                    <path id="dark2" opacity="0.8"
                                        d="M54.6154 46.915C56.8718 48.2177 56.8718 51.4746 54.6154 52.7773L14 76.2266C11.7436 77.5294 8.92307 75.9009 8.92307 73.2955L8.92308 26.3968C8.92308 23.7914 11.7436 22.1629 14 23.4657L54.6154 46.915Z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">SVG</h4>
                                        <p class="mb-0 text-white-50">Die "Scalable Vactor Graphic", abgekürzt SVG, ist ein 2-Dimensionales Vektor-Bild Format. Es basiert auf der xml notation und sieht aus wie html. Die EElemente werden mit einem svg html-tag markiert. Die ganze Datei ist dadurch nur eine Anleitung zu einem Bild. SVG Grafiken werden seit 2010 standartmässig überall unterstüzt und sind dafür sehr gut in Browsern geeignet. <br />Speziell an ihnen ist, dass sie wegen ihrer html-Artigen Natur sehr einfach mit css animierbar sind. Spiel mit dem Element rechts.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src={require("./assets/img/RAW.png")} alt="..." style={{"width": "100%"}}/></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">RAW</h4>
                                        <p class="mb-0 text-white-50">Eine RAW (englisch für Roh) Datei ist ein Bild, welches möglichst wenig verarbeitet wurde. Es wird mehr oder weniger im fotografiertem Status gespeichert. Man kann bei diesen Bildern sehr viel bearbeiten, weshalb viele Professionelle Kameras Bilder "roh" speichern. <br/> Speziell daran ist, dass diese Bilder noch nicht verarbeitet wurden. Man kann es sich wie unentwickelten Film auf den alten Kameras vorstellen. Man verliert minimale Informationen vom Moment von dem das Bild geschossen wurde.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src={require("./assets/img/Bitmap.png")} alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">BMP</h4>
                                        <p class="mb-0 text-white-50">Der Bitmap Dateityp hat verschiedene Versionen. Hier schauen wir uns die in meinen Augen spannenste an. Die 1-Bit monochrome Bitmap. Auf dem Bild, welches daneben steht, ist die linke Seite die Bitmap. Per Pixel wird genau 1 Bit angewendet, was bedeuted, dass das Bild nur "Pixel ist an" mit einem 1 und "Pixel ist aus" mit einem 0 definieren kann. Hier ist man sehr eingeschränkt, da man nur schwarz-weiss und ohne transparenz arbeiten kann. Diese Bilder haben aber eine sehr kleine Dateiengrösse.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </body>
    )
}