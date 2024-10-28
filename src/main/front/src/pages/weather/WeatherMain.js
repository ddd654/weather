import React, { useEffect } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function WeatherMain() {

  //연습용
  useEffect(() => {
    //장면, 랜더링이 필요하다
    let scene = new THREE.Scene();
    //Scene.add() //장면에 넣기 () 안쪽꺼를

    let renderer = new THREE.WebGLRenderer(//엔진
      {
        //어디에 보여줄까
        canvas: document.querySelector('.canvas')
      }
    );
    //그림 넣기 2d
    let loader = new GLTFLoader();
    loader.load('../cartoon_bird/scene.gltf');

    renderer.render(scene)

  })


  return (
    <>
      날씨메인
      <canvas className="canvas" width={300} height={300}></canvas>
    </>
  )
}


export default WeatherMain;

