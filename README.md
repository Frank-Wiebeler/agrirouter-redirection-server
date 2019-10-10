# Example for using the agrirouter redirect URL to handle multiple environments



## Setup in agrirouter

Add a redirect URL to your application: 

![image](./images/config.png "Image")

This URL should point to your redirection microservice.

Configure all Extensions by changing the variable "config" in index.json.

## Setup the redirect microservice 

* Implement the specific extensions to use for the redirection in your source code
* Make sure, you encode the full url including the http:// for your redirect_uri and add the extension.

Example:

Your server URL: http://dev4ag.com:3000/

Extension: prod

Authorization URL: .....&redirect_uri=http%3A%2F%2Fdev4ag.com%3A3000%2Fprod

## How it works

When you call the Authoriation URL, agrirouter will redirect you to your redirection server. This server then checks the extension you added to the URL and redirects you again to a free configurable URL, including the full GET Queue received from agrirouter.

## Important

The docker project is not yet tested!