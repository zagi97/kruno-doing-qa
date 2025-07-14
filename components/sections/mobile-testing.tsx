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
  User,
  Monitor,
  Camera,
  Upload,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

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

          {/* My Mobile Testing Experience */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Mobile Testing Experience</h3>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border border-purple-100">
                  <div className="flex items-center mb-3">
                    <User className="h-5 w-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-purple-900">My Testing Background</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Mobile Apps:</strong> Tested iOS (App Store) and Android (Google Play) applications
                    </li>
                    <li>
                      • <strong>Mobile Web:</strong> Currently testing mobile web using DevTools
                    </li>
                    <li>
                      • <strong>Experience:</strong> Last project had 2 mobile apps - tested both extensively
                    </li>
                    <li>
                      • <strong>Current:</strong> No mobile app on current project, focus on web responsive
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-purple-100">
                  <div className="flex items-center mb-3">
                    <Smartphone className="h-5 w-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-purple-900">Devices I Use</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>iPhone XR:</strong> Primary iOS testing device
                    </li>
                    <li>
                      • <strong>iPhone (larger model):</strong> Different screen size testing
                    </li>
                    <li>
                      • <strong>Samsung devices:</strong> Popular Android brand testing
                    </li>
                    <li>
                      • <strong>Google Pixel:</strong> Important for Android updates!
                    </li>
                    <li>
                      • <strong>Emulators:</strong> Sometimes use, but prefer real devices
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-purple-100 p-3 rounded">
                <p className="text-sm text-purple-800">
                  <strong>My Approach:</strong> I tested more mobile applications (native apps) than mobile web. Real
                  devices reveal issues that emulators miss, especially UI layout problems and hardware-specific bugs.
                </p>
              </div>
            </div>
          </div>

          {/* My Real Mobile Testing Issues */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Mobile Testing Issues I've Found</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="text-red-600 mr-2 h-5 w-5" />
                  iOS vs Android UI Issues
                </h4>

                <div className="bg-white p-3 rounded border border-red-200 mb-3">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-xs font-semibold text-red-800">Real Bug I Found:</span>
                  </div>
                  <p className="text-xs text-red-700">
                    On Android, the login UI looked perfect, but on iPhone the elements were positioned at the bottom of
                    the screen. The layout completely broke on iOS even though it worked fine on Android devices.
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <h5 className="font-medium text-red-800">Common iOS vs Android Issues:</h5>
                  <ul className="space-y-1 text-xs">
                    <li>• Different screen aspect ratios cause layout shifts</li>
                    <li>• Safe area handling differs between platforms</li>
                    <li>• Keyboard behavior affects input positioning</li>
                    <li>• Font rendering differences</li>
                    <li>• Status bar height variations</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                  <Camera className="text-orange-600 mr-2 h-5 w-5" />
                  Photo Upload Issues
                </h4>

                <div className="bg-white p-3 rounded border border-orange-200 mb-3">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-orange-600 mr-1" />
                    <span className="text-xs font-semibold text-orange-800">Real Bug I Found:</span>
                  </div>
                  <p className="text-xs text-orange-700">
                    Clicked on photo upload button, selected a photo from gallery, but the photo didn't actually upload.
                    The UI showed success but the image wasn't processed or saved.
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <h5 className="font-medium text-orange-800">Photo Upload Test Areas:</h5>
                  <ul className="space-y-1 text-xs">
                    <li>• Camera permission handling</li>
                    <li>• Gallery access and selection</li>
                    <li>• Image compression and resizing</li>
                    <li>• Upload progress indicators</li>
                    <li>• Network interruption during upload</li>
                    <li>• Large file size handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* My Current Mobile Web Testing */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Current Mobile Web Testing Approach</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <Monitor className="h-6 w-6 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold text-green-900">DevTools Mobile Testing</h4>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-green-800 mb-2">What I Test:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Responsive design:</strong> Different screen sizes and resolutions
                    </li>
                    <li>
                      • <strong>Touch interactions:</strong> Button sizes, tap targets
                    </li>
                    <li>
                      • <strong>Mobile navigation:</strong> Hamburger menus, mobile-specific UI
                    </li>
                    <li>
                      • <strong>Form inputs:</strong> Mobile keyboard behavior
                    </li>
                    <li>
                      • <strong>Performance:</strong> Loading times on mobile connections
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-green-800 mb-2">My Testing Process:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>DevTools first:</strong> Quick responsive testing
                    </li>
                    <li>
                      • <strong>Real device validation:</strong> Verify on actual phones when needed
                    </li>
                    <li>
                      • <strong>Multiple viewports:</strong> iPhone, Android, tablet sizes
                    </li>
                    <li>
                      • <strong>Network throttling:</strong> Test on slow connections
                    </li>
                    <li>
                      • <strong>Touch simulation:</strong> Test mobile interactions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-green-100 p-3 rounded">
                <p className="text-sm text-green-800">
                  <strong>Current Reality:</strong> Since my current project doesn't have a mobile app, I focus on
                  mobile web testing using DevTools device emulation and real device validation when necessary.
                </p>
              </div>
            </div>
          </div>

          {/* My Orientation Testing Approach */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Orientation Testing Approach</h3>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-3">
                <RotateCcw className="h-5 w-5 text-yellow-600 mr-2" />
                <h4 className="text-lg font-semibold text-yellow-900">Smart Testing Strategy</h4>
              </div>

              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-yellow-600 mr-1" />
                  <span className="text-xs font-semibold text-yellow-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  If the app supports orientation changes, then I test both portrait and landscape modes. If rotation is
                  disabled, I don't test orientation - I focus on testing what the app actually supports.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">When I Test Orientation:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• App supports landscape mode</li>
                    <li>• Video or media viewing features</li>
                    <li>• Games with landscape support</li>
                    <li>• Camera or photo editing features</li>
                    <li>• Reading or document viewing</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">When I Don't Test:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• App locks to portrait only</li>
                    <li>• Forms and input-heavy screens</li>
                    <li>• Apps with disabled rotation</li>
                    <li>• Simple utility apps</li>
                    <li>• Apps designed for single orientation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-yellow-100 p-3 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Key Insight:</strong> Don't waste time testing orientation if the app doesn't support it.
                  Focus your testing effort on features that are actually implemented and supported.
                </p>
              </div>
            </div>
          </div>

          {/* Device Strategy - Based on My Experience */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Device Testing Strategy</h3>
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

                  {strategy.platform.includes("Android") && (
                    <div className="mt-3 bg-white p-3 rounded border border-gray-200">
                      <div className="flex items-center mb-1">
                        <User className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-xs font-semibold text-green-800">Why Pixel is Important:</span>
                      </div>
                      <p className="text-xs text-gray-600 italic">
                        Google Pixel devices get Android updates first, so testing on Pixel helps catch issues with new
                        Android versions before they reach other devices.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Network Testing */}
          <div className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
                <Wifi className="mr-3" size={24} />
                Network Connectivity Testing
              </h3>
              <div className="bg-blue-100 p-4 rounded mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Critical Mobile Testing Area</h4>
                <p className="text-blue-800 text-sm font-medium">
                  Network transitions are critical for mobile apps. Wi-Fi to mobile data behaves differently than mobile
                  to Wi-Fi. Both directions must be tested thoroughly as they can cause different issues.
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

          {/* Background/Foreground Testing */}
          <div className="mb-12">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center">
                <Battery className="mr-3" size={24} />
                Background/Foreground Testing
              </h3>
              <div className="bg-orange-100 p-4 rounded mb-6">
                <h4 className="font-semibold text-orange-900 mb-2">🔥 Critical Testing Area</h4>
                <p className="text-orange-800 text-sm font-medium">
                  Test how the app behaves when it goes to background - put in background and turn off screen, or just
                  turn off screen, or simply open a new app. Each scenario behaves differently!
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

          {/* My Mobile Testing Workflow */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Mobile Testing Workflow</h3>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                How I Approach Mobile Testing
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-purple-800 mb-2">Device Setup:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• iPhone XR for iOS testing</li>
                    <li>• Samsung device for Android</li>
                    <li>• Google Pixel (important!)</li>
                    <li>• Emulators as backup</li>
                    <li>• Keep devices charged</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-purple-800 mb-2">Testing Focus:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• UI layout differences</li>
                    <li>• Photo upload functionality</li>
                    <li>• Orientation support check</li>
                    <li>• Different screen sizes</li>
                    <li>• Cross-platform consistency</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-purple-800 mb-2">Current State:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• No mobile app currently</li>
                    <li>• Focus on mobile web</li>
                    <li>• DevTools for responsive</li>
                    <li>• Real device validation</li>
                    <li>• Previous project: 2 apps</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-purple-100 p-3 rounded">
                <p className="text-sm text-purple-800">
                  <strong>My Experience:</strong> I've tested more native mobile applications than mobile web. Real
                  devices reveal critical issues that emulators miss, especially UI layout problems and hardware
                  functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Screen Size and Resolution Testing */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Screen Size & Resolution Testing</h3>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <Monitor className="h-5 w-5 text-green-600 mr-2" />
                <h4 className="text-lg font-semibold text-green-900">Multiple Device Testing</h4>
              </div>

              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-semibold text-green-800">My Approach:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I test different screen sizes and resolutions because the same app can look completely different on
                  various devices. What looks perfect on iPhone XR might break on a smaller Android device.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-green-800 mb-2">Screen Sizes I Test:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Small phones:</strong> iPhone SE, smaller Android
                    </li>
                    <li>
                      • <strong>Standard phones:</strong> iPhone XR, Galaxy S series
                    </li>
                    <li>
                      • <strong>Large phones:</strong> iPhone Plus/Max, Note series
                    </li>
                    <li>
                      • <strong>Tablets:</strong> iPad, Android tablets (if supported)
                    </li>
                    <li>
                      • <strong>Different ratios:</strong> 16:9, 18:9, 19.5:9
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-green-800 mb-2">What I Look For:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Layout breaking:</strong> Elements overlapping or misaligned
                    </li>
                    <li>
                      • <strong>Text cut-off:</strong> Labels or content not fully visible
                    </li>
                    <li>
                      • <strong>Button sizes:</strong> Too small to tap or too large
                    </li>
                    <li>
                      • <strong>Image scaling:</strong> Distorted or improperly sized images
                    </li>
                    <li>
                      • <strong>Navigation issues:</strong> Menus not working properly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Real vs Emulator Testing */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Devices vs Emulators</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <Smartphone className="mr-2" size={20} />
                  Real Devices (My Preference)
                </h4>

                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs font-semibold text-green-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I prefer real devices because they reveal issues emulators miss - like hardware-specific problems,
                    actual touch interactions, and performance issues under real conditions.
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>
                      <strong>Real hardware behavior:</strong> Actual performance and limitations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>
                      <strong>Touch interactions:</strong> Real finger gestures and pressure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>
                      <strong>Camera/sensors:</strong> Actual hardware functionality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>
                      <strong>Network conditions:</strong> Real cellular and Wi-Fi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>
                      <strong>Battery impact:</strong> Actual power consumption
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-yellow-900 mb-4 flex items-center">
                  <Monitor className="mr-2" size={20} />
                  Emulators (Sometimes Use)
                </h4>

                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-yellow-600 mr-1" />
                    <span className="text-xs font-semibold text-yellow-800">When I Use Emulators:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I sometimes use emulators for quick testing or when I need specific OS versions, but always validate
                    critical issues on real devices.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-yellow-800 mb-2">✓ Good For:</h5>
                    <ul className="space-y-1 text-xs text-yellow-700">
                      <li>• Quick UI layout checks</li>
                      <li>• Different OS version testing</li>
                      <li>• Basic functionality validation</li>
                      <li>• Development environment testing</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-yellow-800 mb-2">✗ Limitations:</h5>
                    <ul className="space-y-1 text-xs text-yellow-700">
                      <li>• Miss hardware-specific issues</li>
                      <li>• Performance not realistic</li>
                      <li>• Can't test camera/sensors properly</li>
                      <li>• Network simulation limited</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OS Version Impact Testing */}
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
                          (item: string, itemIndex: number) => (
                            <li key={itemIndex}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Testing Approach:</h5>
                      <ul className="text-sm space-y-1">
                        {area.testingApproach.map((approach: string, approachIndex: number) => (
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
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="mr-2 text-blue-600" size={20} />
                  Pre-Testing Setup
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">All devices charged and ready ({">"}80% battery)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Test user accounts created for different roles</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">App installed on all target devices</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Network configurations tested (Wi-Fi, 4G, 5G)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Test data and scenarios prepared</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Device usage schedule coordinated with team</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Smartphone className="mr-2 text-green-600" size={20} />
                  Core Testing Areas
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">
                      Network switching (Wi-Fi ↔ Mobile data) both directions
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Background/foreground behavior (all scenarios)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Orientation changes (if supported)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">RTL language testing (Arabic, Hebrew)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Performance metrics (loading, transitions)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Battery usage monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Memory management validation</span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="mr-2 text-purple-600" size={20} />
                  Device-Specific Testing
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Screen size variations (small, large, tablet)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">OS version differences (current, previous)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Hardware feature testing (camera, GPS, sensors)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Performance variations (high-end vs budget)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Manufacturer customizations (Samsung, Xiaomi)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Storage constraints (low storage scenarios)</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="mr-2 text-orange-600" size={20} />
                  Real-World Scenarios
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Interruption handling (calls, notifications)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Poor network conditions (2G, unstable connection)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Low battery behavior and power saving modes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Multitasking and app switching</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Long usage sessions (memory leaks)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Edge cases and error conditions</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="mr-2 text-gray-600" size={20} />
                  Post-Testing
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Bug reports created with device details</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Device-specific issues documented</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Performance data collected and analyzed</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Test results shared with development team</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Devices cleaned and prepared for next cycle</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm text-gray-700">Lessons learned documented for future testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Store Compliance */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="mr-3 text-red-600" size={24} />
              App Store Compliance - Critical Requirements
            </h3>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Apple App Store</h4>
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold text-red-900">Account Deletion (CRITICAL)</h5>
                  <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded font-bold">CRITICAL</span>
                </div>

                <p className="text-red-800 text-sm mb-3">Must provide easily accessible account deletion option</p>

                <div className="bg-red-100 p-4 rounded border-2 border-red-300 mb-3">
                  <h6 className="font-semibold text-red-900 mb-2">🍎 Expert Warning:</h6>
                  <p className="text-red-800 text-sm font-medium">
                    If you create an account, you MUST have an option to delete the account or Apple will reject your
                    app. This must be easily accessible and visible to users - Apple's test team will specifically look
                    for this!
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="font-medium text-red-900 mb-2">Implementation Requirements:</h6>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={12} />
                      <span className="text-sm text-red-800">Add 'Delete Account' option in Settings</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={12} />
                      <span className="text-sm text-red-800">Make it easily discoverable</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={12} />
                      <span className="text-sm text-red-800">Provide clear confirmation flow</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={12} />
                      <span className="text-sm text-red-800">Actually delete user data (not just deactivate)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-200 p-3 rounded">
                  <span className="text-sm font-medium text-red-900">Consequence: </span>
                  <span className="text-sm text-red-800">App will be rejected if not implemented</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Google Play Store</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">Target API Level</h5>
                  <p className="text-orange-800 text-sm mb-3">Must target latest Android API level (within 1 year)</p>
                  <div className="bg-orange-200 p-3 rounded">
                    <span className="text-sm font-medium text-orange-900">Consequence: </span>
                    <span className="text-sm text-orange-800">App updates will be rejected</span>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">Data Safety Section</h5>
                  <p className="text-orange-800 text-sm mb-3">Must declare data collection and sharing practices</p>
                  <div className="bg-orange-200 p-3 rounded">
                    <span className="text-sm font-medium text-orange-900">Consequence: </span>
                    <span className="text-sm text-orange-800">Required for all app submissions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
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

          {/* Mobile Testing Reality Check */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-2 border-gray-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Testing Reality Check</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-900 mb-2">What I've Learned</h4>
                <ul className="text-sm text-yellow-800 space-y-2">
                  <li>• Different devices reveal different issues</li>
                  <li>• iOS and Android can have completely different layouts</li>
                  <li>• Photo upload is often problematic on mobile</li>
                  <li>• Real devices catch issues emulators miss</li>
                  <li>• Google Pixel is important for Android updates</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Practical Tips</h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• Test orientation only if app supports it</li>
                  <li>• Focus on screen sizes your users actually use</li>
                  <li>• Always test photo/camera functionality thoroughly</li>
                  <li>• Don't rely only on emulators for final testing</li>
                  <li>• Document device-specific issues for future reference</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-100 p-4 rounded">
              <p className="text-sm text-blue-800">
                <strong>Key Takeaway:</strong> Mobile testing requires real devices to find real issues. My experience
                shows that the same app can behave completely differently on different devices, especially between iOS
                and Android platforms. Focus your testing on what users actually use.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
