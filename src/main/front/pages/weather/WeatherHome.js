import React, { useEffect, useRef } from 'react';
import './WeatherHome.css';
import * as THREE from 'three'

function WeatherHome() {

  {/* THREE 설치하기

      npm i three
      npm install three @react-three/fiber
      npm install @react-three/drei

      react-three/fiber는 three.js를 component 기반 방식으로 사용할 수 있게 한다. 
      jsx를 가져와 캔버스 용 three.js 코드로 변환한다.
      react-three/drei는 fiber의 components들을 미리 구현해놔서 
      우리가 재사용하면 되는 패키지이다. */} 

  useEffect(() => {



    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(renderer.domElement);

    //구 
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.MeshBasicMaterial({
        color: 0x808080
      }));

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate();

  })
  return (

    <div>
      <h2>구</h2>
    </div>

  )
}

export default WeatherHome;
