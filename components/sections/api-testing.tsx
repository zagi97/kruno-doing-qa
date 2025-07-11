import {
  Server,
  Code,
  CheckCircle,
  XCircle,
  Shield,
  Zap,
  AlertCircle,
  ArrowRight,
  User,
  Settings,
  Play,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

const httpMethods = [
  {
    method: "GET",
    title: "Retrieve Data",
    description: "Idempotent (safe to repeat), no request body, data in URL parameters, cacheable",
    characteristics: ["Safe to repeat", "No side effects", "Can be cached", "Query parameters"],
    color: "bg-green-100 text-green-800",
  },
  {
    method: "POST",
    title: "Create Resource",
    description: "Not idempotent, request body contains data, creates new resource, not cacheable",
    characteristics: ["Creates new data", "Request body required", "Not safe to repeat", "Returns created resource"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    method: "PUT",
    title: "Update/Replace Resource",
    description: "Idempotent, complete data in body, updates existing resource, replaces entire resource",
    characteristics: ["Replaces entire resource", "Idempotent", "Full data required", "Updates existing"],
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    method: "PATCH",
    title: "Partial Update",
    description: "Not idempotent, partial data in body, updates specific fields only",
    characteristics: ["Partial updates", "Not idempotent", "Specific fields", "More efficient"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    method: "DELETE",
    title: "Remove Resource",
    description: "Idempotent, may have request body, removes resource, safe to repeat",
    characteristics: ["Removes data", "Idempotent", "Safe to repeat", "May return deleted data"],
    color: "bg-red-100 text-red-800",
  },
];

const statusCodes = [
  {
    category: "2xx Success",
    codes: [
      { code: "200", name: "OK", description: "Request successful", usage: "GET, PUT, PATCH responses" },
      { code: "201", name: "Created", description: "Resource created successfully", usage: "POST responses" },
      { code: "204", name: "No Content", description: "Success, no content to return", usage: "DELETE responses" },
      { code: "202", name: "Accepted", description: "Request accepted for processing", usage: "Async operations" },
    ],
    color: "border-green-500 bg-green-50",
  },
  {
    category: "4xx Client Errors",
    codes: [
      {
        code: "400",
        name: "Bad Request",
        description: "Invalid request format",
        usage: "Malformed JSON, missing fields",
      },
      { code: "401", name: "Unauthorized", description: "Authentication required", usage: "Missing or invalid token" },
      { code: "403", name: "Forbidden", description: "Access denied", usage: "Valid auth but no permission" },
      { code: "404", name: "Not Found", description: "Resource not found", usage: "Invalid endpoint or ID" },
      {
        code: "422",
        name: "Unprocessable Entity",
        description: "Validation errors",
        usage: "Valid format but business logic fails",
      },
    ],
    color: "border-yellow-500 bg-yellow-50",
  },
  {
    category: "5xx Server Errors",
    codes: [
      { code: "500", name: "Internal Server Error", description: "Server error", usage: "Unexpected server issues" },
      { code: "502", name: "Bad Gateway", description: "Gateway error", usage: "Upstream server issues" },
      {
        code: "503",
        name: "Service Unavailable",
        description: "Service temporarily unavailable",
        usage: "Maintenance or overload",
      },
      { code: "504", name: "Gateway Timeout", description: "Gateway timeout", usage: "Upstream server timeout" },
    ],
    color: "border-red-500 bg-red-50",
  },
];

const bestPractices = {
  dos: [
    "Test early and often - Include API tests in CI/CD pipeline",
    "Use proper assertions - Validate status codes, headers, and response body",
    "Test negative scenarios - Invalid inputs, missing data, edge cases",
    "Use environment variables - Don't hardcode URLs, API keys, or tokens",
    "Monitor response times - Set performance benchmarks and validate",
    "Validate response structure - Use schema validation for consistency",
    "Test authentication - Valid/invalid tokens, expired sessions",
    "Use dynamic test data - Generate unique data for each test run",
    "Document your tests - Clear descriptions and expected outcomes",
    "Clean up test data - Remove created test resources after testing",
  ],
  donts: [
    "Don't test only happy path - Include error scenarios and edge cases",
    "Don't hardcode test data - Use variables and generators for flexibility",
    "Don't ignore response headers - Validate content-type, cache headers",
    "Don't skip security testing - Test authorization, input validation",
    "Don't ignore rate limits - Respect API throttling and quotas",
    "Don't rely only on status codes - Validate actual response content",
    "Don't forget cleanup - Remove test data to avoid pollution",
    "Don't skip boundary testing - Test limits, large payloads, edge values",
    "Don't ignore error messages - Validate error response format and content",
    "Don't test in production - Use dedicated test environments",
  ],
};

const myBrunoExamples = [
  {
    operation: "CREATE TENANT",
    method: "POST",
    endpoint: "{{baseUrl}}/tenant/create",
    realExample: true,
    requestBody: {
      basicInfo: {
        name: "Create Tenant with Bruno",
        shortName: "F22",
        color: "#3EB43E",
        note: "",
        domain: "B341",
        typeId: 1,
        sector: "COMMUNICATIONS_INFORMATION_TECHNOLOGY",
      },
      projectService: {
        responseHours: 5,
        flashAlertReminderNo: 3,
        contractStart: null,
        contractEnd: null,
        serviceActivationDate: "2025-05-26T11:16:44.987Z",
      },
    },
    validations: [
      "Status code is 200",
      "Domain uniqueness validation",
      "Response contains tenant ID",
      "Body success and response validation",
      "Environment variable updates",
    ],
    color: "border-green-500",
  },
];

const myTestingApproach = {
  workflow: [
    {
      step: "1. Developer creates new endpoint",
      action: "Wait for endpoint to be ready",
      frequency: "Rarely - only when new endpoints are created",
    },
    {
      step: "2. Write Bruno test collection",
      action: "Create new API test in Bruno",
      frequency: "Really rarely - when devs write new endpoint",
    },
    {
      step: "3. Test CRUD operations",
      action: "Test Create, Read, Update, Delete operations",
      frequency: "When applicable to the endpoint",
    },
    {
      step: "4. Validate responses",
      action: "Check status codes, response structure, business logic",
      frequency: "Always in every test",
    },
    {
      step: "5. Run existing tests",
      action: "Execute test collections for regression",
      frequency: "As part of testing process",
    },
  ],
};

export function ApiTestingSection() {
  return (
    <section id="api-testing" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="API Testing" subtitle="Modern API testing strategies and tools" icon={Server} />
        <CardContent className="p-8">
          {/* What is API Testing */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What is API Testing?</h3>
            <p className="text-gray-700 mb-6">
              API (Application Programming Interface) testing is a type of software testing that involves testing APIs
              directly and as part of integration testing to determine if they meet expectations for functionality,
              reliability, performance, and security. It focuses on data exchange between different software systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Key Characteristics</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Tests business logic layer directly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>No user interface dependency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Focus on data exchange validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Backend system integration testing</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-900 mb-3">Why API Testing is Critical</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>APIs are backbone of modern microservices</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>10x faster execution than UI tests</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Early detection of integration issues</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                    <span>Independent of frontend changes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Bruno vs Postman Experience */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My API Testing Tools Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <Code className="text-purple-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-purple-900">Bruno (My Choice)</h4>
                </div>

                {/* My Bruno Experience */}
                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-xs font-semibold text-purple-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I prefer Bruno because it's free and simple to use. I only use Bruno because it has free collections
                    - unlimited collections vs Postman's 3-collection limit. While Postman has a better UI, Bruno meets
                    all my API testing needs without cost limitations.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-3">Why I Choose Bruno:</h5>
                  <ul className="text-sm text-purple-800 space-y-2">
                    <li>• Completely free with unlimited collections</li>
                    <li>• Simple and straightforward to use</li>
                    <li>• No account required</li>
                    <li>• Meets all my testing needs</li>
                    <li>• Environment variables and scripting support</li>
                    <li>• Git-friendly for version control</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <Server className="text-orange-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-orange-900">Postman (Limited Use)</h4>
                </div>

                {/* My Postman Experience */}
                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-orange-600 mr-1" />
                    <span className="text-xs font-semibold text-orange-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    Postman has a better UI design and more polished interface, but the free tier limitation of only 3
                    collections makes it impractical for my needs. I need more flexibility for different API test
                    collections.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-red-700 mb-3">Why I Don't Use Postman:</h5>
                  <ul className="text-sm text-orange-800 space-y-2">
                    <li>• Limited to 3 collections in free tier</li>
                    <li>• Not enough for multiple projects</li>
                    <li>• Need to pay for more collections</li>
                    <li>• Bruno provides same functionality for free</li>
                  </ul>
                </div>

                {/* Tool Comparison Table */}
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-gray-900 mb-2">My Comparison</h5>
                  <div className="space-y-2 text-xs">
                    <div className="grid grid-cols-3 gap-2 font-medium text-gray-700">
                      <span>Aspect</span>
                      <span>Bruno</span>
                      <span>Postman</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span>Collections</span>
                      <span className="text-green-600">Unlimited ✓</span>
                      <span className="text-red-600">3 only ✗</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span>UI Design</span>
                      <span className="text-yellow-600">Simple</span>
                      <span className="text-green-600">Better ✓</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span>Cost</span>
                      <span className="text-green-600">Free ✓</span>
                      <span className="text-red-600">$12+/month</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span>My Choice</span>
                      <span className="text-green-600">Yes ✓</span>
                      <span className="text-red-600">No ✗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Testing Workflow */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My API Testing Workflow</h3>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                How I Actually Work with API Testing
              </h4>

              <div className="space-y-4">
                {myTestingApproach.workflow.map((step, index) => (
                  <div key={index} className="bg-white p-4 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-900">{step.step}</h5>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{step.frequency}</span>
                    </div>
                    <p className="text-sm text-gray-700">{step.action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <h5 className="font-semibold text-yellow-800 mb-2">Key Points About My API Testing:</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Frequency:</strong> Really rarely write new tests - only when devs create new endpoints
                  </li>
                  <li>
                    • <strong>CRUD Testing:</strong> Yes, I test Create, Read, Update, Delete operations when applicable
                  </li>
                  <li>
                    • <strong>Status Code Validation:</strong> Always validate status codes (200, 404, 500) in script
                    tests
                  </li>
                  <li>
                    • <strong>Environment Setup:</strong> Use Bruno environments with variables like baseUrl, API keys
                  </li>
                  <li>
                    • <strong>Focus:</strong> More time running existing tests than writing new ones
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-yellow-100 p-3 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Reality Check:</strong> I don't write API tests frequently because most endpoints are created
                  by developers who handle initial testing. I focus on comprehensive testing of new endpoints when they
                  are developed, and maintaining existing test collections for regression testing.
                </p>
              </div>
            </div>
          </div>

          {/* HTTP Methods - Focused on What I Use */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">HTTP Methods I Test</h3>
            <div className="space-y-6">
              {httpMethods.map((method, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className={`text-sm font-bold px-3 py-1 rounded ${method.color}`}>{method.method}</span>
                    <h4 className="text-lg font-semibold text-gray-900 ml-4">{method.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-4">{method.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        Characteristics:
                      </h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {method.characteristics.map((char, charIndex) => (
                          <li key={charIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {method.method === "POST" && (
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-center mb-2">
                          <User className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm font-semibold text-green-800">I Use This For:</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Creating tenants, users, and other resources. I test with valid data, invalid data, and edge
                          cases to ensure proper validation and error handling.
                        </p>
                      </div>
                    )}
                    {method.method === "GET" && (
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center mb-2">
                          <User className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-sm font-semibold text-blue-800">I Use This For:</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Retrieving data and testing API responses. I validate response structure, status codes, and
                          data integrity.
                        </p>
                      </div>
                    )}
                    {method.method === "PUT" && (
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <div className="flex items-center mb-2">
                          <User className="h-4 w-4 text-yellow-600 mr-2" />
                          <span className="text-sm font-semibold text-yellow-800">I Use This For:</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Updating entire resources. I test with complete data sets and verify idempotent behavior.
                        </p>
                      </div>
                    )}
                    {method.method === "PATCH" && (
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div className="flex items-center mb-2">
                          <User className="h-4 w-4 text-purple-600 mr-2" />
                          <span className="text-sm font-semibold text-purple-800">I Use This For:</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Partial updates when only specific fields need modification. More efficient than PUT.
                        </p>
                      </div>
                    )}
                    {method.method === "DELETE" && (
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <div className="flex items-center mb-2">
                          <User className="h-4 w-4 text-red-600 mr-2" />
                          <span className="text-sm font-semibold text-red-800">I Use This For:</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Removing resources and testing proper cleanup. I verify idempotent behavior and proper error
                          handling.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HTTP Status Codes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">HTTP Status Codes I Validate</h3>
            <div className="space-y-6">
              {statusCodes.map((category, index) => (
                <div key={index} className={`border-l-4 p-6 rounded-r-lg ${category.color}`}>
                  <h4 className="font-semibold text-lg mb-4">{category.category}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.codes.map((code, codeIndex) => (
                      <div key={codeIndex} className="bg-white p-4 rounded border">
                        <div className="flex items-center mb-2">
                          <span className="font-mono font-bold text-lg mr-2">{code.code}</span>
                          <span className="font-semibold">{code.name}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{code.description}</p>
                        <p className="text-xs text-gray-500">
                          <strong>Usage:</strong> {code.usage}
                        </p>
                        {code.code === "200" && (
                          <div className="mt-2 bg-green-50 p-2 rounded">
                            <div className="flex items-center mb-1">
                              <User className="h-4 w-4 text-green-600 mr-1" />
                              <span className="text-xs font-semibold text-green-800">I Test This:</span>
                            </div>
                            <p className="text-xs text-gray-600">
                              Always validate 200 status in my Bruno test scripts: expect(res.getStatus()).to.equal(200)
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">API Testing Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="mr-2" size={24} />
                  Do's - Essential Practices
                </h4>
                <ul className="space-y-3 text-sm text-green-800">
                  {bestPractices.dos.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                  <XCircle className="mr-2" size={24} />
                  Don'ts - Common Pitfalls
                </h4>
                <ul className="space-y-3 text-sm text-red-800">
                  {bestPractices.donts.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="text-red-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* My Tools Integration */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How I Use API Testing Tools Together</h3>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <Play className="mr-2 h-5 w-5" />
                My Tool Integration Strategy
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-blue-800 mb-2">Bruno (Formal API Testing):</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Create test collections for new endpoints</li>
                    <li>• Write test scripts with status code validation</li>
                    <li>• Use environment variables for different environments</li>
                    <li>• Test CRUD operations systematically</li>
                    <li>• Maintain regression test suites</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-blue-800 mb-2">DevTools (Real-time API Debugging):</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Debug API calls during manual testing</li>
                    <li>• Inspect request/response in real-time</li>
                    <li>• Check for integration issues quickly</li>
                    <li>• Validate API behavior on-the-fly</li>
                    <li>• Block requests to test error handling</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-100 p-3 rounded">
                <p className="text-sm text-blue-800">
                  <strong>My Workflow:</strong> I use DevTools for immediate debugging and issue discovery during manual
                  testing, then create formal Bruno tests for new endpoints when developers add them. DevTools is daily
                  use, Bruno is occasional but thorough.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Resources */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-200">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Learning Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Code className="text-blue-600 mr-2" size={20} />
                  Documentation
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://docs.usebruno.com/" className="text-blue-600 hover:underline">
                      Bruno Documentation
                    </a>
                  </li>
                  <li>
                    <a href="https://restfulapi.net/" className="text-blue-600 hover:underline">
                      REST API Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="https://httpstatuses.com/" className="text-blue-600 hover:underline">
                      HTTP Status Codes
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Zap className="text-yellow-600 mr-2" size={20} />
                  Practice APIs
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://jsonplaceholder.typicode.com/" className="text-blue-600 hover:underline">
                      JSONPlaceholder
                    </a>
                  </li>
                  <li>
                    <a href="https://reqres.in/" className="text-blue-600 hover:underline">
                      ReqRes
                    </a>
                  </li>
                  <li>
                    <a href="https://httpbin.org/" className="text-blue-600 hover:underline">
                      HTTPBin
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Shield className="text-green-600 mr-2" size={20} />
                  Advanced Topics
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Contract Testing (Pact)</li>
                  <li>• API Mocking & Virtualization</li>
                  <li>• GraphQL Testing</li>
                  <li>• WebSocket Testing</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-100 p-4 rounded">
              <p className="text-sm text-purple-800">
                <strong>Pro Tip:</strong> Start with Bruno and JSONPlaceholder for practice, then gradually move to
                testing real APIs. Focus on understanding REST principles before diving into advanced topics like
                GraphQL or contract testing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
