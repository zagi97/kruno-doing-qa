import { BarChart, Users, AlertTriangle, Database, Zap, Shield, UserCheck, RotateCcw, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function NonFunctionalSection() {
  return (
    <section id="non-functional" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="Non-Functional Testing" subtitle="Testing how the system performs" icon={BarChart} />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Overview */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-4">What is Non-Functional Testing?</h3>
              <p className="text-gray-700 mb-4">
                Non-functional testing evaluates the performance, usability, reliability, and other quality aspects of
                the software. It focuses on HOW the system performs rather than WHAT it does.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Performance Metrics:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Response time</li>
                    <li>• Throughput</li>
                    <li>• Resource utilization</li>
                    <li>• Scalability</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Quality Attributes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Usability</li>
                    <li>• Reliability</li>
                    <li>• Security</li>
                    <li>• Compatibility</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Environmental:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Cross-browser testing</li>
                    <li>• Mobile responsiveness</li>
                    <li>• Network conditions</li>
                    <li>• Device compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Testing Types */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Performance Testing Types</h3>

              {/* Load Testing */}
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <Users className="text-green-600 mr-2 h-5 w-5" />
                  Load Testing
                </h4>
                <p className="text-gray-700 mb-3">Testing system behavior under normal expected load conditions.</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Objectives:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Verify response time requirements</li>
                      <li>• Ensure system stability</li>
                      <li>• Validate throughput expectations</li>
                      <li>• Identify performance bottlenecks</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Real Example - Tesco Online:</h5>
                    <div className="text-sm">
                      <p className="mb-2">
                        <strong>Normal Load:</strong> 10,000 concurrent users
                      </p>
                      <p className="mb-2">
                        <strong>Expected Response:</strong> Page load {"<"} 3 seconds
                      </p>
                      <p>
                        <strong>Transactions:</strong> 500 orders per minute
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stress Testing */}
              <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                  <AlertTriangle className="text-orange-600 mr-2 h-5 w-5" />
                  Stress Testing
                </h4>
                <p className="text-gray-700 mb-3">
                  Testing system behavior beyond normal capacity to find breaking point.
                </p>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-3">Airlines Example - Croatia Airlines During Holiday Rush:</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-orange-100 p-3 rounded">
                      <h6 className="font-semibold">Normal Load</h6>
                      <p className="text-xs mt-1">2,000 users booking flights simultaneously</p>
                    </div>
                    <div className="bg-orange-200 p-3 rounded">
                      <h6 className="font-semibold">Stress Load</h6>
                      <p className="text-xs mt-1">15,000 users during Christmas booking rush</p>
                    </div>
                    <div className="bg-red-200 p-3 rounded">
                      <h6 className="font-semibold">Breaking Point</h6>
                      <p className="text-xs mt-1">System fails at 20,000+ concurrent users</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-100 rounded">
                    <p className="text-sm">
                      <strong>Goal:</strong> Ensure graceful degradation - system should slow down but not crash
                      completely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Volume Testing */}
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <Database className="text-blue-600 mr-2 h-5 w-5" />
                  Volume Testing
                </h4>
                <p className="text-gray-700 mb-3">
                  Testing system with large amounts of data to verify performance and stability.
                </p>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-3">Database Testing Example:</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-semibold mb-2">Test Scenarios:</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• 10 million customer records</li>
                        <li>• 100 million transaction history</li>
                        <li>• 50GB product catalog</li>
                        <li>• 1TB of user-generated content</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2">Validation Points:</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• Search response time remains {"<"} 2s</li>
                        <li>• Database queries don't timeout</li>
                        <li>• Memory usage stays within limits</li>
                        <li>• Data integrity maintained</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spike Testing */}
              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                  <Zap className="text-purple-600 mr-2 h-5 w-5" />
                  Spike Testing
                </h4>
                <p className="text-gray-700 mb-3">Testing system behavior under sudden, extreme load increases.</p>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-3">Black Friday Example - E-commerce Site:</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-purple-100 p-3 rounded">
                      <span className="text-sm font-medium">Normal Traffic:</span>
                      <span className="text-sm">5,000 users</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-purple-600 text-2xl">↓</div>
                    </div>
                    <div className="flex items-center justify-between bg-red-100 p-3 rounded">
                      <span className="text-sm font-medium">Spike Traffic (12:00 AM):</span>
                      <span className="text-sm font-bold">50,000 users in 2 minutes</span>
                    </div>
                    <div className="text-xs text-purple-700 bg-purple-100 p-2 rounded">
                      <strong>Test Goal:</strong> Verify system can handle sudden 10x traffic increase without complete
                      failure
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Non-Functional Testing Types */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Security Testing */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                  <Shield className="text-red-600 mr-2 h-5 w-5" />
                  Security Testing
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Common Tests:</h5>
                    <ul className="text-xs space-y-1">
                      <li>• SQL Injection attacks</li>
                      <li>• Cross-site scripting (XSS)</li>
                      <li>• Authentication bypass</li>
                      <li>• Session management</li>
                      <li>• Data encryption validation</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 p-2 rounded text-xs">
                    <strong>Example:</strong> Testing login form against SQL injection:
                    <code className="ml-1 bg-white px-1 rounded">{"' OR '1'='1"}</code>
                  </div>
                </div>
              </div>

              {/* Usability Testing */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <UserCheck className="text-green-600 mr-2 h-5 w-5" />
                  Usability Testing
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Evaluation Criteria:</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Ease of navigation</li>
                      <li>• User interface clarity</li>
                      <li>• Task completion time</li>
                      <li>• Error prevention</li>
                      <li>• User satisfaction</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>Example:</strong> Can a new user complete checkout process within 3 minutes without help?
                  </div>
                </div>
              </div>

              {/* Compatibility Testing */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <RotateCcw className="text-blue-600 mr-2 h-5 w-5" />
                  Compatibility Testing
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Testing Matrix:</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <strong>Browsers:</strong>
                        <ul className="mt-1">
                          <li>• Chrome 120+</li>
                          <li>• Firefox 115+</li>
                          <li>• Safari 16+</li>
                          <li>• Edge 110+</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Devices:</strong>
                        <ul className="mt-1">
                          <li>• iPhone 12+</li>
                          <li>• Samsung Galaxy</li>
                          <li>• iPad Pro</li>
                          <li>• Desktop 1920x1080</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reliability Testing */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                  <Clock className="text-purple-600 mr-2 h-5 w-5" />
                  Reliability Testing
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Metrics:</h5>
                    <ul className="text-xs space-y-1">
                      <li>
                        • <strong>MTBF:</strong> Mean Time Between Failures
                      </li>
                      <li>
                        • <strong>MTTR:</strong> Mean Time To Recovery
                      </li>
                      <li>
                        • <strong>Availability:</strong> 99.9% uptime target
                      </li>
                      <li>
                        • <strong>Failure Rate:</strong> {"<"} 0.1% transactions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
