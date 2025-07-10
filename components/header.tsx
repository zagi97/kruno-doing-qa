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
          <Button variant="ghost" size="sm" className="lg:hidden p-2 min-h-[44px] min-w-[44px]" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
          {/* RESPONSIVE TITLE */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            <span className="hidden sm:inline">QA Testing Handbooke</span>
            <span className="sm:hidden">QA Handbook</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
