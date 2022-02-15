# Clueless Docker

### To run mongo
``` bash
docker run -itd --rm --name mongo mongo
```

### To build and run server
``` bash
cd server
docker build -t server .
```
``` bash
docker run -itd --rm --name server server
```

### To build and run client
``` bash
cd client
docker build -t client .
```
``` bash
docker run -itd --rm --name client client
```