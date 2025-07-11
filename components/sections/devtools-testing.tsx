import { Monitor, Network, Zap, WifiOff, Settings, Bug, Clock, Shield, User, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function DevToolsTestingSection() {
  return (
    <section id="devtools-testing" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Browser DevTools Testing"
          subtitle="Advanced testing techniques using F12 Developer Tools"
          icon={Monitor}
        />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Overview */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">What is DevTools Testing?</h3>
              <p className="text-gray-700 mb-4">
                Browser Developer Tools (F12) provide powerful capabilities for testing web applications beyond
                traditional UI testing. These tools allow QA engineers to inspect network traffic, simulate different
                conditions, debug issues, and validate performance in real-time.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Network Analysis:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Request/Response inspection</li>
                    <li>• API endpoint testing</li>
                    <li>• Request blocking</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Condition Simulation:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Offline mode testing</li>
                    <li>• Slow network speeds</li>
                    <li>• Device emulation</li>
                    <li>• Throttling CPU/Memory</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Debugging:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Console error detection</li>
                    <li>• JavaScript debugging</li>
                    <li>• Security issue identification</li>
                    <li>• Performance profiling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Network Tab Testing */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <Network className="text-green-600 mr-2 h-5 w-5" />
                Network Tab Testing
              </h4>
              <p className="text-gray-700 mb-4">
                Monitor and analyze all network requests to identify issues, validate API responses, and test error
                handling.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-green-800 mb-3">Request Inspection Techniques:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-sm mb-2">What to Check:</h6>
                      <ul className="text-xs space-y-1">
                        <li>• HTTP status codes (200, 404, 500)</li>
                        <li>• Request headers and authentication</li>
                        <li>• Response time and payload size</li>
                        <li>• API endpoint URLs and parameters</li>
                        <li>• Error responses and messages</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-sm mb-2">Test Scenarios:</h6>
                      <ul className="text-xs space-y-1">
                        <li>• Login form submission validation</li>
                        <li>• File upload progress monitoring</li>
                        <li>• Search functionality API calls</li>
                        <li>• Shopping cart update requests</li>
                        <li>• Payment processing verification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded">
                  <h6 className="font-semibold text-sm mb-2">Real Example - E-commerce Cart:</h6>
                  <div className="text-xs">
                    <p className="mb-2">
                      <strong>Test:</strong> Adding item to shopping cart
                    </p>
                    <p className="mb-1">
                      <strong>Request:</strong> POST /api/cart/add
                    </p>
                    <p className="mb-1">
                      <strong>Expected:</strong> Status 200, cart count updated
                    </p>
                    <p>
                      <strong>Validation:</strong> Response contains correct item ID and quantity
                    </p>
                  </div>
                </div>

                {/* My Network Tab Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs font-semibold text-green-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I use the Network tab daily during testing to check API requests. I've found bugs like response
                    problems, payload issues, status code problems, and missing properties in API responses. This is my
                    primary tool for debugging integration issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Request Blocking */}
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                <Bug className="text-red-600 mr-2 h-5 w-5" />
                Request Blocking Testing
              </h4>
              <p className="text-gray-700 mb-4">
                Block specific requests to test error handling and application resilience when APIs fail or are
                unavailable.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-red-800 mb-3">Common Blocking Scenarios:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-sm mb-2">What to Block:</h6>
                      <ul className="text-xs space-y-1">
                        <li>• Authentication API endpoints</li>
                        <li>• Product data loading requests</li>
                        <li>• Image/media file requests</li>
                        <li>• Analytics and tracking scripts</li>
                        <li>• Third-party integrations</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-sm mb-2">What to Validate:</h6>
                      <ul className="text-xs space-y-1">
                        <li>• Error messages are user-friendly</li>
                        <li>• Application doesn't crash</li>
                        <li>• Graceful fallback behavior</li>
                        <li>• Retry mechanisms work</li>
                        <li>• Loading states are shown</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-100 p-4 rounded">
                  <h6 className="font-semibold text-sm mb-2">How to Block Requests:</h6>
                  <div className="text-xs space-y-2">
                    <p>
                      <strong>Step 1:</strong> Open DevTools (F12) → Network tab
                    </p>
                    <p>
                      <strong>Step 2:</strong> Right-click on request → "Block request URL"
                    </p>
                    <p>
                      <strong>Step 3:</strong> Reload page to test blocked scenario
                    </p>
                    <p>
                      <strong>Step 4:</strong> Validate error handling behavior
                    </p>
                  </div>
                </div>

                {/* My Request Blocking Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-xs font-semibold text-red-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    Yes, I use request blocking to test error handling! I block API calls to see what happens when they
                    fail or are slow. This helps me verify that the application handles errors gracefully and shows
                    appropriate messages to users.
                  </p>
                </div>
              </div>
            </div>

            {/* Network Conditions */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Offline Mode Testing */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                  <WifiOff className="text-orange-600 mr-2 h-5 w-5" />
                  Offline Mode Testing
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Test Scenarios:</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Form submission when offline</li>
                      <li>• Data caching behavior</li>
                      <li>• Offline page display</li>
                      <li>• Service worker functionality</li>
                      <li>• Auto-sync when back online</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 p-2 rounded text-xs">
                    <strong>How to Test:</strong> Network tab → Offline checkbox or throttle to "Offline"
                  </div>
                </div>

                {/* My Offline Testing Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-orange-600 mr-1" />
                    <span className="text-xs font-semibold text-orange-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I test offline scenarios and slow network conditions to see how the application behaves when
                    connections are poor or unavailable. This helps identify user experience issues in real-world
                    conditions.
                  </p>
                </div>
              </div>

              {/* Slow Network Testing */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                  <Clock className="text-yellow-600 mr-2 h-5 w-5" />
                  Slow Network Testing
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Network Presets:</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Slow 3G: 400ms latency, 400kb/s</li>
                      <li>• Fast 3G: 150ms latency, 1.6Mb/s</li>
                      <li>• Custom: Set your own speeds</li>
                      <li>• 2G conditions for worst case</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded text-xs">
                    <strong>Test Focus:</strong> Loading states, timeouts, progressive loading, image optimization
                  </div>
                </div>

                {/* My Slow Network Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-yellow-600 mr-1" />
                    <span className="text-xs font-semibold text-yellow-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I use network throttling to test how the app performs on slow connections. This helps me identify
                    loading issues and ensure the application provides good feedback during slow operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Console and Performance */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Console Testing */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                  <Settings className="text-purple-600 mr-2 h-5 w-5" />
                  Console Debugging
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Error Types to Monitor:</h5>
                    <ul className="text-xs space-y-1">
                      <li>• JavaScript errors and exceptions</li>
                      <li>• Failed resource loading (404s)</li>
                      <li>• CORS policy violations</li>
                      <li>• Deprecated API warnings</li>
                      <li>• Security policy violations</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 p-2 rounded text-xs">
                    <strong>Pro Tip:</strong> Filter by Error, Warning, Info levels to focus on critical issues
                  </div>
                </div>

                {/* My Console Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-xs font-semibold text-purple-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I check the Console sometimes for JavaScript errors during testing. Since I can see what's happening
                    locally in the terminal, I mostly focus on the Network tab, but the Console helps when I need to
                    debug specific error scenarios.
                  </p>
                </div>
              </div>

              {/* Security Testing */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                  <Shield className="text-red-600 mr-2 h-5 w-5" />
                  Security Analysis
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Security Checks:</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Sensitive data in request URLs</li>
                      <li>• Unencrypted HTTP requests</li>
                      <li>• Exposed API keys or tokens</li>
                      <li>• Missing security headers</li>
                      <li>• Cookie security settings</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 p-2 rounded text-xs">
                    <strong>Warning:</strong> Never share screenshots containing sensitive authentication data
                  </div>
                </div>

                {/* My Security Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-xs font-semibold text-red-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I check if new features expose sensitive security data in API responses or requests. I look for
                    things like passwords, tokens, or other sensitive information that shouldn't be visible in the
                    Network tab.
                  </p>
                </div>
              </div>
            </div>

            {/* My DevTools Usage Reality */}
            <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                My Daily DevTools Usage vs Other Tools
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">DevTools (Daily Use):</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Network tab:</strong> Primary tool for API debugging during manual testing
                    </li>
                    <li>
                      • <strong>Request blocking:</strong> Test error handling scenarios
                    </li>
                    <li>
                      • <strong>Network throttling:</strong> Test slow/offline conditions
                    </li>
                    <li>
                      • <strong>Security checks:</strong> Look for exposed sensitive data
                    </li>
                    <li>
                      • <strong>Console monitoring:</strong> Check for JavaScript errors
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Bruno/Postman (Rare Use):</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>API test creation:</strong> Only when writing new API tests
                    </li>
                    <li>
                      • <strong>Collection management:</strong> Organizing API test suites
                    </li>
                    <li>
                      • <strong>Formal API testing:</strong> Structured API validation
                    </li>
                    <li>
                      • <strong>Documentation:</strong> API endpoint documentation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <h4 className="font-semibold text-green-800 mb-2">Bugs I've Found with DevTools:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Response problems:</strong> Incorrect data returned from APIs
                  </li>
                  <li>
                    • <strong>Payload issues:</strong> Missing or malformed request data
                  </li>
                  <li>
                    • <strong>Status code problems:</strong> Wrong HTTP status codes (should be 200 but getting 500)
                  </li>
                  <li>
                    • <strong>Missing properties:</strong> Expected fields not present in API responses
                  </li>
                  <li>
                    • <strong>Security issues:</strong> Sensitive data exposed in network requests
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-green-100 p-3 rounded">
                <p className="text-sm">
                  <strong>My Approach:</strong> DevTools is my go-to debugging tool during manual testing. I use it
                  daily to inspect API calls, test error scenarios, and validate responses. Bruno/Postman are mainly for
                  formal API test creation, but DevTools is where I do most of my real-time API debugging and issue
                  discovery.
                </p>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">DevTools Testing Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">✓ Do's:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Clear cache before testing to ensure fresh requests</li>
                    <li>• Document network timing for performance baselines</li>
                    <li>• Test with different browser profiles and extensions disabled</li>
                    <li>• Use DevTools device emulation for mobile testing</li>
                    <li>• Save HAR files for detailed analysis</li>
                    <li>• Test API endpoints directly using console</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">✗ Don'ts:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Don't ignore console warnings and errors</li>
                    <li>• Don't test only on fast, stable connections</li>
                    <li>• Don't assume network issues are backend problems</li>
                    <li>• Don't forget to test request retries and timeouts</li>
                    <li>• Don't overlook third-party script failures</li>
                    <li>• Don't share sensitive data in bug reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
