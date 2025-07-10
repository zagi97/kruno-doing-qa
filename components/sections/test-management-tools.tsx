import {
  Kanban,
  FileText,
  Users,
  BarChart3,
  CheckSquare,
  AlertCircle,
  Settings,
  GitBranch,
  Bug,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

const testManagementTools = [
  {
    tool: "JIRA",
    type: "Issue Tracking & Project Management",
    strengths: [
      "Excellent for bug tracking and issue management",
      "Kanban board visualization",
      "Powerful workflow customization",
      "Great integration with development tools",
      "Comprehensive reporting and dashboards",
    ],
    weaknesses: [
      "Not specifically designed for test management",
      "Limited test case organization",
      "No built-in test execution tracking",
      "Complex setup for testing workflows",
    ],
    bestFor: [
      "Bug tracking and defect management",
      "Agile project management",
      "Sprint planning and tracking",
      "Integration with development workflow",
    ],
    pricing: "Starts at $7.50/user/month",
    color: "border-blue-500 bg-blue-50",
  },
  {
    tool: "TestRail",
    type: "Dedicated Test Management",
    strengths: [
      "Purpose-built for test management",
      "Excellent test case organization",
      "Detailed test execution tracking",
      "Comprehensive test reporting",
      "Easy milestone and release management",
    ],
    weaknesses: [
      "Additional cost on top of JIRA",
      "Requires integration setup",
      "Learning curve for new users",
      "Limited project management features",
    ],
    bestFor: [
      "Test case management and organization",
      "Test execution and results tracking",
      "Test coverage analysis",
      "Regulatory compliance testing",
    ],
    pricing: "Starts at $37/user/month",
    color: "border-green-500 bg-green-50",
  },
];

const jiraWorkflow = [
  {
    stage: "User Story Creation",
    description: "Product owner creates user stories with acceptance criteria",
    jiraElements: ["Epic", "User Story", "Acceptance Criteria", "Story Points"],
    testingRole: "Review requirements and identify testable scenarios",
    example: {
      title: "Login Feature User Story",
      content: "As a user, I want to reset my password so that I can regain access to my account",
      acceptanceCriteria: [
        "Password reset link sent to registered email",
        "Link expires after 24 hours",
        "New password must meet security requirements",
      ],
    },
  },
  {
    stage: "Sprint Planning",
    description: "Team estimates and commits to sprint backlog",
    jiraElements: ["Sprint", "Backlog", "Estimation", "Capacity Planning"],
    testingRole: "Estimate testing effort and plan test approach",
  },
  {
    stage: "Development",
    description: "Developers work on tasks and update progress",
    jiraElements: ["Tasks", "Subtasks", "Progress Tracking", "Time Logging"],
    testingRole: "Prepare test cases and test data",
  },
  {
    stage: "Testing",
    description: "QA executes tests and reports defects",
    jiraElements: ["Bug Reports", "Test Execution", "Status Updates"],
    testingRole: "Execute tests, report bugs, verify fixes",
    example: {
      title: "Bug Report Example",
      content: "Login button becomes unresponsive after 3 failed attempts",
      stepsToReproduce: [
        "Navigate to login page",
        "Enter incorrect credentials 3 times",
        "Observe login button behavior",
      ],
    },
  },
  {
    stage: "Review & Deployment",
    description: "Code review, testing sign-off, and deployment",
    jiraElements: ["Code Review", "Testing Sign-off", "Deployment"],
    testingRole: "Final testing approval and deployment verification",
  },
];

const testRailFeatures = [
  {
    feature: "Test Case Management",
    description: "Organize and structure test cases efficiently",
    capabilities: [
      "Hierarchical test case organization",
      "Test case templates and custom fields",
      "Test case versioning and history",
      "Shared test steps and reusable components",
    ],
    example: {
      title: "Password Reset Test Case",
      preconditions: "User account exists with valid email",
      steps: [
        "Navigate to login page",
        "Click 'Forgot Password' link",
        "Enter registered email address",
        "Click 'Send Reset Link' button",
      ],
      expectedResults: [
        "Password reset form displays",
        "Email field accepts input",
        "Success message appears",
        "Reset email received within 5 minutes",
      ],
    },
  },
  {
    feature: "Test Execution",
    description: "Track test execution progress and results",
    capabilities: [
      "Test run creation and management",
      "Real-time execution tracking",
      "Pass/fail/blocked status tracking",
      "Test result comments and attachments",
    ],
  },
  {
    feature: "Reporting & Analytics",
    description: "Comprehensive test metrics and insights",
    capabilities: [
      "Test coverage reports",
      "Progress and trend analysis",
      "Custom dashboards",
      "Executive summary reports",
    ],
  },
  {
    feature: "Integration",
    description: "Connect with other tools in your workflow",
    capabilities: [
      "JIRA integration for defect tracking",
      "CI/CD pipeline integration",
      "Automation tool integration",
      "API for custom integrations",
    ],
  },
];

const kanbanWorkflow = [
  {
    column: "Backlog",
    description: "All user stories waiting to be worked on",
    criteria: "Refined and ready for development",
    testingActivities: ["Review requirements", "Identify test scenarios"],
  },
  {
    column: "In Progress",
    description: "Stories currently being developed",
    criteria: "Developer assigned and actively working",
    testingActivities: ["Prepare test cases", "Set up test data"],
  },
  {
    column: "Code Review",
    description: "Development complete, awaiting code review",
    criteria: "Feature complete, ready for peer review",
    testingActivities: ["Review test cases", "Prepare test environment"],
  },
  {
    column: "Ready for Testing",
    description: "Code reviewed and deployed to test environment",
    criteria: "Deployed and ready for QA testing",
    testingActivities: ["Execute test cases", "Report defects"],
  },
  {
    column: "Testing",
    description: "QA actively testing the feature",
    criteria: "QA assigned and testing in progress",
    testingActivities: ["Active testing", "Bug verification", "Regression testing"],
  },
  {
    column: "Rejected by QA",
    description: "Testing failed, blocking issues found",
    criteria: "Critical bugs or acceptance criteria not met",
    testingActivities: ["Document rejection reasons", "Create detailed bug reports", "Collaborate with dev team"],
  },
  {
    column: "Done",
    description: "Testing complete and feature approved",
    criteria: "All tests passed, no blocking issues",
    testingActivities: ["Sign-off", "Update test results"],
  },
];

const bestPractices = {
  jira: [
    "Use clear and descriptive issue titles",
    "Always include steps to reproduce for bugs",
    "Add appropriate labels and components",
    "Link related issues (blocks, relates to)",
    "Keep status updated regularly",
    "Use proper priority and severity levels",
    "Include screenshots and logs when relevant",
  ],
  testRail: [
    "Organize tests in logical suites and sections",
    "Use consistent naming conventions",
    "Write clear and detailed test steps",
    "Include expected results for each step",
    "Use test case templates for consistency",
    "Regular test case reviews and updates",
    "Link test cases to requirements",
  ],
  integration: [
    "Set up automated defect creation from TestRail to JIRA",
    "Use consistent naming between tools",
    "Maintain traceability between requirements and tests",
    "Automate status updates where possible",
    "Regular sync between tool data",
    "Train team on both tools",
    "Establish clear workflow processes",
  ],
};

export function TestManagementToolsSection() {
  return (
    <section id="test-management-tools" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Test Management Tools"
          subtitle="JIRA, TestRail, and Kanban workflows for effective test management"
          icon={Kanban}
        />
        <CardContent className="p-8">
          {/* What is Test Management */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Test Management?</h3>
            <p className="text-gray-700 mb-6">
              Test management involves planning, organizing, and controlling testing activities throughout the software
              development lifecycle. <strong>JIRA excels at bug tracking, user stories, and project management</strong>,
              while
              <strong> TestRail specializes in test case organization and execution tracking</strong>. Together, they
              provide comprehensive coverage for quality assurance processes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-3">Key Activities</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Test planning and strategy</li>
                  <li>• Test case creation and organization</li>
                  <li>• Test execution tracking</li>
                  <li>• Defect management and reporting</li>
                  <li>• Progress monitoring and metrics</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-3">Benefits</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Improved test coverage and quality</li>
                  <li>• Better visibility into testing progress</li>
                  <li>• Efficient resource allocation</li>
                  <li>• Enhanced team collaboration</li>
                  <li>• Faster defect resolution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool Comparison */}
          <div className="bg-purple-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-purple-900 mb-6">Test Management Tools Comparison</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testManagementTools.map((tool, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg border-l-4 ${tool.color
                    .replace("bg-", "border-")
                    .replace("-50", "-500")}`}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{tool.tool}</h4>
                  <p className="text-sm text-gray-600 mb-4">{tool.type}</p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Strengths:</h5>
                      <ul className="text-sm space-y-1">
                        {tool.strengths.map((strength, strengthIndex) => (
                          <li key={strengthIndex} className="flex items-start">
                            <CheckSquare className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">Weaknesses:</h5>
                      <ul className="text-sm space-y-1">
                        {tool.weaknesses.map((weakness, weaknessIndex) => (
                          <li key={weaknessIndex} className="flex items-start">
                            <AlertCircle className="text-red-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Best For:</h5>
                      <ul className="text-sm space-y-1">
                        {tool.bestFor.map((use, useIndex) => (
                          <li key={useIndex}>• {use}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded border">
                      <span className="font-semibold text-gray-800">Pricing: </span>
                      <span className="text-gray-600">{tool.pricing}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* JIRA Kanban Workflow - Better Flow Visualization */}
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
              <Kanban className="mr-3 text-blue-600" size={24} />
              JIRA Kanban Workflow for QA
            </h3>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="text-blue-800 text-sm">
                Kanban boards provide excellent visibility into work progress and help QA teams manage testing
                activities efficiently. When QA rejects a feature, it flows back to development for fixes, creating an
                iterative cycle until quality standards are met.
              </p>
            </div>

            {/* Improved workflow visualization */}
            <div className="bg-white p-6 rounded-lg">
              {/* Main flow */}
              <div className="flex items-center justify-between mb-8">
                {kanbanWorkflow
                  .filter((_, index) => index !== 5)
                  .map((stage, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-center">
                        <div
                          className={`w-24 h-16 rounded-lg border-2 border-blue-400 bg-blue-50 flex items-center justify-center mb-2`}
                        >
                          <span className="text-xs font-medium text-center px-1">{stage.column}</span>
                        </div>
                      </div>
                      {index < 5 && <ArrowRight className="text-blue-400 mx-2" size={20} />}
                    </div>
                  ))}
              </div>

              {/* Rejection flow - curved arrow back */}
              <div className="relative mb-8">
                <div className="flex justify-between items-center">
                  <div className="w-24"></div> {/* Spacer for alignment */}
                  <div className="flex-1 text-center">
                    <div className="w-32 h-16 rounded-lg border-2 border-red-400 bg-red-50 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-medium text-center px-1 text-red-700">Rejected by QA</span>
                    </div>
                    <p className="text-xs text-red-600 font-medium">If issues found</p>
                  </div>
                  <div className="w-24"></div> {/* Spacer for alignment */}
                </div>

                {/* Curved arrow indicating flow back to development */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center">
                    <span className="text-xs text-red-600 font-medium mr-2">Back to Development</span>
                    <svg width="200" height="40" className="text-red-400">
                      <path
                        d="M 100 5 Q 150 20 50 35"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Key QA stages detail */}
              <div className="grid md:grid-cols-3 gap-4 mt-16">
                {kanbanWorkflow
                  .filter((_, index) => [3, 4, 5].includes(index))
                  .map((stage, index) => (
                    <div
                      key={index}
                      className={`border-2 rounded-lg p-4 ${
                        stage.column === "Rejected by QA" ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                      }`}
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{stage.column}</h4>
                      <p className="text-sm text-gray-600 mb-3">{stage.description}</p>
                      <div className="mb-3">
                        <h5 className="font-medium text-gray-800 mb-1">Entry Criteria:</h5>
                        <p className="text-xs text-gray-600">{stage.criteria}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 mb-1">QA Activities:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {stage.testingActivities.map((activity, activityIndex) => (
                            <li key={activityIndex}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* JIRA Testing Workflow with Examples - Only relevant examples */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-yellow-900 mb-6">JIRA Testing Workflow with Real Examples</h3>
            <div className="space-y-6">
              {jiraWorkflow.map((stage, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-yellow-900">{stage.stage}</h4>
                  </div>

                  <p className="text-gray-700 mb-4">{stage.description}</p>

                  <div className={`grid ${stage.example ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6`}>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">JIRA Elements:</h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {stage.jiraElements.map((element, elementIndex) => (
                          <span key={elementIndex} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                            {element}
                          </span>
                        ))}
                      </div>
                      <h5 className="font-medium text-gray-800 mb-2">Testing Role:</h5>
                      <p className="text-sm text-gray-600">{stage.testingRole}</p>
                    </div>

                    {stage.example && (
                      <div className="bg-gray-50 p-4 rounded border">
                        <h5 className="font-medium text-gray-800 mb-2 flex items-center">
                          <ClipboardList className="mr-2" size={16} />
                          Real Example:
                        </h5>
                        <div className="text-sm text-gray-700">
                          <p className="font-medium mb-2">{stage.example.title}</p>
                          <p className="mb-3 italic text-blue-700">"{stage.example.content}"</p>

                          {stage.example.acceptanceCriteria && (
                            <div className="mb-3">
                              <span className="font-medium text-green-700">Acceptance Criteria:</span>
                              <ul className="mt-1 space-y-1">
                                {stage.example.acceptanceCriteria.map((criteria, i) => (
                                  <li key={i} className="text-xs text-green-600">
                                    • {criteria}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {stage.example.stepsToReproduce && (
                            <div>
                              <span className="font-medium text-red-700">Steps to Reproduce:</span>
                              <ol className="mt-1 space-y-1">
                                {stage.example.stepsToReproduce.map((step, i) => (
                                  <li key={i} className="text-xs text-red-600">
                                    {i + 1}. {step}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TestRail Features with Example */}
          <div className="bg-green-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-green-900 mb-6 flex items-center">
              <FileText className="mr-3 text-green-600" size={24} />
              TestRail Features & Capabilities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {testRailFeatures.map((feature, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 mb-2">{feature.feature}</h4>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>

                  <div className={feature.example ? "mb-4" : ""}>
                    <h5 className="font-medium text-gray-800 mb-2">Capabilities:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {feature.capabilities.map((capability, capabilityIndex) => (
                        <li key={capabilityIndex} className="flex items-start">
                          <CheckSquare className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {feature.example && (
                    <div className="bg-green-50 p-4 rounded border">
                      <h5 className="font-medium text-green-800 mb-2">Example Test Case:</h5>
                      <div className="text-sm text-green-800">
                        <p className="font-medium mb-2">{feature.example.title}</p>
                        <p className="mb-2">
                          <strong>Preconditions:</strong> {feature.example.preconditions}
                        </p>

                        <div className="mb-2">
                          <strong>Test Steps:</strong>
                          <ol className="mt-1 space-y-1">
                            {feature.example.steps.map((step, i) => (
                              <li key={i} className="text-xs">
                                {i + 1}. {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div>
                          <strong>Expected Results:</strong>
                          <ul className="mt-1 space-y-1">
                            {feature.example.expectedResults.map((result, i) => (
                              <li key={i} className="text-xs">
                                • {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* JIRA + TestRail Integration */}
          <div className="bg-purple-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-purple-900 mb-6 flex items-center">
              <GitBranch className="mr-3 text-purple-600" size={24} />
              JIRA + TestRail Integration
            </h3>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 mb-6">
              <p className="text-purple-800 text-sm">
                Many organizations use <strong>JIRA for project management and bug tracking</strong> and
                <strong> TestRail for test case management and execution</strong>, creating a powerful combination. The
                integration allows seamless workflow between project tracking and test execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-4">Integration Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckSquare className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                    <span>Automatic defect creation in JIRA from TestRail</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                    <span>Bidirectional status updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                    <span>Traceability between requirements and tests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                    <span>Unified reporting across both tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-4">Common Workflow</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    User story created in JIRA
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    Test cases created in TestRail
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    Test execution tracked in TestRail
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      4
                    </span>
                    Defects automatically created in JIRA
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      5
                    </span>
                    Bug fixes tracked in JIRA
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      6
                    </span>
                    Test results updated in TestRail
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Best Practices</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Settings className="mr-2" size={20} />
                  JIRA Best Practices
                </h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  {bestPractices.jira.map((practice, index) => (
                    <li key={index} className="flex items-start">
                      <CheckSquare className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <FileText className="mr-2" size={20} />
                  TestRail Best Practices
                </h4>
                <ul className="space-y-2 text-sm text-green-800">
                  {bestPractices.testRail.map((practice, index) => (
                    <li key={index} className="flex items-start">
                      <CheckSquare className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-4 flex items-center">
                  <GitBranch className="mr-2" size={20} />
                  Integration Best Practices
                </h4>
                <ul className="space-y-2 text-sm text-purple-800">
                  {bestPractices.integration.map((practice, index) => (
                    <li key={index} className="flex items-start">
                      <CheckSquare className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Team Roles & Responsibilities */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-indigo-900 mb-6 flex items-center">
              <Users className="mr-3 text-indigo-600" size={24} />
              Team Roles & Responsibilities
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Bug className="mr-2" size={20} />
                  JIRA Responsibilities
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Product Owner:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Creates user stories with acceptance criteria</li>
                      <li>• Prioritizes backlog items</li>
                      <li>• Reviews and approves completed work</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Developer:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Updates task progress and status</li>
                      <li>• Logs time spent on development</li>
                      <li>• Fixes bugs reported by QA</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">QA Engineer:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Reports bugs with detailed reproduction steps</li>
                      <li>• Verifies bug fixes</li>
                      <li>• Updates testing status on tickets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <ClipboardList className="mr-2" size={20} />
                  TestRail Responsibilities
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">QA Engineer:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Creates and maintains test cases</li>
                      <li>• Executes test runs and records results</li>
                      <li>• Updates test case status (Pass/Fail/Blocked)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Test Manager:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Reviews test coverage metrics</li>
                      <li>• Generates progress reports</li>
                      <li>• Manages test milestones and releases</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Project Manager:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Reviews testing progress dashboards</li>
                      <li>• Tracks overall quality metrics</li>
                      <li>• Makes go/no-go decisions based on test results</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics & KPIs */}
          <div className="bg-orange-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-orange-900 mb-6 flex items-center">
              <BarChart3 className="mr-3 text-orange-600" size={24} />
              Key Metrics & KPIs to Track
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border rounded-lg p-6 border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-900 mb-4">JIRA Metrics</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>• Bug Detection Rate</span>
                    <span className="text-orange-600 font-medium">Bugs found per sprint</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Bug Resolution Time</span>
                    <span className="text-orange-600 font-medium">Average days to fix</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Sprint Velocity</span>
                    <span className="text-orange-600 font-medium">Story points completed</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Defect Leakage</span>
                    <span className="text-orange-600 font-medium">Bugs found in production</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-4">TestRail Metrics</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>• Test Execution Rate</span>
                    <span className="text-green-600 font-medium">Tests run vs planned</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Test Coverage</span>
                    <span className="text-green-600 font-medium">Requirements covered</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Pass/Fail Ratio</span>
                    <span className="text-green-600 font-medium">Success percentage</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Test Case Effectiveness</span>
                    <span className="text-green-600 font-medium">Bugs found per test</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded border-l-4 border-orange-500">
              <h5 className="font-medium text-orange-900 mb-2">Success Indicators:</h5>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">85%+</div>
                  <div className="text-gray-600">Test Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">&lt;2 days</div>
                  <div className="text-gray-600">Bug Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">&lt;5%</div>
                  <div className="text-gray-600">Defect Leakage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Integration Challenges */}
          <div className="bg-red-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-red-900 mb-6 flex items-center">
              <AlertCircle className="mr-3 text-red-600" size={24} />
              Common Integration Challenges & Solutions
            </h3>
            <div className="space-y-6">
              <div className="bg-white border rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-3">Data Sync Issues</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Common Problems:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Status updates not syncing between tools</li>
                      <li>• Duplicate tickets being created</li>
                      <li>• Inconsistent data formats</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Solutions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Set up automated sync schedules</li>
                      <li>• Use unique identifiers for linking</li>
                      <li>• Regular data validation checks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-900 mb-3">Permission Management</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Common Problems:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Different user roles between tools</li>
                      <li>• Access control conflicts</li>
                      <li>• Inconsistent permission levels</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Solutions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Map roles consistently across tools</li>
                      <li>• Use single sign-on (SSO) when possible</li>
                      <li>• Document permission matrices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-3">Training & Adoption</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Common Problems:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Team resistance to using both tools</li>
                      <li>• Inconsistent workflow adoption</li>
                      <li>• Knowledge gaps in tool features</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Solutions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Provide comprehensive training sessions</li>
                      <li>• Create quick reference guides</li>
                      <li>• Designate tool champions in each team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tool Selection Guide */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-900 mb-4">Tool Selection Guide</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-900 mb-2">Choose JIRA Only If:</h4>
                <ul className="text-sm text-yellow-800 space-y-2">
                  <li>• Small team with simple testing needs</li>
                  <li>• Limited budget for additional tools</li>
                  <li>• Agile development with basic test tracking</li>
                  <li>• Focus on issue tracking over test management</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">Choose JIRA + TestRail If:</h4>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• Large team with complex testing requirements</li>
                  <li>• Need detailed test case management</li>
                  <li>• Regulatory compliance requirements</li>
                  <li>• Comprehensive test reporting needed</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-orange-100 p-4 rounded">
              <p className="text-sm text-orange-800">
                <strong>Pro Tip:</strong> Start with JIRA for project management and basic bug tracking. As your testing
                needs grow and become more complex, consider adding TestRail for dedicated test management. The
                integration between both tools provides the best of both worlds.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
