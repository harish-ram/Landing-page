/**
 * DOM Utility Console Logging Module
 * Provides various console logging utilities for debugging and monitoring
 */

/**
 * Log application initialization
 */
export const logAppInit = () => {
  console.log('%c=== OptimCloud Application Initialized ===', 'color: #9D4EDD; font-size: 16px; font-weight: bold;');
  console.log('%cVersion: 1.0.0', 'color: #00D4FF; font-size: 12px;');
  console.log('%cEnvironment: Production', 'color: #00FF88; font-size: 12px;');
};

/**
 * Log navigation events
 */
export const logNavigation = (sectionName) => {
  console.log(`%c📍 Navigating to: ${sectionName}`, 'color: #0099FF; font-weight: bold; font-size: 13px;');
  console.log(`Timestamp: ${new Date().toLocaleTimeString()}`);
};

/**
 * Log feature interactions
 */
export const logFeatureInteraction = (featureName, action) => {
  console.log(`%c✨ Feature Interaction: ${featureName}`, 'color: #9D4EDD; font-weight: bold;');
  console.log(`Action: ${action}`);
  console.log(`Time: ${new Date().toISOString()}`);
};

/**
 * Log calculator events
 */
export const logCalculatorUpdate = (monthlySpend, monthlySavings, yearlySavings) => {
  console.group('%c💰 Calculator Updated', 'color: #00D4FF; font-weight: bold; font-size: 14px;');
  console.log(`Monthly Spend: ₹${monthlySpend.toLocaleString('en-IN')}`);
  console.log(`Monthly Savings: ₹${monthlySavings.toLocaleString('en-IN')}`);
  console.log(`Annual Savings: ₹${yearlySavings.toLocaleString('en-IN')}`);
  console.log(`Savings Rate: ${(monthlySavings / monthlySpend * 100).toFixed(2)}%`);
  console.groupEnd();
};

/**
 * Log button clicks and CTAs
 */
export const logCTAClick = (buttonName) => {
  console.log(`%c🎯 CTA Button Clicked: ${buttonName}`, 'color: #00FF88; font-weight: bold; font-size: 13px;');
  console.log(`User Action at: ${new Date().toLocaleTimeString()}`);
};

/**
 * Log pricing tier selection
 */
export const logPricingSelection = (tier, price) => {
  console.group('%c💳 Pricing Tier Selected', 'color: #9D4EDD; font-weight: bold; font-size: 14px;');
  console.log(`Tier: ${tier}`);
  console.log(`Price: ${price}`);
  console.log(`Selected at: ${new Date().toLocaleTimeString()}`);
  console.groupEnd();
};

/**
 * Log form submissions
 */
export const logFormSubmit = (formName, formData) => {
  console.group('%c📝 Form Submitted', 'color: #0099FF; font-weight: bold; font-size: 14px;');
  console.log(`Form: ${formName}`);
  console.log('Data:', formData);
  console.log(`Submitted at: ${new Date().toISOString()}`);
  console.groupEnd();
};

/**
 * Log animation triggers
 */
export const logAnimation = (animationName, element) => {
  console.log(`%c🎬 Animation Started: ${animationName}`, 'color: #00D4FF; font-weight: bold;');
  console.log(`Element: ${element}`);
};

/**
 * Log performance metrics
 */
export const logPerformanceMetrics = () => {
  console.group('%c⚡ Performance Metrics', 'color: #00FF88; font-weight: bold; font-size: 14px;');
  
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  const connectTime = perfData.responseEnd - perfData.requestStart;
  const renderTime = perfData.domComplete - perfData.domLoading;
  
  console.log(`Page Load Time: ${pageLoadTime}ms`);
  console.log(`Connection Time: ${connectTime}ms`);
  console.log(`Render Time: ${renderTime}ms`);
  console.groupEnd();
};

/**
 * Log API calls (if any)
 */
