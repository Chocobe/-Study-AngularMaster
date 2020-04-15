# 🐫 배포하기


## 🐫 now 호스팅

* 호스팅을 위한 작업순서

  1. ``타입스크립트 -> 자바스크립트`` **컴파일**

  1. 모든 자바스크립트를 파일로 묶는 **bundle**

    * ``$ ng build --prod``

    * ``$ ng build --prod --base-href /``

    * 작업 완료 시, ``dist``폴더가 생성된다.

  1. 자바스크립트, HTML, CSS, 이미지를 서버로 **업로드**

    * [zeit.co](https://zeit.co) 의 **now** 를 이용

    * ``$ npm install -g now``

    * 업로드를 위해, ``/dist/프로잭트폴더`` 경로에서 명령을 실행한다.

    * ``$ now``

    * 호스팅 결과는 ``zeit.co``에서 볼 수 있다.