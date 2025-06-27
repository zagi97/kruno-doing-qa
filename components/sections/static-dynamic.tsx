import { Play, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function StaticDynamicSection() {
  return (
    <section id="static-dynamic" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Play className="text-2xl text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Static vs Dynamic Testing</h2>
              <p className="text-gray-600">Two fundamental approaches to testing</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Static Testing */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Eye className="text-blue-600 mr-2 h-5 w-5" />
                Static Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Testing without executing the code. Reviews, walkthroughs, and analysis.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Methods:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Code Reviews</strong> - Peer review of source code
                    </li>
                    <li>
                      • <strong>Walkthroughs</strong> - Author explains code to team
                    </li>
                    <li>
                      • <strong>Inspections</strong> - Formal defect detection process
                    </li>
                    <li>
                      • <strong>Static Analysis Tools</strong> - Automated code analysis
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Early defect detection</li>
                    <li>• Cost-effective bug prevention</li>
                    <li>• Improves code quality</li>
                    <li>• Knowledge sharing</li>
                  </ul>
                </div>

                <div className="bg-blue-100 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-1">Real Example:</h4>
                  <p className="text-sm">
                    Reviewing login page HTML/CSS for accessibility issues, checking if proper form labels are used for
                    screen readers.
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Testing */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <Play className="text-green-600 mr-2 h-5 w-5" />
                Dynamic Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Testing by executing the code with various inputs and checking outputs.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Types:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Functional Testing</strong> - Testing features work correctly
                    </li>
                    <li>
                      • <strong>Performance Testing</strong> - Speed, load, stress testing
                    </li>
                    <li>
                      • <strong>Security Testing</strong> - Vulnerability assessment
                    </li>
                    <li>
                      • <strong>Usability Testing</strong> - User experience validation
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Requires test environment</li>
                    <li>• Uses test data</li>
                    <li>• Validates actual behavior</li>
                    <li>• Can be automated</li>
                  </ul>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-1">Real Example:</h4>
                  <p className="text-sm">
                    Actually filling out and submitting a login form with different username/password combinations to
                    test authentication logic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Static vs Dynamic Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left p-3 font-semibold">Aspect</th>
                    <th className="text-left p-3 font-semibold">Static Testing</th>
                    <th className="text-left p-3 font-semibold">Dynamic Testing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="p-3 font-medium">Code Execution</td>
                    <td className="p-3">No code execution</td>
                    <td className="p-3">Code is executed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">When Applied</td>
                    <td className="p-3">Early development phases</td>
                    <td className="p-3">After code completion</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-medium">Cost</td>
                    <td className="p-3">Lower cost</td>
                    <td className="p-3">Higher cost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">Defect Types</td>
                    <td className="p-3">Logic errors, syntax issues</td>
                    <td className="p-3">Runtime errors, performance issues</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
