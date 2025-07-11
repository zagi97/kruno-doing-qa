import { Layers, User, Cog, CheckSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function TestingLevelsSection() {
  return (
    <section id="testing-levels" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="Testing Levels" subtitle="Different levels of software testing" icon={Layers} />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Testing Pyramid Overview */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Testing Pyramid</h3>
              <p className="text-gray-700 mb-4">
                The testing pyramid shows the ideal distribution of different types of tests in a software project. More
                tests at the bottom (unit tests) and fewer at the top (UI tests).
              </p>

              <div className="flex justify-center mb-6">
                <div className="relative w-80 h-64">
                  {/* UI Tests - Top */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-gradient-to-r from-red-400 to-red-500 border-2 border-red-600 rounded-t-lg flex items-center justify-center shadow-lg">
                    <span className="font-semibold text-white text-sm">UI Tests (2%)</span>
                  </div>

                  {/* System Tests */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-gradient-to-r from-orange-400 to-orange-500 border-2 border-orange-600 flex items-center justify-center shadow-lg">
                    <span className="font-semibold text-white text-sm">System Tests (8%)</span>
                  </div>

                  {/* Integration Tests */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-blue-600 flex items-center justify-center shadow-lg">
                    <span className="font-semibold text-white text-sm">Integration Tests (20%)</span>
                  </div>

                  {/* Unit Tests - Bottom */}
                  <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-56 h-16 bg-gradient-to-r from-green-400 to-green-500 border-2 border-green-600 rounded-b-lg flex items-center justify-center shadow-lg">
                    <span className="font-semibold text-white">Unit Tests (70%)</span>
                  </div>

                  {/* Pyramid sides for 3D effect */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[112px] border-r-[112px] border-b-[256px] border-l-transparent border-r-transparent border-b-gray-200 opacity-20 -z-10"></div>
                </div>
              </div>
            </div>

            {/* Unit Testing */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <Cog className="text-green-600 mr-2 h-5 w-5" />
                1. Unit Testing
              </h4>
              <p className="text-gray-700 mb-4">
                Testing individual components or modules in isolation. The smallest testable parts of an application.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-green-800 mb-3">Login Page Example:</h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-100 p-2 rounded flex items-center">
                      <div className="w-20 h-6 border border-gray-400 mr-2 bg-white"></div>
                      <span>Username Field → Unit Test</span>
                    </div>
                    <div className="bg-gray-100 p-2 rounded flex items-center">
                      <div className="w-20 h-6 border border-gray-400 mr-2 bg-white"></div>
                      <span>Password Field → Unit Test</span>
                    </div>
                    <div className="bg-gray-100 p-2 rounded flex items-center">
                      <div className="w-16 h-6 border border-gray-400 mr-2 bg-blue-200"></div>
                      <span>Login Button → Unit Test</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-green-800 mb-2">Characteristics:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Tests individual functions/methods</li>
                    <li>• Fast execution (milliseconds)</li>
                    <li>• Easy to write and maintain</li>
                    <li>• High code coverage possible</li>
                    <li>• Done by developers</li>
                    <li>• Uses mocks/stubs for dependencies</li>
                  </ul>
                </div>
              </div>

              {/* My Experience with Unit Testing */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-semibold text-green-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  Developers on my project handle unit testing using Java code. I focus on higher-level testing and
                  don't review unit test coverage reports - that's handled by the development team.
                </p>
              </div>

              {/* Important Clarification */}
              <div className="mt-4 bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                <h6 className="text-xs font-semibold text-yellow-800 mb-1">⚠️ Common Confusion:</h6>
                <p className="text-xs text-gray-700">
                  <strong>Testing login form fields manually or with Cypress is NOT unit testing</strong> - that's
                  functional/component testing. Unit testing is developers testing individual code functions (like
                  password validation logic) directly in code, not through the UI.
                </p>
              </div>
            </div>

            {/* Integration Testing */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <CheckSquare className="text-blue-600 mr-2 h-5 w-5" />
                2. Integration Testing
              </h4>
              <p className="text-gray-700 mb-4">
                Testing the interfaces and interaction between integrated components or systems.
              </p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-blue-800 mb-3">Integration Example:</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="bg-green-200 p-2 rounded border">Login Page</div>
                    <div className="mx-2">→</div>
                    <div className="bg-blue-200 p-2 rounded border">Database</div>
                  </div>
                  <p className="text-sm text-center">Test: Login form communicates with user database</p>
                </div>
              </div>

              {/* My Experience with Integration Testing */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-blue-600 mr-1" />
                  <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I test integrations both locally and on "test" environment. Locally, I run all services with frontend
                  and check the database directly. On test env, when something doesn't work, I use browser Network tab
                  to check requests and console for errors to identify integration issues.
                </p>
              </div>
            </div>

            {/* System Testing */}
            <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                <Layers className="text-orange-600 mr-2 h-5 w-5" />
                3. System Testing
              </h4>
              <p className="text-gray-700 mb-4">
                Testing the complete integrated system to verify it meets specified requirements.
              </p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-orange-800 mb-2">System Test Areas:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Functionality: All features work correctly</li>
                  <li>• Reliability: System stability over time</li>
                  <li>• Performance: Speed and responsiveness</li>
                  <li>• Security: Data protection and access control</li>
                </ul>
              </div>

              {/* My Experience with System Testing */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-orange-600 mr-1" />
                  <span className="text-xs font-semibold text-orange-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I do end-to-end system testing like: login → create case → put case in different states → logout. This
                  tests the complete workflow to ensure all components work together properly from start to finish.
                </p>
              </div>
            </div>

            {/* User Acceptance Testing */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                <User className="text-purple-600 mr-2 h-5 w-5" />
                4. User Acceptance Testing (UAT)
              </h4>
              <p className="text-gray-700 mb-4">
                Final testing performed by end users to ensure the system meets business requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-purple-800 mb-2">Alpha Testing:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Performed by internal users/employees</li>
                    <li>• Controlled environment</li>
                    <li>• Before beta testing</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-purple-800 mb-2">Beta Testing:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Performed by external users</li>
                    <li>• Real-world environment</li>
                    <li>• Limited user group</li>
                  </ul>
                </div>
              </div>

              {/* My Experience with UAT */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-purple-600 mr-1" />
                  <span className="text-xs font-semibold text-purple-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  UAT is handled by stakeholders and project owners on my project. They test from a business perspective
                  to ensure features meet their requirements before release.
                </p>
              </div>
            </div>

            {/* My Daily Testing Mix */}
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <User className="mr-2 h-5 w-5" />
                My Daily Testing Mix
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">My Daily Workflow:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>With Jira tasks:</strong> Manual testing, Swagger API testing, Bruno collections
                    </li>
                    <li>
                      • <strong>No tasks:</strong> Cypress automation, test maintenance, script improvements
                    </li>
                    <li>
                      • <strong>Focus areas:</strong> Functional, Integration, and System testing levels
                    </li>
                    <li>
                      • <strong>Tools:</strong> Manual testing, Cypress, Bruno, Swagger, DevTools
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-2">What I Actually Do (Higher-Level Testing):</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Functional Testing:</strong> Manual testing of login form validation rules
                    </li>
                    <li>
                      • <strong>Component Testing:</strong> Testing username/password fields with Cypress
                    </li>
                    <li>
                      • <strong>Integration Testing:</strong> Testing login form + backend API connection
                    </li>
                    <li>
                      • <strong>End-to-End Testing:</strong> Complete login workflow testing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-100 p-3 rounded">
                <p className="text-sm">
                  <strong>My Focus:</strong> I primarily work on Integration and System testing levels, combining manual
                  testing for new features with automation maintenance to ensure comprehensive coverage.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
