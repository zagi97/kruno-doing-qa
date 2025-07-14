import { CuboidIcon as Cube, Code, RotateCcw, User, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function BlackWhiteBoxSection() {
  return (
    <section id="blackbox-whitebox" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Black Box vs White Box Testing"
          subtitle="Testing approaches based on code knowledge"
          icon={Cube}
        />
        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Black Box Testing */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Cube className="text-white mr-2 h-5 w-5" />
                Black Box Testing
              </h3>
              <p className="text-gray-300 mb-4">
                Testing without knowledge of internal code structure. Focus on inputs and outputs.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                  <h4 className="font-semibold mb-2 text-blue-300">Techniques:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Equivalence Partitioning</strong> - Group similar inputs
                    </li>
                    <li>
                      • <strong>Boundary Value Analysis</strong> - Test edge values
                    </li>
                    <li>
                      • <strong>Decision Table Testing</strong> - Test business rules
                    </li>
                    <li>
                      • <strong>State Transition Testing</strong> - Test state changes
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                  <h4 className="font-semibold mb-2 text-green-300">Example - Login Form:</h4>
                  <div className="text-sm space-y-1">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span className="font-medium">Input</span>
                      <span className="font-medium">Expected</span>
                      <span className="font-medium">Result</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span>Valid user/pass</span>
                      <span>Login success</span>
                      <span className="text-green-400">✓ Pass</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span>Invalid user</span>
                      <span>Login failed</span>
                      <span className="text-green-400">✓ Pass</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span>Empty fields</span>
                      <span>Validation error</span>
                      <span className="text-green-400">✓ Pass</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900 p-3 rounded">
                  <h4 className="font-semibold text-blue-200 mb-1">Real-World Use:</h4>
                  <p className="text-sm text-blue-100">
                    Testing Croatia Airlines booking system by trying different passenger counts, dates, and
                    destinations without knowing the backend database structure.
                  </p>
                </div>

                {/* My Black Box Experience */}
                <div className="bg-white text-gray-900 p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-xs font-semibold text-gray-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    This is mainly what I do! I get a Jira task → read the requirements → test the functionality on the
                    web app. I don't think about formal black box techniques, I just test what the feature should do
                    without looking at code.
                  </p>
                </div>
              </div>
            </div>

            {/* White Box Testing */}
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Code className="text-blue-600 mr-2 h-5 w-5" />
                White Box Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Testing with full knowledge of internal code structure, logic, and design.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold mb-2 text-blue-800">Techniques:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Statement Coverage</strong> - Execute every code line
                    </li>
                    <li>
                      • <strong>Branch Coverage</strong> - Test all if/else paths
                    </li>
                    <li>
                      • <strong>Path Coverage</strong> - Test all possible paths
                    </li>
                    <li>
                      • <strong>Condition Coverage</strong> - Test all conditions
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold mb-2 text-green-800">Code Example:</h4>
                  <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                    <div>if (user.isValid() && user.isActive()) {"{"}</div>
                    <div>&nbsp;&nbsp;loginUser(user);</div>
                    <div>
                      {"}"} else {"{"}
                    </div>
                    <div>&nbsp;&nbsp;showError("Invalid credentials");</div>
                    <div>{"}"}</div>
                  </div>
                  <p className="text-xs mt-2 text-gray-600">
                    Test cases: valid+active user, valid+inactive user, invalid user
                  </p>
                </div>

                <div className="bg-green-100 p-3 rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-1">Real-World Use:</h4>
                  <p className="text-sm text-green-700">
                    Unit testing payment processing code to ensure all branches (successful payment, insufficient funds,
                    network timeout) are properly tested.
                  </p>
                </div>

                {/* My White Box Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I only use white box testing for Cypress automation tests. I need to look at the code to add global
                    attributes or understand the DOM structure for my test selectors. Otherwise, developers handle most
                    white box testing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Box Testing */}
          <div className="mt-8 bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
              <RotateCcw className="text-purple-600 mr-2 h-5 w-5" />
              Gray Box Testing (Hybrid Approach)
            </h3>
            <p className="text-gray-700 mb-4">
              Combination of black box and white box testing - limited knowledge of internal workings.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">Characteristics:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Partial code knowledge</li>
                  <li>• Access to design documents</li>
                  <li>• Integration testing focus</li>
                  <li>• API testing</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">Best For:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Integration testing</li>
                  <li>• Penetration testing</li>
                  <li>• Matrix testing</li>
                  <li>• Regression testing</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">Example:</h4>
                <p className="text-sm">
                  Testing API endpoints for e-commerce cart - knowing the API structure but not the internal database
                  queries.
                </p>
              </div>
            </div>

            {/* My Gray Box Experience */}
            <div className="mt-4 bg-white p-3 rounded border border-gray-200">
              <div className="flex items-center mb-1">
                <User className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-xs font-semibold text-purple-800">My Experience:</span>
              </div>
              <p className="text-xs text-gray-600 italic">
                This describes my API testing perfectly! When I test APIs in Bruno/Postman or Swagger, I know the API
                structure and endpoints, but I don't know the internal backend code. I understand what the API should do
                but not how it's implemented.
              </p>
            </div>
          </div>

          {/* My Real Testing Approach */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              My Real Testing Approach
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">Black Box (Most Used):</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Daily workflow:</strong> Jira task → read → test on web app
                  </li>
                  <li>
                    • <strong>No code knowledge:</strong> Just test functionality
                  </li>
                  <li>
                    • <strong>Focus:</strong> Does the feature work as expected?
                  </li>
                  <li>
                    • <strong>Approach:</strong> User perspective testing
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">Gray Box (API Testing):</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Bruno/Postman:</strong> Know API structure
                  </li>
                  <li>
                    • <strong>Swagger testing:</strong> Understand endpoints
                  </li>
                  <li>
                    • <strong>Limited knowledge:</strong> API specs but not backend code
                  </li>
                  <li>
                    • <strong>Integration focus:</strong> How APIs connect
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">White Box (Cypress Only):</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Automation tests:</strong> Need to see DOM structure
                  </li>
                  <li>
                    • <strong>Global attributes:</strong> Add test selectors to code
                  </li>
                  <li>
                    • <strong>Limited use:</strong> Only for Cypress automation
                  </li>
                  <li>
                    • <strong>Purpose:</strong> Create reliable test selectors
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-green-100 p-3 rounded">
              <p className="text-sm text-green-800">
                <strong>My Reality:</strong> I mainly do black box testing without thinking about formal techniques.
                When I get a Jira task, I just test the feature like a user would. I only need code knowledge for
                Cypress tests or when testing APIs where I know the structure but not the implementation.
              </p>
            </div>
          </div>

          {/* When Each Approach is Used */}
          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">When I Use Each Approach</h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-yellow-800 mb-2">Black Box Testing Examples:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Testing new form functionality from Jira task</li>
                  <li>• Checking if login page works correctly</li>
                  <li>• Validating user permissions and role access</li>
                  <li>• Testing business workflows without seeing code</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-yellow-800 mb-2">Gray Box Testing Examples:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Testing user creation API in Bruno with known endpoints</li>
                  <li>• Validating API responses without knowing backend logic</li>
                  <li>• Integration testing between frontend and API</li>
                  <li>• Swagger testing with API documentation</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-yellow-800 mb-2">White Box Testing Examples:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Adding data-cy attributes to elements for Cypress tests</li>
                  <li>• Understanding DOM structure for automation selectors</li>
                  <li>• Looking at code to write better Cypress tests</li>
                  <li>• Global configuration changes for test environment</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-yellow-100 p-3 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Key Insight:</strong> I don't think about these categories when testing - I just use whatever
                knowledge I have available. Most of my testing is naturally black box because I test features like users
                would use them.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
