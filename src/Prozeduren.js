import { Modal, Button } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { imagekit } from './App.js'
import Footer from "./Footer";
import Nav from "./Nav";

export default function Prozeduren() {

    const [imgUrls, setImgUrls] = useState([])
    const [show, setShow] = useState({show: false, url: ""})

    useEffect(() => {
        let urls = JSON.parse(localStorage.getItem("urls"))
        console.log(urls)
        if (urls !== null) {
            setImgUrls(urls)
        } else {
            localStorage.setItem("urls", JSON.stringify(imgUrls))
        }
    }, [])

    const upload = async (data) => {
        var files = data;
        let temp = imgUrls
        for (const file of files) {
            await imagekit.upload({
                file: file,
                fileName: "upload.jpg",
                tags: []
            }, await async function (err, result) {
                console.log(arguments);
                let icon = (await imagekit.url({
                    src: result.url,
                    transformation: [{
                        "height": "300",
                        "width": "400",
                        "format": "jpg",
                        "overlayText": "uploaded to ski page",
                        "overlayColor": "white"
                    }]
                }));
                let bigimg = (await imagekit.url({
                    src: result.url,
                    transformation: [{
                        "height": "600",
                        "width": "800",
                        "format": "jpg",
                        "overlayText": "uploaded to ski page"
                    }]
                }));
                console.log("https://ik.imagekit.io/bfs63i4bbxl/" + icon.split('/')[icon.split('/').length-1].split('?')[0])
                temp.push({icon: icon, bigimg: bigimg})
                setImgUrls([...temp])
                localStorage.setItem("urls", JSON.stringify(temp))
                console.log(temp)
            })
        }
    }

    const onDrop = useCallback(async acceptedFiles => {
        console.log(acceptedFiles)
        console.log(acceptedFiles[0])
        upload(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <body id="page-top">

            <Nav active={3} />

            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">

                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={require("./assets/img/bg-masthead-bot2.jpeg")} alt="..." /></div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Prozeduren</h4>
                                <p class="text-black-50 mb-0">Auf dieser Seite wurden die Prozeduren umgesetzt. Das Ziel dieses Abschnittes ist das hochladen und anzeigen von Bildern. Die Bilder werden in einem von imagekit angebotenem Backend gespeichert. Hier wird also das Bild vom Frontend zu einem Service und dann in eine Datenbank geschickt (die zweite Architektur im PDF).</p>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center" style={{ aspectRatio: '3/1' }}>
                        <div class="col-lg-6 prozeduren-input-box">
                            <span />
                            <span />
                            <span />
                            <span />
                            <div class="prozeduren-input-box-child">
                                <h4>Upload here</h4>
                                <div {...getRootProps()} class="file-upload">
                                    <input {...getInputProps()} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Hier die Bilder einfügen</h4>
                                        <p class="mb-0 text-white-50">Um Bilder an den Service zu schicken, kann man sie hier auswählen. Man kann entweder den Button benutzten und sie aus dem eigenen Dateien auswählen, oder per drag-and-drop die Bilder ganz einfach hier einfügen. Danach werden die ans Backend geschickt und unten aufgezeigt.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {imgUrls.map((url, i) =>
                            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center" onClick={() => setShow({show: true, url: url.bigimg})}>
                                    <div class="col-lg-6"><img class="img-fluid" src={url.icon} alt="..." style={{width: '100%'}} /></div>
                                    <div class={`col-lg-6 ${i % 2 === 0 && 'order-lg-first'}`}>
                                        <div class="bg-black text-center h-100 project">
                                            <div class="d-flex h-100">
                                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                                    <h4 class="text-white">Image #{i+1}</h4>
                                                    <p class="mb-0 text-white-50"></p>
                                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            <Modal show={show.show} onHide={() => setShow({show: false, url: ""})}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body><img src={show.url} /></Modal.Body>
                <Modal.Footer><Button variant="secondary" onClick={() => setShow({show: false, url: ""})}>Close</Button></Modal.Footer>
            </Modal>

            <Footer />

        </body>
    )
}