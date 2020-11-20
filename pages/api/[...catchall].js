async function getNestJSRequestHandler() {
    // I will init the NestJS application,
    // get the `http.Server` it's running
    // and return the registered request handler.
  }
  
export default async (request, response) => {
    const handler = await getNestJSRequestHandler();
    handler(request, response);
}
  