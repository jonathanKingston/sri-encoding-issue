# SRI encoding issue

When using OpenSSL or sri-toolbox there appears to be no issue parsing the code procided by moment.js however Chrome seems to have an issue (Other people have reported this to me however not sure all the version numbers yet).


## Reproduction steps

- npm install
- node index.js
- go to: localhost:3000
- go to: localhost:3000/part (This is a cut down script with the offending chars)

## Other offending files

parser.js in this directory has created these files (Not always valid JS however the integrity checks are what we care about) this is produced by spliting up moment.js

- Single chars (no issues here)
  - go to: localhost:3000/out.html
- Two chars (see logs)
  - go to: localhost:3000/out1-0.html
  - go to: localhost:3000/out1-1.html


## Offending files

- public/moment.js (Whole moment.js with locales)
- public/part2.js (Isolated character that is causing an issue in moment.js)

## Confirmed browsers

- Chrome Linux 46.0.2478.0 dev 
