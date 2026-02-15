import PagePlaceholder from "@/components/PagePlaceholder";
import { TrendingUp } from "lucide-react";

export default function Finance() {
  return (
    <PagePlaceholder
      title="Finance"
      description="Master money and build lasting wealth."
      icon={<TrendingUp className="w-8 h-8 text-primary" />}
    />
  );
}
