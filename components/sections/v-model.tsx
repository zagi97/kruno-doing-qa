import { CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function VModelSection() {
  return (
    <section id="v-model" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="V-Model (Verification & Validation)"
          subtitle="Testing throughout the development lifecycle"
          icon={CheckCircle}
        />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* V-Model Overview */}
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">What is the V-Model?</h3>
              <p className="text-gray-700 mb-4">
                The V-Model is an extension of the waterfall model where testing activities are planned in parallel with
                corresponding development phases. Each development phase has a corresponding testing phase.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-teal-800 mb-2">Verification (Left Side):</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Static testing activities</li>
                    <li>• Reviews and walkthroughs</li>
                    <li>• Document analysis</li>
                    <li>• "Are we building the product right?"</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-teal-800 mb-2">Validation (Right Side):</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Dynamic testing activities</li>
                    <li>• Actual test execution</li>
                    <li>• Code execution with test data</li>
                    <li>• "Are we building the right product?"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* V-Model Phases */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">V-Model Phase Mapping</h3>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-100 p-4 rounded border text-center">
                    <strong>Requirements Analysis</strong>
                    <p className="text-sm mt-1">Gather business requirements</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border text-center">
                    <strong>User Acceptance Testing</strong>
                    <p className="text-sm mt-1">Validate user requirements</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-gray-400 h-6 w-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-100 p-4 rounded border text-center">
                    <strong>System Design</strong>
                    <p className="text-sm mt-1">High-level architecture</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border text-center">
                    <strong>System Testing</strong>
                    <p className="text-sm mt-1">Test complete system</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-gray-400 h-6 w-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-100 p-4 rounded border text-center">
                    <strong>Detailed Design</strong>
                    <p className="text-sm mt-1">Module-level design</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded border text-center">
                    <strong>Integration Testing</strong>
                    <p className="text-sm mt-1">Test module interactions</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-gray-400 h-6 w-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-100 p-4 rounded border text-center">
                    <strong>Coding</strong>
                    <p className="text-sm mt-1">Implementation phase</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded border text-center">
                    <strong>Unit Testing</strong>
                    <p className="text-sm mt-1">Test individual modules</p>
                  </div>
                </div>
              </div>
            </div>

            {/* V-Model Benefits */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">V-Model Benefits</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">✓ Advantages:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Early test planning and design</li>
                    <li>• Better defect prevention</li>
                    <li>• Clear testing objectives</li>
                    <li>• Higher quality deliverables</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">✗ Disadvantages:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Rigid and less flexible</li>
                    <li>• Difficult to accommodate changes</li>
                    <li>• No early prototypes</li>
                    <li>• High risk for complex projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
