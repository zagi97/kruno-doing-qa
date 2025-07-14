import { Flame, CheckCircle, AlertTriangle, User, Target, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function SmokeTestingSection() {
  return (
    <section id="smoke-testing" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        <SectionHeader title="Smoke Testing" subtitle="Basic functionality verification" icon={Flame} />
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* What is Smoke Testing */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">What is Smoke Testing?</h3>
              <p className="text-gray-700 mb-4">
                Smoke testing is a preliminary testing approach that verifies the basic functionality of an application
                to ensure it's stable enough for further detailed testing. It's also known as "Build Verification
                Testing."
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Key Characteristics:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Quick and shallow testing</li>
                    <li>• Tests critical functionalities only</li>
                    <li>• Performed after new build deployment</li>
                    <li>• Determines if build is stable for testing</li>
                    <li>• Usually automated</li>
                    <li>• Takes 30 minutes to 2 hours</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Purpose:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Verify application launches successfully</li>
                    <li>• Check critical paths work</li>
                    <li>• Ensure basic functionality is intact</li>
                    <li>• Save time by catching major issues early</li>
                    <li>• Decide if detailed testing should proceed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* My Smoke Testing Approach */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Smoke Testing Approach</h3>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-2 border-red-200">
                <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-xs font-semibold text-red-800">My Experience:</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    I do smoke testing after new deployment on production. I check if everything works on production and
                    that new features haven't crashed the production environment.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border border-red-100">
                    <div className="flex items-center mb-3">
                      <Target className="h-5 w-5 text-red-600 mr-2" />
                      <h4 className="font-semibold text-red-900">When I Do Smoke Testing</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>After production deployment:</strong> When new code is deployed to production
                      </li>
                      <li>
                        • <strong>Production verification:</strong> Check that production environment works
                      </li>
                      <li>
                        • <strong>New feature safety:</strong> Ensure new features didn't break existing functionality
                      </li>
                      <li>
                        • <strong>Critical check:</strong> Verify the most important features still work
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-red-100">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2" />
                      <h4 className="font-semibold text-red-900">My Testing Approach</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Manual testing:</strong> For now I do manual testing
                      </li>
                      <li>
                        • <strong>TestRail test cases:</strong> I have test cases for smoke testing
                      </li>
                      <li>
                        • <strong>Happy path focus:</strong> Happy path testing with smoke testing
                      </li>
                      <li>
                        • <strong>Most important tests:</strong> Smoke tests are most important test cases from new
                        feature
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-red-100 p-3 rounded">
                  <p className="text-sm text-red-800">
                    <strong>My Focus:</strong> After deploying new code to production, I do smoke testing to make sure
                    everything works and new features haven't crashed the production environment.
                  </p>
                </div>
              </div>
            </div>

            {/* My Production Smoke Testing Process */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">My Production Smoke Testing Process</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">New Code Deployed to Production</h4>
                    <p className="text-sm text-gray-600">
                      Development team deploys new features or bug fixes to production environment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Run Smoke Tests on Production</h4>
                    <p className="text-sm text-gray-600">
                      Execute smoke test cases to verify production environment is working correctly
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Check Critical Functionality</h4>
                    <p className="text-sm text-gray-600">
                      Test the most important test cases from new features and existing critical functions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded border">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Verify Production Stability</h4>
                    <p className="text-sm text-gray-600">
                      Confirm that new changes haven't crashed production and everything works as expected
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Smoke Test Coverage */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">What I Include in My Smoke Tests</h3>

              <div className="bg-white p-3 rounded border border-gray-200 mb-4">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-semibold text-green-800">My Approach:</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  Smoke tests are the most important test cases from new features plus happy path testing to make sure
                  basic functionality works on production.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-3">Most Important Test Cases:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>New feature core functionality:</strong> Main workflow of new features
                    </li>
                    <li>
                      • <strong>Critical business functions:</strong> Login, main navigation, core features
                    </li>
                    <li>
                      • <strong>Happy path scenarios:</strong> Successful user workflows
                    </li>
                    <li>
                      • <strong>Integration points:</strong> Areas where new features connect to existing system
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-3">Production Verification:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Application loads:</strong> Site/app starts correctly
                    </li>
                    <li>
                      • <strong>Authentication works:</strong> Users can log in
                    </li>
                    <li>
                      • <strong>Main features functional:</strong> Core functionality not broken
                    </li>
                    <li>
                      • <strong>No obvious crashes:</strong> System stability on production
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sample Smoke Test Cases */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">My TestRail Smoke Test Examples</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-3">Production Smoke Test Cases:</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-12 gap-2 text-sm font-medium bg-gray-100 p-2 rounded">
                      <div className="col-span-1">ID</div>
                      <div className="col-span-11">Test Case Title (Happy Path Focus)</div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                      <div className="col-span-1 text-orange-600 font-mono">S001</div>
                      <div className="col-span-11">Verify that user can log in to the application on production</div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                      <div className="col-span-1 text-orange-600 font-mono">S002</div>
                      <div className="col-span-11">Verify that main dashboard loads correctly on production</div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                      <div className="col-span-1 text-orange-600 font-mono">S003</div>
                      <div className="col-span-11">Verify that navigation between main sections works</div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 text-sm p-2 border-b">
                      <div className="col-span-1 text-orange-600 font-mono">S004</div>
                      <div className="col-span-11">Verify that new feature core functionality works correctly</div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 text-sm p-2">
                      <div className="col-span-1 text-orange-600 font-mono">S005</div>
                      <div className="col-span-11">
                        Verify that critical business functions are not affected by deployment
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-blue-100 p-3 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>My Focus:</strong> These are the most critical test cases that verify production stability
                      and that new features work without breaking existing functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Manual vs Automation Approach */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">My Testing Approach: Manual vs Automation</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <Clock className="h-4 w-4 text-purple-600 mr-2" />
                    Current Approach - Manual Testing
                  </h4>
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="flex items-center mb-1">
                      <User className="h-4 w-4 text-purple-600 mr-1" />
                      <span className="text-xs font-semibold text-purple-800">My Experience:</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      "For now I do manual testing" - I run through my TestRail smoke test cases manually on production.
                    </p>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Manual execution:</strong> Go through TestRail test cases manually
                    </li>
                    <li>
                      • <strong>Production testing:</strong> Test directly on production environment
                    </li>
                    <li>
                      • <strong>Real user experience:</strong> See exactly what users would see
                    </li>
                    <li>
                      • <strong>Flexible approach:</strong> Can adapt tests based on what I observe
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-800 mb-3">Future Automation Potential</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Cypress automation:</strong> Could automate smoke tests with Cypress
                    </li>
                    <li>
                      • <strong>Faster execution:</strong> Automated smoke tests run quicker
                    </li>
                    <li>
                      • <strong>Immediate feedback:</strong> Can run automatically after deployment
                    </li>
                    <li>
                      • <strong>Consistent testing:</strong> Same tests run every time
                    </li>
                  </ul>

                  <div className="mt-3 bg-purple-100 p-3 rounded">
                    <p className="text-xs text-purple-700">
                      <strong>Current Reality:</strong> Manual testing works well for now and gives me direct control
                      over production verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smoke Testing Process */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">General Smoke Testing Process</h3>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                    <CheckCircle className="text-blue-600 mr-2 h-5 w-5" />
                    Step 1: Build Deployment
                  </h4>
                  <p className="text-gray-700 mb-3">New build is deployed to the test environment</p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Activities:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Deploy latest build to test environment</li>
                      <li>• Verify deployment was successful</li>
                      <li>• Check application starts without errors</li>
                      <li>• Confirm environment setup is correct</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Step 2: Execute Smoke Tests</h4>
                  <p className="text-gray-700 mb-3">Run predefined smoke test cases covering critical functionality</p>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Test Areas:</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-1">
                        <li>• Application login/authentication</li>
                        <li>• Main navigation and menus</li>
                        <li>• Core business functions</li>
                        <li>• Database connectivity</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• API endpoints (if applicable)</li>
                        <li>• File upload/download</li>
                        <li>• Search functionality</li>
                        <li>• Basic CRUD operations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Step 3: Analyze Results</h4>
                  <p className="text-gray-700 mb-3">Evaluate test results and make go/no-go decision</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-100 p-3 rounded border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-1">✓ PASS</h5>
                      <p className="text-xs">All critical functions work. Production is stable.</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded border border-red-200">
                      <h5 className="font-semibold text-red-800 mb-1">✗ FAIL</h5>
                      <p className="text-xs">Critical issues found. Need immediate fix.</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-1">⚠ CONDITIONAL</h5>
                      <p className="text-xs">Minor issues found. Monitor closely.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smoke vs Sanity vs Regression */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smoke vs Sanity vs Regression Testing</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-3 text-left font-semibold">Aspect</th>
                      <th className="border p-3 text-left font-semibold">Smoke Testing</th>
                      <th className="border p-3 text-left font-semibold">Sanity Testing</th>
                      <th className="border p-3 text-left font-semibold">Regression Testing</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border p-3 font-medium">Purpose</td>
                      <td className="border p-3">Verify build stability</td>
                      <td className="border p-3">Verify specific functionality</td>
                      <td className="border p-3">Verify existing features work</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">Scope</td>
                      <td className="border p-3">Broad but shallow</td>
                      <td className="border p-3">Narrow but deep</td>
                      <td className="border p-3">Broad and deep</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">When Performed</td>
                      <td className="border p-3">After new build</td>
                      <td className="border p-3">After minor changes</td>
                      <td className="border p-3">After any changes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">Time Required</td>
                      <td className="border p-3">30 min - 2 hours</td>
                      <td className="border p-3">1-3 hours</td>
                      <td className="border p-3">Several hours to days</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Automation</td>
                      <td className="border p-3">Usually automated</td>
                      <td className="border p-3">Can be manual or automated</td>
                      <td className="border p-3">Preferably automated</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-orange-100 p-3 rounded">
                <div className="flex items-center mb-1">
                  <User className="h-4 w-4 text-orange-600 mr-1" />
                  <span className="text-xs font-semibold text-orange-800">My Experience:</span>
                </div>
                <p className="text-xs text-orange-700 italic">
                  I focus on smoke testing after production deployments to ensure new features haven't broken the
                  production environment. It's my first line of defense for production stability.
                </p>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Smoke Testing Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-green-800 mb-2">✓ Do's:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Keep test cases simple and focused</li>
                      <li>• Include most important test cases from new features</li>
                      <li>• Focus on happy path testing</li>
                      <li>• Test on production after deployment</li>
                      <li>• Verify new features don't crash production</li>
                      <li>• Document clear pass/fail criteria</li>
                      <li>• Update smoke tests with new features</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-800 mb-2">✗ Don'ts:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Don't include detailed test scenarios</li>
                      <li>• Don't test edge cases or negative scenarios</li>
                      <li>• Don't spend too much time on smoke testing</li>
                      <li>• Don't ignore smoke test failures</li>
                      <li>• Don't make smoke tests too complex</li>
                      <li>• Don't skip smoke testing after production deployment</li>
                      <li>• Don't test unrelated functionality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-green-100 p-3 rounded">
                <p className="text-sm text-green-800">
                  <strong>My Philosophy:</strong> Smoke testing after production deployment is critical. I check the
                  most important functionality to ensure new features work and haven't broken existing features. It's
                  about production stability and user confidence.
                </p>
              </div>
            </div>

            {/* Real-World Example */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                <AlertTriangle className="text-yellow-600 mr-2 h-5 w-5" />
                My Real-World Scenario: After Production Deployment
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Situation:</h4>
                  <p className="text-sm text-gray-700">
                    New user profile feature was deployed to production. I need to verify that production is stable and
                    the new feature works without breaking existing functionality.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">My Smoke Test Process:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-green-800">Happy Path Tests:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• User can log in to production</li>
                        <li>• Dashboard loads correctly</li>
                        <li>• Navigation works</li>
                        <li>• New profile feature works</li>
                        <li>• User can save profile changes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800">Critical Checks:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• No obvious crashes</li>
                        <li>• Main features still functional</li>
                        <li>• New feature integration works</li>
                        <li>• Production environment stable</li>
                        <li>• Users can complete main workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Result:</h4>
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-sm text-green-800">
                      <strong>✓ PASS:</strong> All smoke tests passed. Production is stable, new profile feature works
                      correctly, and existing functionality is not affected. Users can safely use the application.
                    </p>
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
