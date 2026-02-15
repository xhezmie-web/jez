import PagePlaceholder from "@/components/PagePlaceholder";
import { Dumbbell } from "lucide-react";

export default function PhysicalHealth() {
  return (
    <PagePlaceholder
      title="Physical Health"
      description="Build a stronger, healthier, and more resilient body."
      icon={<Dumbbell className="w-8 h-8 text-primary" />}
    />
  );
}
