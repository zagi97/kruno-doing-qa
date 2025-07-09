import { Server, Code, CheckCircle, XCircle, Shield, Zap, AlertCircle, ArrowRight } from "lucide-react";
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

const crudExamples = [
  {
    operation: "CREATE",
    method: "POST",
    endpoint: "{{baseUrl}}/users",
    requestBody: {
      name: "John Doe",
      email: "john@example.com",
      role: "user",
    },
    headers: ["Content-Type: application/json", "Authorization: Bearer {{token}}"],
    validations: [
      "Status: 201 Created",
      "Response contains user ID",
      "Email format validation",
      "Required fields validation",
      "Password complexity check",
    ],
    color: "border-green-500",
  },
  {
    operation: "READ",
    method: "GET",
    endpoint: "{{baseUrl}}/users/123",
    requestBody: null,
    headers: ["Authorization: Bearer {{token}}"],
    validations: [
      "Status: 200 OK",
      "User data structure matches schema",
      "Data accuracy and completeness",
      "Response time < 200ms",
      "Proper error handling for invalid ID",
    ],
    color: "border-blue-500",
  },
  {
    operation: "UPDATE",
    method: "PUT",
    endpoint: "{{baseUrl}}/users/123",
    requestBody: {
      name: "John Smith",
      email: "johnsmith@example.com",
    },
    headers: ["Content-Type: application/json", "Authorization: Bearer {{token}}"],
    validations: [
      "Status: 200 OK",
      "Updated data returned in response",
      "Partial update handling",
      "Validation error responses",
      "Optimistic locking check",
    ],
    color: "border-yellow-500",
  },
  {
    operation: "DELETE",
    method: "DELETE",
    endpoint: "{{baseUrl}}/users/123",
    requestBody: null,
    headers: ["Authorization: Bearer {{token}}"],
    validations: [
      "Status: 204 No Content",
      "User actually deleted from database",
      "Cascade deletion behavior",
      "Authorization check for deletion rights",
      "Soft delete vs hard delete behavior",
    ],
    color: "border-red-500",
  },
];

const authenticationScenarios = [
  {
    title: "Login Authentication",
    endpoint: "POST {{baseUrl}}/auth/login",
    testCases: [
      "Valid credentials → 200 OK with token",
      "Invalid password → 401 Unauthorized",
      "Non-existent user → 401 Unauthorized",
      "Empty credentials → 400 Bad Request",
      "Account locked → 423 Locked",
      "Password expired → 422 Unprocessable Entity",
    ],
  },
  {
    title: "Token Validation",
    endpoint: "GET {{baseUrl}}/protected-resource",
    testCases: [
      "Valid token → 200 OK with data",
      "Invalid token → 401 Unauthorized",
      "Expired token → 401 Unauthorized",
      "Missing token → 401 Unauthorized",
      "Malformed token → 400 Bad Request",
      "Token with insufficient permissions → 403 Forbidden",
    ],
  },
];

