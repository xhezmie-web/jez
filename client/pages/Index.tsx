import Layout from "@/components/Layout";
import { ArrowRight, Zap, Users, Target, BookOpen } from "lucide-react";

export default function Index() {
  const tips = [
    {
      title: "Start With Small Wins",
      description: "Success isn't built in a day. Focus on 1% improvement daily.",
      icon: Zap,
    },
    {
      title: "Build Your Network",
      description:
        "Surround yourself with people who challenge and elevate you.",
      icon: Users,
    },
    {
      title: "Define Your Purpose",
      description: "Know why you're doing what you do. Purpose drives action.",
      icon: Target,
    },
    {
      title: "Never Stop Learning",
      description:
        "The most successful men are lifelong students. Read, listen, absorb.",
      icon: BookOpen,
    },
  ];

  const recentWisdom = [
    {
      category: "Mindset",
      title: "The Power of Saying No",
      excerpt:
        "Every yes to something mediocre is a no to something great. Protect your time.",
      date: "2 days ago",
    },
    {
      category: "Fitness",
      title: "Discipline Over Motivation",
      excerpt:
        "Motivation gets you started, but discipline keeps you going. Build habits that stick.",
      date: "5 days ago",
    },
    {
      category: "Finance",
      title: "Invest in Yourself First",
      excerpt:
        "Your education and skills are the best investments. Returns are lifetime.",
      date: "1 week ago",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="px-8 pt-16 pb-12 lg:px-16 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Level Up Your <span className="text-primary">Life</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl">
                Master your mindset, build your body, secure your finances, and
                become the best version of yourself.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Featured Tips */}
        <section className="px-8 py-16 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-foreground/70">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Wisdom */}
        <section className="px-8 py-16 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Recent Wisdom
          </h2>
          <div className="space-y-6">
            {recentWisdom.map((item, idx) => (
              <article
                key={idx}
                className="p-8 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-foreground/50">{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 mb-4">{item.excerpt}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-20 lg:px-16 bg-gradient-to-r from-primary/10 to-secondary/10 mx-8 mb-8 lg:mx-16 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Transform?
            </h2>
            <p className="text-lg text-foreground/70">
              Explore our comprehensive guides on physical health, personal
              finance, relationships, and mindset. Your best self is waiting.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Explore Categories
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
