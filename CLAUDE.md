# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static web application for IP security analysis and evaluation - an IP security scoring platform that provides threat intelligence analysis, proxy/VPN detection, and geolocation verification.

**Key Files:**
- `index.html` - Main application interface with comprehensive IP security dashboard
- `script.js` - Core application logic with IPSecurityAnalyzer class (932 lines)
- `style.css` - Complete UI styling with responsive design and animations
- `manifest.json` - PWA configuration for offline capabilities

## Application Architecture

### Core Components

**IPSecurityAnalyzer Class (script.js:1-932)**
- Main application controller managing all security analysis workflows
- Handles IP detection, threat intelligence, proxy detection, and scoring algorithms
- Implements progressive loading with 8-step analysis pipeline
- Provides real-time security scoring with detailed debug information

**Key Methods:**
- `init()` - Application initialization and analysis orchestration
- `runAnalysis()` - Parallel execution of security checks
- `calculateSecurityScore()` - Comprehensive scoring algorithm (375-459)
- `analyzeThreatIntelligence()` - Multi-source threat detection
- `detectProxy()` - VPN/proxy identification logic
- `generateDeviceFingerprint()` - Browser fingerprinting analysis

### Security Analysis Features

1. **Threat Intelligence Detection** - Checks multiple databases for malware, spam, botnets
2. **Proxy/VPN Detection** - Identifies hosting providers, cloud services, and anonymization tools
3. **Geolocation Analysis** - Validates IP location consistency and timezone matching
4. **Device Fingerprinting** - Browser characteristics and WebRTC detection
5. **Network Performance Testing** - Latency measurement and DNS analysis
6. **Port Scanning Simulation** - Service availability testing (limited by browser security)

### UI Components

- **Loading Animation** - Multi-step progress indicator with rotating scanner
- **Dashboard Cards** - Modular layout for different analysis results
- **Real-time Updates** - Progressive result population with animations
- **Responsive Design** - Mobile-optimized interface with breakpoints
- **Debug Panel** - Detailed scoring breakdown for transparency

## Development Notes

### No Build System
This is a vanilla HTML/CSS/JavaScript application with no build tools, package managers, or dependencies. Files can be edited directly and served statically.

### Deployment Configuration
- `_headers` - Security headers and caching rules for Netlify deployment
- `_redirects` - URL redirect rules for SPA routing
- `sitemap.xml` - SEO sitemap with main application routes
- `robots.txt` - Search engine crawling instructions

### Browser Compatibility
- Uses modern JavaScript features (async/await, fetch API, WebRTC)
- Includes fallbacks for network detection and DNS analysis
- Progressive enhancement for advanced features

### API Integration Points
The application attempts to use external IP geolocation services but includes fallback logic for offline operation. CORS limitations are handled gracefully with client-side alternatives.

### Security Considerations
While this appears to be a security analysis tool, the actual threat detection logic uses deterministic algorithms rather than real threat intelligence feeds, making it more of a demonstration/educational tool than a production security scanner.

## SEO and Performance Features

### SEO Optimization
- Comprehensive meta tags with Chinese language support
- Open Graph and Twitter Card integration
- Structured data using JSON-LD for rich snippets
- Semantic HTML structure with proper heading hierarchy
- Sitemap and robots.txt for search engine indexing

### PWA Features
- Service worker ready with manifest.json
- Offline capability through static file caching
- Mobile-responsive design with touch-friendly interfaces
- App shortcuts for quick access to main features

### Performance Optimizations
- Static asset caching via _headers configuration
- Optimized CSS animations and transitions
- Lazy loading of non-critical resources
- Efficient DOM manipulation patterns

## Common Development Tasks

Since this is a static application with no build system:
- **Testing**: Open `index.html` directly in browser or use a local HTTP server
- **Debugging**: Use browser developer tools; debug information is logged to console
- **Styling**: Edit `style.css` directly - changes are immediately visible
- **Functionality**: Modify `script.js` - refresh browser to see changes

## File Organization

- `index.html` - Main application entry point
- `script.js` - Core application logic and IPSecurityAnalyzer class
- `style.css` - All styling including responsive design
- `manifest.json` - PWA configuration
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine instructions
- `_headers` - Deployment security headers
- `_redirects` - URL routing for static hosting
- Test files (`test*.html`, `debug.html`) - Development and testing utilities