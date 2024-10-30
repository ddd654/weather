uniform sampler2D globeTexture;
varying vec2 vertexUV; // [0, 0.24] 이렇게 바꿔준다
varying vec3 vertexNormal;

void main(){
  // gl_FragColortexture2D(globeTexture, vectorUV);
  // gl_FragColor = texture2D(globeTexture, vertexUV);//텍스쳐 이걸로 넣기
  // gl_FragColor = vec4(0.8392, 1.0, 0.8392, 1.0); 색 넣어보기

  float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));

  vec3 atmosphere = vec3(0.0941, 0.1333, 0.1882) + pow(intensity, 1.5);

  gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);


}