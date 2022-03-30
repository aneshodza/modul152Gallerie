import Nav from "./Nav"
import Footer from "./Footer"
import { Image, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function Fotografie() {
    const [unschärfe] = useState(require("./assets/img/Unschärfe.jpeg"))
    return (
        <body id="page-top">

            <Nav active={1} />

            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">

                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center" style={{ "marginTop": "1.1em" }}>
                        <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={require("./assets/img/bg-masthead-bot.jpeg")} alt="..." /></div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Fotografie</h4>
                                <p class="text-black-50 mb-0">Hier befassen wir uns mit verschiedenen Techniken und Einstellungen beim erstellen von Bildern. Diese Inhalte wurden grösstenteils statisch implementiert. Wie die Inhalte eingebunden wurden, steht jeweils im Text zum Bild.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src={require("./assets/img/GoldenerSchnitt.jpeg")} alt="..." /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Der Goldene Schnitt</h4>
                                        <p class="mb-0 text-white-50">Der Goldene Schnitt ist eine Mathematische Konstante, welche den Wert 1.618... trägt. Sie wird oft in der Architektur und so weiter verwendet, da wir Menschen das Verhältnis schön finden. In diesem Bild sind die Berge ungefähr 1.618 Mal grösser als der Himmel. <br />Hier wurde das Bild standartmässig mit einem statischen img Tag eingebettet.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><Image style={{ "width": "100%" }} class="img-fluid" src={require("./assets/img/1zu3.png")} alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">1/3</h4>
                                        <p class="mb-0 text-white-50">Das 1/3 Verhältnis ist eine Technik beim Fotografieren, wo man das Bild in Rechtecken einteilt, welche alle jeweils einen drittel der Höhe und der Breite einnehmen. Wenn man dann Objekte auf diesen Linien plaziert, sollen die das Bild spannender aussehen lassen. Hier plazierte ich meinen Vater einen drittel weg vom Bildrand. <br /> Dieses Bild wurde mit einem Bootstrap Image Tag statisch importiert.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6">
                            <Carousel style={{ "height": '100%', "width": "100%" }}>
                                <Carousel.Item>
                                    <img class="img-fluid" src={require("./assets/img/ISO60.jpeg")} alt="..." style={{ "height": '100%', "width": "100%" }} />
                                    <Carousel.Caption>
                                        <p style={{ "color": "red", "fontWeight": "bold" }}>ISO 100</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img class="img-fluid" src={require("./assets/img/ISO130.jpeg")} alt="..." style={{ "height": '100%', "width": "100%" }} />
                                    <Carousel.Caption>
                                        <p style={{ "color": "red", "fontWeight": "bold" }}>ISO 175</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img class="img-fluid" src={require("./assets/img/ISO300.jpeg")} alt="..." style={{ "height": '100%', "width": "100%" }} />
                                    <Carousel.Caption>
                                        <p style={{ "color": "red", "fontWeight": "bold" }}>ISO 350</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">ISO</h4>
                                        <p class="mb-0 text-white-50">Der ISO-Wert ist eine Messung dazu, wie sensitiv eine Kamera auf Licht ist. Standartmässig liegt dieser Wert bei 100 bis 150 (auf meiner Handy-Kamera). Wenn man den Wert erhöht, wird das Bild heller. Die ISO einstellung auf diesen Bildern ist wie folgt: 75, 125, 250. <br /> Diese Bilder wurden animiert mit einem Carousel und so auch implementiert. Das wurde von Bootstrap bereits als Komponente gegeben.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center" >
                        <div class="col-lg-6">
                        <div class="img-fluid backgroundImageUse" style={{ "width": "100%", "height": "100%"}} />
                        </div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Objektiv</h4>
                                        <p class="mb-0 text-white-50">Das Objekt im Bilder machen, sind die Elemente, welche auf das Bild kommen. Man entscheidet sich zum Beispiel noch einen Baum auf das Foto zu bringen, oder eine Wolke extra auszulassen, damit es besser aussieht. Das Objektiv gibt dem Bild die Bedeutung und die Aussage. Man muss immer mit bedacht wählen, was auf ein Bild kommt und was nicht. Hier ist das Startbild dieser Seite, doch ohne die Berghütten. Es gibt direkt ein ganz anderes Gefühl. <br/> Dieses Bild wurde statisch als Hintergrund eingefügt, anstatt als img Tag.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src={unschärfe} alt="..." style={{ "width": "100%"}} /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Tiefenschärfe</h4>
                                        <p class="mb-0 text-white-50">Die Tiefenschärfe bei Bildern bedeutet, dass auf einem Bild die Verschiedenen Tiefen verschieden Schaft fotografiert wurden. Auf diesem Bild zum Beispiel, ist das Snowboard im Vordergrund sehr schaft, während der Hintergrund extra ein bisschen verschwommen ist. Das macht man manchmal, um dem Bild eine bestimmte Realität zu geben, da unsere Augen das auch machen. Hier benutze ich eine Tiefenschärfe von 1.5F. <br/> Hier importierte ich das statische Bild mit einer URL.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img style={{ "width": "100%" }} class="img-fluid" src={require("./assets/img/Bewegungsschärfe.jpeg")} alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Bewegungsschärfe</h4>
                                        <p class="mb-0 text-white-50">Die Bewegungsschärfe oder Belichtungszeit bestimmt wie lange das Licht auf den Bildsensor fällt. Damit wird das Bild scharf oder weniger Scharf. Desto kleiner die Belichtungszeit, desto schärfer wird das Bild. Sie wird mit Sekunden angegeben. Auf diesem Bild benutzte ich eine Belichtungszeit von 1/17s. Die Zahl sagt aber nicht oft etwas aus, da die Bewegungsgeschwindigkeit auch wichtig ist bei diesen Art von Bildern. <br/> Dieses Bild wurde wieder wie das Oberste einfach statisch mit einem img Tag eingefügt.</p>
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