import { Lightbulb, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

const principles = [
  {
    title: "1. Testing shows presence of defects",
    description: "Testing can prove that defects are present, but cannot prove that there are no defects.",
    color: "border-blue-500 bg-blue-50 text-blue-900",
    example:
      "In my project, I found 15 bugs in the payment module, but I can't guarantee there are no more bugs hidden in edge cases.",
  },
  {
    title: "2. Exhaustive testing is impossible",
    description:
      "Testing everything is not feasible except in trivial cases. Risk analysis and priorities should guide testing efforts.",
    color: "border-green-500 bg-green-50 text-green-900",
    example:
      "For our e-commerce site with 1000+ features, I prioritize testing critical paths like login, checkout, and payment over minor UI elements.",
  },
  {
    title: "3. Early testing",
    description:
      "Testing activities should start as early as possible in the SDLC and be focused on defined objectives.",
    color: "border-purple-500 bg-purple-50 text-purple-900",
    example:
      "I review requirements and write test cases during the design phase, before developers start coding, to catch issues early.",
  },
  {
    title: "4. Defect clustering",
    description: "A small number of modules contain most of the defects discovered during pre-release testing.",
    color: "border-red-500 bg-red-50 text-red-900",
    example:
      "80% of bugs I find are usually in 2-3 modules like user authentication and data processing - so I focus extra testing there.",
  },
  {
    title: "5. Pesticide paradox",
    description:
      "If the same tests are repeated, they will no longer find new bugs. Test cases need to be reviewed and updated.",
    color: "border-orange-500 bg-orange-50 text-orange-900",
    example:
      "I regularly update my Cypress automation scripts and add new test scenarios to catch different types of bugs.",
  },
  {
    title: "6. Testing is context dependent",
    description:
      "Testing is done differently in different contexts. Safety-critical software requires different testing than e-commerce sites.",
    color: "border-indigo-500 bg-indigo-50 text-indigo-900",
    example:
      "For payment features, I do extensive security testing, but for marketing pages, I focus more on UI/UX and browser compatibility.",
  },
  {
    title: "7. Absence of errors fallacy",
    description:
      "Finding and fixing defects does not help if the system built is unusable and does not fulfill user needs.",
    color: "border-gray-500 bg-gray-50 text-gray-900",
    example:
      "Even if the app works perfectly, if users can't figure out how to complete checkout, it's still a failure - so I test usability too.",
  },
];

export function PrinciplesSection() {
  return (
    <section id="principles" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        {/* REUSABLE SECTION HEADER */}
        <SectionHeader
          title="7 Testing Principles"
          subtitle="Fundamental concepts every QA should know"
          icon={Lightbulb}
        />

        {/* CONTENT */}
        <CardContent className="p-8">
          <div className="grid md:grid-cols-1 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className={`border-l-4 p-4 rounded-r-lg ${principle.color}`}>
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{principle.description}</p>

                {/* Real Example */}
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">{principle.example}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary of My Approach */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
              <User className="mr-2 h-5 w-5" />
              How I Apply These Principles Daily
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Risk-Based Testing:</strong> I prioritize testing based on business impact and user frequency
              </div>
              <div>
                <strong>Continuous Learning:</strong> I regularly update test cases and explore new testing techniques
              </div>
              <div>
                <strong>Early Involvement:</strong> I participate in requirement reviews and sprint planning meetings
              </div>
              <div>
                <strong>User-Focused:</strong> I always consider real user scenarios, not just technical requirements
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
