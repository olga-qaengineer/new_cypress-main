describe('Кейс авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //нашли и ввели правильный логин
        cy.get('#pass').type('qa_one_love1');//нашли и ввели правильный пароль
        cy.get('#loginButton').click(); //нашли и нажали на вход
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю что после автор вижу текст
        cy.get('#messageHeader').should('be.visible') //текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть кнопка крестика


    })
    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').click(); //нашли и нажали кнопку забыли пароль
        cy.get('#mailForgot').type('qaengineer@dolnikov.ru'); //нашли и ввели в инпут мыло
        cy.get('#restoreEmailButton').click(); //нашли и нажали отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка что пришел ответ
        cy.get('#messageHeader').should('be.visible'); //ответ виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть кнопка крестика


    })
    it('Негативная проверка пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //нашли и ввели правильный логин
        cy.get('#pass').type('qa_true_love1');//нашли и ввели НЕправильный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверка что пришел нужный ответ
        cy.get('#messageHeader').should('be.visible'); //ответ виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть кнопка крестика
    })

    it('Негативная проверка логин', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('qaengineer@dolnikov.ru'); //нашли и ввели НЕправильный логин
        cy.get('#pass').type('qa_one_love1');//нашли и ввели правильный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверка что пришел нужный ответ
        cy.get('#messageHeader').should('be.visible'); //ответ виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть кнопка крестика
    })


    it('Негативная проверка валидация', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //нашли и ввели мыло без @
        cy.get('#pass').type('qa_one_love1');//нашли и ввели правильный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверка что пришел нужный ответ
        cy.get('#messageHeader').should('be.visible'); //ответ виден пользователям
        
    })


    it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //нашли и ввели мыло с заглавными
        cy.get('#pass').type('qa_one_love1');//нашли и ввели правильный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверка что пришел текст из доки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть кнопка крестика
        
    })

})




