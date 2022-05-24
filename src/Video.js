import { Modal, Button } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { imagekit } from './App.js'
import Footer from "./Footer";
import Nav from "./Nav";

export default function Video() {
    return (
        <body id="page-top">

            <Nav active={3} />

            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">

                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={require("./assets/img/bg-masthead-bot2.jpeg")} alt="..." /></div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Video</h4>
                                <p class="text-black-50 mb-0">Auf dieser Seite wurde das Video eingebettet. Ich erledigte das mit YouTube, doch man kann es auch als iframe oder als Video einfügen.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center" style={{ aspectRatio: '3/1' }}>
                        <div class="col-lg-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/B7MxXfnNIDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                    </div>
                </div>
            </section>

            <Footer />

        </body>
    )
}