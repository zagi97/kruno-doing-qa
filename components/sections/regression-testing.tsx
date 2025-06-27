import { RotateCcw, RefreshCw, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function RegressionTestingSection() {
  return (
    <section id="regression-testing" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <RotateCcw className="text-2xl text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Regression Testing</h2>
              <p className="text-gray-600">Ensuring new changes don't break existing functionality</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* What is Regression Testing */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">What is Regression Testing?</h3>
              <p className="text-gray-700 mb-4">
                Regression testing is the process of testing existing software functionality to ensure that new code
                changes, bug fixes, or new features haven't negatively impacted the existing working features.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-2">Key Objectives:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Verify existing functionality still works</li>
                    <li>• Ensure new changes don't introduce bugs</li>
                    <li>• Maintain software quality and stability</li>
                    <li>• Validate system integration after changes</li>
                    <li>• Confirm bug fixes don't create new issues</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-2">When to Perform:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• After bug fixes</li>
                    <li>• After new feature implementation</li>
                    <li>• After code refactoring</li>
                    <li>• Before major releases</li>
                    <li>• After environment changes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Types of Regression Testing */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Types of Regression Testing</h3>

              <div className="grid gap-6">
                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                    <RefreshCw className="text-blue-600 mr-2 h-5 w-5" />
                    Complete Regression Testing
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Testing the entire application from scratch when major changes are made.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2">When to Use:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Major system updates</li>
                          <li>• Architecture changes</li>
                          <li>• Multiple bug fixes</li>
                          <li>• Before major releases</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Characteristics:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Time-consuming</li>
                          <li>• Resource intensive</li>
                          <li>• Comprehensive coverage</li>
                          <li>• High confidence level</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Partial Regression Testing</h4>
                  <p className="text-gray-700 mb-3">
                    Testing only the affected modules and their related functionalities.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2">When to Use:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Minor bug fixes</li>
                          <li>• Small feature additions</li>
                          <li>• Localized changes</li>
                          <li>• Quick releases</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Characteristics:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Faster execution</li>
                          <li>• Cost-effective</li>
                          <li>• Focused testing</li>
                          <li>• Risk-based approach</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-orange-900 mb-3">Selective Regression Testing</h4>
                  <p className="text-gray-700 mb-3">
                    Testing selected test cases based on code changes and impact analysis.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-3">Selection Criteria:</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h6 className="font-semibold">High Priority:</h6>
                        <ul className="space-y-1 mt-1">
                          <li>• Critical business functions</li>
                          <li>• Recently modified areas</li>
                          <li>• Integration points</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold">Medium Priority:</h6>
                        <ul className="space-y-1 mt-1">
                          <li>• Related functionalities</li>
                          <li>• Common user workflows</li>
                          <li>• Previously failed areas</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold">Low Priority:</h6>
                        <ul className="space-y-1 mt-1">
                          <li>• Stable, unchanged features</li>
                          <li>• Non-critical functions</li>
                          <li>• Rarely used features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regression Testing Process */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regression Testing Process</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Impact Analysis</h4>
                    <p className="text-sm text-gray-600">
                      Analyze code changes to identify affected areas and dependencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Test Case Selection</h4>
                    <p className="text-sm text-gray-600">
                      Choose appropriate test cases based on impact analysis and risk assessment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Test Execution</h4>
                    <p className="text-sm text-gray-600">Execute selected test cases and document results</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Result Analysis</h4>
                    <p className="text-sm text-gray-600">
                      Analyze test results and report any new defects or regressions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Example */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                <AlertCircle className="text-yellow-600 mr-2 h-5 w-5" />
                Real-World Example: E-commerce Website
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Scenario:</h4>
                  <p className="text-sm text-gray-700">
                    A bug was fixed in the payment processing module where credit card validation was failing for
                    certain card types.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Regression Test Areas:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-green-800">Direct Impact:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• Payment processing with all card types</li>
                        <li>• Credit card validation logic</li>
                        <li>• Payment confirmation flow</li>
                        <li>• Error handling for invalid cards</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800">Indirect Impact:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• Order completion process</li>
                        <li>• Shopping cart functionality</li>
                        <li>• User account updates</li>
                        <li>• Email notifications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Test Cases to Execute:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Verify payment with Visa, MasterCard, American Express</li>
                    <li>• Test payment with invalid card numbers</li>
                    <li>• Verify order completion after successful payment</li>
                    <li>• Test shopping cart persistence during payment</li>
                    <li>• Verify email confirmations are sent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Regression Testing Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-green-800 mb-2">✓ Best Practices:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Automate repetitive regression tests</li>
                      <li>• Maintain a regression test suite</li>
                      <li>• Prioritize test cases by risk and impact</li>
                      <li>• Update test cases regularly</li>
                      <li>• Use version control for test cases</li>
                      <li>• Document test results thoroughly</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-800 mb-2">✗ Common Pitfalls:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Testing everything without prioritization</li>
                      <li>• Ignoring impact analysis</li>
                      <li>• Using outdated test cases</li>
                      <li>• Not automating stable test cases</li>
                      <li>• Insufficient test coverage</li>
                      <li>• Poor communication with development team</li>
                    </ul>
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
