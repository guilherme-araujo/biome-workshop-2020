# BioME 2020 Workshop

Attempting development with a dockerized strapi backend and next.js + typescript frontend.

## Developing

Run docker-compose up. This will start next.js in development mode and start strapi.

## Production

Replace front/Dockerfile with front/Dockerfile.prod then run docker-compose up

## Troubleshooting

If changes in packages appear to have no effect in front/, try removing the anonymous docker-compose volumes.

    docker-compose rm -v

