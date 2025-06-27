import { Bug, AlertCircle, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BugReportSection() {
  return (
    <section id="bug-reporting" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <Bug className="text-2xl text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Bug Reporting</h2>
              <p className="text-gray-600">How to write effective bug reports</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Bug Report Structure */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Bug Report Components</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      1. Bug Report Title
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">Clear, concise description of the issue</p>
                    <div className="bg-red-100 p-2 rounded text-xs">
                      <strong>Example:</strong> "No error message appears when user leaves password field empty during
                      registration"
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">2. Section & Description</h4>
                    <p className="text-sm text-gray-700 mb-2">Detailed explanation of what went wrong</p>
                    <div className="bg-red-100 p-2 rounded text-xs">
                      <strong>Section:</strong> User Registration
                      <br />
                      <strong>Description:</strong> When attempting to register with empty password field, system should
                      display validation error but doesn't
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                      <Settings className="h-4 w-4 mr-2" />
                      3. Steps to Reproduce
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">Detailed steps to recreate the bug</p>
                    <div className="bg-red-100 p-2 rounded text-xs">
                      <strong>Example:</strong>
                      <br />
                      1. Open www.facebook.com
                      <br />
                      2. Click on hamburger menu (top right)
                      <br />
                      3. Navigate to Settings
                      <br />
                      4. Click on Privacy Settings
                      <br />
                      5. Change privacy settings to "Minimum Limit"
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">4. Expected vs Actual Result</h4>
                    <div className="space-y-2 text-xs">
                      <div className="bg-green-100 p-2 rounded">
                        <strong>Expected:</strong> Privacy settings should be saved successfully
                      </div>
                      <div className="bg-red-100 p-2 rounded">
                        <strong>Actual:</strong> Settings revert to previous state after page refresh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bug Priority Levels */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Bug Priority Levels</h3>

              <div className="grid gap-4">
                <div className="border-l-4 border-red-600 bg-red-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <AlertCircle className="text-red-600 mr-2 h-5 w-5" />
                    Critical Priority
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Login doesn't work - App crashes on Home Page - Critical functionality broken
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Characteristics:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• System crashes or becomes completely unusable</li>
                      <li>• Core functionality is broken</li>
                      <li>• Security vulnerabilities</li>
                      <li>• Data loss or corruption</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-orange-900 mb-3">High Priority</h4>
                  <p className="text-gray-700 mb-3">Login page slow response - User can't complete checkout process</p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Characteristics:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Important features don't work properly</li>
                      <li>• Significant impact on user experience</li>
                      <li>• Workaround exists but difficult</li>
                      <li>• Affects business operations</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-yellow-900 mb-3">Medium Priority</h4>
                  <p className="text-gray-700 mb-3">Minor UI issues - Some features have performance issues</p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Characteristics:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Feature works but with minor issues</li>
                      <li>• Easy workaround available</li>
                      <li>• Cosmetic problems</li>
                      <li>• Performance could be better</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Low Priority</h4>
                  <p className="text-gray-700 mb-3">
                    Spelling mistakes - Minor UI improvements - Nice to have features
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Characteristics:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Cosmetic issues only</li>
                      <li>• Spelling or grammar errors</li>
                      <li>• Enhancement requests</li>
                      <li>• No impact on functionality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Environment */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Test Environment Specification</h3>
              <p className="text-gray-700 mb-4">Always specify the environment where the bug was found:</p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Operating Systems:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Windows 10</li>
                    <li>• Chrome OS</li>
                    <li>• macOS</li>
                    <li>• Android 10</li>
                    <li>• iOS 13.3.1</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Browsers:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Chrome 120+</li>
                    <li>• Firefox 115+</li>
                    <li>• Safari 16+</li>
                    <li>• Edge 110+</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">Devices:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Samsung Galaxy Note 10</li>
                    <li>• iPhone 11</li>
                    <li>• iPad Pro</li>
                    <li>• Desktop 1920x1080</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bug Report Template */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bug Report Template</h3>
              <div className="bg-white p-4 rounded border font-mono text-sm">
                <div className="space-y-2">
                  <div>
                    <strong>Bug ID:</strong> BUG-001
                  </div>
                  <div>
                    <strong>Title:</strong> [Clear, descriptive title]
                  </div>
                  <div>
                    <strong>Priority:</strong> [Critical/High/Medium/Low]
                  </div>
                  <div>
                    <strong>Severity:</strong> [Critical/Major/Minor/Trivial]
                  </div>
                  <div>
                    <strong>Reporter:</strong> [Your name]
                  </div>
                  <div>
                    <strong>Date:</strong> [Date found]
                  </div>
                  <div>
                    <strong>Environment:</strong> [OS, Browser, Device]
                  </div>
                  <div>
                    <strong>Module:</strong> [Which part of application]
                  </div>
                  <div className="mt-4">
                    <strong>Steps to Reproduce:</strong>
                    <br />
                    1. [First step]
                    <br />
                    2. [Second step]
                    <br />
                    3. [Third step]
                  </div>
                  <div className="mt-4">
                    <strong>Expected Result:</strong> [What should happen]
                  </div>
                  <div className="mt-4">
                    <strong>Actual Result:</strong> [What actually happened]
                  </div>
                  <div className="mt-4">
                    <strong>Attachments:</strong> [Screenshots/Videos]
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
