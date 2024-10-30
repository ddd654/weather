varying vec3 vertexNormal; // 0, 0, 0

void main(){
  // float intensity = pow(0.7 - dot(vertexNormal, vec3(1.0, 0.2392, 0.9373)), 2.0);
  // gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) + intensity;

  vertexNormal = normalize(normalMatrix * normal); // 법선 벡터를 정규화
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}


