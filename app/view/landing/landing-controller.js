'use strict';

require('./_landing.scss');

module.exports = ['$log', LandingController];

function LandingController($log) {
  $log.debug('init landingCtrl');

  // let googleAuthBase = 'https://accounts.google.com/o/oauth2/v2/auth';
  // let googleAuthResponseType = 'response_type=code';
  // let googleAuthClientID = `client_id=${__GOOGLE_CLIENT_ID__}`;
  // let googleAuthScope = 'scope=profile%20email%20openid';
  // let googleAuthRedirectURI = `redirect_uri=${__API_URL__}/api/auth/oauth_callback`;
  // let googleAuthAccessType = 'access_type=offline';
  //
  // this.googleAuthURL = `${googleAuthBase}?${googleAuthResponseType}&${googleAuthClientID}&${googleAuthScope}&${googleAuthRedirectURI}&${googleAuthAccessType}`;
  //
  // if (!__DEBUG__) this.googleAuthURL += '&prompt=consent';
  //
  // let facebookAuthBase = 'https://www.facebook.com/v2.8/dialog/oauth';
  // let facebookClientID = `client_id=${__FACEBOOK_CLIENT_ID__}`;
  // let facebookRedirectURI = `redirect_uri=${__API_URL__}/api/auth/facebook_oauth_callback`;
  // let facebookResponseType = 'response_type=code';
  // let facebookAuthScope = 'scope=public_profile%20email';
  //
  // this.facebookAuthURL = `${facebookAuthBase}?${facebookClientID}&${facebookRedirectURI}&${facebookResponseType}&${facebookAuthScope}`;

}
