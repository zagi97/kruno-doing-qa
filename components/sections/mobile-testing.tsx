import {
  Smartphone,
  Wifi,
  Battery,
  RotateCcw,
  Globe,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  Users,
  Clock,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

const deviceStrategy = [
  {
    platform: "iOS Devices (2-3 devices)",
    devices: [
      "iPhone 14/15 (latest version)",
      "iPhone 12/13 (popular models)",
      "iPad (if tablet support needed)",
      "iPhone SE (small screen testing)",
    ],
    advantages: [
      "Even 10-year-old devices can run latest OS",
      "More predictable update cycle",
      "Consistent hardware across models",
      "Better OS update adoption",
    ],
    challenges: ["Limited device variety", "Expensive hardware", "App Store review requirements"],
    color: "border-blue-500 bg-blue-50 text-blue-900",
  },
  {
    platform: "Android Devices (2-3 devices)",
    devices: [
      "Google Pixel (gets updates first!) 🔥",
      "Samsung Galaxy (most popular brand)",
      "One budget device (different performance)",
      "OnePlus or Xiaomi (custom ROM testing)",
    ],
    advantages: [
      "Device fragmentation testing",
      "Various screen sizes and resolutions",
      "Different Android versions",
      "Cost-effective options available",
    ],
    challenges: [
      "Updates stop after ~2 years (reality)",
      "Manufacturer customizations",
      "Performance variations",
      "Fragmentation complexity",
    ],
    color: "border-green-500 bg-green-50 text-green-900",
  },
];

const backgroundTestScenarios = [
  {
    title: "Background + Screen Off",
    description: "Most comprehensive background test scenario",
    steps: [
      "Open app and perform an action (like filling a form)",
      "Press home button to put app in background",
      "Turn off screen using power button",
      "Wait 5+ minutes (simulate real-world pause)",
      "Turn screen back on and return to app",
    ],
    expected: "App should resume exactly where user left off, maintaining all form data and application state",
    commonIssues: ["Form data lost", "App restarts", "Session timeout", "Memory cleared"],
    color: "border-blue-500",
    priority: "Critical",
  },
  {
    title: "Screen Off Only",
    description: "Tests screen timeout behavior without backgrounding",
    steps: [
      "Use app actively (scrolling, typing, etc.)",
      "Press power button to turn off screen only",
      "Wait 2-3 minutes",
      "Turn screen back on (app still in foreground)",
    ],
    expected: "App should maintain exact state, no data loss, immediate responsiveness",
    commonIssues: ["Screen flicker", "Layout shifts", "Input focus lost"],
    color: "border-green-500",
    priority: "High",
  },
  {
    title: "App Switching",
    description: "Tests multitasking and app switching behavior",
    steps: [
      "Open your app and navigate to important screen",
      "Open another app (camera, messages, phone call)",
      "Use the other app for 1-2 minutes",
      "Return to your app via task switcher",
    ],
    expected: "No data loss, proper state recovery, smooth transition back",
    commonIssues: ["App restart", "Data reset", "Navigation stack lost"],
    color: "border-purple-500",
    priority: "High",
  },
  {
    title: "Incoming Call Interruption",
    description: "Tests app behavior during phone calls (critical scenario)",
    steps: [
      "Use app actively (especially during important actions)",
      "Receive or make a phone call",
      "Handle the call (accept/decline/talk)",
      "Return to app after call ends",
    ],
    expected: "App gracefully handles interruption, preserves user progress",
    commonIssues: ["Transaction lost", "Form data cleared", "Session expired"],
    color: "border-red-500",
    priority: "Critical",
  },
];

const networkTestingScenarios = [
  {
    scenario: "Wi-Fi to Mobile Data",
    description: "Test transition from Wi-Fi to cellular network",
    testSteps: [
      "Start using app on Wi-Fi (upload, download, form filling)",
      "Turn off Wi-Fi while operation is in progress",
      "App should automatically switch to mobile data",
      "Continue the operation seamlessly",
      "Verify no data loss or corruption",
    ],
    expectedBehavior: "Seamless transition, no interruption to user experience",
    commonIssues: ["Connection timeout", "Data loss", "Failed uploads", "Session drop"],
  },
  {
    scenario: "Mobile Data to Wi-Fi",
    description: "Test transition from cellular to Wi-Fi network",
    testSteps: [
      "Use app on mobile data (streaming, browsing)",
      "Enter Wi-Fi range and connect to network",
      "App should detect better connection",
      "Automatically switch to Wi-Fi",
      "Optimize bandwidth usage accordingly",
    ],
    expectedBehavior: "Automatic switch to better connection, improved performance",
    commonIssues: ["Duplicate downloads", "Connection conflicts", "Speed issues"],
  },
  {
    scenario: "No Network Connection",
    description: "Test offline functionality and error handling",
    testSteps: [
      "Turn off all network connections (airplane mode)",
      "Try to use app features",
      "Test cached content availability",
      "Attempt network operations",
      "Verify proper error messages",
    ],
    expectedBehavior: "Graceful degradation, clear error messages, offline functionality",
    commonIssues: ["App crashes", "Poor error messages", "No offline support"],
  },
  {
    scenario: "Poor Network Conditions",
    description: "Test app behavior on slow/unstable connections",
    testSteps: [
      "Simulate 2G/3G network conditions",
      "Test app loading and responsiveness",
      "Try uploading large files or images",
      "Test timeout handling",
      "Verify retry mechanisms",
    ],
    expectedBehavior: "Proper loading states, retry mechanisms, timeout handling",
    commonIssues: ["Long loading times", "No progress indicators", "Failed operations"],
  },
];

const orientationTestingCriteria = [
  {
    question: "Does the app support landscape mode?",
    considerations: [
      "If YES: Test all screens in landscape",
      "If NO: App should lock to portrait",
      "Mixed: Some screens support, others don't",
    ],
  },
  {
    question: "Are tablets supported?",
    considerations: [
      "Separate landscape/portrait testing for tablets",
      "Different UI layouts for tablet vs phone",
      "Split-screen functionality testing",
    ],
  },
  {
    question: "Should orientation be locked?",
    considerations: [
      "Games often lock to landscape",
      "Reading apps may support both",
      "Camera apps need orientation freedom",
    ],
  },
];

type LocalizationTestingArea = {
  category: string;
  languages?: string[];
  criticalIssues?: string[];
  issues?: string[];
  variations?: string[];
  testingApproach: string[];
  arianaInsight?: string;
};

const localizationTestingAreas: LocalizationTestingArea[] = [
  {
    category: "Right-to-Left (RTL) Languages",
    languages: ["Arabic", "Hebrew", "Persian", "Urdu"],
    criticalIssues: [
      "Complete UI breakdown possible",
      "Text alignment and direction",
      "UI elements mirror positions",
      "Navigation flow reversal",
      "Icon and button positioning",
    ],
    testingApproach: [
      "Test every screen with RTL language",
      "Check text alignment and overflow",
      "Verify UI element positioning",
      "Test navigation and user flows",
      "Validate form layouts and inputs",
    ],
    arianaInsight:
      "Arabic text flows right-to-left, which means many screens can completely break. Just switching the language can cause the entire UI to fall apart - test this for every supported RTL language!",
  },
  {
    category: "Text Expansion",
    languages: ["German", "French", "Spanish", "Dutch"],
    issues: [
      "German text ~30% longer than English",
      "Button labels may not fit",
      "Text truncation problems",
      "Layout breaking with longer text",
    ],
    testingApproach: [
      "Test UI with longest text variations",
      "Verify button and field sizing",
      "Check text truncation handling",
      "Validate responsive layouts",
    ],
  },
  {
    category: "Number and Date Formats",
    variations: [
      "US: 1,234.56 vs EU: 1.234,56",
      "Date formats: MM/DD/YYYY vs DD/MM/YYYY",
      "Currency positioning: $123 vs 123$",
      "Time formats: 12h vs 24h",
    ],
    testingApproach: [
      "Test all numeric inputs",
      "Verify date picker behavior",
      "Check currency display",
      "Validate calculation accuracy",
    ],
  },
];

const appStoreCompliance = [
  {
    store: "Apple App Store",
    criticalRequirements: [
      {
        requirement: "Account Deletion (CRITICAL)",
        description: "Must provide easily accessible account deletion option",
        consequence: "App will be rejected if not implemented",
        arianaInsight:
          "If you create an account, you MUST have an option to delete the account or Apple will reject your app. This must be easily accessible and visible to users - Apple's test team will specifically look for this!",
        implementation: [
          "Add 'Delete Account' option in Settings",
          "Make it easily discoverable",
          "Provide clear confirmation flow",
          "Actually delete user data (not just deactivate)",
        ],
      },
      {
        requirement: "Privacy Labels",
        description: "Required privacy information disclosure in App Store Connect",
        consequence: "App cannot be published without privacy labels",
      },
      {
        requirement: "App Tracking Transparency (ATT)",
        description: "Must request permission before tracking users across apps",
        consequence: "Automatic rejection for non-compliance",
      },
    ],
  },
  {
    store: "Google Play Store",
    criticalRequirements: [
      {
        requirement: "Target API Level",
        description: "Must target latest Android API level (within 1 year)",
        consequence: "App updates will be rejected",
      },
      {
        requirement: "Permissions Justification",
        description: "Must justify all requested permissions with clear use cases",
        consequence: "App may be removed for unnecessary permissions",
      },
      {
        requirement: "Data Safety Section",
        description: "Must declare data collection and sharing practices",
        consequence: "Required for all app submissions",
      },
    ],
  },
];

const realWorldTestingScenarios = [
  {
    appType: "E-commerce App",
    scenario: "Shopping Cart Network Transition",
    arianaContext: "Real scenario that happens to users daily",
    steps: [
      "Add items to cart while on home Wi-Fi",
      "Leave house (switch to mobile data automatically)",
      "Continue shopping, add more items",
      "Enter store with Wi-Fi (auto-switch back)",
      "Proceed to checkout and payment",
    ],
    expected: "All cart items preserved, no duplicates, seamless checkout",
    commonFailures: ["Cart cleared", "Duplicate items", "Payment failures"],
  },
  {
    appType: "Banking App",
    scenario: "Biometric Authentication After OS Update",
    arianaContext: "OS updates often break biometric authentication",
    steps: [
      "Set up fingerprint/face ID login",
      "Update iOS/Android to new version",
      "Restart device completely",
      "Open banking app",
      "Try biometric authentication",
    ],
    expected: "Biometric auth continues working without re-setup",
    commonFailures: ["Requires re-setup", "Falls back to password", "App crashes"],
  },
  {
    appType: "Social Media App",
    scenario: "Photo Upload on Poor Network",
    arianaContext: "Users often have poor network while taking photos",
    steps: [
      "Take high-quality photo (large file size)",
      "Start upload on Wi-Fi",
      "Move to area with poor 2G/3G signal",
      "Monitor upload progress and behavior",
      "Switch back to Wi-Fi or better signal",
    ],
    expected: "Upload resumes properly, no corruption, progress maintained",
    commonFailures: ["Upload fails", "Corrupted images", "No retry mechanism"],
  },
  {
    appType: "Navigation App",
    scenario: "GPS During Phone Call",
    arianaContext: "Critical scenario for safety",
    steps: [
      "Start navigation for important trip",
      "Receive incoming phone call",
      "Answer call and talk while driving",
      "Continue following navigation",
      "End call and continue trip",
    ],
    expected: "Navigation continues uninterrupted, voice guidance works",
    commonFailures: ["Navigation stops", "Audio conflicts", "Route lost"],
  },
];

const arianaExpertInsights = [
  {
    category: "Payment Integration Testing",
    insight:
      "Test edge cases: blocked card, insufficient funds, stolen card, expired card, wrong CVV. Integration with payment systems requires thorough testing of all failure scenarios.",
    practicalAdvice: [
      "Test with different card types (Visa, MasterCard, Amex)",
      "Simulate network timeouts during payment",
      "Test partial payment failures",
      "Verify refund and chargeback handling",
      "Test payment in different currencies",
    ],
    realWorldImpact: "Payment failures can cause immediate revenue loss and customer frustration",
  },
  {
    category: "Loading States and Interruptions",
    insight:
      "Test what happens when user exits app during loading, then returns. Does it continue loading or restart? This is a common real-world scenario.",
    practicalAdvice: [
      "Test loading interruption at different stages",
      "Verify proper loading state recovery",
      "Test with slow network conditions",
      "Check memory management during loading",
      "Validate progress indicators accuracy",
    ],
    realWorldImpact: "Poor loading experience leads to app abandonment",
  },
  {
    category: "Device Management Strategy",
    insight:
      "Keep devices charged, don't update all iOS devices to same version, coordinate device usage in team. One device will always be problematic!",
    practicalAdvice: [
      "Maintain device rotation schedule",
      "Keep at least one device on previous OS version",
      "Document device-specific issues",
      "Share device usage calendar with team",
      "Have backup devices ready",
    ],
    realWorldImpact: "Poor device management slows down testing and misses critical bugs",
  },
  {
    category: "Version Display Requirement",
    insight:
      "App version must be displayed somewhere (usually in Settings). Essential for bug reports - you need to know which build the client is using on production.",
    practicalAdvice: [
      "Show version in Settings or About screen",
      "Include build number for internal tracking",
      "Make version easily accessible to users",
      "Consider showing version in crash reports",
      "Update version display for each release",
    ],
    realWorldImpact: "Without version info, reproducing production bugs becomes nearly impossible",
  },
  {
    category: "Network Transition Reality",
    insight:
      "When switching from Wi-Fi to mobile data, the behavior is different than switching from mobile to Wi-Fi. This isn't the same behavior pattern - you must test both directions thoroughly.",
    practicalAdvice: [
      "Test both transition directions separately",
      "Monitor data usage during transitions",
      "Check for duplicate network requests",
      "Verify proper timeout handling",
      "Test with different network speeds",
    ],
    realWorldImpact: "Network transition failures cause data loss and poor user experience",
  },
  {
    category: "OS Update Impact",
    insight:
      "If you're working on a native app, there's a high chance that when a new OS is released, everything will break and you'll need full regression testing. React Native apps have lower risk but still need smoke testing.",
    practicalAdvice: [
      "Monitor OS beta releases actively",
      "Set up test devices with beta OS",
      "Plan regression testing cycles",
      "Test immediately after OS updates",
      "Keep documentation of OS-related issues",
    ],
    realWorldImpact: "OS updates can break apps for millions of users overnight",
  },
];

const mobileTestingChecklist = [
  {
    phase: "Pre-Testing Setup",
    items: [
      "All devices charged and ready (>80% battery)",
      "Test user accounts created for different roles",
      "App installed on all target devices",
      "Network configurations tested (Wi-Fi, 4G, 5G)",
      "Test data and scenarios prepared",
      "Device usage schedule coordinated with team",
    ],
  },
  {
    phase: "Core Testing Areas",
    items: [
      "Network switching (Wi-Fi ↔ Mobile data) both directions",
      "Background/foreground behavior (all scenarios)",
      "Orientation changes (if supported)",
      "RTL language testing (Arabic, Hebrew)",
      "Performance metrics (loading, transitions)",
      "Battery usage monitoring",
      "Memory management validation",
    ],
  },
  {
    phase: "Device-Specific Testing",
    items: [
      "Screen size variations (small, large, tablet)",
      "OS version differences (current, previous)",
      "Hardware feature testing (camera, GPS, sensors)",
      "Performance variations (high-end vs budget)",
      "Manufacturer customizations (Samsung, Xiaomi)",
      "Storage constraints (low storage scenarios)",
    ],
  },
  {
    phase: "Real-World Scenarios",
    items: [
      "Interruption handling (calls, notifications)",
      "Poor network conditions (2G, unstable connection)",
      "Low battery behavior and power saving modes",
      "Multitasking and app switching",
      "Long usage sessions (memory leaks)",
      "Edge cases and error conditions",
    ],
  },
  {
    phase: "Post-Testing",
    items: [
      "Bug reports created with device details",
      "Device-specific issues documented",
      "Performance data collected and analyzed",
      "Test results shared with development team",
      "Devices cleaned and prepared for next cycle",
      "Lessons learned documented for future testing",
    ],
  },
];

const bestPractices = {
  dos: [
    "Test on real devices - Emulators miss critical hardware-specific issues",
    "Rotate device focus weekly - Each device will reveal unique problems",
    "Test network transitions - Critical for modern mobile apps",
    "Monitor app in background - Test all state preservation scenarios",
    "Show app version prominently - Essential for production bug reports",
    "Test with low storage - Apps behave differently when storage is limited",
    "Use different user accounts - Fresh vs returning user experiences vary",
    "Test app updates - Ensure smooth upgrade experiences",
    "Document device quirks - Track device-specific issues for future reference",
    "Test during peak usage - Real-world conditions matter",
  ],
  donts: [
    "Don't rely only on emulators - Miss real-world hardware interactions",
    "Don't test on single device - Device fragmentation is very real",
    "Don't ignore orientation - Test both portrait and landscape if supported",
    "Don't skip OS updates - New OS versions can break existing functionality",
    "Don't forget permissions - Test all permission scenarios thoroughly",
    "Don't overlook localization - RTL languages can completely break UI",
    "Don't ignore app store rules - Compliance failures cause rejection",
    "Don't skip edge cases - Real users encounter unexpected scenarios",
    "Don't forget cleanup - Remove test data to avoid interference",
    "Don't test only latest devices - Support older devices users actually use",
  ],
};

export function MobileTestingSection() {
  return (
    <section id="mobile-testing" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Mobile Testing"
          subtitle="Comprehensive mobile application testing strategies"
          icon={Smartphone}
        />
        <CardContent className="p-8">
          {/* What is Mobile Testing */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Mobile Testing?</h3>
            <p className="text-gray-700 mb-6">
              Mobile testing is the process of testing mobile applications on mobile devices to ensure they function
              correctly, perform well, and provide excellent user experience across different devices, operating
              systems, and network conditions. It's one of the most challenging areas of QA due to device fragmentation
              and real-world usage patterns.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-yellow-900 mb-3">Key Challenges</h4>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li className="flex items-start">
                    <AlertTriangle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Device fragmentation (thousands of Android devices)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>OS version variations and update cycles</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Network connectivity and transition issues</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Touch interface interactions and gestures</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Battery and performance constraints</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-900 mb-3">Testing Focus Areas</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Functionality across different devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Performance optimization and responsiveness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Battery usage and power management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>User experience and accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Security and privacy compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Network Testing - Arijana's Key Insight */}
          <div className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
                <Wifi className="mr-3" size={24} />
                Network Connectivity Testing
              </h3>
              <div className="bg-blue-100 p-4 rounded mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Expert Insight from Industry Experience</h4>
                <p className="text-blue-800 text-sm font-medium">
                  "When switching from Wi-Fi to mobile data, the behavior is different than switching from mobile to
                  Wi-Fi. This isn't the same behavior pattern - you must test both directions thoroughly. This is
                  critical knowledge that most QA engineers miss!"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {networkTestingScenarios.map((scenario, index) => (
                  <div key={index} className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{scenario.scenario}</h4>
                    <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                    <div className="mb-3">
                      <h5 className="font-medium text-gray-800 mb-1">Test Steps:</h5>
                      <ol className="text-xs text-gray-600 space-y-1">
                        {scenario.testSteps.map((step, stepIndex) => (
                          <li key={stepIndex}>
                            {stepIndex + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="mb-2">
                      <span className="text-xs font-medium text-green-700">Expected: </span>
                      <span className="text-xs text-green-600">{scenario.expectedBehavior}</span>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-red-700">Common Issues: </span>
                      <span className="text-xs text-red-600">{scenario.commonIssues.join(", ")}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background/Foreground Testing - Critical Area */}
          <div className="mb-12">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center">
                <Battery className="mr-3" size={24} />
                Background/Foreground Testing
              </h3>
              <div className="bg-orange-100 p-4 rounded mb-6">
                <h4 className="font-semibold text-orange-900 mb-2">🔥 Critical Testing Area</h4>
                <p className="text-orange-800 text-sm font-medium">
                  "You must test how the app behaves when it goes to background - put in background and turn off screen,
                  or just turn off screen, or simply open a new app. Each scenario behaves differently and can cause
                  completely different issues!"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {backgroundTestScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className={`bg-white p-4 rounded border-l-4 ${scenario.color} border-r border-t border-b`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{scenario.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          scenario.priority === "Critical" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {scenario.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>

                    <div className="mb-3">
                      <h5 className="font-medium text-gray-800 mb-1">Test Steps:</h5>
                      <ol className="text-xs text-gray-600 space-y-1">
                        {scenario.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>
                            {stepIndex + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mb-2">
                      <span className="text-xs font-medium text-green-700">Expected: </span>
                      <span className="text-xs text-green-600">{scenario.expected}</span>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-red-700">Common Issues: </span>
                      <span className="text-xs text-red-600">{scenario.commonIssues.join(", ")}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OS Version Impact */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">OS Version Impact Testing</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-red-900 mb-2">⚠️ OS Update Warning from Industry Experience</h4>
              <p className="text-red-800 text-sm font-medium">
                "If you're working on a native app, there's a high chance that when a new OS is released, everything
                will break and you'll need full regression testing. React Native apps have lower risk but still need
                smoke testing. Always monitor new OS releases closely!"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-red-900 mb-4">Native Applications (High Risk)</h4>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex items-start">
                    <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>High Risk:</strong> New OS can break core functionality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>Required:</strong> Full regression testing needed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>Timeline:</strong> Test immediately after OS beta release
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>Focus:</strong> Core functionality, UI elements, permissions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-900 mb-4">React Native/Flutter (Lower Risk)</h4>
                <ul className="space-y-3 text-sm text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>Lower Risk:</strong> Framework handles most OS differences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>Required:</strong> Smoke testing on new OS versions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>Focus:</strong> Happy path scenarios and critical features
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>
                      <strong>Benefit:</strong> Framework updates handle compatibility
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Device Strategy - Arijana's Insight */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Device Strategy & Hardware Testing</h3>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-purple-900 mb-2">📱 Device Testing Strategy</h4>
              <p className="text-purple-800 text-sm font-medium">
                "Never test on just one device - use 2-3 Android + 2-3 iOS devices. Get a Pixel device because it
                receives Android updates first. One device will always be problematic - that's just how it is! Each
                device will reveal unique issues you won't find on others."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {deviceStrategy.map((strategy, index) => (
                <div key={index} className={`border-l-4 p-6 rounded-r-lg ${strategy.color}`}>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Smartphone className="mr-2" size={20} />
                    {strategy.platform}
                  </h4>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Recommended Devices:</h5>
                    <ul className="text-sm space-y-1">
                      {strategy.devices.map((device, deviceIndex) => (
                        <li key={deviceIndex}>• {device}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Advantages:</h5>
                    <ul className="text-sm space-y-1">
                      {strategy.advantages.map((advantage, advantageIndex) => (
                        <li key={advantageIndex} className="flex items-start">
                          <CheckCircle className="text-green-600 mr-1 mt-0.5 flex-shrink-0" size={12} />
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium mb-2">Challenges:</h5>
                    <ul className="text-sm space-y-1">
                      {strategy.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start">
                          <AlertTriangle className="text-yellow-600 mr-1 mt-0.5 flex-shrink-0" size={12} />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Localization Testing with RTL Focus */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Globe className="mr-3 text-indigo-600" size={24} />
              Localization & RTL Testing
            </h3>

            {localizationTestingAreas.map((area, index) => (
              <div key={index} className="mb-6">
                <div
                  className={`border-l-4 p-6 rounded-r-lg ${
                    area.category === "Right-to-Left (RTL) Languages"
                      ? "border-red-500 bg-red-50"
                      : area.category === "Text Expansion"
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-blue-500 bg-blue-50"
                  }`}
                >
                  <h4 className="font-semibold text-lg mb-3">{area.category}</h4>

                  {area.arianaInsight && (
                    <div className="bg-white p-4 rounded border-2 border-red-300 mb-4">
                      <h5 className="font-semibold text-red-900 mb-2">🚨 Expert Warning:</h5>
                      <p className="text-red-800 text-sm font-medium">{area.arianaInsight}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">
                        {area.languages
                          ? "Languages:"
                          : area.variations
                          ? "Variations:"
                          : area.criticalIssues
                          ? "Critical Issues:"
                          : "Issues:"}
                      </h5>
                      <ul className="text-sm space-y-1">
                        {(area.languages || area.variations || area.criticalIssues || area.issues || []).map(
                          (item, itemIndex) => (
                            <li key={itemIndex}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Testing Approach:</h5>
                      <ul className="text-sm space-y-1">
                        {area.testingApproach.map((approach, approachIndex) => (
                          <li key={approachIndex} className="flex items-start">
                            <CheckCircle className="text-green-600 mr-1 mt-0.5 flex-shrink-0" size={12} />
                            <span>{approach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Real-World Testing Scenarios */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-World Mobile Testing Scenarios</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {realWorldTestingScenarios.map((scenario, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{scenario.appType}</h4>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">{scenario.scenario}</h5>

                  <div className="bg-blue-50 p-3 rounded mb-3">
                    <p className="text-xs text-blue-800">
                      <strong>Context:</strong> {scenario.arianaContext}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h6 className="font-medium text-gray-800 mb-1">Test Steps:</h6>
                    <ol className="text-xs text-gray-600 space-y-1">
                      {scenario.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>
                          {stepIndex + 1}. {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mb-2">
                    <span className="text-xs font-medium text-green-700">Expected: </span>
                    <span className="text-xs text-green-600">{scenario.expected}</span>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-red-700">Common Failures: </span>
                    <span className="text-xs text-red-600">{scenario.commonFailures.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Insights from Arijana */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Insights from Industry Experience</h3>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-6">
                {arianaExpertInsights.map((insight, index) => (
                  <div key={index} className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-900 mb-2">{insight.category}</h4>
                    <p className="text-purple-800 text-sm mb-3 font-medium">"{insight.insight}"</p>

                    <div className="mb-3">
                      <h5 className="font-medium text-gray-800 mb-1">Practical Advice:</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {insight.practicalAdvice.map((advice, adviceIndex) => (
                          <li key={adviceIndex}>• {advice}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-2 rounded">
                      <span className="text-xs font-medium text-yellow-800">Impact: </span>
                      <span className="text-xs text-yellow-700">{insight.realWorldImpact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Testing Checklist */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Mobile Testing Checklist</h3>
            <div className="space-y-6">
              {mobileTestingChecklist.map((phase, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    {phase.phase === "Pre-Testing Setup" && <Settings className="mr-2 text-blue-600" size={20} />}
                    {phase.phase === "Core Testing Areas" && <Smartphone className="mr-2 text-green-600" size={20} />}
                    {phase.phase === "Device-Specific Testing" && <Users className="mr-2 text-purple-600" size={20} />}
                    {phase.phase === "Real-World Scenarios" && <Zap className="mr-2 text-orange-600" size={20} />}
                    {phase.phase === "Post-Testing" && <Clock className="mr-2 text-gray-600" size={20} />}
                    {phase.phase}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* App Store Compliance - Critical Requirements */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="mr-3 text-red-600" size={24} />
              App Store Compliance - Critical Requirements
            </h3>

            {appStoreCompliance.map((store, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{store.store}</h4>
                <div className="space-y-4">
                  {store.criticalRequirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-semibold text-red-900">{req.requirement}</h5>
                        {req.requirement.includes("CRITICAL") && (
                          <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded font-bold">CRITICAL</span>
                        )}
                      </div>

                      <p className="text-red-800 text-sm mb-3">{req.description}</p>

                      {req.arianaInsight && (
                        <div className="bg-red-100 p-4 rounded border-2 border-red-300 mb-3">
                          <h6 className="font-semibold text-red-900 mb-2">🍎 Expert Warning:</h6>
                          <p className="text-red-800 text-sm font-medium">{req.arianaInsight}</p>
                        </div>
                      )}

                      {req.implementation && (
                        <div className="mb-3">
                          <h6 className="font-medium text-red-900 mb-2">Implementation Requirements:</h6>
                          <ul className="space-y-1">
                            {req.implementation.map((impl, implIndex) => (
                              <li key={implIndex} className="flex items-start">
                                <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={12} />
                                <span className="text-sm text-red-800">{impl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-red-200 p-3 rounded">
                        <span className="text-sm font-medium text-red-900">Consequence: </span>
                        <span className="text-sm text-red-800">{req.consequence}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Best Practices - Comprehensive */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Testing Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="mr-2" size={24} />
                  Do's - Essential Practices
                </h4>
                <ul className="space-y-3 text-sm text-green-800">
                  {bestPractices.dos.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                  <XCircle className="mr-2" size={24} />
                  Don'ts - Common Pitfalls
                </h4>
                <ul className="space-y-3 text-sm text-red-800">
                  {bestPractices.donts.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="text-red-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Reality Check */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-2 border-gray-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Testing Reality Check</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-900 mb-2">What Textbooks Don't Tell You</h4>
                <ul className="text-sm text-yellow-800 space-y-2">
                  <li>• One device will always be problematic - accept this reality</li>
                  <li>• Network transitions behave differently in each direction</li>
                  <li>• OS updates can break everything overnight</li>
                  <li>• RTL languages can completely destroy your UI</li>
                  <li>• Real users interrupt apps constantly (calls, notifications)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Industry Survival Tips</h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• Always have multiple devices charged and ready</li>
                  <li>• Get a Google Pixel for early Android updates</li>
                  <li>• Test Arabic language even if you don't support it</li>
                  <li>• Document every device-specific quirk you find</li>
                  <li>• Show app version somewhere - you'll need it for bug reports</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-100 p-4 rounded">
              <p className="text-sm text-blue-800">
                <strong>Key Takeaway:</strong> This mobile testing section incorporates real-world insights from
                industry experience, focusing on practical scenarios and common issues that you won't find in typical QA
                tutorials. The knowledge from experienced professionals like Arijana is invaluable for understanding the
                reality of mobile testing challenges.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
