# Describe project

E2E framework for testing. I know that you use Protractor for E2E testing, i think because front with Angular and also Protractor default framework for Angular and he (Protractor) use Selenium, but Puppeteer which i use in this project has more advantages: more comunnity, pull request accept, has the most stars and etc..But i think soon Playwright will top, because his develop people who developed Puppeteer, now Playwright with Microsoft and this and that's not bad, also Playwright has 3 API Browsers. I also want to note Cypress, which has powerful community, with Cypress can automation also API, but it for sign page project and etc..

Сhoice of technologies depends on the requirements...))

Testing framework i choose Jest because it maintained by Facebook and works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js, and Svelte.

Also in E2E framework can add: build for any device (model: iphone X or laptop with defined by parameters) or build framework with defined for example build on JS es2015 and etc...)

# Initial dependency

Run following command

```
npm install
```
After that npm install such dependency as:
`jest, puppeteer, jest-puppeteer, babel-jest, @babel/core, @babel/preset-env, randexp`

# Perform tests

To perform test 'authorization-page-not-registered-user' you need start npm script
```
npm run test:authorization-page-not-registered-user.test
```

To perform test 'authorization-page-welcome-back' you need start npm script
```
npm run test:authorization-page-welcome-back
```