

## Project setup
This app contains both backend and frontend in a single repository.
```
.
├── Readme.md
├── backend
├── docker-compose.yml
└── frontend
```
### How to run it
Clone the code repository
```
$ git clone git@github.com:abiodunjames/NodeJs-Todo-List.git
```
Navigate to the root directory.

```
$ cd NodeJs-Todo-List

```
Start the `frontend`, `backend` and `db` containers using docker-compose

```
$ docker-compose up -d 
```
Access the app from your browser at `http://localhost:8080`
