# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static web application for IP security analysis and evaluation - an IP security scoring platform that provides threat intelligence analysis, proxy/VPN detection, and geolocation verification. The application is multilingual with Chinese as the primary language and English support.

**Key Files:**
- `index.html` - Main application interface with comprehensive IP security dashboard
- `script.js` - Core application logic with IPSecurityAnalyzer class
- `style.css` - Complete UI styling with responsive design and animations  
- `i18n.js` - Internationalization system supporting multiple languages
- `help.html` - Educational content about IP security importance
- `manifest.json` - PWA configuration for offline capabilities

## Application Architecture

### Core Components

**IPSecurityAnalyzer Class (script.js)**
- Main application controller managing all security analysis workflows
- Handles IP detection, threat intelligence, proxy detection, and scoring algorithms
- Implements progressive loading with 8-step analysis pipeline
- Provides real-time security scoring with detailed debug information

**Key Methods:**
- `init()` - Application initialization and analysis orchestration  
- `runAnalysis()` - Parallel execution of security checks via Promise.all
- `calculateSecurityScore()` - Comprehensive scoring algorithm with debugging
- `analyzeThreatIntelligence()` - Multi-source threat detection using deterministic algorithms
- `detectProxy()` - VPN/proxy identification based on ISP/organization analysis
- `generateDeviceFingerprint()` - Browser fingerprinting with WebRTC detection
- `checkThreatSource()` - Individual threat intelligence source checking
- `analyzeNetworkInfo()` - DNS and network performance analysis

**I18n Class (i18n.js)**
- Multi-language support system with auto-detection
- Supports English, Chinese, Spanish, French, German, Japanese, Korean
- Fallback mechanisms and parameter replacement
- Persistent language preference storage

### Security Analysis Pipeline

The application follows a structured analysis pipeline:

1. **IP Detection** - Uses multiple fallback services (ipify.org, ipapi.co, ipgeolocation.io)
2. **Threat Intelligence** - Simulated checks against malware, spam, botnet databases
3. **Proxy Detection** - ISP/organization pattern matching for VPN/proxy identification
4. **Geographic Analysis** - Location consistency checking with timezone validation
5. **Device Fingerprinting** - Browser characteristics and WebRTC analysis
6. **Network Performance** - Latency testing and DNS analysis
7. **Security Scoring** - Multi-factor scoring with transparent debugging

### Scoring Algorithm

The scoring system is designed to be more lenient than traditional security scanners:
- Base score: 100 points
- Only genuine threats cause significant deductions
- Cloud services and hosting providers receive minimal penalties
- Geographic inconsistencies have minimal impact
- Maintains scores ≥90 for most users unless severe risks detected

## Development Commands

### Local Development
```bash
# Serve locally (no build system required)
python -m http.server 8000
# or
npx serve .
# or simply open index.html in browser
```

### Testing
```bash
# Run scoring algorithm tests
node test_scoring.js

# No automated test framework - manual testing approach:
# 1. Open browser developer tools console
# 2. Debug information is logged to console during analysis
# 3. Test by entering different IP addresses in the UI
# 4. Monitor network requests and error handling
```

### Deployment
- Static hosting compatible (Netlify, Vercel, GitHub Pages)
- Uses `_headers` for security headers and caching policies
- Uses `_redirects` for SPA routing (currently redirects all to index.html)
- No build process required - files served directly

## Multi-language Support

The application uses a custom i18n system:

**Adding New Languages:**
1. Add language to `i18n.js` translations object
2. Include in `isValidLanguage()` method
3. Add to `getAvailableLanguages()` array
4. Test fallback mechanisms

**Translation Keys:**
- Nested structure: `'card.ip.title'`
- Parameter support: `'{param}' placeholders`
- Automatic fallback to English
- Meta tag updates for SEO

## Architecture Patterns

### Async/Await Pattern
All network operations use async/await with proper error handling and timeouts. CORS limitations are gracefully handled with fallback strategies.

### Progressive Enhancement
- Core functionality works without external APIs
- Graceful degradation for network failures
- Client-side alternatives for blocked resources

### Responsive Design
- Mobile-first CSS approach
- Flexible grid system with card layouts
- Touch-friendly interfaces and animations

## API Integration Strategy

Due to browser CORS restrictions, the application:
- Uses multiple fallback IP detection services
- Implements client-side threat analysis algorithms
- Provides educational scoring rather than production security assessment
- Includes transparent debugging for user education

## Browser Compatibility

**Modern Features Used:**
- ES6+ (async/await, classes, template literals)
- Fetch API with AbortController
- WebRTC for network detection
- Intersection Observer (if implemented)
- CSS Grid and Flexbox

**Fallbacks Provided:**
- Network connectivity detection alternatives
- DNS analysis using DNS-over-HTTPS
- Performance measurement via Performance API

## Security Considerations

**Important:** This is an educational/demonstration tool, not a production security scanner. The threat intelligence uses deterministic algorithms rather than real-time feeds for:
- Privacy protection (no actual IP logging)
- Performance (client-side processing)
- Accessibility (no API keys required)

## File Organization

### Core Application
- `index.html` - Main dashboard with security analysis UI
- `script.js` - IPSecurityAnalyzer class and global functions
- `style.css` - Complete styling with animations and responsive design
- `i18n.js` - Internationalization system

### Content & Configuration
- `help.html` - Educational content about IP security
- `about.html`, `contact.html`, `privacy.html`, `terms.html` - Additional pages
- `manifest.json` - PWA configuration with shortcuts and icons
- `test_scoring.js` - Standalone scoring algorithm test suite
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine directives
- `_headers` - Netlify security headers and caching policies
- `_redirects` - SPA routing configuration

## Key Global Functions

### Entry Points
- `window.onload` - Initializes IPSecurityAnalyzer and starts analysis
- `startTest()` - Restarts the analysis process (called by retest button)
- `checkCustomIP()` - Analyzes user-specified IP address from input field
- `copyIP()` - Copies current IP address to clipboard

### UI Management
- `showDashboard(event)` - Navigation handler for main dashboard view
- `switchTab(tabName)` - Switches between different geolocation data tabs
- `startPortScan()` - Initiates client-side port scanning functionality

## Critical Implementation Notes

### Ad Integration
- Uses Google AdSense with fallback content when ads are blocked
- `showFallbackContent()` method silently displays security tips if ads fail to load
- Ad blocking detection is passive - no intrusive prompts

### Error Handling
- All network requests use try-catch with graceful fallbacks
- Multiple IP detection services prevent single point of failure
- CORS errors are anticipated and handled with alternative approaches

### Performance Considerations
- Parallel execution of analysis tasks using Promise.all
- Timeout controls on external API calls
- Progressive loading with visual feedback
- Caching strategies via _headers configuration