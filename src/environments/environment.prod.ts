// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram3 by Samuel NZAYISENGA',
  //apiHost: 'http://localhost:8080/api/v0'
  //LOCAL HOST REPLACED WITH Exteral IP of ReverseProxy optained after deployment K8s
  //=================================================================================
  apiHost: 'http://a28fe6b686b5c4535a061dc254b602dd-1316197606.us-west-2.elb.amazonaws.com:8080/api/v0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
