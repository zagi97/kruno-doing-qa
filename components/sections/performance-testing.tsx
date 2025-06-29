import { BarChart, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function PerformanceTestingSection() {
  return (
    <section id="performance-testing" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="Performance Testing"
          subtitle="Comprehensive performance testing strategies"
          icon={BarChart}
        />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Load Testing */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <Users className="text-green-600 mr-2 h-5 w-5" />
                Load Testing
              </h4>
              <p className="text-gray-700 mb-4">Testing system behavior under expected normal load conditions.</p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-green-800 mb-3">Typical Load Metrics:</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-100 p-3 rounded text-center">
                    <div className="font-bold text-green-800">5000 Users</div>
                    <div className="text-sm">Concurrent Users</div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded text-center">
                    <div className="font-bold text-blue-800">&lt; 5 sec</div>
                    <div className="text-sm">Response Time</div>
                  </div>
                  <div className="bg-purple-100 p-3 rounded text-center">
                    <div className="font-bold text-purple-800">1000 TPS</div>
                    <div className="text-sm">Transactions/Sec</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stress Testing */}
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                <TrendingUp className="text-red-600 mr-2 h-5 w-5" />
                Stress Testing
              </h4>
              <p className="text-gray-700 mb-4">
                Testing system behavior beyond normal capacity to find the breaking point.
              </p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-red-800 mb-3">Stress Progression:</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-green-100 p-2 rounded">
                    <span>Normal Load</span>
                    <span className="font-bold">5,000 users</span>
                  </div>
                  <div className="flex justify-between items-center bg-yellow-100 p-2 rounded">
                    <span>Increased Load</span>
                    <span className="font-bold">10,000 users</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-100 p-2 rounded">
                    <span>Breaking Point</span>
                    <span className="font-bold">15,000+ users</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Volume Testing */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Volume Testing</h4>
              <p className="text-gray-700 mb-4">Testing system performance with large amounts of data.</p>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-blue-800 mb-2">Volume Test Scenarios:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Database with 10 million records</li>
                  <li>• File processing of 4GB+ files</li>
                  <li>• Memory usage with large datasets</li>
                  <li>• Network bandwidth utilization</li>
                </ul>
              </div>
            </div>

            {/* Performance Benchmarks */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Performance Benchmarks</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Web Applications:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Page Load: &lt; 3 seconds</li>
                    <li>• API Response: &lt; 200ms</li>
                    <li>• Database Query: &lt; 100ms</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Mobile Apps:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• App Launch: &lt; 2 seconds</li>
                    <li>• Screen Transition: &lt; 1 second</li>
                    <li>• Data Sync: &lt; 5 seconds</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Enterprise Systems:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Transaction: &lt; 500ms</li>
                    <li>• Report Generation: &lt; 30 sec</li>
                    <li>• System Availability: 99.9%</li>
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
