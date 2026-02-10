describe('Проверка покупки нового аватара', function () {
    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/'); //заходим на сайт
         cy.get('#k_email').type('olyaboyarock@yandex.ru'); //вводим логин
         cy.get('#k_password').type('MyMimi1'); //вводим пароль
         cy.get('.MuiButton-root').click(); //нажимаем кнопку войти
         cy.wait(2000);
         cy.get('.header_card_trainer').click(); //клик на аву тренера
         cy.wait(2000);
         cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click(); //нажимаем кнопку Смена аватара
         cy.wait(2000);
         cy.get('.available > .shop__button').first().click(); //кликаем купить
         cy.get('.card_number').type('4620869113632996'); //вводим номер карты
         cy.get('.card_csv').type('125'); //вводим CVV карты
         cy.get('.card_date').type('1226'); //вводим срок действия карты
         cy.get('.card_name').type('NAME'); //вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456'); //вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible'); //проверяем видимость сообщения об успешной покупке


     });
 });
