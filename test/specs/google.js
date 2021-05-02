describe('Google page', () => {
    beforeAll('open browser', () => {
        return browser.url('https://google.com');
    });

    it('test open google and check title', () => {
        browser.pause(1000);
        expect(browser.getTitle()).toMatch('Google');
    })

    it('test search wikipedia and click on first result', () => {
        const element = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        element.setValue('Wikipedia');
        browser.keys("\uE007");
        browser.pause(2000);

        const firstElement = $('#rso > div:nth-child(1) > div > div > div > div.yuRUbf > a');
        firstElement.click();
        browser.pause(2000);
    })

    it('test open wikipedia and check title', () => {
        browser.pause(1000);
        expect(browser.getTitle()).toMatch('Wikipedia, la enciclopedia libre');
        browser.pause(1000)
    })
})