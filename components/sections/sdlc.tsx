import { Layers, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

const waterfallSteps = [
  { step: 1, title: "Requirements", description: "Gather and analyze business requirements", color: "bg-blue-500" },
  { step: 2, title: "Design", description: "System architecture and UI design", color: "bg-green-500" },
  { step: 3, title: "Implementation", description: "Code development phase", color: "bg-yellow-500" },
  { step: 4, title: "Testing", description: "QA validation and verification", color: "bg-red-500" },
  { step: 5, title: "Deployment", description: "Release to production", color: "bg-purple-500" },
  { step: 6, title: "Maintenance", description: "Ongoing support and updates", color: "bg-gray-500" },
];

const vModelPairs = [
  { left: "Requirements", right: "User Acceptance Test" },
  { left: "System Design", right: "System Testing" },
  { left: "Detailed Design", right: "Integration Testing" },
  { left: "Coding", right: "Unit Testing" },
];

export function SdlcSection() {
  return (
    <section id="sdlc" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        {/* REUSABLE SECTION HEADER */}
        <SectionHeader
          title="SDLC - Software Development Life Cycle"
          subtitle="Understanding development methodologies"
          icon={Layers}
        />

        {/* CONTENT */}
        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Waterfall Model */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-2"></div>
                Waterfall Model
              </h3>
              <div className="space-y-3">
                {waterfallSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-center space-x-3 p-3 bg-white rounded border-l-4 border-blue-500"
                  >
                    <span
                      className={`${step.color} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <span className="font-semibold">{step.title}</span>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* V-Model */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-6 h-6 bg-green-600 rounded mr-2"></div>
                V-Model (Verification & Validation)
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                The V-Model emphasizes testing at each development phase, ensuring early defect detection.
              </p>
              <div className="space-y-2">
                {vModelPairs.map((pair, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded text-sm">
                    <span className="font-medium">{pair.left}</span>
                    <ArrowRight className="text-gray-400 h-4 w-4" />
                    <span className="font-medium">{pair.right}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-500">
                <p className="text-sm">
                  <strong>Key Benefit:</strong> Testing strategies are planned during corresponding development phases,
                  leading to better test coverage and early defect detection.
                </p>
              </div>
            </div>
          </div>

          {/* Agile vs Waterfall Comparison */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Agile vs Waterfall Comparison</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-800 mb-2">Waterfall Testing</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Testing phase starts after development</li>
                  <li>• Detailed documentation required</li>
                  <li>• Sequential process</li>
                  <li>• Less flexibility for changes</li>
                  <li>• Good for stable requirements</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">Agile Testing</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Testing throughout development cycle</li>
                  <li>• Collaborative approach</li>
                  <li>• Iterative process</li>
                  <li>• High flexibility for changes</li>
                  <li>• Continuous feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
