import { CuboidIcon as Cube, Code, RotateCcw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BlackWhiteBoxSection() {
  return (
    <section id="blackbox-whitebox" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gray-100 p-3 rounded-lg">
              <Cube className="text-2xl text-gray-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Black Box vs White Box Testing</h2>
              <p className="text-gray-600">Testing approaches based on code knowledge</p>
            </div>
          </div>

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
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
