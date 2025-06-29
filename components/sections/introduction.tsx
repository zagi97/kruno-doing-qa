import { Book, Search, Check, User, Shield } from "lucide-react";
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

            <div className="bg-green-50 p-6 rounded-lg">
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
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
