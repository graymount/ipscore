# Known Issues

## Google AdSense MRAID.js Errors

### Issue Description
You may see console errors related to `https://s0.2mdn.net/sadbundle/.../mraid.js`:
- `GET https://s0.2mdn.net/sadbundle/.../mraid.js net::ERR_ABORTED 404`
- `Refused to execute script from 'https://s0.2mdn.net/sadbundle/.../mraid.js' because its MIME type ('image/gif') is not executable`

### Cause
These errors are caused by Google's ad serving infrastructure (2mdn.net is a Google domain) trying to load Mobile Rich Media Ad Interface Definitions (MRAID) scripts. The issues occur when:
1. The ad server returns a 404 error for the script
2. The server returns the file with incorrect MIME type ('image/gif' instead of 'application/javascript')

### Impact
- No impact on site functionality
- Ads may still display correctly despite these errors
- Only affects console output

### Resolution
We've implemented error suppressors in `index.html` to prevent these third-party errors from cluttering the console. These errors are outside our control as they originate from Google's servers.

### Note for Developers
These errors are NOT bugs in our code. They are third-party issues that commonly occur with Google AdSense and can be safely ignored.