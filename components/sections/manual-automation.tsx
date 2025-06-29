import { Hand, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function ManualAutomationSection() {
  return (
    <section id="manual-automation" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Manual vs Automation Testing"
          subtitle="Choosing the right approach for different scenarios"
          icon={Hand}
        />
        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Manual Testing */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Hand className="text-blue-600 mr-2 h-5 w-5" />
                Manual Testing
              </h3>
              <p className="text-gray-700 mb-4">Human testers manually execute test cases without automation tools.</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-green-800">✓ Best For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Exploratory testing</li>
                    <li>• Usability testing</li>
                    <li>• Ad-hoc testing</li>
                    <li>• New feature testing</li>
                    <li>• UI/UX validation</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-red-800">✗ Limitations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Time-consuming for repetitive tasks</li>
                    <li>• Human error prone</li>
                    <li>• Not suitable for load testing</li>
                    <li>• Resource intensive</li>
                  </ul>
                </div>

                <div className="bg-blue-100 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-1">Example Scenario:</h4>
                  <p className="text-sm">
                    Testing a new checkout flow for Tesco's website - checking if the payment process feels intuitive
                    and secure to users.
                  </p>
                </div>
              </div>
            </div>

            {/* Automation Testing */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <Bot className="text-green-600 mr-2 h-5 w-5" />
                Automation Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Using tools and scripts to execute tests automatically without human intervention.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-green-800">✓ Best For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Regression testing</li>
                    <li>• Performance testing</li>
                    <li>• Repetitive test cases</li>
                    <li>• Data-driven testing</li>
                    <li>• Cross-browser testing</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-red-800">✗ Limitations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• High initial setup cost</li>
                    <li>• Maintenance overhead</li>
                    <li>• Cannot test user experience</li>
                    <li>• Requires technical skills</li>
                  </ul>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-1">Example Scenario:</h4>
                  <p className="text-sm">
                    Running 500 login test cases overnight to verify authentication works across different browsers and
                    user types.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Choose What */}
          <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">Decision Matrix: When to Use What</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-800 mb-2">Use Manual Testing When:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Testing new features for first time</li>
                  <li>• Exploring application behavior</li>
                  <li>• Checking visual elements</li>
                  <li>• Testing user workflows</li>
                  <li>• Performing accessibility testing</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">Use Automation When:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Tests need to run repeatedly</li>
                  <li>• Testing across multiple environments</li>
                  <li>• Performing load/stress testing</li>
                  <li>• Running smoke tests</li>
                  <li>• Doing regression testing</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">Hybrid Approach:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Automate stable, repetitive tests</li>
                  <li>• Manual testing for new features</li>
                  <li>• Use both for comprehensive coverage</li>
                  <li>• Start manual, automate over time</li>
                  <li>• Focus automation on critical paths</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
