import PagePlaceholder from "@/components/PagePlaceholder";
import { Heart } from "lucide-react";

export default function Women() {
  return (
    <PagePlaceholder
      title="Women"
      description="Build meaningful connections and healthy relationships."
      icon={<Heart className="w-8 h-8 text-primary" />}
    />
  );
}
