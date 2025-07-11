import { BarChart, TrendingUp, Users, User, Clock } from "lucide-react";
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

              {/* My Load Testing Experience */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-semibold text-green-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I learned load testing with JMeter during company training, running basic tests on sample pages and
                  APIs. I tested various load scenarios but haven't yet applied this to real project environments -
                  mainly educational practice.
                </p>
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

              {/* My Stress Testing Experience */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-red-600 mr-1" />
                  <span className="text-xs font-semibold text-red-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I practiced stress testing scenarios with JMeter during training, incrementally increasing load to
                  find breaking points. Used this for learning purposes on test pages, but not yet on production
                  applications.
                </p>
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

              {/* My Volume Testing Experience */}
              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-blue-600 mr-1" />
                  <span className="text-xs font-semibold text-blue-800">My Experience:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  I learned volume testing concepts with JMeter, testing with large datasets and multiple records during
                  training exercises. This was part of my JMeter learning process using sample data rather than real
                  project data.
                </p>
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

            {/* My Current Performance Testing Approach */}
            <div className="mt-8 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                My Current Performance Testing Approach
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">JMeter Learning Experience:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Training completed:</strong> Load, stress, volume, spike testing
                    </li>
                    <li>
                      • <strong>Practice environment:</strong> Sample pages and test APIs
                    </li>
                    <li>
                      • <strong>All test types covered:</strong> Comprehensive JMeter learning
                    </li>
                    <li>
                      • <strong>Challenges faced:</strong> Old-looking UI, documentation complexity
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Daily Performance Awareness:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Manual testing:</strong> Notice slow-loading pages during functional testing
                    </li>
                    <li>
                      • <strong>API testing:</strong> Monitor response times in Bruno/Postman
                    </li>
                    <li>
                      • <strong>Browser DevTools:</strong> Check network timing for requests
                    </li>
                    <li>
                      • <strong>User experience focus:</strong> Report performance issues affecting users
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-white p-3 rounded border border-gray-200">
                <h4 className="font-semibold text-orange-800 mb-2">Next Steps:</h4>
                <p className="text-sm text-gray-700">
                  While I have solid JMeter knowledge from training, I'm ready to apply performance testing skills to
                  real project scenarios. My current focus is functional testing, but I'm prepared to implement formal
                  performance testing when project needs arise.
                </p>
              </div>

              <div className="mt-4 bg-orange-100 p-3 rounded">
                <p className="text-sm">
                  <strong>Current Status:</strong> JMeter-trained and ready to implement performance testing on actual
                  projects. I understand the concepts and have hands-on practice, but await opportunities to apply this
                  knowledge in production environments.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
