# Excercise 1.1: Log output

Generates a random string at startup and prints it every 5 seconds with a timestamp.

## Build
```bash
docker build -t log-output:1.1 .

k3d image import log-output:1.1 -c CLUSTER_NAME

kubectl apply -f k8s/deployment.yaml

kubectl get pods -l app=log-output
kubectl logs -f <POD_NAME>


