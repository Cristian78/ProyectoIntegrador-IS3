Feature('Votación');

Scenario('Usuario accede y vota por Cats', async ({ I }) => {
  I.amOnPage('/');
  I.see('Cats');
  I.click('Cats');
  I.see('Tip: you can change your vote');
});

Scenario('Usuario accede y vota por Dogs', async ({ I }) => {
  I.amOnPage('/');
  I.see('Dogs');
  I.click('Dogs');
  I.waitForText('Tip: you can change your vote', 5);
  I.see('Tip: you can change your vote');
});
