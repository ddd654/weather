import React, { useEffect, useRef } from 'react';
import './WeatherHome.css';
import * as THREE from 'three'
import vertexShader from '../../shaders/vertex.glsl';
import fragmentShader from '../../shaders/fragment.glsl';

import atmosphereFragment from '../../shaders/atmosphereFragment.glsl';
import atmosphereVertex from '../../shaders/atmosphereVertex.glsl';

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

    // console.log(vertexShader);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer(
      {
        antialias: true //사각형 없애기 그래픽 향상
      }
    );

    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);//디테일하게 된다, 약간 선명해짐

    let bgColor = 'yellow';
    let opacity = 0.1;
    renderer.setClearColor(bgColor, opacity);

    document.body.appendChild(renderer.domElement);

    //구 
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50), //radius, extends, 

      // new THREE.MeshBasicMaterial({
      // color: 'gray',
      //3. 텍스쳐
      // map: new THREE.TextureLoader().load('../img/earth.jpg')
      // //뭔가 인식이 안되는지 public 폴더 만들어서 넣음
      // }),

      //glsl 넣고
      new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
          globeTexture:{
            value:new THREE.TextureLoader().load('../img/earth.jpg') //텍스쳐
          }
        }
      })
    );

    //확인
    // console.log(sphere)
    scene.add(sphere); //구 추가

    //atmosphere
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50), //radius, extends, 
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertex,
        fragmentShader: atmosphereFragment,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1)

    //추가 설정
    scene.add(atmosphere); /////////////////////////여기부터

    camera.position.z = 20 //z축 시야 길이?

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate();

    //디자인 저장할때마다 아래로 누적되는거 막기 대괄호 부분까지 
    return () => {
      document.body.removeChild(renderer.domElement);
    }
  }, []); // 빈 의존성 배열로 컴포넌트가 마운트될 때만 실행)

  useEffect(() => {


  })


  //여기에 구
  return (

    <div>
      <header>구</header>
      <nav>menu</nav>
      <main>

        <section>섹션1</section>
      </main>
    </div>

  )
}

export default WeatherHome;
