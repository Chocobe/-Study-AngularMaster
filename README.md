# 🐫 Angular

## 🐫 개발환경

* 다음 순서대로 설치

1. Node.js 설치

    * Node 6.9.0 이상 버전으로 설치 (웹에서 다운)

    * Node 버전확인 :

        > $ node -v

    * Node.js 설치 시, NPM(Node Package Manager)도 같이 설치된다.

    * NPM 버전확인 :

        > $ npm -v

1. Typescript 설치

    * Typescript 2.1 이상 버전으로 설치되어야 한다. (전역설치)

        > $ npm install -g typescript

    * Typescript 버전확인

        > $ tsc -v

1. Angular CLI 설치

    * Angular CLI는 커맨드라인에서 프로젝트를 **생성** 및 **관리** 할 수 있는 유틸리티다. (전역설치)

        > $ npm install -g @angular/cli

    * Angular CLI 버전확인

        > $ ng --version


---


## 🐫 의존성 관리

* Angular 프로잭트는 **package.json** 과 **package-lock.json** 파일로 의존성을 관리한다.

* Angular 프로잭트를 생성 시, 자동으로 ``.gitignore`` 파일을 만들고, ``node-modules``폴더 자체를 배제한다.

* ``node_modules``를 Git에 등록하지 않아도, **package.json** 과 **package-lock.json** 파일이 있다면, 해당 의존성을 설치할 수 있다.

    > 의존성 설치 : $ npm install

* ``package.json`` : 프로잭트에 필요한 의존성과 버전 정보를 가지고 있다. (버전은 범위로 설정되어 있다.)

* ``package-lock.json`` : 의존성 모듈들의 특정버전(정확히 일치하는) 정보를 가지고 있다.

* **package.json** 과 **package-lock.json** 파일은 절대 지우지 말자.


---


## 🐫 목차

* [1장. 배포하기](https://github.com/Chocobe/-Study-AngularMaster/blob/master/angular-hello-world/README.md)