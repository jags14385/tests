npm install -g typescript
npm install -g tslint

- the jamsine.json has to be in the that particular folder structure 
i.e spec/support/jasmine.json

Navigate into folder where package.json is present
Linting :
- tslint -p . -c tslint.json --fix

- To run the spec
npm test or npm t

ToDO
[]  use npm scripts 
[x] use jasmine.json 
[] use env variables