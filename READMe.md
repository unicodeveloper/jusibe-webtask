# Webtask Script for Sending SMS

A simple webtask script for sending SMS using the Jusibe SMS API Service

## End User Usage

*Go to your browser and put in this URL*
- [https://webtask.it.auth0.com/api/run/wt-prosperotemuyiwa-gmail_com-0/jusibe?phoneno=xxxxxx&message=xxxxxxx](https://webtask.it.auth0.com/api/run/wt-prosperotemuyiwa-gmail_com-0/hello?phoneno=xxxxxxxx&message=xxxxxxx)
- Replace phoneno value with a real phone number - Applicable to only Nigerian mobile numbers (airtel, etisalat, glo & MTN).
- Replace message value with a real message

### Developer Installation

1. Clone this repository: `git clone git@github.com:unicodeveloper/jusibe-webtask.git jusibe-webtask/`
2. `cd` into the jusibe-webtask folder.
3. Run `npm install`.
4. Go to [https://jusibe.com](https://jusibe.com/), register and get your public key and access token.
5. Run `wt create jusibe.js --secret accessToken=xxxxxxxxx --secret publicKey=xxxxxxxxxxx` . Make sure you have `wt-cli` installed.

