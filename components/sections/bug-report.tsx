"use client";

import { useState, useEffect } from "react";
import { Bug, AlertTriangle, CheckCircle, Clock, User, FileText, Camera, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function BugReportSection() {
  const [currentDate, setCurrentDate] = useState<string>("");

  // Only set date on client side to avoid hydration mismatch
  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <section id="bug-reporting" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="Bug Reporting" subtitle="Effective defect identification and documentation" icon={Bug} />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* What is a Bug */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-4">What is a Bug?</h3>
              <p className="text-gray-700 mb-4">
                A bug (or defect) is a flaw in a software system that causes it to behave in an unintended or unexpected
                way. It represents a deviation from the expected functionality as defined in the requirements.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Types of Bugs:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Functional bugs</li>
                    <li>• Performance issues</li>
                    <li>• UI/UX problems</li>
                    <li>• Security vulnerabilities</li>
                    <li>• Compatibility issues</li>
                    <li>• Data corruption</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Common Causes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Coding errors</li>
                    <li>• Requirement misunderstanding</li>
                    <li>• Design flaws</li>
                    <li>• Integration issues</li>
                    <li>• Environmental factors</li>
                    <li>• Human mistakes</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Impact Areas:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• User experience</li>
                    <li>• System performance</li>
                    <li>• Data integrity</li>
                    <li>• Business operations</li>
                    <li>• Security risks</li>
                    <li>• Financial losses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* My Bug Reporting Workflow */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Bug Reporting Workflow</h3>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-2 border-blue-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border border-blue-100">
                    <div className="flex items-center mb-3">
                      <User className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-900">My Tools & Process</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Primary tool:</strong> Jira for all bug reports
                      </li>
                      <li>
                        • <strong>Alternative:</strong> Teams planner or Teams channel (if agreed by team)
                      </li>
                      <li>
                        • <strong>Key principle:</strong> Consistency - bugs in ONE place, not 2-3-4 places
                      </li>
                      <li>
                        • <strong>Evidence tool:</strong> ScreenRec app for recording videos
                      </li>
                      <li>
                        • <strong>Process:</strong> Find bug → Go to Jira → Create bug report with my structure
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-blue-100">
                    <div className="flex items-center mb-3">
                      <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-900">Communication & Decision Making</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Priority/Severity:</strong> Sometimes project manager/team lead helps, sometimes I
                        decide
                      </li>
                      <li>
                        • <strong>Assignment:</strong> I assign developers to tickets
                      </li>
                      <li>
                        • <strong>Discussion:</strong> We talk about bugs on daily standup or calls
                      </li>
                      <li>
                        • <strong>Unclear bugs:</strong> Really rarely from my side, but I fix if needed
                      </li>
                      <li>
                        • <strong>Challenge:</strong> Sometimes get stories with no acceptance criteria or just title
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-blue-100 p-3 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>My Philosophy:</strong> Consistency is important - have bug reports in one place, not
                    scattered across multiple tools. Always follow the same template and structure for clear
                    communication.
                  </p>
                </div>
              </div>
            </div>

            {/* My Bug Report Template */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Bug Report Template</h3>
              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs font-semibold text-gray-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I follow a specific template and always use it. This is my consistent structure for every bug report
                  in Jira.
                </p>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                  <h4 className="text-white font-semibold text-lg">My Jira Bug Report Template</h4>
                  <p className="text-blue-100 text-sm">Structure I use for every bug report</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">
                          Login button not responding on mobile Safari
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">Always / Sometimes / Rarely</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Steps to Reproduce</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm space-y-1">
                          <div>1. Open application on iOS device</div>
                          <div>2. Navigate to login page</div>
                          <div>3. Enter valid credentials</div>
                          <div>4. Tap login button</div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expected Result</label>
                        <div className="bg-green-50 p-3 rounded border border-green-200 text-sm">
                          User should be logged in and redirected to dashboard
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Actual Results</label>
                        <div className="bg-red-50 p-3 rounded border border-red-200 text-sm">
                          Login button does not respond to touch events
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Version Used</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">v2.1.3</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">OS</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">iOS 16.0</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Browser</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">Safari</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Env</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">Testing environment</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Screen Resolution</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">1170 x 2532</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Device</label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">iPhone 14 Pro</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Build (for mobile testing)
                        </label>
                        <div className="bg-gray-50 p-3 rounded border text-sm">Build 2024.01.15</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Workaround (sometimes using)
                      </label>
                      <div className="bg-yellow-50 p-3 rounded border border-yellow-200 text-sm">
                        Use desktop version or refresh page twice
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Notes (sometimes using)</label>
                      <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm">
                        Issue occurs only on iOS Safari, works fine on Chrome mobile
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Evidence</label>
                    <div className="bg-gray-50 p-3 rounded border text-sm flex items-center">
                      <Camera className="h-4 w-4 text-gray-500 mr-2" />
                      <span>📷 Always include screenshots, 🎥 Sometimes ScreenRec video recordings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bug Lifecycle */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Bug Lifecycle</h3>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Bug Status Flow</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded border text-center">
                    <div className="bg-blue-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-800 font-bold">1</span>
                    </div>
                    <h5 className="font-semibold text-blue-800">New</h5>
                    <p className="text-xs text-gray-600 mt-1">Bug discovered and reported</p>
                  </div>

                  <div className="bg-white p-4 rounded border text-center">
                    <div className="bg-yellow-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-yellow-800 font-bold">2</span>
                    </div>
                    <h5 className="font-semibold text-yellow-800">Assigned</h5>
                    <p className="text-xs text-gray-600 mt-1">Assigned to developer for fixing</p>
                  </div>

                  <div className="bg-white p-4 rounded border text-center">
                    <div className="bg-purple-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-purple-800 font-bold">3</span>
                    </div>
                    <h5 className="font-semibold text-purple-800">Fixed</h5>
                    <p className="text-xs text-gray-600 mt-1">Developer has resolved the issue</p>
                  </div>

                  <div className="bg-white p-4 rounded border text-center">
                    <div className="bg-green-100 p-2 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-green-800 font-bold">4</span>
                    </div>
                    <h5 className="font-semibold text-green-800">Closed</h5>
                    <p className="text-xs text-gray-600 mt-1">Bug verified as fixed and closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Priority vs Severity */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Priority vs Severity</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <AlertTriangle className="text-yellow-600 mr-2 h-5 w-5" />
                    Severity
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Impact on system functionality</strong> - How much the bug affects the system's operation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Critical</span>
                      <span className="text-xs">System crash, data loss</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Major</span>
                      <span className="text-xs">Feature not working</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        Medium
                      </span>
                      <span className="text-xs">UI issues, typos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Low</span>
                      <span className="text-xs">Cosmetic issues</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <Clock className="text-yellow-600 mr-2 h-5 w-5" />
                    Priority
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Urgency of fixing</strong> - How quickly the bug needs to be resolved based on business
                    needs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">High</span>
                      <span className="text-xs">Fix immediately</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                        Medium
                      </span>
                      <span className="text-xs">Fix in current release</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Low</span>
                      <span className="text-xs">Fix in future release</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-white p-4 rounded border">
                <h5 className="font-semibold text-yellow-800 mb-2">Example Scenarios:</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-50 p-3 rounded">
                    <strong>High Priority + Critical Severity:</strong> Payment system crashes during checkout
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <strong>High Priority + Low Severity:</strong> Company logo missing on homepage before product
                    launch
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <strong>Low Priority + Critical Severity:</strong> Admin panel crashes (affects few users)
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Low Priority + Low Severity:</strong> Text alignment issue in footer
                  </div>
                </div>
              </div>
            </div>

            {/* My Priority Examples - Connected to above */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">My Priority & Severity Examples</h3>

              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-yellow-600 mr-1" />
                  <span className="text-xs font-semibold text-yellow-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  Sometimes project manager or team lead helps me decide priority and severity, but sometimes I decide
                  myself based on user impact.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                    <AlertTriangle className="text-red-600 mr-2 h-5 w-5" />
                    High Priority Examples
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-medium text-red-800">User cannot login</p>
                      <p className="text-xs text-red-600 mt-1">
                        <strong>Why high priority:</strong> Blocks core functionality, affects all users
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-medium text-red-800">Payment processing fails</p>
                      <p className="text-xs text-red-600 mt-1">
                        <strong>Why high priority:</strong> Direct business impact, revenue loss
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <Clock className="text-yellow-600 mr-2 h-5 w-5" />
                    Low Priority Examples
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <p className="text-sm font-medium text-yellow-800">
                        Login page shows "Username" instead of "userName"
                      </p>
                      <p className="text-xs text-yellow-600 mt-1">
                        <strong>Why low priority:</strong> User can still login, only text is wrong
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <p className="text-sm font-medium text-yellow-800">Button text alignment slightly off</p>
                      <p className="text-xs text-yellow-600 mt-1">
                        <strong>Why low priority:</strong> Cosmetic issue, doesn't affect functionality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* My Testing Challenges */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-World Testing Challenges</h3>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                  <h4 className="text-lg font-semibold text-orange-900">Challenges I Face as QA</h4>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-orange-600 mr-1" />
                    <span className="text-xs font-semibold text-orange-800">My Real Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    Sometimes as QA you get really bad stories with no acceptance criteria, or sometimes without story
                    and you only have title. Then you need to ask devs, team lead, or project manager what they mean
                    with that story.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-orange-800 mb-2">Common Issues I Encounter:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Stories with no acceptance criteria</li>
                      <li>• Tasks with only a title, no description</li>
                      <li>• Unclear requirements from stakeholders</li>
                      <li>• Missing edge case scenarios</li>
                      <li>• Ambiguous business rules</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-orange-800 mb-2">How I Handle These Situations:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Ask developers for clarification</li>
                      <li>• Reach out to team lead or project manager</li>
                      <li>• Request proper acceptance criteria</li>
                      <li>• Clarify scope and expected behavior</li>
                      <li>• Document assumptions and get approval</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-orange-100 p-3 rounded">
                  <p className="text-sm text-orange-800">
                    <strong>Key Learning:</strong> As QA, you often need to be proactive in getting the information you
                    need to test properly. Don't assume - always ask for clarification when requirements are unclear.
                  </p>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Bug Reporting Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <CheckCircle className="text-green-600 mr-2 h-4 w-4" />✓ Do's:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Write clear, descriptive titles</li>
                    <li>• Provide detailed steps to reproduce</li>
                    <li>• Include screenshots/videos</li>
                    <li>• Specify environment details</li>
                    <li>• Set appropriate priority and severity</li>
                    <li>• Test on multiple environments</li>
                    <li>• Verify bug before reporting</li>
                    <li>• Use consistent template structure</li>
                    <li>• Keep all bugs in one place (like Jira)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">✗ Don'ts:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Don't use vague descriptions</li>
                    <li>• Don't report duplicate bugs</li>
                    <li>• Don't skip reproduction steps</li>
                    <li>• Don't assume everyone knows the context</li>
                    <li>• Don't report multiple issues in one bug</li>
                    <li>• Don't forget to include evidence</li>
                    <li>• Don't set wrong priority/severity</li>
                    <li>• Don't scatter bugs across multiple tools</li>
                    <li>• Don't test without proper requirements</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-green-100 p-3 rounded">
                <p className="text-sm text-green-800">
                  <strong>My Approach:</strong> Always use the same template structure, keep bugs in one place for
                  consistency, include screenshots/videos, and ask for clarification when requirements are unclear.
                  Clear communication is key!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
