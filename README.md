# spring + react
1. 스프링 프로젝트 새로 만들기
https://start.spring.io/

![image](https://github.com/user-attachments/assets/29e9bba2-f5b8-4961-b163-acc3dde2ad90)

2. 받은 프로젝트 열고 들어가면 자동으로 빌드
spring Initializer에서 Dependencies에 Spring Web 추가를 해서
= Spring Web에는 내장톰캣이 있다
= 톰캣을 따로 설치 안 해도 됨
= 서버를 따로 설치 안 해도 됨
= 실행만 누르면 localhost:8080에 뜬다는 말

3. 스프링은 메인으로 실행
   
4. 터미널에서 리액트 설치하기

cd src/main
npx create-react-app front

cd front

5. npm start로 실행

6. 확인 후 CORS 에러 방지 > Proxy 설정
도메인이 달라서 에러가 나는데...
![image](https://github.com/user-attachments/assets/6074ca88-9a01-46bf-8fd0-b1d002b0acc2)


7. front에서 axios로 데이터 back 데이터 가져오기

터미널에서 리액트 폴더로 가서
![image](https://github.com/user-attachments/assets/b71e916a-a716-484f-8bcc-7f080b433fbc)

npm install axios --save

설치 > 예시 코드 적기

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const[ hello, setHello] = useState('');
  useEffect( () => {
    axios.get('/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
  }, []);

  return (
    <div>
      백 데이터 : {hello}
    </div>
  );
}

export default App;



8. back으로 가서 컨트롤러 만들기
![image](https://github.com/user-attachments/assets/1fe1f1cd-612f-4886-b87b-b482daaa94cd)


9. 둘다 실행 시킬 필요없이 서버만키면 나오게
localhost:8080 들어가면 나오게 된다

- build.gradle 파일 맨 아래에 추가할 코드
				front 대신 폴더 이름
                                          v
                                          v
                                          v
def frontendDir = "$projectDir/src/main/front"

sourceSets {
	main {
		resources { srcDirs = ["$projectDir/src/main/resources"]
		}
	}
}

processResources { dependsOn "copyReactBuildFiles" }

task installReact(type: Exec) {
	workingDir "$frontendDir"
	inputs.dir "$frontendDir"
	group = BasePlugin.BUILD_GROUP
	if (System.getProperty('os.name').toLowerCase(Locale.ROOT).contains('windows')) {
		commandLine "npm.cmd", "audit", "fix"
		commandLine 'npm.cmd', 'install' }
	else {
		commandLine "npm", "audit", "fix" commandLine 'npm', 'install'
	}
}

task buildReact(type: Exec) {
	dependsOn "installReact"
	workingDir "$frontendDir"
	inputs.dir "$frontendDir"
	group = BasePlugin.BUILD_GROUP
	if (System.getProperty('os.name').toLowerCase(Locale.ROOT).contains('windows')) {
		commandLine "npm.cmd", "run-script", "build"
	} else {
		commandLine "npm", "run-script", "build"
	}
}

task copyReactBuildFiles(type: Copy) {
	dependsOn "buildReact"
	from "$frontendDir/build"
	into "$projectDir/src/main/resources/static"
}



10. gradle 새로고침 하면
![image](https://github.com/user-attachments/assets/16ae6b19-649e-43d7-94ee-da1db78c26c7)


- 리액트 할때 만든 파일에서 npm start로 작업을 한다. 경로 주의


Spring + react 끝










