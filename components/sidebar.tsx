"use client";

import {
  X,
  Book,
  Lightbulb,
  Layers,
  CheckCircle,
  Play,
  Hand,
  Box,
  Cog,
  BarChart,
  Bug,
  FileText,
  RotateCcw,
  Flame,
  Bot,
  Server,
  Smartphone,
  Settings,
  Kanban,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
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
      { id: "functional", label: "Functional Testing", icon: Cog, color: "text-green-600" },
      { id: "testing-techniques", label: "Testing Techniques", icon: Cog, color: "text-pink-600" },
      { id: "performance-testing", label: "Performance Testing", icon: BarChart, color: "text-yellow-600" },
      { id: "non-functional", label: "Non-Functional Testing", icon: BarChart, color: "text-red-600" },
      { id: "api-testing", label: "API Testing", icon: Server, color: "text-blue-600" },
      { id: "mobile-testing", label: "Mobile Testing", icon: Smartphone, color: "text-green-600" },
      { id: "blackbox-whitebox", label: "Black Box vs White Box", icon: Box, color: "text-gray-600" },
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
    category: "Tools",
    items: [
      { id: "cypress", label: "Cypress Testing", icon: Bot, color: "text-green-600" },
      { id: "jmeter", label: "JMeter", icon: Settings, color: "text-orange-600" },
      { id: "test-management-tools", label: "Test Management Tools", icon: Kanban, color: "text-purple-600" },
    ],
  },
];

export function Sidebar({ activeSection, isOpen, onClose }: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <>
      {/* Mobile overlay - IMPROVED */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar - IMPROVED RESPONSIVE CLASSES */}
      <div
        className={cn(
          // Base classes for all screens
          "fixed top-0 h-screen bg-white shadow-lg border-r border-gray-200 z-50 overflow-y-auto",
          // Desktop behavior (lg and up)
          "lg:left-0 lg:w-80 lg:translate-x-0",
          // Mobile behavior (below lg)
          "w-72 transition-transform duration-300 ease-in-out",
          // Mobile position based on isOpen state
          isOpen ? "left-0 translate-x-0" : "-left-72 -translate-x-full"
        )}
      >
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <Book className="text-white text-lg lg:text-xl" />
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-gray-900">QA Handbook</h2>
                <p className="text-xs lg:text-sm text-gray-600">Everything You Need to Know</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="p-3 lg:p-4">
          <div className="space-y-4 lg:space-y-6">
            {navigationItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-xs lg:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 lg:mb-3">
                  {category.category}
                </h3>
                <div className="space-y-1">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full flex items-center space-x-3 p-2 lg:p-3 rounded-lg transition-colors text-left",
                          // Improved touch targets for mobile
                          "min-h-[44px] touch-manipulation",
                          activeSection === item.id
                            ? "bg-blue-600 text-white font-bold shadow-md"
                            : "hover:bg-gray-100 text-gray-700 font-medium"
                        )}
                      >
                        <Icon
                          className={cn("h-4 w-4 lg:h-5 lg:w-5", activeSection === item.id ? "text-white" : item.color)}
                        />
                        <span className="text-xs lg:text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
