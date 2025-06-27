import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stlcPhases = [
  {
    phase: 1,
    title: "Requirement Analysis",
    description: "Review and understand requirements, identify testable scenarios",
    color: "border-blue-500 bg-blue-50",
    activities: [
      "Analyze functional & non-functional requirements",
      "Identify test conditions",
      "Create Requirement Traceability Matrix (RTM)",
    ],
    deliverables: ["RTM document", "Test Strategy document", "Automation feasibility report"],
  },
  {
    phase: 2,
    title: "Test Planning",
    description: "Define test approach, scope, resources, and timeline",
    color: "border-green-500 bg-green-50",
    activities: ["Define test scope and approach", "Estimate effort and timeline", "Identify resources and roles"],
    deliverables: ["Test Plan document", "Test Estimation", "Resource Planning"],
  },
  {
    phase: 3,
    title: "Test Case Design & Development",
    description: "Create detailed test cases and test data",
    color: "border-purple-500 bg-purple-50",
    activities: ["Create test cases from requirements", "Develop automation scripts", "Prepare test data"],
    deliverables: ["Test Cases document", "Test Scripts", "Test Data sets"],
  },
  {
    phase: 4,
    title: "Test Environment Setup",
    description: "Prepare testing environment and test data",
    color: "border-yellow-500 bg-yellow-50",
    activities: ["Setup test environment", "Install required software", "Configure test data"],
    deliverables: ["Environment setup document", "Test data creation", "Smoke test results"],
  },
  {
    phase: 5,
    title: "Test Case Execution",
    description: "Execute test cases and report defects",
    color: "border-red-500 bg-red-50",
    activities: ["Execute test cases", "Log defects in bug tracking tool", "Retest fixed defects"],
    deliverables: ["Test execution results", "Defect reports", "Test logs"],
  },
  {
    phase: 6,
    title: "Test Reporting",
    description: "Analyze results and create test summary report",
    color: "border-orange-500 bg-orange-50",
    activities: ["Evaluate test completion criteria", "Analyze metrics and coverage", "Prepare final report"],
    deliverables: ["Test summary report", "Test metrics", "Test coverage report"],
  },
  {
    phase: 7,
    title: "Test Closure",
    description: "Document lessons learned and archive test artifacts",
    color: "border-gray-500 bg-gray-50",
    activities: ["Document lessons learned", "Archive test artifacts", "Analyze process improvements"],
    deliverables: ["Test closure report", "Best practices document", "Test artifacts archive"],
  },
]

export function StlcSection() {
  return (
    <section id="stlc" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-2xl text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">STLC - Software Testing Life Cycle</h2>
              <p className="text-gray-600">Systematic approach to testing</p>
            </div>
          </div>

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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
