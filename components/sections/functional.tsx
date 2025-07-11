import { CogIcon as Cogs, Atom, Link, Monitor, UserCheck, User, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function FunctionalSection() {
  return (
    <section id="functional" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="Functional Testing" subtitle="Testing what the system does" icon={Cogs} />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Overview */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">What is Functional Testing?</h3>
              <p className="text-gray-700 mb-4">
                Functional testing verifies that each function of the software application operates according to the
                requirement specification. It focuses on testing the functionality of the system.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Key Characteristics:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Based on functional requirements</li>
                    <li>• Black box testing technique</li>
                    <li>• Validates business logic</li>
                    <li>• User-centric approach</li>
                    <li>• Input-output behavior verification</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Testing Focus Areas:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• User interface functionality</li>
                    <li>• Database operations</li>
                    <li>• API functionality</li>
                    <li>• Security features</li>
                    <li>• Business workflow validation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Types of Functional Testing */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Types of Functional Testing</h3>

              {/* Unit Testing */}
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <Atom className="text-blue-600 mr-2 h-5 w-5" />
                  Unit Testing
                </h4>
                <p className="text-gray-700 mb-3">Testing individual components or modules in isolation.</p>
                <div className="bg-white p-4 rounded border">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Example - Login Function:</h5>
                      <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                        <div>function validateLogin(username, password) {"{"}</div>
                        <div>&nbsp;&nbsp;if (!username || !password) return false;</div>
                        <div>&nbsp;&nbsp;return checkCredentials(username, password);</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Test Cases:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Empty username → false</li>
                        <li>• Empty password → false</li>
                        <li>• Valid credentials → true</li>
                        <li>• Invalid credentials → false</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* My Unit Testing Experience */}
                <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    Developers handle unit testing with Java code on my project. I focus on higher-level functional
                    testing of complete features and user workflows.
                  </p>
                </div>
              </div>

              {/* Integration Testing */}
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <Link className="text-green-600 mr-2 h-5 w-5" />
                  Integration Testing
                </h4>
                <p className="text-gray-700 mb-3">Testing interaction between integrated modules.</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Big Bang Approach:</h5>
                    <p className="text-sm mb-2">All modules integrated simultaneously and tested as a whole.</p>
                    <div className="text-xs text-green-700 bg-green-100 p-2 rounded">
                      <strong>Example:</strong> Testing complete e-commerce flow: User registration → Login → Browse
                      products → Add to cart → Checkout → Payment
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Incremental Approach:</h5>
                    <p className="text-sm mb-2">Modules integrated one by one and tested at each step.</p>
                    <div className="text-xs text-green-700 bg-green-100 p-2 rounded">
                      <strong>Example:</strong> First test Login + User Database, then add Product Catalog, then
                      Shopping Cart, etc.
                    </div>
                  </div>
                </div>

                {/* My Integration Testing Experience */}
                <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs font-semibold text-green-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I test integration by adding new users via Swagger/Bruno API and then checking if they show up
                    correctly in the UI and database. I focus on testing how frontend, backend, and database components
                    work together effectively.
                  </p>
                </div>
              </div>

              {/* System Testing */}
              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                  <Monitor className="text-purple-600 mr-2 h-5 w-5" />
                  System Testing
                </h4>
                <p className="text-gray-700 mb-3">
                  Testing the complete integrated system to verify it meets specified requirements.
                </p>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-3">Real-World Example: Airlines Booking System</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-purple-100 p-3 rounded">
                      <h6 className="font-semibold">Flight Search</h6>
                      <ul className="text-xs space-y-1 mt-1">
                        <li>• Search by destination</li>
                        <li>• Filter by price/time</li>
                        <li>• Display available seats</li>
                      </ul>
                    </div>
                    <div className="bg-purple-100 p-3 rounded">
                      <h6 className="font-semibold">Booking Process</h6>
                      <ul className="text-xs space-y-1 mt-1">
                        <li>• Seat selection</li>
                        <li>• Passenger details</li>
                        <li>• Payment processing</li>
                      </ul>
                    </div>
                    <div className="bg-purple-100 p-3 rounded">
                      <h6 className="font-semibold">Confirmation</h6>
                      <ul className="text-xs space-y-1 mt-1">
                        <li>• Booking confirmation</li>
                        <li>• Email ticket</li>
                        <li>• SMS notification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* My System Testing Experience */}
                <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-xs font-semibold text-purple-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I test complete workflows like: Login → Create case → Change status on cases → Logout. This tests
                    the entire system end-to-end to ensure all components work together properly for real user
                    scenarios.
                  </p>
                </div>
              </div>

              {/* Acceptance Testing */}
              <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                  <UserCheck className="text-orange-600 mr-2 h-5 w-5" />
                  User Acceptance Testing (UAT)
                </h4>
                <p className="text-gray-700 mb-3">
                  Final testing performed by end users to ensure the system meets business requirements.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Alpha Testing:</h5>
                    <p className="text-sm mb-2">Internal testing by organization's employees.</p>
                    <div className="text-xs text-orange-700 bg-orange-100 p-2 rounded">
                      <strong>Example:</strong> Tesco employees testing new online grocery ordering system before public
                      release.
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Beta Testing:</h5>
                    <p className="text-sm mb-2">Testing by limited external users in real environment.</p>
                    <div className="text-xs text-orange-700 bg-orange-100 p-2 rounded">
                      <strong>Example:</strong> Selected customers testing new mobile banking features before full
                      rollout.
                    </div>
                  </div>
                </div>

                {/* My UAT Experience */}
                <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-orange-600 mr-1" />
                    <span className="text-xs font-semibold text-orange-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I don't directly prepare UAT scenarios - stakeholders handle UAT. However, I participate in Jira
                    comments where the main conversation about user stories happens, which helps inform UAT
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* My Functional Testing Focus */}
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                My Functional Testing Focus Areas
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Primary Testing Areas:</h4>
                  <ol className="space-y-1 text-sm list-decimal list-inside">
                    <li>
                      <strong>UI Functionality:</strong> Testing interface elements and user interactions
                    </li>
                    <li>
                      <strong>Business Logic:</strong> Validating rules, calculations, and workflows
                    </li>
                    <li>
                      <strong>End-to-End Workflows:</strong> Complete user scenarios from start to finish
                    </li>
                  </ol>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">My Current Workflow:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Login</strong> → User authentication
                    </li>
                    <li>
                      • <strong>Create case</strong> → Business process creation
                    </li>
                    <li>
                      • <strong>Change status on cases</strong> → Status management
                    </li>
                    <li>
                      • <strong>Logout</strong> → Session termination
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <h4 className="font-semibold text-blue-800 mb-2">Real Functional Bug Example:</h4>
                <p className="text-sm text-gray-700">
                  <strong>Role-based access issue:</strong> When I clicked on the "Report" page with certain user roles,
                  nothing happened - the page didn't open. This was a functional bug where the role permissions weren't
                  properly implemented in the UI logic.
                </p>
              </div>

              <div className="mt-4 bg-blue-100 p-3 rounded">
                <p className="text-sm">
                  <strong>My Approach:</strong> I focus heavily on functional testing since this is where most
                  user-facing issues occur. I test both individual features and complete business workflows to ensure
                  everything works as expected from a user perspective.
                </p>
              </div>
            </div>

            {/* Functional Test Case Example */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Sample Functional Test Case</h3>
              <div className="bg-white p-4 rounded border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Test Case: User Registration</h4>
                    <table className="w-full text-sm">
                      <tbody className="space-y-2">
                        <tr className="border-b">
                          <td className="font-medium py-2">Test ID:</td>
                          <td className="py-2">TC_REG_001</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2">Objective:</td>
                          <td className="py-2">Verify user can register successfully</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2">Precondition:</td>
                          <td className="py-2">User not registered before</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2">Priority:</td>
                          <td className="py-2">
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">High</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Test Steps & Expected Results</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-gray-50 p-2 rounded">
                        <strong>Step 1:</strong> Navigate to registration page
                        <br />
                        <em>Expected:</em> Registration form displayed
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <strong>Step 2:</strong> Fill valid details and submit
                        <br />
                        <em>Expected:</em> Success message shown
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <strong>Step 3:</strong> Check email for confirmation
                        <br />
                        <em>Expected:</em> Confirmation email received
                      </div>
                    </div>
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
