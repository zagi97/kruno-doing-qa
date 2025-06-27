import { Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const principles = [
  {
    title: "1. Testing shows presence of defects",
    description: "Testing can prove that defects are present, but cannot prove that there are no defects.",
    color: "border-blue-500 bg-blue-50 text-blue-900",
  },
  {
    title: "2. Exhaustive testing is impossible",
    description:
      "Testing everything is not feasible except in trivial cases. Risk analysis and priorities should guide testing efforts.",
    color: "border-green-500 bg-green-50 text-green-900",
  },
  {
    title: "3. Early testing",
    description:
      "Testing activities should start as early as possible in the SDLC and be focused on defined objectives.",
    color: "border-purple-500 bg-purple-50 text-purple-900",
  },
  {
    title: "4. Defect clustering",
    description: "A small number of modules contain most of the defects discovered during pre-release testing.",
    color: "border-red-500 bg-red-50 text-red-900",
  },
  {
    title: "5. Pesticide paradox",
    description:
      "If the same tests are repeated, they will no longer find new bugs. Test cases need to be reviewed and updated.",
    color: "border-orange-500 bg-orange-50 text-orange-900",
  },
  {
    title: "6. Testing is context dependent",
    description:
      "Testing is done differently in different contexts. Safety-critical software requires different testing than e-commerce sites.",
    color: "border-indigo-500 bg-indigo-50 text-indigo-900",
  },
  {
    title: "7. Absence of errors fallacy",
    description:
      "Finding and fixing defects does not help if the system built is unusable and does not fulfill user needs.",
    color: "border-gray-500 bg-gray-50 text-gray-900",
  },
]

export function PrinciplesSection() {
  return (
    <section id="principles" className="scroll-mt-20">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Lightbulb className="text-2xl text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">7 Testing Principles</h2>
              <p className="text-gray-600">Fundamental concepts every QA should know</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className={`border-l-4 p-4 rounded-r-lg ${principle.color}`}>
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
