import { Settings, Play, BarChart, Users, Clock, CheckCircle, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

const jmeterTestScenarios = [
  {
    testType: "Load Testing",
    scenario: "E-commerce Website Peak Traffic",
    configuration: {
      threads: "100 users",
      rampUp: "60 seconds",
      duration: "10 minutes",
      loops: "Infinite",
    },
    endpoints: ["Homepage load", "Product search", "Add to cart", "Checkout process"],
    metrics: ["Average response time < 3s", "95th percentile < 5s", "Error rate < 1%", "Throughput > 50 req/sec"],
  },
  {
    testType: "Stress Testing",
    scenario: "API Breaking Point",
    configuration: {
      threads: "Start: 50, Max: 500 users",
      rampUp: "10 users every 30 seconds",
      duration: "30 minutes",
      loops: "Until failure",
    },
    endpoints: ["User authentication", "Data retrieval APIs", "File upload endpoints"],
    metrics: ["Find breaking point", "Monitor CPU/Memory usage", "Track error rates", "Recovery time after load"],
  },
];

const jmeterComponents = [
  {
    component: "Thread Group",
    purpose: "Define user load patterns",
    settings: ["Number of threads (users)", "Ramp-up period", "Loop count or duration"],
    description:
      "The foundation of any JMeter test plan. Controls how many virtual users will be simulated and how they ramp up over time.",
  },
  {
    component: "HTTP Request",
    purpose: "Define API endpoints to test",
    settings: ["Server name/IP", "HTTP method (GET/POST/PUT)", "Path and parameters"],
    description:
      "Creates HTTP requests to your application endpoints. You can test REST APIs, web pages, and any HTTP-based service.",
  },
  {
    component: "Listeners",
    purpose: "Collect and view results",
    settings: ["View Results Tree", "Summary Report", "Graph Results"],
    description:
      "Display test results in various formats. Essential for analyzing performance metrics and identifying issues.",
  },
  {
    component: "Assertions",
    purpose: "Validate responses",
    settings: ["Response code checks", "Response text validation", "Duration assertions"],
    description:
      "Verify that responses meet expected criteria. Critical for ensuring your tests actually validate functionality.",
  },
];

const jmeterSetupSteps = [
  {
    step: "Download & Install",
    description: "Download Apache JMeter from official website",
    commands: [
      "Download JMeter from https://jmeter.apache.org/",
      "Extract to desired directory",
      "Navigate to /bin folder",
      "Run jmeter.bat (Windows) or jmeter.sh (Linux/Mac)",
    ],
  },
  {
    step: "Create Test Plan",
    description: "Set up your first performance test",
    commands: [
      "Right-click Test Plan → Add → Threads → Thread Group",
      "Configure number of threads (users)",
      "Set ramp-up period and duration",
      "Add HTTP Request sampler",
    ],
  },
  {
    step: "Configure Requests",
    description: "Define what endpoints to test",
    commands: [
      "Right-click Thread Group → Add → Sampler → HTTP Request",
      "Enter server name/IP",
      "Set HTTP method (GET, POST, etc.)",
      "Add path and parameters",
    ],
  },
  {
    step: "Add Listeners",
    description: "View and analyze results",
    commands: [
      "Right-click Thread Group → Add → Listener → View Results Tree",
      "Add Summary Report for metrics",
      "Add Graph Results for visual analysis",
      "Configure result file saving",
    ],
  },
];

const jmeterBestPractices = {
  dos: [
    "Start with small thread counts and gradually increase",
    "Use realistic ramp-up periods (not all users at once)",
    "Add think time between requests (1-3 seconds)",
    "Monitor server resources during tests",
    "Use CSV files for test data variation",
    "Run tests from multiple machines for high load",
    "Save results to files for analysis",
    "Use non-GUI mode for actual load testing",
  ],
  donts: [
    "Don't run performance tests on production",
    "Don't ignore server-side monitoring",
    "Don't use GUI mode for actual load testing",
    "Don't forget to clear listeners for high-load tests",
    "Don't test without baseline measurements",
    "Don't run tests without proper test data",
    "Don't skip validating test environment setup",
    "Don't run long tests without incremental checkpoints",
  ],
};

const realWorldExamples = [
  {
    scenario: "E-commerce Load Test",
    description: "Testing online store during peak shopping hours",
    configuration: "400 threads, 60s ramp-up, 30 minutes duration",
    endpoints: ["Login", "Browse Products", "Add to Cart", "Checkout", "Payment"],
    expectedResults: "< 3s response time, < 1% error rate, 100+ TPS",
  },
  {
    scenario: "API Stress Test",
    description: "Finding breaking point of REST API",
    configuration: "Start: 50 users, increase by 50 every 2 minutes until failure",
    endpoints: ["User Registration", "Authentication", "Data Retrieval", "File Upload"],
    expectedResults: "Identify max concurrent users, monitor memory/CPU usage",
  },
  {
    scenario: "Database Performance Test",
    description: "Testing database under heavy read/write load",
    configuration: "200 threads, 120s ramp-up, 20 minutes duration",
    endpoints: ["SELECT queries", "INSERT operations", "UPDATE statements", "Complex JOINs"],
    expectedResults: "< 100ms query response, no connection timeouts",
  },
];

export function JMeterSection() {
  return (
    <section id="jmeter" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader
          title="JMeter Performance Testing"
          subtitle="Practical guide to Apache JMeter for load and performance testing"
          icon={Settings}
        />
        <CardContent className="p-8">
          {/* What is JMeter */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Apache JMeter?</h3>
            <p className="text-gray-700 mb-6">
              Apache JMeter is a powerful open-source tool designed for load testing and performance measurement. It can
              test performance both on static and dynamic resources, web dynamic applications, and simulate heavy loads
              on servers, groups of servers, networks, or objects to test their strength and analyze overall performance
              under different load types.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-900 mb-3">Key Features</h4>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li>• Multi-protocol support (HTTP, HTTPS, SOAP, REST)</li>
                  <li>• GUI and command-line modes</li>
                  <li>• Distributed testing capabilities</li>
                  <li>• Comprehensive reporting</li>
                  <li>• Extensible with plugins</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-3">Use Cases</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Load testing web applications</li>
                  <li>• API performance testing</li>
                  <li>• Database stress testing</li>
                  <li>• Functional testing</li>
                  <li>• Regression testing</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-3">Benefits</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Free and open source</li>
                  <li>• User-friendly GUI</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Active community support</li>
                  <li>• Detailed result analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Installation & Setup */}
          <div className="bg-green-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-green-900 mb-6 flex items-center">
              <Play className="mr-3 text-green-600" size={24} />
              Getting Started with JMeter
            </h3>

            <div className="space-y-6">
              {jmeterSetupSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{step.step}</h4>
                  </div>

                  <p className="text-gray-700 mb-4">{step.description}</p>

                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-medium text-gray-800 mb-2">Steps:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {step.commands.map((command, commandIndex) => (
                        <li key={commandIndex}>• {command}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* JMeter Components */}
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-6">Key JMeter Components</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {jmeterComponents.map((component, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">{component.component}</h4>
                  <p className="text-sm text-gray-600 mb-4">{component.description}</p>

                  <div className="mb-4">
                    <h5 className="font-medium text-gray-800 mb-2">Purpose:</h5>
                    <p className="text-sm text-gray-600">{component.purpose}</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Key Settings:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {component.settings.map((setting, settingIndex) => (
                        <li key={settingIndex}>• {setting}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Test Scenarios */}
          <div className="bg-purple-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-purple-900 mb-6">Real-World Test Scenarios</h3>
            <div className="space-y-6">
              {realWorldExamples.map((example, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">{example.scenario}</h4>
                  <p className="text-gray-700 mb-4">{example.description}</p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Configuration:</h5>
                      <div className="bg-orange-50 p-3 rounded text-sm text-orange-800">{example.configuration}</div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Test Endpoints:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {example.endpoints.map((endpoint, endpointIndex) => (
                          <li key={endpointIndex}>• {endpoint}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Expected Results:</h5>
                      <div className="bg-green-50 p-3 rounded text-sm text-green-800">{example.expectedResults}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Test Scenarios */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-yellow-900 mb-6">Practical JMeter Test Scenarios</h3>
            <div className="space-y-6">
              {jmeterTestScenarios.map((scenario, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-lg font-semibold text-yellow-900 mb-3">
                    {scenario.testType}: {scenario.scenario}
                  </h4>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Configuration:</h5>
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        {Object.entries(scenario.configuration).map(([key, value], configIndex) => (
                          <div key={configIndex} className="flex justify-between">
                            <span className="font-medium">{key}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Endpoints Tested:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scenario.endpoints.map((endpoint, endpointIndex) => (
                          <li key={endpointIndex}>• {endpoint}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Success Criteria:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scenario.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex}>• {metric}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* JMeter Best Practices */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">JMeter Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  Do's - Best Practices
                </h4>
                <ul className="space-y-2 text-sm text-green-800">
                  {jmeterBestPractices.dos.map((practice, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                  <AlertTriangle className="mr-2" size={20} />
                  Don'ts - Common Pitfalls
                </h4>
                <ul className="space-y-2 text-sm text-red-800">
                  {jmeterBestPractices.donts.map((practice, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="text-red-600 mr-2 mt-0.5 flex-shrink-0" size={12} />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Command Line Usage */}
          <div className="bg-purple-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-purple-900 mb-6 flex items-center">
              <FileText className="mr-3 text-purple-600" size={24} />
              Command Line Usage
            </h3>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 mb-6">
              <p className="text-purple-800 text-sm">
                For serious load testing, always use JMeter in non-GUI mode. The GUI is only for creating and debugging
                test plans. Command line mode provides better performance and resource utilization.
              </p>
            </div>

            <div className="bg-gray-900 text-green-400 p-6 rounded font-mono text-sm overflow-x-auto">
              <div className="space-y-3">
                <div>
                  <div className="text-gray-500"># Basic command to run test plan</div>
                  <div>jmeter -n -t TestPlan.jmx -l results.jtl</div>
                </div>

                <div>
                  <div className="text-gray-500"># Run with HTML dashboard report</div>
                  <div>jmeter -n -t TestPlan.jmx -l results.jtl -e -o /report/folder</div>
                </div>

                <div>
                  <div className="text-gray-500"># Override properties</div>
                  <div>jmeter -n -t TestPlan.jmx -l results.jtl -Jthreads=100 -Jrampup=300</div>
                </div>

                <div>
                  <div className="text-gray-500"># Distributed testing</div>
                  <div>jmeter -n -t TestPlan.jmx -R server1,server2,server3 -l results.jtl</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center">
              <BarChart className="mr-3" size={24} />
              Key Performance Metrics to Monitor
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <Clock className="mr-2" size={16} />
                  Response Time Metrics
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Average:</span>
                    <span className="font-bold text-orange-600">&lt; 3 seconds</span>
                  </li>
                  <li className="flex justify-between">
                    <span>90th Percentile:</span>
                    <span className="font-bold text-orange-600">&lt; 5 seconds</span>
                  </li>
                  <li className="flex justify-between">
                    <span>95th Percentile:</span>
                    <span className="font-bold text-orange-600">&lt; 8 seconds</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <Users className="mr-2" size={16} />
                  Throughput Metrics
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Requests/sec:</span>
                    <span className="font-bold text-blue-600">&gt; 100 req/s</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Transactions/sec:</span>
                    <span className="font-bold text-blue-600">&gt; 50 TPS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Concurrent Users:</span>
                    <span className="font-bold text-blue-600">1000+</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-orange-800 mb-3">Error Metrics</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Error Rate:</span>
                    <span className="font-bold text-red-600">&lt; 1%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Timeout Rate:</span>
                    <span className="font-bold text-red-600">&lt; 0.5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Server Errors:</span>
                    <span className="font-bold text-red-600">&lt; 0.1%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-orange-100 p-4 rounded">
              <p className="text-sm text-orange-800">
                <strong>Pro Tip:</strong> Always establish baseline performance metrics before making changes. Run tests
                multiple times to account for variability, and monitor server resources (CPU, memory, disk I/O)
                alongside JMeter metrics for complete performance analysis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
