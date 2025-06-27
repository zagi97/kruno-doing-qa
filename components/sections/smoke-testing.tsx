import { Flame, CheckCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SmokeTestingSection() {
  return (
    <section id="smoke-testing" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Flame className="text-2xl text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Smoke Testing</h2>
              <p className="text-gray-600">Basic functionality verification</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* What is Smoke Testing */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">What is Smoke Testing?</h3>
              <p className="text-gray-700 mb-4">
                Smoke testing is a preliminary testing approach that verifies the basic functionality of an application
                to ensure it's stable enough for further detailed testing. It's also known as "Build Verification
                Testing."
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Key Characteristics:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Quick and shallow testing</li>
                    <li>• Tests critical functionalities only</li>
                    <li>• Performed after new build deployment</li>
                    <li>• Determines if build is stable for testing</li>
                    <li>• Usually automated</li>
                    <li>• Takes 30 minutes to 2 hours</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Purpose:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Verify application launches successfully</li>
                    <li>• Check critical paths work</li>
                    <li>• Ensure basic functionality is intact</li>
                    <li>• Save time by catching major issues early</li>
                    <li>• Decide if detailed testing should proceed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Smoke Testing Process */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Smoke Testing Process</h3>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                    <CheckCircle className="text-blue-600 mr-2 h-5 w-5" />
                    Step 1: Build Deployment
                  </h4>
                  <p className="text-gray-700 mb-3">New build is deployed to the test environment</p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Activities:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Deploy latest build to test environment</li>
                      <li>• Verify deployment was successful</li>
                      <li>• Check application starts without errors</li>
                      <li>• Confirm environment setup is correct</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Step 2: Execute Smoke Tests</h4>
                  <p className="text-gray-700 mb-3">Run predefined smoke test cases covering critical functionality</p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Test Areas:</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-1">
                        <li>• Application login/authentication</li>
                        <li>• Main navigation and menus</li>
                        <li>• Core business functions</li>
                        <li>• Database connectivity</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• API endpoints (if applicable)</li>
                        <li>• File upload/download</li>
                        <li>• Search functionality</li>
                        <li>• Basic CRUD operations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Step 3: Analyze Results</h4>
                  <p className="text-gray-700 mb-3">Evaluate test results and make go/no-go decision</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-100 p-3 rounded border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-1">✓ PASS</h5>
                      <p className="text-xs">All critical functions work. Proceed with detailed testing.</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded border border-red-200">
                      <h5 className="font-semibold text-red-800 mb-1">✗ FAIL</h5>
                      <p className="text-xs">Critical issues found. Reject build and return to development.</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-1">⚠ CONDITIONAL</h5>
                      <p className="text-xs">Minor issues found. Proceed with caution or fix first.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Smoke Test Cases */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Sample Smoke Test Cases: E-commerce Website</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-3">Critical Path Test Cases:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">User Authentication:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• TC_001: Verify application loads successfully</li>
                        <li>• TC_002: Verify user can login with valid credentials</li>
                        <li>• TC_003: Verify user can logout successfully</li>
                        <li>• TC_004: Verify registration page loads</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">Core Functionality:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• TC_005: Verify product catalog loads</li>
                        <li>• TC_006: Verify search functionality works</li>
                        <li>• TC_007: Verify add to cart function</li>
                        <li>• TC_008: Verify checkout process starts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-3">Sample Test Case Detail:</h4>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Test Case ID:</strong> TC_SMOKE_001
                        <br />
                        <strong>Title:</strong> Verify User Login
                        <br />
                        <strong>Priority:</strong> Critical
                        <br />
                        <strong>Estimated Time:</strong> 2 minutes
                      </div>
                      <div>
                        <strong>Steps:</strong>
                        <br />
                        1. Open application URL
                        <br />
                        2. Click Login button
                        <br />
                        3. Enter valid credentials
                        <br />
                        4. Click Submit
                        <br />
                        <strong>Expected:</strong> User successfully logged in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smoke vs Sanity vs Regression */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smoke vs Sanity vs Regression Testing</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-3 text-left font-semibold">Aspect</th>
                      <th className="border p-3 text-left font-semibold">Smoke Testing</th>
                      <th className="border p-3 text-left font-semibold">Sanity Testing</th>
                      <th className="border p-3 text-left font-semibold">Regression Testing</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border p-3 font-medium">Purpose</td>
                      <td className="border p-3">Verify build stability</td>
                      <td className="border p-3">Verify specific functionality</td>
                      <td className="border p-3">Verify existing features work</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">Scope</td>
                      <td className="border p-3">Broad but shallow</td>
                      <td className="border p-3">Narrow but deep</td>
                      <td className="border p-3">Broad and deep</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">When Performed</td>
                      <td className="border p-3">After new build</td>
                      <td className="border p-3">After minor changes</td>
                      <td className="border p-3">After any changes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">Time Required</td>
                      <td className="border p-3">30 min - 2 hours</td>
                      <td className="border p-3">1-3 hours</td>
                      <td className="border p-3">Several hours to days</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Automation</td>
                      <td className="border p-3">Usually automated</td>
                      <td className="border p-3">Can be manual or automated</td>
                      <td className="border p-3">Preferably automated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Smoke Testing Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-green-800 mb-2">✓ Do's:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Keep test cases simple and focused</li>
                      <li>• Automate smoke tests for efficiency</li>
                      <li>• Include only critical functionalities</li>
                      <li>• Run smoke tests before detailed testing</li>
                      <li>• Document clear pass/fail criteria</li>
                      <li>• Update smoke tests with new features</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-800 mb-2">✗ Don'ts:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Don't include detailed test scenarios</li>
                      <li>• Don't test edge cases or negative scenarios</li>
                      <li>• Don't spend too much time on smoke testing</li>
                      <li>• Don't ignore smoke test failures</li>
                      <li>• Don't make smoke tests too complex</li>
                      <li>• Don't skip smoke testing for urgent releases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Example */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                <AlertTriangle className="text-yellow-600 mr-2 h-5 w-5" />
                Real-World Scenario: Banking Application
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Situation:</h4>
                  <p className="text-sm text-gray-700">
                    New build of online banking application deployed to test environment after adding mobile payment
                    feature.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Smoke Test Results:</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-green-100 p-3 rounded">
                      <h5 className="font-semibold text-green-800">✓ Passed:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• Application loads</li>
                        <li>• User login works</li>
                        <li>• Account balance displays</li>
                        <li>• Navigation functions</li>
                      </ul>
                    </div>
                    <div className="bg-red-100 p-3 rounded">
                      <h5 className="font-semibold text-red-800">✗ Failed:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• Money transfer crashes</li>
                        <li>• Transaction history empty</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded">
                      <h5 className="font-semibold text-yellow-800">Decision:</h5>
                      <p className="text-xs mt-1">
                        Build rejected. Critical functionality broken. Return to development for fixes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
