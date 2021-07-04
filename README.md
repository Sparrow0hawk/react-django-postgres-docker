# React-Django multi-container app

An example React-Django multi container app, adapted from https://blog.logrocket.com/creating-an-app-with-react-and-django/.

The app is a React frontend that makes API calls to a Django backend (using a Postgres database). 
NGINX is used to serve the application and reverse-proxy calls to the backend.

## Requirements

- [Docker engine](https://docs.docker.com/engine/) (tested with Docker version 20.10.6, build 370c289)
- [Docker compose](https://docs.docker.com/compose/) (tested with docker-compose version 1.29.1, build c34c88b2)

## Test locally

### Environment setup

For the docker-compose and the backend to run properly you need to include a `.env` file within the [backend](./backend) directory. 
This utilises both the [docker-compose environment variables syntax](https://docs.docker.com/compose/environment-variables/#substitute-environment-variables-in-compose-files) and for the backend, the python package [`decouple`](https://pypi.org/project/python-decouple/), for handling repository secrets.

You will need to make a `backend/.env` file with the following pattern:

```
SECRET_KEY=something-very-secret
DEBUG=True
DB_NAME=djang_djang 
DB_USER=django
DB_PASSWORD=django
DB_HOST=db
```

For hints on creating an appropriate django secret key see [this blog post](https://humberto.io/blog/tldr-generate-django-secret-key/).

Once the `backend/.env` file has been created you can run this locally using the command:

```bash
# run in a detached state
$ docker-compose up -d --env-file backend/.env
```

Navigate to [localhost](http://localhost) to view the frontend page.

To shutdown and tidy up:

```bash
$ docker-compose down
```

## Deploying to Azure Container Instances 

TBC...
