import PagePlaceholder from "@/components/PagePlaceholder";
import { Users } from "lucide-react";

export default function About() {
  return (
    <PagePlaceholder
      title="About Me"
      description="Discover the story, mission, and philosophy behind this platform."
      icon={<Users className="w-8 h-8 text-primary" />}
    />
  );
}
