varying vec2 vertexUV;
varying vec3 vertexNormal;

void main(){
  vertexUV=uv;
  //vertexNormal = normal;
  
  vertexNormal = normalize(normalMatrix * normal); // 법선 벡터를 정규화, 이거 안하면 뒷지구 하애짐

  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
  
}

// gl_Position=vec4(position,1);//[1, 0, 0, 1]; // x y z w 축

// matrix = [
  //   -1, 0, 0,
  //    0, 1, 0,
//     1, 0, 0]

//You may need an appropriate loader to handle this file type,
//currently no loaders are configured to process this file.
//See https://webpack.js.org/concepts#loaders
//Import trace for requested module:
// ./src/shaders/vertex.glsl 이런거 뜨면 설치해야됨

// npm install raw-loader --save-dev

// attribute vec3 position;
// x=1
// y=0
// z=0

