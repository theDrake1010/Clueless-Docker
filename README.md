# Clueless Docker

### To run mongo
``` bash
docker run -itd -p 27017:27017 --rm --name mongo mongo
```

### To build and run server
``` bash
cd server
docker build -t server .
```
``` bash
docker run -itd -p 3000:3000 -e MONGO_URL=<constr for mongo> --rm --name server server
```

### To build and run client
``` bash
cd client
docker build -t client .
```
``` bash
docker run -itd --rm --name client client
```