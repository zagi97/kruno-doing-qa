import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export function SectionHeader({ title, subtitle, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
      <div className="flex items-center space-x-4">
        <div className="bg-white bg-opacity-20 p-3 rounded-lg">
          <Icon className="text-2xl text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="text-blue-100">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
