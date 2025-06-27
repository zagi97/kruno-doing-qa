"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { IntroductionSection } from "@/components/sections/introduction"
import { PrinciplesSection } from "@/components/sections/principles"
import { SdlcSection } from "@/components/sections/sdlc"
import { StlcSection } from "@/components/sections/stlc"
import { StaticDynamicSection } from "@/components/sections/static-dynamic"
import { ManualAutomationSection } from "@/components/sections/manual-automation"
import { BlackWhiteBoxSection } from "@/components/sections/black-white-box"
import { FunctionalSection } from "@/components/sections/functional"
import { NonFunctionalSection } from "@/components/sections/non-functional"
import { BugReportSection } from "@/components/sections/bug-report"
import { TestCaseSection } from "@/components/sections/test-case"
import { RegressionTestingSection } from "@/components/sections/regression-testing"
import { SmokeTestingSection } from "@/components/sections/smoke-testing"
import { TestingLevelsSection } from "@/components/sections/testing-levels"
import { VModelSection } from "@/components/sections/v-model"
import { TestingTechniquesSection } from "@/components/sections/testing-techniques"
import { PerformanceTestingSection } from "@/components/sections/performance-testing"
import { CypressSection } from "@/components/sections/cypress"

export default function QATestingBlog() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "principles",
        "sdlc",
        "stlc",
        "testing-levels",
        "v-model",
        "static-dynamic",
        "manual-automation",
        "functional",
        "testing-techniques",
        "performance-testing",
        "non-functional",
        "blackbox-whitebox",
        "bug-reporting",
        "test-cases",
        "regression-testing",
        "smoke-testing",
        "cypress",
      ]

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:pl-80">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-8 max-w-6xl mx-auto space-y-16">
          {/* Getting Started */}
          <IntroductionSection />
          <PrinciplesSection />
          <SdlcSection />
          <StlcSection />
          <TestingLevelsSection />
          <VModelSection />

          {/* Testing Types */}
          <StaticDynamicSection />
          <ManualAutomationSection />
          <FunctionalSection />
          <TestingTechniquesSection />
          <PerformanceTestingSection />
          <NonFunctionalSection />
          <BlackWhiteBoxSection />

          {/* Test Management */}
          <BugReportSection />
          <TestCaseSection />
          <RegressionTestingSection />
          <SmokeTestingSection />

          {/* Automation */}
          <CypressSection />
        </main>
      </div>
    </div>
  )
}
