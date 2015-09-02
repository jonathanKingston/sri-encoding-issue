# SRI encoding issue

When using OpenSSL or sri-toolbox there appears to be no issue parsing the code procided by moment.js however Chrome seems to have an issue (Other people have reported this to me however not sure all the version numbers yet).


## Reproduction steps

- npm install
- go to: localhost:3000
- go to: localhost:3000/part (This is a cut down script with the offending chars)


## Confirmed browsers

- Chrome Linux 46.0.2478.0 dev 
