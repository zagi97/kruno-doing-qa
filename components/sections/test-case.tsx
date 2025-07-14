import { FileText, CheckSquare, XSquare, AlertTriangle, User, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function TestCaseSection() {
  return (
    <section id="test-cases" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="Test Case Writing" subtitle="Creating effective test cases" icon={FileText} />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* My Test Case Approach */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Test Case Writing Approach</h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border border-green-100">
                    <div className="flex items-center mb-3">
                      <User className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">My Tools & Process</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Tool:</strong> TestRail for writing and organizing test cases
                      </li>
                      <li>
                        • <strong>Template:</strong> Simple approach - only titles starting with "Verify that..."
                      </li>
                      <li>
                        • <strong>When I write:</strong> When I have time before testing, or later if "fast" testing
                        needed
                      </li>
                      <li>
                        • <strong>Detail level:</strong> Only titles, no detailed steps (works for my projects)
                      </li>
                      <li>
                        • <strong>Focus:</strong> Making sure the task/story works
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-100">
                    <div className="flex items-center mb-3">
                      <Target className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">My Workflow</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Preparation:</strong> Look at acceptance criteria
                      </li>
                      <li>
                        • <strong>Writing:</strong> Add test cases based on criteria + my edge cases
                      </li>
                      <li>
                        • <strong>Execution:</strong> Run tests in TestRail
                      </li>
                      <li>
                        • <strong>Reporting:</strong> Generate reports when finished
                      </li>
                      <li>
                        • <strong>Reuse:</strong> Use for regression and smoke testing
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-green-100 p-3 rounded">
                  <p className="text-sm text-green-800">
                    <strong>My Philosophy:</strong> Important for test cases that you have user story with acceptance
                    criteria. If you don't have that info, then you are in trouble - you don't know what you need to
                    test!
                  </p>
                </div>
              </div>
            </div>

            {/* My TestRail Example */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">My Real TestRail Examples</h3>

              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-blue-600 mr-1" />
                  <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I write test cases in TestRail with simple titles. I don't write detailed test cases because I didn't
                  need them on my last two projects - only needed to verify the task/story works.
                </p>
              </div>

              <div className="bg-white p-6 rounded border">
                <h4 className="font-semibold text-blue-800 mb-3">Test Examples:</h4>

                <div className="space-y-3">
                  <div className="grid grid-cols-12 gap-2 text-sm font-medium bg-gray-100 p-2 rounded">
                    <div className="col-span-1">ID</div>
                    <div className="col-span-11">Test Case Title (My Format)</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                    <div className="col-span-1 text-purple-600 font-mono">C385</div>
                    <div className="col-span-11">
                      Verify that user can create a new project with all required fields
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                    <div className="col-span-1 text-purple-600 font-mono">C386</div>
                    <div className="col-span-11">Verify that validation errors are shown for empty required fields</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                    <div className="col-span-1 text-purple-600 font-mono">C387</div>
                    <div className="col-span-11">
                      Verify that user receives confirmation email after project creation
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                    <div className="col-span-1 text-purple-600 font-mono">C388</div>
                    <div className="col-span-11">
                      Verify that user cannot click "Create" button when required fields are empty
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                    <div className="col-span-1 text-purple-600 font-mono">C389</div>
                    <div className="col-span-11">Verify that user get toast message after project creation</div>
                  </div>
                </div>

                <div className="mt-4 bg-blue-100 p-3 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>My Template:</strong> All test cases start with "Verify that..." and focus on what
                    functionality should work. Simple titles that clearly describe what I'm testing without detailed
                    steps.
                  </p>
                </div>
              </div>
            </div>

            {/* When I Use Test Cases vs Exploratory */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">When I Use Test Cases vs Exploratory Testing</h3>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <FileText className="h-4 w-4 text-yellow-600 mr-2" />
                      When I Write Test Cases:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <strong>Important features:</strong> When it's a critical functionality
                      </li>
                      <li>
                        • <strong>When I have time:</strong> Before testing if schedule allows
                      </li>
                      <li>
                        • <strong>Regression testing:</strong> For smoke tests and regression
                      </li>
                      <li>
                        • <strong>Complex features:</strong> When I need to track coverage
                      </li>
                      <li>
                        • <strong>With good criteria:</strong> When user story has clear acceptance criteria
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <Target className="h-4 w-4 text-yellow-600 mr-2" />
                      When I Do Exploratory:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <strong>"Fast" testing:</strong> When quick testing is needed
                      </li>
                      <li>
                        • <strong>Simple features:</strong> When functionality is straightforward
                      </li>
                      <li>
                        • <strong>Time pressure:</strong> When deadlines are tight
                      </li>
                      <li>
                        • <strong>Unclear requirements:</strong> When acceptance criteria is missing
                      </li>
                      <li>
                        • <strong>Bug investigation:</strong> When exploring issues
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-yellow-100 p-3 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>My Approach:</strong> Sometimes exploratory testing, sometimes test cases. If it's an
                    important feature, that's a good time to write test cases. The key is having good user stories with
                    acceptance criteria!
                  </p>
                </div>
              </div>
            </div>

            {/* My Test Case Creation Process */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">My Test Case Creation Process</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <Clock className="h-4 w-4 text-purple-600 mr-2" />
                    Step-by-Step Process:
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-purple-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-purple-800 font-bold">1</span>
                      </div>
                      <h5 className="font-medium text-sm">Read User Story</h5>
                      <p className="text-xs text-gray-600 mt-1">Look at acceptance criteria</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-purple-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-purple-800 font-bold">2</span>
                      </div>
                      <h5 className="font-medium text-sm">Write Test Cases</h5>
                      <p className="text-xs text-gray-600 mt-1">Based on criteria + edge cases</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-purple-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-purple-800 font-bold">3</span>
                      </div>
                      <h5 className="font-medium text-sm">Run in TestRail</h5>
                      <p className="text-xs text-gray-600 mt-1">Execute and mark results</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-purple-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-purple-800 font-bold">4</span>
                      </div>
                      <h5 className="font-medium text-sm">Generate Report</h5>
                      <p className="text-xs text-gray-600 mt-1">When testing finished</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3">What I Include in Test Cases:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-sm mb-2">From Acceptance Criteria:</h5>
                      <ul className="space-y-1 text-xs">
                        <li>• Core functionality tests</li>
                        <li>• Business rule validations</li>
                        <li>• User workflow tests</li>
                        <li>• Expected behavior verification</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-2">My Additional Edge Cases:</h5>
                      <ul className="space-y-1 text-xs">
                        <li>• Error scenarios</li>
                        <li>• Boundary value testing</li>
                        <li>• Negative test cases</li>
                        <li>• Integration points</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-semibold text-green-800">My Approach:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I keep it simple - my TestRail test cases are just titles starting with "Verify that..." I don't need
                  detailed steps because I know what to test from the acceptance criteria and my experience.
                </p>
              </div>
            </div>

            {/* Sample Test Case - Detailed Version */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Sample Detailed Test Case: User Login</h3>
              <p className="text-blue-800 text-sm mb-4">
                <em>
                  This is an example of a detailed test case structure (for reference, though I use simpler titles)
                </em>
              </p>

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
                          <td className="py-2">Verify that user can successfully login with valid credentials</td>
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

            {/* Test Execution Results */}
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
                      <li>• Start titles with "Verify that..." for clarity</li>
                      <li>• Base test cases on acceptance criteria</li>
                      <li>• Add your own edge cases</li>
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
                      <li>• Don't write test cases without acceptance criteria</li>
                      <li>• Don't over-complicate when simple titles work</li>
                      <li>• Don't ignore edge cases and error scenarios</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-purple-100 p-3 rounded">
                <p className="text-sm text-purple-800">
                  <strong>My Key Learning:</strong> The most important thing for test cases is having a user story with
                  acceptance criteria. Without that, you're in trouble because you don't know what you need to test!
                  Keep it simple but effective.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
