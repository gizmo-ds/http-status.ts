# http-status

`http-status` is a lightweight library providing HTTP status code enumerations for TypeScript and JavaScript projects. It is designed to offer a simple, intuitive, and type-safe way to handle HTTP status codes, enhancing code readability and maintainability.

## Usage Example

Here’s how you can use the `http-status` package in your projects:

```typescript
import { HttpStatus } from "./status";

function handler(request) {
  return new Response("Hello world!", {
    status: HttpStatus.OK,
    statusText: HttpStatus.OKText,
  });
}
```
