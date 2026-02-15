import { ReactNode } from "react";
import { Lightbulb } from "lucide-react";
import Layout from "./Layout";

interface PagePlaceholderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function PagePlaceholder({
  title,
  description,
  icon,
}: PagePlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/95">
        <div className="text-center space-y-6 px-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            {icon || <Lightbulb className="w-8 h-8 text-primary" />}
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">{title}</h1>
            {description && (
              <p className="text-lg text-foreground/70 max-w-md mx-auto">
                {description}
              </p>
            )}
          </div>
          <p className="text-foreground/60 mt-6">
            This section is coming soon. Keep building your best self! 💪
          </p>
        </div>
      </div>
    </Layout>
  );
}
