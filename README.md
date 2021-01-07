# BioME 2020 Workshop

Attempting development with a dockerized strapi backend and next.js + typescript frontend.

## Developing

Run docker-compose up. This will start next.js in development mode and start strapi.

## Production

Run docker-compose up in strapi/, then after it is runnung, run docker-compose up in front/. This will make sure content is pulled by next.js in the front-end correctly.

## Troubleshooting

If changes in packages appear to have no effect in front/, try removing the anonymous docker-compose volumes.

    docker-compose rm -v

