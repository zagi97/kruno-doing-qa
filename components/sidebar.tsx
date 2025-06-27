"use client"

import {
  X,
  Book,
  Lightbulb,
  Layers,
  CheckCircle,
  Play,
  Hand,
  CuboidIcon as Cube,
  CogIcon as Cogs,
  BarChart,
  Bug,
  FileText,
  RotateCcw,
  Flame,
  Bot,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeSection: string
  isOpen: boolean
  onClose: () => void
}

const navigationItems = [
  {
    category: "Getting Started",
    items: [
      { id: "introduction", label: "What is QA Testing?", icon: Book, color: "text-blue-600" },
      { id: "principles", label: "Testing Principles", icon: Lightbulb, color: "text-yellow-600" },
      { id: "sdlc", label: "SDLC Models", icon: Layers, color: "text-purple-600" },
      { id: "stlc", label: "STLC Process", icon: CheckCircle, color: "text-green-600" },
      { id: "testing-levels", label: "Testing Levels", icon: Layers, color: "text-indigo-600" },
      { id: "v-model", label: "V-Model", icon: CheckCircle, color: "text-teal-600" },
    ],
  },
  {
    category: "Testing Types",
    items: [
      { id: "static-dynamic", label: "Static vs Dynamic", icon: Play, color: "text-orange-600" },
      { id: "manual-automation", label: "Manual vs Automation", icon: Hand, color: "text-blue-600" },
      { id: "functional", label: "Functional Testing", icon: Cogs, color: "text-green-600" },
      { id: "testing-techniques", label: "Testing Techniques", icon: Cogs, color: "text-pink-600" },
      { id: "performance-testing", label: "Performance Testing", icon: BarChart, color: "text-yellow-600" },
      { id: "non-functional", label: "Non-Functional Testing", icon: BarChart, color: "text-red-600" },
      { id: "blackbox-whitebox", label: "Black Box vs White Box", icon: Cube, color: "text-gray-600" },
    ],
  },
  {
    category: "Test Management",
    items: [
      { id: "bug-reporting", label: "Bug Reporting", icon: Bug, color: "text-red-600" },
      { id: "test-cases", label: "Test Cases", icon: FileText, color: "text-green-600" },
      { id: "regression-testing", label: "Regression Testing", icon: RotateCcw, color: "text-purple-600" },
      { id: "smoke-testing", label: "Smoke Testing", icon: Flame, color: "text-orange-600" },
    ],
  },
  {
    category: "Automation",
    items: [{ id: "cypress", label: "Cypress Testing", icon: Bot, color: "text-green-600" }],
  },
]

export function Sidebar({ activeSection, isOpen, onClose }: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-80 bg-white shadow-lg border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <Book className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">QA Testing Bootcamp</h2>
                <p className="text-sm text-gray-600">Complete Professional Guide</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-6">
            {navigationItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {category.category}
                </h3>
                <div className="space-y-1">
                  {category.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full flex items-center space-x-3 p-3 rounded-lg transition-colors text-left",
                          activeSection === item.id
                            ? "bg-blue-600 text-white font-bold shadow-md"
                            : "hover:bg-gray-100 text-gray-700 font-medium",
                        )}
                      >
                        <Icon className={cn("h-5 w-5", activeSection === item.id ? "text-white" : item.color)} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
