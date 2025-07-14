import { Bot, Code, FileText, Play, CheckCircle, ExternalLink, Monitor, Zap, User, Target, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function CypressSection() {
  return (
    <section id="cypress" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Cypress Automation Testing"
          subtitle="Modern end-to-end testing framework for web applications"
          icon={Bot}
        />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* My Cypress Experience */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Cypress Experience</h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs font-semibold text-green-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I've been using Cypress for about 1.5 years. I do more automation testing now and less manual
                    testing. It's cool to write Cypress tests! I had been a programmer so I know how to write code and
                    use global attributes that connect HTML and Cypress code.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border border-green-100">
                    <div className="flex items-center mb-3">
                      <Target className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">What I Automate</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>All app functionality:</strong> I test all functionality in the app
                      </li>
                      <li>
                        • <strong>API calls:</strong> Test a lot of API calls and intercept API calls
                      </li>
                      <li>
                        • <strong>User management:</strong> Creating users, user workflows
                      </li>
                      <li>
                        • <strong>Complete workflows:</strong> End-to-end user scenarios
                      </li>
                      <li>
                        • <strong>Forms and navigation:</strong> Complex form interactions
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-100">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">My Approach</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Current project:</strong> Writing Cypress tests for current project
                      </li>
                      <li>
                        • <strong>Time allocation:</strong> Few weeks to complete all tests for one role
                      </li>
                      <li>
                        • <strong>Custom commands:</strong> I use custom commands for reusable functionality
                      </li>
                      <li>
                        • <strong>Local testing:</strong> Run locally to see if tests work
                      </li>
                      <li>
                        • <strong>Self-taught:</strong> No one in company to help, learned independently
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-green-100 p-3 rounded">
                  <p className="text-sm text-green-800">
                    <strong>Programming Background Advantage:</strong> Having programming experience helps me write
                    better Cypress tests and understand how to connect HTML elements with Cypress code using global
                    attributes.
                  </p>
                </div>
              </div>
            </div>

            {/* My Real Cypress Code Examples */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">My Real Cypress Code Examples</h3>

              <div className="space-y-6">
                {/* Custom Command Example */}
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <Code className="text-purple-600 mr-2 h-5 w-5" />
                    My Custom Command: createTestUser
                  </h4>
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="flex items-center mb-1">
                      <User className="h-4 w-4 text-purple-600 mr-1" />
                      <span className="text-xs font-semibold text-purple-800">My Real Code:</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      This is my custom command for creating test users via API calls. I use this in multiple tests.
                    </p>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                    <div className="text-gray-500">// In commands.ts</div>
                    <div className="mt-2">
                      Cypress.Commands.add('createTestUser', (options: {"{"} firstName?: string; email?: string {"}"} ={" "}
                      {"{}"}){" => {"}
                    </div>
                    <div>
                      &nbsp;&nbsp;let testUserName = options.firstName || `Test User ${"{"}
                      {Date.now()}
                      {"}"}`;
                    </div>
                    <div>
                      &nbsp;&nbsp;const email = options.email || `testuser${"{"}
                      {Date.now()}
                      {"}"}
                      <span className="text-blue-400">@example.com</span>`;
                    </div>
                    <div className="mt-2">
                      &nbsp;&nbsp;return cy.window().then((win) ={">"} {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;const tspData = JSON.parse(win.localStorage.getItem('
                      <span className="text-yellow-400">TSP_DATA</span>'));
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;const authToken = tspData.jwtToken;</div>
                    <div className="mt-2">&nbsp;&nbsp;&nbsp;&nbsp;return cy.request({"{"}</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method: '<span className="text-yellow-400">POST</span>',
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: '<span className="text-blue-400">/api/user/create</span>
                      ',
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers: {"{"} Authorization: `Bearer ${"{"}token{"}"}`{" }"},
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: {"{"} email, firstName: testUserName, roleId: 1{" }"}
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;{"}"}).then((response) ={">"} {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expect(response.status).to.eq(
                      <span className="text-yellow-400">200</span>);
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {"{"} id: response.body.response.id, name: testUserName{" "}
                      {"}"};
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"});</div>
                    <div>&nbsp;&nbsp;{"}"});</div>
                    <div>{"}"});</div>
                  </div>
                </div>

                {/* Test Example */}
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <FileText className="text-purple-600 mr-2 h-5 w-5" />
                    My Real Test: Case Creation Workflow
                  </h4>
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="flex items-center mb-1">
                      <User className="h-4 w-4 text-purple-600 mr-1" />
                      <span className="text-xs font-semibold text-purple-800">My Real Test:</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      This test verifies the complete case creation workflow with API interception and form
                      interactions.
                    </p>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                    <div className="text-gray-500">// My actual test for case creation</div>
                    <div className="mt-2">
                      describe('<span className="text-yellow-400">New Case CTA buttons functionality</span>', () ={">"}{" "}
                      {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;beforeEach(() ={">"} {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;cy.login('<span className="text-blue-400">admin</span>');{" "}
                      <span className="text-gray-500">// Use real login</span>
                    </div>
                    <div>&nbsp;&nbsp;{"}"});</div>
                    <div className="mt-2">
                      &nbsp;&nbsp;it('
                      <span className="text-yellow-400">
                        should navigate to Add Case page and make expected API requests
                      </span>
                      ', () ={">"} {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.intercept</span>('
                      <span className="text-yellow-400">POST</span>', '
                      <span className="text-blue-400">/api/case/filter</span>').as('
                      <span className="text-yellow-400">getCasesTablePage</span>');
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;cy.visit('
                      <span className="text-blue-400">/#/alerts?filterRange=7&view=list</span>');
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;cy.checkSpinnerNotVisible();</div>
                    <div className="mt-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.wait</span>('
                      <span className="text-yellow-400">@getCasesTablePage</span>').then((intercept) ={">"} {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expect(intercept.response.statusCode).to.eq(
                      <span className="text-yellow-400">200</span>);
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expect(intercept.response.body.success).to.be.
                      <span className="text-yellow-400">true</span>;
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"});</div>
                    <div className="mt-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.getDataTest</span>('
                      <span className="text-yellow-400">case-create-button</span>').click();
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;cy.url().should('<span className="text-yellow-400">include</span>', '
                      <span className="text-blue-400">/create-case</span>');
                    </div>
                    <div className="mt-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Fill form fields</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.getDataTest</span>('
                      <span className="text-yellow-400">case-create-case-title</span>').type('
                      <span className="text-blue-400">Test Case Title</span>');
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.getDataTest</span>('
                      <span className="text-yellow-400">case-create-case-type-select</span>').contains('
                      <span className="text-blue-400">Alert</span>').click();
                    </div>
                    <div className="mt-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.intercept</span>('
                      <span className="text-yellow-400">POST</span>', '
                      <span className="text-blue-400">/api/case/create</span>').as('
                      <span className="text-yellow-400">createCaseRequest</span>');
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.getDataTest</span>('
                      <span className="text-yellow-400">create-case-button</span>').click();
                    </div>
                    <div className="mt-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Verify success and API response</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;cy.get('<span className="text-blue-400">.notification__text</span>
                      ').contains('<span className="text-yellow-400">Case successfully created</span>');
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">cy.wait</span>('
                      <span className="text-yellow-400">@createCaseRequest</span>').then((intercept) ={">"} {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expect(intercept.response.body.response.title).to.eq('
                      <span className="text-yellow-400">Test Case Title</span>');
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"});</div>
                    <div>&nbsp;&nbsp;{"}"});</div>
                    <div>{"}"});</div>
                  </div>
                </div>

                {/* Custom getDataTest Command */}
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3">My Custom getDataTest Command</h4>
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="flex items-center mb-1">
                      <User className="h-4 w-4 text-purple-600 mr-1" />
                      <span className="text-xs font-semibold text-purple-800">My Utility Command:</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      I use data-test attributes for reliable element selection instead of CSS selectors.
                    </p>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-gray-500">// My custom command for data-test selectors</div>
                    <div className="mt-2">
                      Cypress.Commands.add('<span className="text-yellow-400">getDataTest</span>', (dataTestSelector) =
                      {">"} {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;return cy.get(
                      <span className="text-blue-400">{'`[data-test="${dataTestSelector}"]`'}</span>);
                    </div>
                    <div>{"}"});</div>
                  </div>
                </div>
              </div>
            </div>

            {/* My Cypress Approach */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">My Cypress Testing Approach</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3">What Makes My Tests Effective:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>API Integration:</strong> Heavy use of API calls and intercepting
                    </li>
                    <li>
                      • <strong>Real data:</strong> Create actual test users and data
                    </li>
                    <li>
                      • <strong>Custom commands:</strong> Reusable functions for common actions
                    </li>
                    <li>
                      • <strong>Data attributes:</strong> Use data-test for reliable element selection
                    </li>
                    <li>
                      • <strong>Full workflows:</strong> Test complete user scenarios
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-yellow-800 mb-3">My Testing Strategy:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Role-based testing:</strong> Complete all tests for one role at a time
                    </li>
                    <li>
                      • <strong>Local execution:</strong> Run tests locally to verify functionality
                    </li>
                    <li>
                      • <strong>Self-directed learning:</strong> No team support, learned independently
                    </li>
                    <li>
                      • <strong>Programming background:</strong> Leverage coding experience
                    </li>
                    <li>
                      • <strong>Comprehensive coverage:</strong> Test all app functionality
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-yellow-100 p-3 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>My Challenge & Growth:</strong> The biggest challenge was not having anyone in the company to
                  help with Cypress. I had to learn everything independently, but my programming background helped me
                  understand the concepts quickly.
                </p>
              </div>
            </div>

            {/* Cypress Overview */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">What is Cypress?</h3>
              <p className="text-gray-700 mb-4">
                Cypress is a next-generation front-end testing tool built for the modern web. It enables you to write,
                run, and debug tests directly in the browser with real-time reloads and time-travel debugging
                capabilities.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Real-time browser testing</li>
                    <li>• Automatic waiting and retries</li>
                    <li>• Time-travel debugging</li>
                    <li>• Network traffic control</li>
                    <li>• Screenshots and videos</li>
                    <li>• Easy setup and configuration</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <Zap className="h-4 w-4 mr-2" />
                    Advantages:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Fast test execution</li>
                    <li>• Developer-friendly syntax</li>
                    <li>• Excellent debugging capabilities</li>
                    <li>• Built-in assertions</li>
                    <li>• No WebDriver needed</li>
                    <li>• Great documentation</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <Monitor className="h-4 w-4 mr-2" />
                    Use Cases:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• End-to-end testing</li>
                    <li>• Integration testing</li>
                    <li>• Unit testing</li>
                    <li>• API testing</li>
                    <li>• Visual regression testing</li>
                    <li>• Component testing</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-green-100 p-3 rounded">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-semibold text-green-800">Why I Like Cypress:</span>
                </div>
                <p className="text-xs text-green-700 italic">
                  "It's cool to write Cypress tests!" - The syntax is intuitive, and with my programming background, I
                  can create powerful tests that handle complex scenarios like API calls, user creation, and full
                  workflows.
                </p>
              </div>
            </div>

            {/* Installation & Setup */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <Code className="text-blue-600 mr-2 h-5 w-5" />
                Getting Started: Installation & Setup
              </h4>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-blue-800 mb-3">Step 1: Install Cypress</h5>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    <div className="text-gray-500"># Install via npm</div>
                    <div>npm install cypress --save-dev</div>
                    <div className="mt-2 text-gray-500"># Or install via yarn</div>
                    <div>yarn add cypress --dev</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-blue-800 mb-3">Step 2: Open Cypress Test Runner</h5>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    <div className="text-gray-500"># Open Cypress GUI</div>
                    <div>npx cypress open</div>
                    <div className="mt-2 text-gray-500"># Run tests in headless mode</div>
                    <div>npx cypress run</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Essential Cypress Commands */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Essential Cypress Commands</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">Navigation & Interaction</h4>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-blue-800 mb-1">cy.visit(url)</div>
                      <div className="text-xs text-gray-600">Navigate to a specific URL</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.visit('/#/alerts?filterRange=7')</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-blue-800 mb-1">cy.get(selector)</div>
                      <div className="text-xs text-gray-600">Get DOM element(s) by selector</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.get('[data-test="submit-btn"]')</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-blue-800 mb-1">cy.intercept(method, url)</div>
                      <div className="text-xs text-gray-600">Intercept network requests</div>
                      <div className="text-xs text-green-700 mt-1">
                        Example: cy.intercept('POST', '/api/case/create')
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-blue-800 mb-1">cy.request(options)</div>
                      <div className="text-xs text-gray-600">Make HTTP requests</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.request('POST', '/api/user/create')</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-4">Assertions & Custom Commands</h4>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.should('be.visible')</div>
                      <div className="text-xs text-gray-600">Assert element is visible</div>
                      <div className="text-xs text-green-700 mt-1">
                        Example: cy.get('.notification').should('be.visible')
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.wait('@aliasName')</div>
                      <div className="text-xs text-gray-600">Wait for intercepted request</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.wait('@createCaseRequest')</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.getDataTest(selector)</div>
                      <div className="text-xs text-gray-600">My custom command for data-test</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.getDataTest('case-create-button')</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.createTestUser(options)</div>
                      <div className="text-xs text-gray-600">My custom command for user creation</div>
                      <div className="text-xs text-green-700 mt-1">
                        Example: cy.createTestUser({"{"}firstName: 'John'{"}"})
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* My Cypress Best Practices */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">My Cypress Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3">✓ What Works for Me:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use data-test attributes for reliable element selection</li>
                    <li>• Create custom commands for reusable functionality</li>
                    <li>• Intercept API calls to verify backend integration</li>
                    <li>• Use real data creation via API calls</li>
                    <li>• Test complete user workflows, not just individual features</li>
                    <li>• Leverage programming background for complex logic</li>
                    <li>• Run tests locally first to verify functionality</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-3">✗ Challenges I've Faced:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• No team support - had to learn everything independently</li>
                    <li>• Setting up complex API interactions initially</li>
                    <li>• Managing test data and cleanup</li>
                    <li>• Debugging timing issues with dynamic content</li>
                    <li>• Not running in CI/CD yet (only local execution)</li>
                    <li>• Balancing test coverage with development time</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-purple-100 p-3 rounded">
                <p className="text-sm text-purple-800">
                  <strong>My Success Formula:</strong> Programming background + custom commands + API integration +
                  data-test attributes = Comprehensive test coverage that actually works and catches real issues!
                </p>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                <Play className="text-purple-600 mr-2 h-5 w-5" />
                Learning Resources
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3">📺 Video Tutorial</h4>
                  <div className="bg-purple-100 p-3 rounded">
                    <p className="text-sm mb-2">
                      <strong>Comprehensive Cypress Tutorial</strong>
                    </p>
                    <p className="text-xs text-gray-700 mb-3">
                      Complete guide covering installation, basic commands, advanced features, and best practices.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=u8vMu7viCm8&t=244s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-700 hover:text-purple-900 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Watch Tutorial on YouTube
                    </a>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3">📚 Official Documentation</h4>
                  <div className="bg-purple-100 p-3 rounded">
                    <p className="text-sm mb-2">
                      <strong>Cypress Official Docs</strong>
                    </p>
                    <p className="text-xs text-gray-700 mb-3">
                      Comprehensive documentation with examples, API reference, and guides for all Cypress features.
                    </p>
                    <a
                      href="https://docs.cypress.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-700 hover:text-purple-900 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit Cypress Documentation
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">🎯 My Learning Journey & Recommendations</h4>
                <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-xs font-semibold text-purple-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    "I didn't have anyone in the company to help me with Cypress - that was a challenge. I had to learn
                    everything independently using documentation and tutorials."
                  </p>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Start with the official Cypress documentation to understand core concepts</li>
                  <li>Follow hands-on tutorials to build your first tests</li>
                  <li>Practice with your own project - that's where real learning happens</li>
                  <li>Learn custom commands early - they save a lot of time</li>
                  <li>Focus on API testing and intercepting - very powerful features</li>
                  <li>Use data-test attributes for reliable element selection</li>
                  <li>Don't be afraid to ask questions in Cypress community forums</li>
                </ol>
              </div>
            </div>

            {/* My Future Plans */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">My Future Cypress Plans</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-3">Current State:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Local execution:</strong> Running tests locally to verify functionality
                    </li>
                    <li>
                      • <strong>Manual runs:</strong> I trigger test runs manually when needed
                    </li>
                    <li>
                      • <strong>Complete coverage:</strong> Working on all functionality for current role
                    </li>
                    <li>
                      • <strong>Custom commands:</strong> Building library of reusable functions
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-3">Future Goals:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>CI/CD Integration:</strong> Set up automated test runs in pipeline
                    </li>
                    <li>
                      • <strong>Cross-browser testing:</strong> Test on different browsers
                    </li>
                    <li>
                      • <strong>Parallel execution:</strong> Run tests faster with parallel runs
                    </li>
                    <li>
                      • <strong>Test reporting:</strong> Better reporting and dashboards
                    </li>
                    <li>
                      • <strong>Team adoption:</strong> Help team members learn Cypress
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-100 p-3 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Next Steps:</strong> While I currently run Cypress tests locally, I'm working towards
                  integrating them into CI/CD pipelines for automated execution. My goal is to have comprehensive test
                  coverage that runs automatically with each deployment.
                </p>
              </div>
            </div>

            {/* Why Cypress Stands Out */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Why I Choose Cypress</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-3">Programming Background Advantage:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Familiar syntax:</strong> JavaScript-based, easy to understand
                    </li>
                    <li>
                      • <strong>Code reusability:</strong> Can create complex custom commands
                    </li>
                    <li>
                      • <strong>API integration:</strong> Natural to work with REST APIs
                    </li>
                    <li>
                      • <strong>Debugging skills:</strong> Can troubleshoot test issues effectively
                    </li>
                    <li>
                      • <strong>Logic implementation:</strong> Can handle complex test scenarios
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-3">Practical Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Fast feedback:</strong> Immediate test results during development
                    </li>
                    <li>
                      • <strong>Real browser testing:</strong> Tests exactly what users experience
                    </li>
                    <li>
                      • <strong>Network control:</strong> Can mock and intercept API calls
                    </li>
                    <li>
                      • <strong>Visual debugging:</strong> See exactly what went wrong
                    </li>
                    <li>
                      • <strong>Less manual testing:</strong> Automation reduces repetitive work
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-green-100 p-3 rounded">
                <p className="text-sm text-green-800">
                  <strong>Bottom Line:</strong> Cypress fits perfectly with my programming background and allows me to
                  create comprehensive automation that covers all app functionality. It's enjoyable to write and
                  powerful enough to handle complex scenarios like user creation, API testing, and complete workflows.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