export const logAPICall = (method, endpoint, status = null) => {
  const statusColor = status >= 200 && status < 300 ? '#00FF88' : '#FF6B6B';
  console.log(
    `%c${method} ${endpoint} - Status: ${status}`,
    `color: ${statusColor}; font-weight: bold; font-size: 12px;`
  );
  console.log(`Called at: ${new Date().toLocaleTimeString()}`);
};

/**
 * Log error messages
 */
export const logError = (errorName, errorMessage, errorDetails = null) => {
  console.error(`%c❌ ERROR: ${errorName}`, 'color: #FF6B6B; font-weight: bold; font-size: 14px;');
  console.error(`Message: ${errorMessage}`);
  if (errorDetails) {
    console.error('Details:', errorDetails);
  }
  console.error(`Error at: ${new Date().toISOString()}`);
};

/**
 * Log success messages
 */
export const logSuccess = (successMessage, details = null) => {
  console.log(`%c✅ SUCCESS: ${successMessage}`, 'color: #00FF88; font-weight: bold; font-size: 14px;');
  if (details) {
    console.log('Details:', details);
  }
  console.log(`Completed at: ${new Date().toLocaleTimeString()}`);
};

/**
 * Log component lifecycle
 */
export const logComponentLifecycle = (componentName, lifecycle) => {
  const colors = {
    mount: '#00D4FF',
    render: '#0099FF',
    update: '#9D4EDD',
    unmount: '#FF6B6B'
  };
  
  console.log(
    `%c${componentName} - ${lifecycle}`,
    `color: ${colors[lifecycle]}; font-weight: bold; font-size: 12px;`
  );
};

/**
 * Log user session info
 */
export const logSessionInfo = () => {
  console.group('%c👤 Session Information', 'color: #9D4EDD; font-weight: bold; font-size: 14px;');
  console.log(`User Agent: ${navigator.userAgent}`);
  console.log(`Language: ${navigator.language}`);
  console.log(`Platform: ${navigator.platform}`);
  console.log(`Session Start: ${new Date().toISOString()}`);
  console.groupEnd();
};

/**
 * Log banner with app information
 */
export const logAppBanner = () => {
  console.clear();
  console.log(
    `%c
    ╔═══════════════════════════════════════╗
    ║     🚀 OPTIMCLOUD APPLICATION 🚀     ║
    ║    AI-Powered Cloud Cost Optimizer    ║
    ║                                       ║
    ║  Version: 1.0.0                       ║
    ║  Built with: React + Tailwind CSS     ║
    ║  Powered by: Vite & Framer Motion     ║
    ╚═══════════════════════════════════════╝
    `,
    'color: #00D4FF; font-weight: bold; font-family: monospace; font-size: 11px;'
  );
  console.log('%cThank you for using OptimCloud! 💰', 'color: #00FF88; font-weight: bold; font-size: 14px;');
};

/**
 * Log warning messages
 */
export const logWarning = (warningMessage, details = null) => {
  console.warn(`%c⚠️  WARNING: ${warningMessage}`, 'color: #FFA500; font-weight: bold; font-size: 13px;');
  if (details) {
    console.warn('Details:', details);
  }
  console.warn(`Warned at: ${new Date().toLocaleTimeString()}`);
};

/**
 * Log DOM element queries
 */
export const logDOMQuery = (selector, found = true) => {
  const status = found ? '✓ Found' : '✗ Not Found';
  const color = found ? '#00FF88' : '#FF6B6B';
  console.log(`%cDOM Query: ${selector} - ${status}`, `color: ${color}; font-weight: bold;`);
};

/**
 * Initialize all logs on app load
 */
export const initializeLogs = () => {
  logAppBanner();
  logAppInit();
  logSessionInfo();
  logPerformanceMetrics();
};

export default {
  logAppInit,
  logNavigation,
  logFeatureInteraction,
  logCalculatorUpdate,
  logCTAClick,
  logPricingSelection,
  logFormSubmit,
  logAnimation,
  logPerformanceMetrics,
  logAPICall,
  logError,
  logSuccess,
  logComponentLifecycle,
  logSessionInfo,
  logAppBanner,
  logWarning,
  logDOMQuery,
  initializeLogs
};
