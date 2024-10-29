varying vec3 vertexNormal; // 0, 0, 0

void main(){
  float intensity = pow(0.9 - dot(vertexNormal, vec3(1.0, 0.2471, 0.2471)), 2.0);
  gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) + intensity;
}


