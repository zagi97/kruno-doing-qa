import { FileText, CheckSquare, XSquare, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function TestCaseSection() {
  return (
    <section id="test-cases" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="Test Case Writing" subtitle="Creating effective test cases" icon={FileText} />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Test Case Components */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Test Case Structure</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-3">Essential Components:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        <strong>Test Case ID:</strong> Unique identifier (TC_001)
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        <strong>Test Case Title:</strong> Clear, descriptive name
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        <strong>Objective:</strong> What you're testing
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        <strong>Preconditions:</strong> Setup requirements
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        <strong>Test Steps:</strong> Detailed actions
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        <strong>Expected Results:</strong> What should happen
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        <strong>Postconditions:</strong> Cleanup steps
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-3">Test Case Attributes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Priority:</strong> High/Medium/Low
                    </li>
                    <li>
                      <strong>Test Type:</strong> Functional/Non-functional
                    </li>
                    <li>
                      <strong>Test Level:</strong> Unit/Integration/System
                    </li>
                    <li>
                      <strong>Test Data:</strong> Required input data
                    </li>
                    <li>
                      <strong>Environment:</strong> Test environment details
                    </li>
                    <li>
                      <strong>Author:</strong> Test case creator
                    </li>
                    <li>
                      <strong>Creation Date:</strong> When created
                    </li>
                    <li>
                      <strong>Execution Status:</strong> Pass/Fail/Blocked
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sample Test Case */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Sample Test Case: User Login</h3>

              <div className="bg-white p-6 rounded border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <table className="w-full text-sm">
                      <tbody className="space-y-2">
                        <tr className="border-b">
                          <td className="font-medium py-2 pr-4">Test Case ID:</td>
                          <td className="py-2">TC_LOGIN_001</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 pr-4">Title:</td>
                          <td className="py-2">Verify successful login with valid credentials</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 pr-4">Objective:</td>
                          <td className="py-2">Test login functionality with correct username and password</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 pr-4">Priority:</td>
                          <td className="py-2">
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">High</span>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 pr-4">Precondition:</td>
                          <td className="py-2">User has valid account, browser is open</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 pr-4">Test Data:</td>
                          <td className="py-2">
                            Username: testuser@example.com
                            <br />
                            Password: Test123!
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Test Steps & Expected Results:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-gray-50 p-3 rounded">
                        <strong>Step 1:</strong> Navigate to login page (www.example.com/login)
                        <br />
                        <em className="text-green-700">Expected:</em> Login form is displayed with username and password
                        fields
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <strong>Step 2:</strong> Enter valid username in username field
                        <br />
                        <em className="text-green-700">Expected:</em> Username is entered successfully
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <strong>Step 3:</strong> Enter valid password in password field
                        <br />
                        <em className="text-green-700">Expected:</em> Password is masked and entered successfully
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <strong>Step 4:</strong> Click Login button
                        <br />
                        <em className="text-green-700">Expected:</em> User is redirected to dashboard page
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <strong>Step 5:</strong> Verify user is logged in
                        <br />
                        <em className="text-green-700">Expected:</em> User profile/logout option is visible
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Case Execution Results */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Test Execution Results</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                    <CheckSquare className="text-green-600 mr-2 h-5 w-5" />
                    PASSED
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Definition:</strong> Test executed successfully and met all expected results
                    </p>
                    <p>
                      <strong>Action:</strong> Mark as passed, move to next test case
                    </p>
                    <p>
                      <strong>Documentation:</strong> Record execution date and tester name
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <XSquare className="text-red-600 mr-2 h-5 w-5" />
                    FAILED
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Definition:</strong> Test did not meet expected results, defect found
                    </p>
                    <p>
                      <strong>Action:</strong> Create bug report, assign to development team
                    </p>
                    <p>
                      <strong>Documentation:</strong> Record failure details and attach evidence
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                    <AlertTriangle className="text-yellow-600 mr-2 h-5 w-5" />
                    BLOCKED
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Definition:</strong> Test cannot be executed due to external factors
                    </p>
                    <p>
                      <strong>Action:</strong> Identify and resolve blocking issue
                    </p>
                    <p>
                      <strong>Documentation:</strong> Record reason for blocking and resolution steps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Case Best Practices */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Test Case Writing Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-purple-800 mb-2">✓ Do's:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Write clear, concise test steps</li>
                      <li>• Use simple language</li>
                      <li>• Include specific test data</li>
                      <li>• Make test cases independent</li>
                      <li>• Cover both positive and negative scenarios</li>
                      <li>• Review and update regularly</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-800 mb-2">✗ Don'ts:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Don't write vague or ambiguous steps</li>
                      <li>• Don't assume prior knowledge</li>
                      <li>• Don't create dependent test cases</li>
                      <li>• Don't skip expected results</li>
                      <li>• Don't use complex technical jargon</li>
                      <li>• Don't forget to specify test data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