const realWorldExample = {
  title: "E-commerce Product Management API",
  description: "Complete workflow testing for an online store product system",
  workflows: [
    {
      step: "1. Admin creates product",
      method: "POST",
      endpoint: "/products",
      auth: "Admin token required",
      validations: ["Product ID generated", "Inventory initialized", "SEO fields populated"],
    },
    {
      step: "2. Customer searches products",
      method: "GET",
      endpoint: "/products?category=electronics&price_max=1000",
      auth: "Public or user token",
      validations: ["Pagination working", "Filtering accurate", "Response time < 500ms"],
    },
    {
      step: "3. Customer adds to cart",
      method: "POST",
      endpoint: "/cart/items",
      auth: "User token required",
      validations: ["Cart updated", "Stock checked", "Price calculated"],
    },
    {
      step: "4. Process payment",
      method: "POST",
      endpoint: "/orders",
      auth: "User token required",
      validations: ["Stock decremented", "Payment processed", "Order confirmation sent"],
    },
    {
      step: "5. Admin updates inventory",
      method: "PATCH",
      endpoint: "/products/123",
      auth: "Admin token required",
      validations: ["Stock updated", "Audit trail created", "Cache invalidated"],
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

          {/* API vs UI Testing Comparison */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">API Testing vs UI Testing</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Aspect</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">API Testing</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">UI Testing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Speed</td>
                    <td className="px-6 py-4 text-green-600 font-medium">Very fast (milliseconds)</td>
                    <td className="px-6 py-4 text-yellow-600">Slower (seconds)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Stability</td>
                    <td className="px-6 py-4 text-green-600 font-medium">More stable</td>
                    <td className="px-6 py-4 text-yellow-600">UI changes frequently</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Coverage</td>
                    <td className="px-6 py-4">Tests business logic</td>
                    <td className="px-6 py-4">Tests user workflows</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Maintenance</td>
                    <td className="px-6 py-4 text-green-600 font-medium">Lower maintenance</td>
                    <td className="px-6 py-4 text-red-600">Higher maintenance</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Data Validation</td>
                    <td className="px-6 py-4 text-green-600 font-medium">Direct data validation</td>
                    <td className="px-6 py-4">Indirect through UI</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Environment</td>
                    <td className="px-6 py-4 text-green-600 font-medium">Any environment</td>
                    <td className="px-6 py-4">Requires UI environment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tools Comparison - Bruno vs Postman */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">API Testing Tools</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <Code className="text-purple-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-purple-900">Bruno (Free & Open Source)</h4>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-3">Why Bruno?</h5>
                  <ul className="text-sm text-purple-800 space-y-2">
                    <li>• Completely free with no limitations</li>
                    <li>• Offline-first approach (no cloud dependency)</li>
                    <li>• Git-friendly (plain text files)</li>
                    <li>• No account required</li>
                    <li>• Fast and lightweight</li>
                    <li>• Active open-source community</li>
                  </ul>
                </div>
                <div className="bg-gray-800 text-white p-4 rounded text-xs font-mono">
                  <div className="text-green-400">// Bruno Test Script</div>
                  <div>req.setHeader('Authorization', 'Bearer ' + bru.getEnvVar('token'));</div>
                  <div>
                    <br />
                  </div>
                  <div>test('Status should be 200', function() {`{`}</div>
                  <div>&nbsp;&nbsp;expect(res.getStatus()).to.equal(200);</div>
                  <div>{`});`}</div>
                  <div>
                    <br />
                  </div>
                  <div>test('Response contains user data', function() {`{`}</div>
                  <div>&nbsp;&nbsp;expect(res.getBody().user.name).to.equal('John Doe');</div>
                  <div>{`});`}</div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <Server className="text-orange-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-orange-900">Postman (Limited Free)</h4>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-red-700 mb-3">Postman Limitations:</h5>
                  <ul className="text-sm text-orange-800 space-y-2">
                    <li>• Limited to 3 collections in free tier</li>
                    <li>• Team collaboration requires paid plan</li>
                    <li>• Cloud dependency for sync</li>
                    <li>• Account required for most features</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-3">When to Use Postman:</h5>
                  <ul className="text-sm text-orange-800 space-y-2">
                    <li>• Enterprise environments with budget</li>
                    <li>• Advanced team collaboration needs</li>
                    <li>• Extensive mock servers required</li>
                    <li>• API documentation generation</li>
                  </ul>
                </div>

                {/* Tool Comparison Table */}
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-gray-900 mb-2">Feature Comparison</h5>
                  <div className="space-y-2 text-xs">
                    <div className="grid grid-cols-3 gap-2 font-medium text-gray-700">
                      <span>Feature</span>
                      <span>Bruno</span>
                      <span>Postman Free</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span>Collections</span>
                      <span className="text-green-600">Unlimited</span>
                      <span className="text-red-600">3 only</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span>Team Sharing</span>
                      <span className="text-green-600">Via Git</span>
                      <span className="text-yellow-600">Limited</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span>Price</span>
                      <span className="text-green-600">Free</span>
                      <span className="text-yellow-600">Free/$12+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HTTP Methods - Detailed */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">REST API Fundamentals - HTTP Methods</h3>
            <div className="space-y-6">
              {httpMethods.map((method, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className={`text-sm font-bold px-3 py-1 rounded ${method.color}`}>{method.method}</span>
                    <h4 className="text-lg font-semibold text-gray-900 ml-4">{method.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-3">{method.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Characteristics:</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {method.characteristics.map((char, charIndex) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HTTP Status Codes - Detailed */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">HTTP Status Codes</h3>
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CRUD Operations - Detailed Examples */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">CRUD Operations Testing</h3>
            <div className="space-y-8">
              {crudExamples.map((example, index) => (
                <div key={index} className={`border-l-4 ${example.color} bg-white p-6 rounded-r-lg shadow-sm`}>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded mr-3 ${
                        example.method === "GET"
                          ? "bg-green-100 text-green-800"
                          : example.method === "POST"
                          ? "bg-blue-100 text-blue-800"
                          : example.method === "PUT"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {example.method}
                    </span>
                    {example.operation} Operation
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Request Details:</h5>
                      <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                        <div className="text-blue-600">
                          {example.method} {example.endpoint}
                        </div>
                        {example.headers.map((header, headerIndex) => (
                          <div key={headerIndex} className="text-gray-600">
                            {header}
                          </div>
                        ))}
                        {example.requestBody && (
                          <>
                            <div className="mt-2 text-gray-800">{JSON.stringify(example.requestBody, null, 2)}</div>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Validations:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {example.validations.map((validation, validationIndex) => (
                          <li key={validationIndex} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={12} />
                            <span>{validation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authentication Testing */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentication Testing Scenarios</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {authenticationScenarios.map((scenario, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{scenario.title}</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-4">{scenario.endpoint}</div>
                  <h5 className="font-semibold text-gray-800 mb-2">Test Cases:</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {scenario.testCases.map((testCase, testIndex) => (
                      <li key={testIndex} className="flex items-start">
                        <AlertCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={12} />
                        <span>{testCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Example */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-World Example: Complete Workflow Testing</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-semibold text-blue-900 mb-2">{realWorldExample.title}</h4>
              <p className="text-blue-800 mb-6">{realWorldExample.description}</p>

              <div className="space-y-4">
                {realWorldExample.workflows.map((workflow, index) => (
                  <div key={index} className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-900">{workflow.step}</h5>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          workflow.method === "GET"
                            ? "bg-green-100 text-green-800"
                            : workflow.method === "POST"
                            ? "bg-blue-100 text-blue-800"
                            : workflow.method === "PATCH"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {workflow.method}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Endpoint:</span>
                        <code className="block text-gray-600 font-mono">{workflow.endpoint}</code>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Auth:</span>
                        <span className="block text-gray-600">{workflow.auth}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Key Validations:</span>
                        <ul className="text-gray-600 mt-1">
                          {workflow.validations.map((validation, validationIndex) => (
                            <li key={validationIndex}>• {validation}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-100 p-4 rounded">
                <h5 className="font-semibold text-blue-900 mb-2">Testing Strategy:</h5>
                <p className="text-blue-800 text-sm">
                  This complete workflow tests the entire business logic flow, ensuring inventory management, user
                  permissions, payment processing, and data consistency work together seamlessly. Run this as an
                  integration test suite to validate end-to-end functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices - Comprehensive */}
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

          {/* Performance & Security Considerations */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance & Security Testing</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                  <Zap className="mr-2" size={20} />
                  Performance Testing
                </h4>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li>• Response time should be &lt; 200ms for most APIs</li>
                  <li>• Load testing with expected concurrent users</li>
                  <li>• Test with large payloads (1MB+ requests)</li>
                  <li>• Validate memory usage and resource consumption</li>
                  <li>• Test rate limiting and throttling behavior</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-6 rounded-r-lg">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                  <Shield className="mr-2" size={20} />
                  Security Testing
                </h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• SQL injection and NoSQL injection attacks</li>
                  <li>• Authentication bypass attempts</li>
                  <li>• Authorization testing (role-based access)</li>
                  <li>• Input validation and sanitization</li>
                  <li>• HTTPS enforcement and certificate validation</li>
                </ul>
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
