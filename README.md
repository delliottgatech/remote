# remote

### Development Server

Run `npm install`.
Run `npm run start`. Navigate to `http://localhost:4201/`. Ensure remote project is running as a standalone.

The error stems from line 31 of `src/services/cesium.service.ts` from the `animations : true`. If you switch animations to false, Firefox browser will render. 

Cesium globe works as intended in Chrome or Edge browsers, but fails to render in Firefox when viewing the remote globe viewer.