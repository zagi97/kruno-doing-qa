import { Hand, Bot, User, Target, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function ManualAutomationSection() {
  return (
    <section id="manual-automation" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Manual vs Automation Testing"
          subtitle="Choosing the right approach for different scenarios"
          icon={Hand}
        />
        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Manual Testing */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Hand className="text-blue-600 mr-2 h-5 w-5" />
                Manual Testing
              </h3>
              <p className="text-gray-700 mb-4">Human testers manually execute test cases without automation tools.</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-green-800">✓ Best For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Exploratory testing</li>
                    <li>• Usability testing</li>
                    <li>• Ad-hoc testing</li>
                    <li>• New feature testing</li>
                    <li>• UI/UX validation</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-red-800">✗ Limitations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Time-consuming for repetitive tasks</li>
                    <li>• Human error prone</li>
                    <li>• Not suitable for load testing</li>
                    <li>• Resource intensive</li>
                  </ul>
                </div>

                <div className="bg-blue-100 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-1">Example Scenario:</h4>
                  <p className="text-sm">
                    Testing a new checkout flow for Tesco's website - checking if the payment process feels intuitive
                    and secure to users.
                  </p>
                </div>

                {/* My Manual Testing Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    70% of my daily work is manual testing. When I get Jira tasks, I immediately do manual testing. I
                    test enhancements, new features like user editing drawers, filter pills that need to remember state
                    across pagination pages. I follow user stories and acceptance criteria to create test cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Automation Testing */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <Bot className="text-green-600 mr-2 h-5 w-5" />
                Automation Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Using tools and scripts to execute tests automatically without human intervention.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-green-800">✓ Best For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Regression testing</li>
                    <li>• Performance testing</li>
                    <li>• Repetitive test cases</li>
                    <li>• Data-driven testing</li>
                    <li>• Cross-browser testing</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-red-800">✗ Limitations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• High initial setup cost</li>
                    <li>• Maintenance overhead</li>
                    <li>• Cannot test user experience</li>
                    <li>• Requires technical skills</li>
                  </ul>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-1">Example Scenario:</h4>
                  <p className="text-sm">
                    Running 500 login test cases overnight to verify authentication works across different browsers and
                    user types.
                  </p>
                </div>

                {/* My Automation Experience */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs font-semibold text-green-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    30% of my work is Cypress automation. I've automated login page, case page, creating cases, user
                    page, creating users. I use intercept to check request/response payloads. Currently have 90-100
                    automated test cases. I automate features that are used most frequently and are really important.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Choose What */}
          <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">Decision Matrix: When to Use What</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-800 mb-2">Use Manual Testing When:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Testing new features for first time</li>
                  <li>• Exploring application behavior</li>
                  <li>• Checking visual elements</li>
                  <li>• Testing user workflows</li>
                  <li>• Performing accessibility testing</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">Use Automation When:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Tests need to run repeatedly</li>
                  <li>• Testing across multiple environments</li>
                  <li>• Performing load/stress testing</li>
                  <li>• Running smoke tests</li>
                  <li>• Doing regression testing</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">Hybrid Approach:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Automate stable, repetitive tests</li>
                  <li>• Manual testing for new features</li>
                  <li>• Use both for comprehensive coverage</li>
                  <li>• Start manual, automate over time</li>
                  <li>• Focus automation on critical paths</li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Real-World Approach */}
          <div className="mt-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
              <Target className="mr-2 h-5 w-5" />
              My Real-World Approach: 70% Manual, 30% Automation
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Hand className="mr-1 h-4 w-4" />
                  My Manual Testing (70%):
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>New Jira tasks:</strong> Always start with manual testing
                  </li>
                  <li>
                    • <strong>Enhancement features:</strong> User editing drawers, new UI components
                  </li>
                  <li>
                    • <strong>Complex scenarios:</strong> Filter pills remembering state across pagination
                  </li>
                  <li>
                    • <strong>Follow structure:</strong> User stories → Acceptance criteria → Test cases
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Bot className="mr-1 h-4 w-4" />
                  My Automation (30%):
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>90-100 Cypress tests:</strong> Login, cases, users, creating flows
                  </li>
                  <li>
                    • <strong>API validation:</strong> Intercept requests, check payloads/responses
                  </li>
                  <li>
                    • <strong>Critical features:</strong> Most frequently used, important business flows
                  </li>
                  <li>
                    • <strong>When I have time:</strong> After manual testing is complete
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-white p-3 rounded border border-gray-200">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                Example Bug Found (Manual Only):
              </h4>
              <p className="text-sm text-gray-700">
                User role change bug: When a user changes their own role, the app crashes and logs them out after 20
                seconds. This type of edge case and timing issue would be very difficult to catch with automation.
              </p>
            </div>

            <div className="mt-4 bg-white p-3 rounded border border-gray-200">
              <h4 className="font-semibold text-purple-800 mb-2">Automation Maintenance Challenge:</h4>
              <p className="text-sm text-gray-700">
                Code changes break tests - like when we create tests for a drawer, but then project owner says "I don't
                want that drawer anymore" and we have to remove/update automation. UI changes require constant test
                maintenance.
              </p>
            </div>

            <div className="mt-4 bg-purple-100 p-3 rounded">
              <p className="text-sm">
                <strong>My Strategy:</strong> Manual first for discovery and validation, then automate stable, critical
                paths. Sometimes I do both manual and automation for the same features for comprehensive coverage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
