import { Kanban, FileText, Users, BarChart3, CheckSquare, AlertCircle, Settings, GitBranch } from "lucide-react";
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
              development lifecycle. It includes managing test cases, tracking execution, reporting defects, and
              ensuring quality standards are met. Effective test management requires the right tools and processes to
              coordinate between development and testing teams.
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

          {/* JIRA Kanban Workflow */}
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
              <Kanban className="mr-3 text-blue-600" size={24} />
              JIRA Kanban Workflow for QA
            </h3>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="text-blue-800 text-sm">
                Kanban boards provide excellent visibility into work progress and help QA teams manage testing
                activities efficiently. Each column represents a stage in the development process, with clear entry and
                exit criteria.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {kanbanWorkflow.map((stage, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
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

          {/* JIRA Testing Workflow */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-yellow-900 mb-6">JIRA Testing Workflow</h3>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">JIRA Elements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {stage.jiraElements.map((element, elementIndex) => (
                          <span key={elementIndex} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                            {element}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Testing Role:</h5>
                      <p className="text-sm text-gray-600">{stage.testingRole}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TestRail Features */}
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

                  <div>
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
                Many organizations use JIRA for project management and TestRail for test management, creating a powerful
                combination. The integration allows seamless workflow between project tracking and test execution.
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
                  <li>1. User story created in JIRA</li>
                  <li>2. Test cases created in TestRail</li>
                  <li>3. Test execution tracked in TestRail</li>
                  <li>4. Defects automatically created in JIRA</li>
                  <li>5. Bug fixes tracked in JIRA</li>
                  <li>6. Test results updated in TestRail</li>
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
