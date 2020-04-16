## 🐫 3. Hello World

* Angular는 ``/root/src/app/app.module.ts``를 사용하여, 앱의 모든 모듈들을 Build한다.

* 모듈 설정방법

  ```javascript
    // /root/src/app.module.ts

    @NgModule
    @NgModule({
      declarations: [
        AppComponent,
        TestComponent
      ]
    })
    export class AppModule { }
  ```

* 실행순서 : ``main.ts`` -> ``app.module.ts`` -> ``app.component.ts`` -> ``app.component.html``