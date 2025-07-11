import { Book, Search, Check, User, Shield, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/header-section";

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-20">
      <Card className="shadow-lg overflow-hidden">
        {/* REUSABLE SECTION HEADER */}
        <SectionHeader title="What is QA Testing?" subtitle="Foundation of Quality Assurance" icon={Book} />

        {/* CONTENT */}
        <CardContent className="p-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Quality Assurance (QA) Testing is the systematic process of ensuring software applications meet specified
              requirements and function correctly before reaching end users. As a QA professional, you act as the
              guardian of software quality.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Responsibilities</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Search className="text-blue-600 mt-1 h-5 w-5" />
                  <span>
                    <strong>Finding and documenting software defects</strong> - Systematic bug detection and analysis
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-600 mt-1 h-5 w-5" />
                  <span>
                    <strong>Verifying features work according to specifications</strong> - Requirements validation
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="text-purple-600 mt-1 h-5 w-5" />
                  <span>
                    <strong>Ensuring applications are user-friendly</strong> - UX/UI testing
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-red-600 mt-1 h-5 w-5" />
                  <span>
                    <strong>Performance and security validation</strong> - Non-functional testing
                  </span>
                </div>
              </div>
            </div>

            {/* Simple Skills Section */}
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                Essential QA Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Technical:</h4>
                  <p className="text-sm text-gray-700">
                    Test case writing, bug reporting, automation tools, API testing
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Soft Skills:</h4>
                  <p className="text-sm text-gray-700">Attention to detail, analytical thinking, clear communication</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Real-World Impact</h3>
              <p className="text-gray-700 mb-4">
                Consider major companies like <strong>Tesco</strong> - their e-commerce platform handles millions of
                transactions daily. A single bug in their checkout process could cost millions in lost revenue. QA
                testing prevents such disasters.
              </p>

              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold mb-2">Airlines Example - Croatia Airlines</h4>
                <p className="text-sm text-gray-700">
                  An airline booking system must handle seat selection, payment processing, and passenger data
                  accurately. One bug in the payment gateway could result in double charges or failed bookings,
                  affecting thousands of travelers.
                </p>
              </div>
            </div>

            {/* Simple My Experience */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">My Experience as QA Tester</h3>
              <p className="text-gray-700 mb-3">
                I work as a QA Tester using tools like <strong>TestRail</strong> for test management,{" "}
                <strong>Cypress</strong> for automation, and <strong>Bruno/Postman</strong> for API testing. My daily
                work includes writing test cases, finding bugs, and collaborating with developers using{" "}
                <strong>Jira Kanban</strong>.
              </p>
              <div className="bg-blue-100 p-3 rounded">
                <p className="text-sm">
                  <strong>Key Achievement:</strong> Implemented automated testing that reduced manual testing time by
                  60% and caught critical bugs before production.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
