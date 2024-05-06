import React from 'react'
import "./Text.css";
import { useState } from 'react';
function Text() {
    const [languages, setLanguages] = useState(["Java",])
    return (
        <>
            <div class="container-fluid text-center">
                <div class="row text">
                    <div class="col-lg-4 col-md-6 col-sm-10 input-box">
                        <select class="form-select form-select-lg mb-3">
                            {languages.map((lang, index) => {
                                return (
                                    <option value={lang} key={index}><a class="dropdown-item" href="#">{lang}</a></option>
                                );
                            })}
                        </select>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="" id="floatingTextarea2" style={{height: 350}}></textarea>
                            <label for="floatingTextarea2">Input</label>
                        </div>
                    </div>
                    
                

                    <div class="col-lg-4 col-md-6 col-sm-10 output-box">
                        <select class="form-select form-select-lg mb-3" >
                            {languages.map((lang, index) => {
                                return (
                                    <option value={lang} key={index}><a class="dropdown-item" href="#">{lang}</a></option>
                                );
                            })}
                        </select>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="" style={{height: 350}}></textarea>
                            <label for="floatingTextarea2">Output</label>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Text