import { CogIcon as Cogs, Atom, Link, Monitor, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FunctionalSection() {
  return (
    <section id="functional" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Cogs className="text-2xl text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Functional Testing</h2>
              <p className="text-gray-600">Testing what the system does</p>
            </div>
          </div>

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
  )
}
