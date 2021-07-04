# React-Django multi-container app

An example React-Django multi container app, adapted from https://blog.logrocket.com/creating-an-app-with-react-and-django/.

## Requirements

- [Docker engine](https://docs.docker.com/engine/) (tested with Docker version 20.10.6, build 370c289)
- [Docker compose](https://docs.docker.com/compose/) (tested with docker-compose version 1.29.1, build c34c88b2)

## Test locally

This should run locally by running:

```bash
# run in a detached state
$ docker-compose up -d
```

Navigate to [localhost](http://localhost) to view the frontend page.

To shutdown and tidy up:

```bash
$ docker-compose down
```

## Deploying to Azure Container Instances 

TBC...
