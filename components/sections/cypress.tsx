import { Bot, Code, FileText, Play, CheckCircle, ExternalLink, Monitor, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CypressSection() {
  return (
    <section id="cypress" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Bot className="text-2xl text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Cypress Automation Testing</h2>
              <p className="text-gray-600">Modern end-to-end testing framework for web applications</p>
            </div>
          </div>

          <div className="space-y-8">
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

            {/* Basic Test Example */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                <FileText className="text-purple-600 mr-2 h-5 w-5" />
                Your First Cypress Test
              </h4>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-purple-800 mb-3">Example: Login Test</h5>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                  <div className="text-gray-500">// cypress/e2e/login.cy.js</div>
                  <div className="mt-2">describe('Login Functionality', () =&gt; {"{"})</div>
                  <div>&nbsp;&nbsp;beforeEach(() =&gt; {"{"}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;cy.visit('https://example.com/login')</div>
                  <div>&nbsp;&nbsp;{"}"})</div>
                  <div className="mt-2">&nbsp;&nbsp;it('should login with valid credentials', () =&gt; {"{"}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;// Type username</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;cy.get('[data-cy="username"]').type('testuser@example.com')</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;// Type password</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;cy.get('[data-cy="password"]').type('password123')</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;// Click login button</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;cy.get('[data-cy="login-button"]').click()</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;// Verify successful login</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;cy.url().should('include', '/dashboard')</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;cy.get('[data-cy="welcome-message"]').should('be.visible')</div>
                  <div>&nbsp;&nbsp;{"}"})</div>
                  <div>{"}"})</div>
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
                      <div className="text-xs text-green-700 mt-1">Example: cy.visit('https://example.com')</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-blue-800 mb-1">cy.get(selector)</div>
                      <div className="text-xs text-gray-600">Get DOM element(s) by selector</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.get('[data-cy="submit-btn"]')</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-blue-800 mb-1">cy.click()</div>
                      <div className="text-xs text-gray-600">Click on an element</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.get('button').click()</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-blue-800 mb-1">cy.type(text)</div>
                      <div className="text-xs text-gray-600">Type text into input field</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.get('input').type('Hello World')</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-4">Assertions & Verification</h4>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.should('be.visible')</div>
                      <div className="text-xs text-gray-600">Assert element is visible</div>
                      <div className="text-xs text-green-700 mt-1">Example: cy.get('.modal').should('be.visible')</div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.should('contain', text)</div>
                      <div className="text-xs text-gray-600">Assert element contains text</div>
                      <div className="text-xs text-green-700 mt-1">
                        Example: cy.get('h1').should('contain', 'Welcome')
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.should('have.value', value)</div>
                      <div className="text-xs text-gray-600">Assert input has specific value</div>
                      <div className="text-xs text-green-700 mt-1">
                        Example: cy.get('input').should('have.value', 'test')
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="font-mono text-sm text-green-800 mb-1">cy.url().should('include', path)</div>
                      <div className="text-xs text-gray-600">Assert URL contains specific path</div>
                      <div className="text-xs text-green-700 mt-1">
                        Example: cy.url().should('include', '/dashboard')
                      </div>
                    </div>
                  </div>
                </div>
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
                <h4 className="font-semibold text-purple-800 mb-2">🎯 Learning Path Recommendation</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Start with the official Cypress documentation to understand core concepts</li>
                  <li>Follow the YouTube tutorial for hands-on practice</li>
                  <li>Practice with simple tests on your own projects</li>
                  <li>Explore advanced features like custom commands and API testing</li>
                  <li>Learn about CI/CD integration and best practices</li>
                  <li>Join the Cypress community for ongoing support and learning</li>
                </ol>
              </div>
            </div>

            {/* Why Cypress Stands Out */}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
