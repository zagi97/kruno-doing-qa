import { CheckCircle, User, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

const stlcPhases = [
  {
    phase: 1,
    title: "Requirement Analysis",
    description: "Review and understand requirements, identify testable scenarios",
    color: "border-blue-500 bg-blue-50",
    activities: [
      "Analyze functional & non-functional requirements",
      "Identify test conditions",
      "Review acceptance criteria",
    ],
    deliverables: ["Test Strategy document", "Test conditions", "Automation feasibility report"],
    myExperience:
      "I participate in requirement review meetings and ask clarifying questions about acceptance criteria. I create test conditions directly in TestRail and link them to user stories in Jira.",
  },
  {
    phase: 2,
    title: "Test Planning",
    description: "Define test approach, scope, resources, and timeline",
    color: "border-green-500 bg-green-50",
    activities: ["Define test scope and approach", "Estimate effort and timeline", "Identify resources and roles"],
    deliverables: ["Test Plan document", "Test Estimation", "Resource Planning"],
    myExperience:
      "I estimate testing effort for each sprint and plan which features need manual vs automated testing. I decide whether to run Cypress tests in headless mode for faster execution or in normal mode for debugging.",
  },
  {
    phase: 3,
    title: "Test Case Design & Development",
    description: "Create detailed test cases and test data",
    color: "border-purple-500 bg-purple-50",
    activities: ["Create test cases from requirements", "Develop automation scripts", "Prepare test data"],
    deliverables: ["Test Cases document", "Test Scripts", "Test Data sets"],
    myExperience:
      "I write detailed test cases in TestRail with clear steps and expected results. I also create Cypress automation scripts for regression testing and prepare test data for different user scenarios.",
  },
  {
    phase: 4,
    title: "Test Environment Setup",
    description: "Prepare testing environment and test data",
    color: "border-yellow-500 bg-yellow-50",
    activities: ["Setup test environment", "Install required software", "Configure test data"],
    deliverables: ["Environment setup document", "Test data creation", "Smoke test results"],
    myExperience:
      "I coordinate with DevOps to ensure test environments are ready and run smoke tests to verify basic functionality before starting detailed testing.",
  },
  {
    phase: 5,
    title: "Test Case Execution",
    description: "Execute test cases and report defects",
    color: "border-red-500 bg-red-50",
    activities: ["Execute test cases", "Log defects in bug tracking tool", "Retest fixed defects"],
    deliverables: ["Test execution results", "Defect reports", "Test logs"],
    myExperience:
      "I execute both manual and automated tests, immediately log bugs in Jira with detailed reproduction steps and screenshots, then verify fixes during retesting.",
  },
  {
    phase: 6,
    title: "Test Reporting",
    description: "Analyze results and create test summary report",
    color: "border-orange-500 bg-orange-50",
    activities: ["Evaluate test completion criteria", "Analyze metrics and coverage", "Prepare final report"],
    deliverables: ["Test summary report", "Test metrics", "Test coverage report"],
    myExperience:
      "I generate test execution reports from TestRail showing pass/fail rates and present testing status in sprint reviews. I track metrics like bug density and resolution time.",
  },
  {
    phase: 7,
    title: "Test Closure",
    description: "Document lessons learned and archive test artifacts",
    color: "border-gray-500 bg-gray-50",
    activities: ["Document lessons learned", "Archive test artifacts", "Analyze process improvements"],
    deliverables: ["Test closure report", "Best practices document", "Test artifacts archive"],
    myExperience:
      "During sprint retrospectives, I discuss what testing approaches worked well and suggest improvements. I maintain our test automation suite and update documentation.",
  },
];

export function StlcSection() {
  return (
    <section id="stlc" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="STLC - Software Testing Life Cycle"
          subtitle="Systematic approach to testing"
          icon={CheckCircle}
        />
        <CardContent className="p-8">
          <div className="space-y-4">
            {stlcPhases.map((phase) => (
              <div key={phase.phase} className={`border-l-4 p-6 rounded-r-lg ${phase.color}`}>
                <div className="flex items-start space-x-4">
                  <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
                    {phase.phase}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                    <p className="text-gray-700 mb-2">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-semibold text-sm mb-1">Activities:</h4>
                        <ul className="text-xs space-y-1">
                          {phase.activities.map((activity, index) => (
                            <li key={index}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-semibold text-sm mb-1">Deliverables:</h4>
                        <ul className="text-xs space-y-1">
                          {phase.deliverables.map((deliverable, index) => (
                            <li key={index}>• {deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* My Experience for each phase */}
                    <div className="mt-3 bg-white p-3 rounded border border-gray-200">
                      <div className="flex items-center mb-1">
                        <User className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                      </div>
                      <p className="text-xs text-gray-600 italic">{phase.myExperience}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* My STLC Process Summary */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              How I Apply STLC in My Daily Work
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-800 mb-2">Agile Adaptation:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• STLC phases happen within each 2-week sprint</li>
                  <li>• Requirements analysis during sprint planning</li>
                  <li>• Test execution happens as features are developed</li>
                  <li>• Continuous reporting throughout the sprint</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-800 mb-2">Tools Integration:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• TestRail for test case management and execution</li>
                  <li>• Jira for requirement traceability and bug tracking</li>
                  <li>• Cypress for automated test script development</li>
                  <li>• Bruno for API testing and validation</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-blue-100 p-3 rounded">
              <p className="text-sm">
                <strong>Key Success Factor:</strong> I've adapted the traditional STLC to work efficiently in Agile
                sprints, ensuring all phases are covered without slowing down development velocity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
