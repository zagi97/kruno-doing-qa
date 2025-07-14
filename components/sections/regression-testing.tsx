import { RotateCcw, RefreshCw, AlertCircle, User, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function RegressionTestingSection() {
  return (
    <section id="regression-testing" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Regression Testing"
          subtitle="Ensuring new changes don't break existing functionality"
          icon={RotateCcw}
        />
        <CardContent className="p-8">
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

            {/* My Regression Testing Approach */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Regression Testing Approach</h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs font-semibold text-green-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I focus on practical, targeted regression testing. I don't test everything - I test what's related
                    to the changes and what's important. If I tested everything all the time, I would need a lot of time
                    for testing one feature!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border border-green-100">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">After Bug Fixes</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>When dev fixes bug:</strong> I check that the bug is actually fixed
                      </li>
                      <li>
                        • <strong>Test related functionality:</strong> Check features around the bug fix
                      </li>
                      <li>
                        • <strong>Manual approach:</strong> I have Cypress tests but check manually for now
                      </li>
                      <li>
                        • <strong>Verify the fix:</strong> Make sure the original issue doesn't happen anymore
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-100">
                    <div className="flex items-center mb-3">
                      <RefreshCw className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">After New Features</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Focused testing:</strong> Only test the area of the new feature
                      </li>
                      <li>
                        • <strong>Smart approach:</strong> If new thing in user details, test user details area
                      </li>
                      <li>
                        • <strong>Don't test everything:</strong> Won't test all user management for small changes
                      </li>
                      <li>
                        • <strong>Time efficient:</strong> Avoid unnecessary testing to save time
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* My Real Regression Examples */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">My Real Regression Testing Examples</h3>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3">Example 1: Password Requirement Changes</h4>
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="flex items-center mb-1">
                      <User className="h-4 w-4 text-yellow-600 mr-1" />
                      <span className="text-xs font-semibold text-yellow-800">My Real Example:</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      "If password needs new requirement, I will test if that is fixed or created and test login etc..."
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-yellow-800 mb-2">What I Test:</h5>
                      <ul className="space-y-1">
                        <li>• Password creation with new requirements</li>
                        <li>• Login with old passwords (should still work)</li>
                        <li>• Password validation messages</li>
                        <li>• Password reset functionality</li>
                        <li>• User registration with new rules</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-800 mb-2">Why This Approach:</h5>
                      <ul className="space-y-1">
                        <li>• Tests the main change (password requirements)</li>
                        <li>• Tests related areas (login, registration)</li>
                        <li>• Doesn't test unrelated user features</li>
                        <li>• Efficient use of testing time</li>
                        <li>• Covers the risk areas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3">Example 2: User Details New Feature</h4>
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="flex items-center mb-1">
                      <User className="h-4 w-4 text-yellow-600 mr-1" />
                      <span className="text-xs font-semibold text-yellow-800">My Real Example:</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      "If something new in user details, I will check that new thing in user details but will not test
                      all about user management what is not in area of that new functionality."
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">✓ What I Test:</h5>
                      <ul className="space-y-1">
                        <li>• The new user details feature</li>
                        <li>• User details page functionality</li>
                        <li>• Saving/updating user details</li>
                        <li>• User details validation</li>
                        <li>• Related user profile features</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">✗ What I Don't Test:</h5>
                      <ul className="space-y-1">
                        <li>• All user management functions</li>
                        <li>• User permissions system</li>
                        <li>• User roles and groups</li>
                        <li>• Unrelated user features</li>
                        <li>• Entire user workflow</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3">Example 3: When Devs Ask for Specific Testing</h4>
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="flex items-center mb-1">
                      <User className="h-4 w-4 text-yellow-600 mr-1" />
                      <span className="text-xs font-semibold text-yellow-800">My Real Example:</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      "What is important in app I will test for security or devs tell me 'please check this when you
                      testing that story.'"
                    </p>
                  </div>

                  <div className="text-sm">
                    <h5 className="font-semibold text-yellow-800 mb-2">When I Expand Testing:</h5>
                    <ul className="space-y-1">
                      <li>
                        • <strong>Security-related changes:</strong> Test broader security implications
                      </li>
                      <li>
                        • <strong>Developer requests:</strong> When dev specifically asks to check something
                      </li>
                      <li>
                        • <strong>Critical app features:</strong> Test important functionality more thoroughly
                      </li>
                      <li>
                        • <strong>Integration points:</strong> When changes affect multiple systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* My Regression Testing Process */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Regression Testing Process</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Check the Change</h4>
                    <p className="text-sm text-gray-600">
                      Look at what was fixed or added - understand the scope of the change
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Test the Fix/Feature</h4>
                    <p className="text-sm text-gray-600">
                      Verify the bug is fixed or the new feature works as expected
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Test Related Areas</h4>
                    <p className="text-sm text-gray-600">
                      Test functionality in the same area or that connects to the change
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Check Critical Functions (if needed)</h4>
                    <p className="text-sm text-gray-600">
                      Test important app functions or when devs specifically ask me to check something
                    </p>
                  </div>
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

                    <div className="mt-3 bg-blue-100 p-3 rounded">
                      <div className="flex items-center mb-1">
                        <User className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="text-xs font-semibold text-blue-800">My Approach:</span>
                      </div>
                      <p className="text-xs text-blue-700 italic">
                        I rarely do complete regression testing because it takes too much time. I prefer focused testing
                        unless it's a major release or devs specifically ask for it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">
                    Partial Regression Testing (My Preferred Approach)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Testing only the affected modules and their related functionalities.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2">When I Use This:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Bug fixes (most common)</li>
                          <li>• Small feature additions</li>
                          <li>• Localized changes</li>
                          <li>• Most of my daily testing</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Why I Prefer This:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Faster execution</li>
                          <li>• Time-efficient</li>
                          <li>• Focused and practical</li>
                          <li>• Covers the real risks</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3 bg-green-100 p-3 rounded">
                      <div className="flex items-center mb-1">
                        <User className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-xs font-semibold text-green-800">My Experience:</span>
                      </div>
                      <p className="text-xs text-green-700 italic">
                        This is what I do most of the time. I test the changed area and related functionality. It's
                        practical and efficient - if I tested everything for every change, I'd never finish!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-orange-900 mb-3">Selective Regression Testing</h4>
                  <p className="text-gray-700 mb-3">
                    Testing selected test cases based on code changes and impact analysis.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-3">My Selection Criteria:</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h6 className="font-semibold">High Priority:</h6>
                        <ul className="space-y-1 mt-1">
                          <li>• The actual bug fix/feature</li>
                          <li>• Security-related areas</li>
                          <li>• What devs ask me to check</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold">Medium Priority:</h6>
                        <ul className="space-y-1 mt-1">
                          <li>• Related functionalities</li>
                          <li>• Same module/page</li>
                          <li>• Connected workflows</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold">Low Priority:</h6>
                        <ul className="space-y-1 mt-1">
                          <li>• Unrelated features</li>
                          <li>• Stable areas</li>
                          <li>• Different modules</li>
                        </ul>
                      </div>
                    </div>
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
                      <li>• Focus on changed areas and related functionality</li>
                      <li>• Be efficient with testing time</li>
                      <li>• Test what devs specifically ask you to check</li>
                      <li>• Prioritize security-related changes</li>
                      <li>• Use TestRail test cases when available</li>
                      <li>• Document test results thoroughly</li>
                      <li>• Consider automation for repetitive tests</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-800 mb-2">✗ Common Pitfalls:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Testing everything without prioritization</li>
                      <li>• Spending too much time on unrelated areas</li>
                      <li>• Ignoring what developers specifically mention</li>
                      <li>• Not testing the actual bug fix thoroughly</li>
                      <li>• Missing related functionality testing</li>
                      <li>• Not considering security implications</li>
                      <li>• Poor time management during regression</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-100 p-3 rounded">
                <p className="text-sm text-blue-800">
                  <strong>My Philosophy:</strong> Regression testing should be practical and efficient. Focus on what
                  changed and what's related. If you test everything all the time, you'll need too much time and won't
                  be efficient with your testing effort.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
