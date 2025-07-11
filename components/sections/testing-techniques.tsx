import { Target, Code, GitBranch, RotateCcw, User, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function TestingTechniquesSection() {
  return (
    <section id="testing-techniques" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Testing Techniques"
          subtitle="White-box testing methods and coverage techniques"
          icon={Target}
        />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* White Box Testing Overview */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-900 mb-4">White Box Testing Techniques</h3>
              <p className="text-gray-700 mb-4">
                White box testing techniques focus on the internal structure of the code. These techniques help ensure
                thorough testing coverage by examining different aspects of code execution.
              </p>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-pink-800 mb-2">Code Coverage Formula:</h4>
                <div className="bg-gray-100 p-3 rounded font-mono text-center">
                  <strong>Coverage = (Number of Executed Items / Total Number of Items) × 100%</strong>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <strong>Example:</strong> If code has 5 lines and you test 3 lines → Coverage = (3/5) × 100% = 60%
                </div>
              </div>
            </div>

            {/* Statement Coverage */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <Code className="text-blue-600 mr-2 h-5 w-5" />
                Statement Coverage
              </h4>
              <p className="text-gray-700 mb-4">
                Ensures that every executable statement in the code is executed at least once during testing.
              </p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-blue-800 mb-3">Example:</h5>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                  <div>function validateAge(age) {"{"}</div>
                  <div>&nbsp;&nbsp;if (age &gt;= 18) {"{"}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;return "Adult";</div>
                  <div>&nbsp;&nbsp;{"}"}</div>
                  <div>&nbsp;&nbsp;return "Minor";</div>
                  <div>{"}"}</div>
                </div>
                <p className="text-sm mt-2">
                  Test cases: validateAge(20) and validateAge(15) achieve 100% statement coverage
                </p>
              </div>

              {/* My Experience with Statement Coverage */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-blue-600 mr-1" />
                  <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I learned about statement coverage in QA courses, but as a functional tester, I don't use this
                  technique directly. Developers handle code coverage analysis while I focus on testing user scenarios
                  and business logic.
                </p>
              </div>
            </div>

            {/* Branch Coverage */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <GitBranch className="text-green-600 mr-2 h-5 w-5" />
                Branch Coverage
              </h4>
              <p className="text-gray-700 mb-4">
                Ensures that every branch (true/false) of every decision point is executed at least once.
              </p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-green-800 mb-3">Example:</h5>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                  <div>function checkAccess(age, member) {"{"}</div>
                  <div>&nbsp;&nbsp;if (age &gt;= 18 &amp;&amp; member) {"{"}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;return "Access granted";</div>
                  <div>&nbsp;&nbsp;{"}"}</div>
                  <div>&nbsp;&nbsp;return "Access denied";</div>
                  <div>{"}"}</div>
                </div>
                <p className="text-sm mt-2">Need tests for both true and false branches of the condition</p>
              </div>

              {/* My Experience with Branch Coverage */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-semibold text-green-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  While I don't measure branch coverage formally, I naturally test different conditions in my functional
                  testing - like testing features with different user roles or permission levels to ensure all paths
                  work correctly.
                </p>
              </div>
            </div>

            {/* Condition Coverage */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Condition Coverage</h4>
              <p className="text-gray-700 mb-4">
                Ensures that each boolean sub-expression has been evaluated to both true and false.
              </p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-purple-800 mb-2">Test Requirements:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Each condition must be tested as true</li>
                  <li>• Each condition must be tested as false</li>
                  <li>• More thorough than branch coverage</li>
                  <li>• May require multiple test cases</li>
                </ul>
              </div>

              {/* My Experience with Condition Coverage */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-purple-600 mr-1" />
                  <span className="text-xs font-semibold text-purple-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  This is theoretical knowledge from my QA training. In practice, I test various conditions through
                  functional testing - like testing with different user roles, active/inactive states, or different
                  input combinations.
                </p>
              </div>
            </div>

            {/* Loop Testing */}
            <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                <RotateCcw className="text-orange-600 mr-2 h-5 w-5" />
                Loop Testing
              </h4>
              <p className="text-gray-700 mb-4">
                Focuses on testing the validity of loop constructs. Different strategies for different loop types.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-orange-800 mb-2">Simple Loops:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Skip the loop entirely (n=0)</li>
                    <li>• Only one pass (n=1)</li>
                    <li>• Two passes (n=2)</li>
                    <li>• m passes (n=m, typical value)</li>
                    <li>• n-1, n, n+1 passes</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-orange-800 mb-2">Nested Loops:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Start with innermost loop</li>
                    <li>• Set outer loops to minimum</li>
                    <li>• Test innermost with simple loop strategy</li>
                    <li>• Work outward</li>
                    <li>• Continue until all tested</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-orange-800 mb-2">Concatenated Loops:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Independent loops: test separately</li>
                    <li>• Dependent loops: test as nested</li>
                    <li>• Check loop counter dependencies</li>
                    <li>• Verify data flow between loops</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-white p-4 rounded border">
                <h5 className="font-semibold text-orange-800 mb-2">Loop Testing Example:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                    <div>function sumArray(arr) {"{"}</div>
                    <div>&nbsp;&nbsp;let sum = 0;</div>
                    <div>&nbsp;&nbsp;for (let i = 0; i &lt; arr.length; i++) {"{"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;sum += arr[i];</div>
                    <div>&nbsp;&nbsp;{"}"}</div>
                    <div>&nbsp;&nbsp;return sum;</div>
                    <div>{"}"}</div>
                  </div>
                  <div className="text-sm">
                    <strong>Test Cases:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• sumArray([]) - Zero iterations</li>
                      <li>• sumArray([5]) - One iteration</li>
                      <li>• sumArray([1,2]) - Two iterations</li>
                      <li>• sumArray([1,2,3,4,5]) - Multiple iterations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* My Experience with Loop Testing */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-orange-600 mr-1" />
                  <span className="text-xs font-semibold text-orange-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I don't perform formal loop testing on code, but I do test similar scenarios functionally - like
                  testing pagination with 0 items, 1 item, multiple items, or testing filters with empty/populated lists
                  to ensure UI handles all cases properly.
                </p>
              </div>
            </div>

            {/* Path Testing */}
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-red-900 mb-3">Path Testing</h4>
              <p className="text-gray-700 mb-4">
                Tests all possible paths through the code using cyclomatic complexity.
              </p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-red-800 mb-2">Cyclomatic Complexity:</h5>
                <div className="bg-gray-100 p-2 rounded font-mono text-center text-sm">
                  <strong>V(G) = Number of decision points + 1</strong>
                </div>
                <p className="text-sm mt-2">
                  This determines the minimum number of test cases needed for path coverage
                </p>
                <div className="mt-2 text-sm text-gray-600">
                  <strong>Example:</strong> Function with 3 decision points needs minimum 4 test cases, but thorough
                  testing often requires more
                </div>
              </div>

              {/* My Experience with Path Testing */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-red-600 mr-1" />
                  <span className="text-xs font-semibold text-red-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I learned cyclomatic complexity in QA courses but don't calculate it in practice. However, I naturally
                  test different user paths through the application - like different ways to create a case, various
                  status changes, or different user roles accessing features.
                </p>
              </div>
            </div>

            {/* Coverage Comparison */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Techniques Comparison</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-3 text-left font-semibold">Technique</th>
                      <th className="border p-3 text-left font-semibold">What it Covers</th>
                      <th className="border p-3 text-left font-semibold">Strength</th>
                      <th className="border p-3 text-left font-semibold">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border p-3 font-medium">Statement</td>
                      <td className="border p-3">Every executable statement</td>
                      <td className="border p-3">Easy to measure</td>
                      <td className="border p-3">Weakest form of coverage</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">Branch</td>
                      <td className="border p-3">Every decision outcome</td>
                      <td className="border p-3">Better than statement</td>
                      <td className="border p-3">Doesn't test all conditions</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Condition</td>
                      <td className="border p-3">Every boolean condition</td>
                      <td className="border p-3">Tests individual conditions</td>
                      <td className="border p-3">May miss some decision outcomes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">Path</td>
                      <td className="border p-3">Every possible execution path</td>
                      <td className="border p-3">Most thorough</td>
                      <td className="border p-3">Can be impractical for complex code</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* My Practical Testing Approach */}
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <Book className="mr-2 h-5 w-5" />
                My Practical Testing Approach vs White-Box Theory
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">White-Box Theory (Learned in Courses):</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Statement coverage analysis</li>
                    <li>• Branch coverage calculation</li>
                    <li>• Cyclomatic complexity measurement</li>
                    <li>• Code path analysis</li>
                    <li>• Loop testing strategies</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">My Functional Testing Reality:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Testing different user scenarios</li>
                    <li>• Various role and permission combinations</li>
                    <li>• Different data states (empty, populated, invalid)</li>
                    <li>• Multiple user workflows and paths</li>
                    <li>• Business logic validation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-100 p-3 rounded">
                <p className="text-sm">
                  <strong>Key Insight:</strong> While I learned white-box techniques in QA courses, my daily work
                  focuses on black-box functional testing. However, understanding these concepts helps me appreciate the
                  testing done by developers and ensures comprehensive coverage from a user perspective.
                </p>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Testing Techniques Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">✓ Recommendations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Start with statement coverage as minimum</li>
                    <li>• Aim for 100% branch coverage</li>
                    <li>• Use condition coverage for complex logic</li>
                    <li>• Apply loop testing for all loop constructs</li>
                    <li>• Consider path testing for critical modules</li>
                    <li>• Use tools to measure coverage automatically</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Coverage Goals:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Critical systems:</strong> 100% branch coverage
                    </li>
                    <li>
                      • <strong>Commercial software:</strong> 80-90% coverage
                    </li>
                    <li>
                      • <strong>Web applications:</strong> 70-80% coverage
                    </li>
                    <li>
                      • <strong>Prototypes:</strong> 60-70% coverage
                    </li>
                    <li>• Focus on quality over quantity</li>
                    <li>• Combine with black-box techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
