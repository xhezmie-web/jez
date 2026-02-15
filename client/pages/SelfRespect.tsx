import PagePlaceholder from "@/components/PagePlaceholder";
import { Shield } from "lucide-react";

export default function SelfRespect() {
  return (
    <PagePlaceholder
      title="Self Respect"
      description="Develop unshakable confidence and integrity."
      icon={<Shield className="w-8 h-8 text-primary" />}
    />
  );
}
