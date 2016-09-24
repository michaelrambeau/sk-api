# sk-api: the REST API used by sk-student-dashboard project

This is a very simple mock API made with [feathersJS](http://feathersjs.com/)

### Develop

To start the local web server:

```
npm start
```

Then go to:

* http://localhost:3030/questions/token1 to fetch questions for `token1`
* http://localhost:3030/questions/token2 to fetch questions for `token2`

### Deploy

To deploy to https://zeit.co/now

```
npm run deploy
```
