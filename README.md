# Setup

1) yarn install

# Reproduction

1) yarn start:dev
2) open new terminal
3) curl -d '{"hello":"world"}' -H "Content-Type: application/json" -X POST http://localhost:3000/external/test
4) see response(empty) that return request body.

5) change `app.setGlobalPrefix('v1', { exclude: ['external/([^\\s]+)'], });` to `app.setGlobalPrefix('v1');` on `main.ts`.
6) curl -d '{"hello":"world"}' -H "Content-Type: application/json" -X POST http://localhost:3000/v1/external/test
7) see response(filled) that return request body.
