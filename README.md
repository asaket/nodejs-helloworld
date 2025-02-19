# Node.js Hello World

A simple Node.js application that serves "Hello World" on port 3000.

## Running locally

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Visit `http://localhost:3000` in your browser

## OpenShift configurations

1. Ensure to define route appropriately as below to account for port 3000 exposed by the app
```
spec:
  ports:
    - name: 8080-tcp
      protocol: TCP
      port: 8080
      targetPort: 3000
```
3. If you wish to change the app port from 3000 to something else (say 4000), set the environment variable PORT as the new value (4000) and change the targetPort also to the new value (4000) in the Service yaml as expalined in previous point.
