"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center justify-between p-4 lg:p-6">
        <div className="flex items-center space-x-3 lg:space-x-4">
          {/* IMPROVED MOBILE MENU BUTTON */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 min-h-[44px] min-w-[44px]"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          {/* RESPONSIVE TITLE */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            <span className="hidden sm:inline">Software Testing Bootcamp</span>
            <span className="sm:hidden">QA Bootcamp</span>
          </h1>
        </div>
        {/* RESPONSIVE BADGES */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <span className="bg-blue-100 text-blue-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
            <span className="hidden sm:inline">Professional Guide</span>
            <span className="sm:hidden">Pro</span>
          </span>
          <span className="bg-green-100 text-green-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
            2025
          </span>
        </div>
      </div>
    </header>
  );
}
