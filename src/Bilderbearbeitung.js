import Nav from "./Nav"
import Footer from "./Footer"
import { Modal } from "react-bootstrap";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import React, { useState } from "react";

var opacityOn = 0

export default function Bilderbearbeitung() {
    const FIRST_IMAGE = {
        imageUrl: require("./assets/img/Retouche.jpg")
    };
    const SECOND_IMAGE = {
        imageUrl: require("./assets/img/RetoucheUnedited.jpeg")
    };
    const [filter] = useState(React.createRef())
    const [show, setShow] = useState(false)

    const clickHandler = () => {
        filter.current.style.opacity = 100 * (opacityOn % 2)
        opacityOn++;
    }

    return (
        <body id="page-top">

            <Nav active={2} />

            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">

                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center" style={{ "marginTop": "1.1em" }}>
                        <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={require("./assets/img/bg-masthead-bot3.jpeg")} alt="..." /></div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Bilderbearbeitung</h4>
                                <p class="text-black-50 mb-0">Dieser Abschnitt zeigt verschiedene Möglichkeiten Bilder zu bearbeiten und schöner oder weniger schön zu machen. Es sind jeweils Techniken und dann dazu eine kurze erklärung. Diese Bilder wurden grösstenteils in Photoshop bearbeitet. Hier wurden die Inhalte meist Animiert implementiert, damit der User besser sieht was gemacht wurde.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6 unschaerfeBearbeitung"><img class="img-fluid" src={require("./assets/img/Unschärfe2.jpg")} alt="..." /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Unschärfe</h4>
                                        <p class="mb-0 text-white-50">Bei Bildern kann man unschärfe einfügen, sodass das Bild an bestimmten Orten verschwommen wird. Gleich wie bei der Fotografie und dessen Tiefenschärfe kann es dem Bild realität geben. Hier ist es aber künstlich gemacht, anstatt schon beim Moment der Aufnahme, womit es unterschiedlich ist. <br /> Beim Hovern über das Bild wird das Original angezeigt. </p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6">
                            <ReactBeforeSliderComponent style={{ "width": "100%" }}
                                firstImage={FIRST_IMAGE}
                                secondImage={SECOND_IMAGE}
                            />
                        </div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Retouche</h4>
                                        <p class="mb-0 text-white-50">Man kann auf Photoshop mit <kbd>J</kbd> auf der Tastatur das Retouche Werkzeug auswählen. Dort editiert das Werkzeug automatisch Sachen raus, indem es die Pixel ersetzt mit anderen Pixeln, welche rundherum sind. Auf meinem Bild hat es vom Original zum neuen Bild 5 Unterschiede. Kannst du sie alle finden? <br /> Hier wurde das Bild mit einem 20/20 eingefügt, sodass man mit dem Slider einfach das neue Bild sehen kann.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-12 abwedelnImageNoScroll"><img class="img-fluid" src={require("./assets/img/Abwedeln.jpg")} alt="..." style={{"opacity": "0"}}/></div>
                        <div class="col-lg-12">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Abwedeln</h4>
                                        <p class="mb-0 text-white-50">Das abwedeln eines Bildes ist sehr einfach. Man wählt auf <kbd>O</kbd> das nötige Werkzeug aus. Dann muss man damit nur über die Bereiche gehen, welche man aufhellen will. Hier hellte ich das Titelbild ein bisschen auf. <br /> Die animierte implementation hier ist, dass sich das Bild mit dem Bildschirm mitbewegt.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center" >
                        <div class="col-lg-6 backgroundImageUse2">
                            <img class="img-fluid" src={require("./assets/img/Filter.png")} style={{ "width": "100%", "height": "100%" }} ref={filter} onClick={() => clickHandler()}/>
                        </div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Filter</h4>
                                        <p class="mb-0 text-white-50">Auf Photoshop kann man in der Menuleiste unter der Filtergalerie bestimmte Filter auf Bilder anwenden. Alternativ kann man mit <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>F</kbd> in die Filtergalerie gehen und sich dort einen aussuchen. <br /> Hier habe ich das Bild so animiert, dass man beim darauf drücken des Bildes das Originelle sieht.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6 backgroundImageUse3">
                            <div>
                                <img class="img-fluid" src={require("./assets/img/Einfügen.png")} alt="..." style={{ "width": "100%" }} />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Einfügen von Elementen</h4>
                                        <p class="mb-0 text-white-50">Auf Photoshop kann man auf Bildern bestimmte Elemente einfügen. Das macht man, indem man einen Ausschnitt eines Bildes von irgendwo anders nimmt und diesen auf das neue Bild tut. Das kann Photoshop sehr gut. <br/> Hier kann man beim Bild hovern, um den Effekt auszulösen. Als erstes geht es auf schwarz, dann geht es zum neuen Bild rüber.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6" onClick={() => setShow(true)}><img style={{ "width": "100%" }} class="img-fluid" src={require("./assets/img/Qualität.png")} alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Bildqualität</h4>
                                        <p class="mb-0 text-white-50">Bei diesem Bild wurde die Qualität angepasst. Obwohl das kleine Icon eine tiefe Qualität hat, ist die Modal Version in hoher Qualität. Das wurde so gemacht, dass ich auf Photoshop die Qualität des Icons tiefer gesetzt habe, aber dann der Modal eine höhere Bildqualität hat. <br/> Als Animation wurde hier ein Modal von Bootstrap verwendet. Wenn man auf das Bild clickt, wird es im Modal angezeigt.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6 farbkorrekturBearbeitung"><img class="img-fluid" src={require("./assets/img/Farbkorrektur.png")} alt="..."  /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Farbkorrektur</h4>
                                        <p class="mb-0 text-white-50">In Photoshop kann man auch auf Bildern eine Farbkorrektur einfügen. Für diese geht man unter "Korrekturen" auf "Farbmixer" und wählt diesen aus. Dort kann man mit den Farben herumspielen. Ich machte das Bild ein bisschen röter. <br/> Wenn man hier hovert, verschwindet die editierte Version einfach, um das neue Bild zu zeigen.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Header closeButton />
                <Modal.Body style={{"width": "90vw"}}>
                    <img src={require('./assets/img/QualitätUneditiert.jpeg')} style={{"width": "72vw"}}/>
                </Modal.Body>
            </Modal>

            <Footer />

        </body>
    )
}