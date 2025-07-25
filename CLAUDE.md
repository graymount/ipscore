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
- `calculateSecurityScore()` - Comprehensive scoring algorithm (368-452)
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

### Deployment
Application is designed for static hosting (GitHub Pages, Netlify, etc.) with PWA capabilities through the manifest.json configuration.

### Browser Compatibility
- Uses modern JavaScript features (async/await, fetch API, WebRTC)
- Includes fallbacks for network detection and DNS analysis
- Progressive enhancement for advanced features

### API Integration Points
The application attempts to use external IP geolocation services but includes fallback logic for offline operation. CORS limitations are handled gracefully with client-side alternatives.

### Security Considerations
While this appears to be a security analysis tool, the actual threat detection logic uses deterministic algorithms rather than real threat intelligence feeds, making it more of a demonstration/educational tool than a production security scanner.