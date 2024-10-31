import gsap from 'gsap';
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
    // console.log(atmosphereFragment);


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer(
      {
        antialias: true, //사각형 없애기 그래픽 향상
        canvas: document.querySelector("canvas") //html 붙이기
      }
    );

    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);//디테일하게, 약간 선명해짐

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
          globeTexture: {
            value: new THREE.TextureLoader().load('../img/earth.jpg') //텍스쳐
          }
        }
      })
    );

    //확인
    // console.log(sphere)
    scene.add(sphere); //구 추가

    //atmosphere 만들기
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50), //radius, extends, 
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertex,
        fragmentShader: atmosphereFragment,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1);

    //추가하겠다는 설정
    scene.add(atmosphere); 

    //그룹화
    const group = new THREE.Group()
    group.add(sphere);
    scene.add(group);

    //star 추가하기
    const starGeometry = new THREE.BufferGeometry()
    const starMatrial = new THREE.PointsMaterial({
      color: 'yellow'
    })

    const starVertices = []
    for( let i = 0; i < 9999; i++){
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -(Math.random()) * 2000;
      starVertices.push(x,y,z);
    }

    console.log(starVertices);
    starGeometry.setAttribute(
      "position", 
      new THREE.Float32BufferAttribute(
        starVertices, 3),
      
      )

    const stars = new THREE.Points(starGeometry, starMatrial);
    // console.log(stars);
    scene.add(stars);

    camera.position.z = 20 //z축 시야 길이?


    //마우스 상수값 객체
    const mouse = {
      x: undefined,
      y: undefined
    }

    //움직이는 기능, 애니메이션
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.0005;
      group.rotation.y = mouse.x * 0.5; //마우스 반전류 설정
      group.rotation.x = mouse.y * 0.5;
      // gsap.to(group.rotation,{x: -mouse.y *0.5 , y:mouse.x *0.5, duration:2} )
    };
    animate();

    addEventListener("mousemove", () => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.y = (event.clientY / innerHeight) * 2 + 1;
      // console.log(mouse);
    })




    //디자인 저장할때마다 아래로 누적되는거 막기 대괄호 부분까지 
    return () => {
      document.body.removeChild(renderer.domElement);
    }
  }, []); // 빈 의존성 배열로 컴포넌트가 마운트될 때만 실행)

  useEffect(() => {


  })


  //여기에 만들것
  //1. UI/UX 디자인 그림


  return (

    <div>
      <header>구</header>
      <nav>menu</nav>
      <main className='flex'>
        <div>apple</div>
        <canvas>캔버스123</canvas>
        <section>섹션1</section>
      </main>
    </div>

  )
}

export default WeatherHome;
