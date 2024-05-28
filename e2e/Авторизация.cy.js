describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
    
        cy.get('#mail').type('german@dolnikov.ru'); //Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввела верный пароль
        cy.get('#loginButton').click();//Нажала войти

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Виден верный текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Видна кнопка крестик
})
it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/');//Зашла на сайт
    
    cy.get('#forgotEmailButton').click();//Нажала кнопку восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru');//Ввела мэйл

    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Получила верный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Кнопка крестик видима
})
it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/');

    cy.get('#mail').type('german@dolnikov.ru');//Ввела верный логин
    cy.get('#pass').type('iLoveqastudio8');//Ввела неверный пароль
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//Получила верный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Кнопкакрестик видна
})
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');

    cy.get('#mail').type('german@dolnikov23.ru');//Ввела неверный логин
    cy.get('#pass').type('iLoveqastudio1');//Ввела верный пароль
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//Получила верный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Кнопкакрестик видна
})
it('Валидация на наличие @', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');//Ввести логин без @
    cy.get('#pass').type('iLoveqastudio');//Ввести верный пароль
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Получаю верный текст
})
it('Строчные буквы', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');//Ввести логин со строчными буквами
    cy.get('#pass').type('iLoveqastudio');//Ввести верный пароль
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');//Получаю верный текст
cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Кнопкакрестик видна
})
    })