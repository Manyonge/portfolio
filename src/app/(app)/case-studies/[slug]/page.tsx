"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Github,
  Globe,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock case study data - to be replaced with actual data from CMS
const caseStudiesData = {
  "ecommerce-platform": {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully-featured e-commerce platform with inventory management",
    image: "/placeholder-case-study-1.jpg",
    slug: "ecommerce-platform",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
    date: "December 2023",
    client: "RetailCo",
    role: "Lead Developer",
    liveSiteUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    overview:
      "An e-commerce platform built for a retail client to modernize their online presence. The platform includes a customer-facing storefront, an admin dashboard for inventory management, and integration with payment gateways.",
    challenge:
      "The client needed a modern, responsive e-commerce platform that could handle thousands of products, integrate with their existing inventory system, and provide a seamless shopping experience for customers.",
    solution:
      "I built a full-stack e-commerce solution using Next.js for the frontend and a GraphQL API for the backend. The platform includes user authentication, product catalog with advanced filtering, shopping cart, secure checkout process, and an admin dashboard for inventory management.",
    features: [
      {
        title: "Responsive Product Catalog",
        description:
          "A responsive product catalog with advanced filtering, search, and pagination.",
      },
      {
        title: "User Authentication",
        description: "Secure user authentication and account management.",
      },
      {
        title: "Shopping Cart",
        description: "Persistent shopping cart with local storage sync.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Comprehensive admin dashboard for inventory and order management.",
      },
      {
        title: "Payment Integration",
        description: "Integration with Stripe for secure payment processing.",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        description: "React framework for server-rendered applications",
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for better development experience",
      },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      {
        name: "GraphQL",
        description: "API query language for flexible data fetching",
      },
      { name: "Stripe", description: "Payment processing platform" },
      { name: "Vercel", description: "Deployment and hosting platform" },
    ],
    results:
      "The platform has resulted in a 40% increase in online sales for the client, improved customer satisfaction due to the streamlined shopping experience, and reduced operational costs through the efficient inventory management system.",
  },
  "banking-app": {
    id: 2,
    title: "Banking App",
    description:
      "Modern banking app with transaction visualization and budgeting tools",
    image: "/placeholder-case-study-2.jpg",
    slug: "banking-app",
    tags: ["React Native", "TypeScript", "GraphQL"],
    category: "Mobile Development",
    featured: true,
    date: "November 2023",
    client: "FinTech Inc.",
    role: "Mobile Developer",
    liveSiteUrl: "https://example.com/banking-app",
    githubUrl: "https://github.com/example/banking-app",
    overview:
      "A mobile banking application that provides users with a modern interface to manage their finances, track transactions, and set budget goals.",
    challenge:
      "The client wanted to create a user-friendly mobile banking application that would appeal to younger users while maintaining the security and reliability expected of financial applications.",
    solution:
      "I developed a cross-platform mobile application using React Native with TypeScript. The app features real-time transaction tracking, budget visualization, and secure authentication using biometrics.",
    features: [
      {
        title: "Secure Authentication",
        description: "Multi-factor authentication with biometric support.",
      },
      {
        title: "Transaction History",
        description:
          "Comprehensive transaction history with search and filtering.",
      },
      {
        title: "Budget Tracking",
        description:
          "Visual budget tracking tools with customizable categories.",
      },
      {
        title: "Spending Analytics",
        description: "Detailed spending analytics with charts and insights.",
      },
      {
        title: "Bill Payments",
        description: "Automated bill payments and reminders.",
      },
    ],
    techStack: [
      {
        name: "React Native",
        description: "Framework for building native mobile apps",
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for better development experience",
      },
      {
        name: "GraphQL",
        description: "API query language for flexible data fetching",
      },
      {
        name: "Apollo Client",
        description: "State management library for GraphQL",
      },
      { name: "Victory Charts", description: "Data visualization library" },
      { name: "App Store & Play Store", description: "Distribution platforms" },
    ],
    results:
      "The app has been downloaded over 50,000 times since launch, with an average rating of 4.7/5. User engagement metrics show that users spend an average of 5 minutes per session, and the app has helped users save an average of 15% on monthly expenses through the budgeting features.",
  },
  // Add more case studies as needed
};

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  // In a real app, you would fetch this data from your CMS
  const caseStudy = caseStudiesData[slug as keyof typeof caseStudiesData];

  if (!caseStudy) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The case study you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/case-studies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6 -ml-3">
              <Link href="/case-studies" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4">{caseStudy.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {caseStudy.description}
              </p>
            </motion.div>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="py-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video rounded-lg bg-muted overflow-hidden flex items-center justify-center"
          >
            <span className="text-muted-foreground font-semibold text-lg">
              Project Screenshot
            </span>
          </motion.div>
        </Container>
      </section>

      {/* Project Info */}
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6 md:col-span-3"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-muted/30 p-6 rounded-lg h-fit"
            >
              <h3 className="font-medium mb-4">Project Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      Date
                    </span>
                    <span>{caseStudy.date}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Layers className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      Client
                    </span>
                    <span>{caseStudy.client}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      Role
                    </span>
                    <span>{caseStudy.role}</span>
                  </div>
                </li>
                <Separator className="my-4" />
                {caseStudy.liveSiteUrl && (
                  <li>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link
                        href={caseStudy.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        Visit Live Site
                        <ExternalLink className="ml-auto h-3 w-3" />
                      </Link>
                    </Button>
                  </li>
                )}
                {caseStudy.githubUrl && (
                  <li>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link
                        href={caseStudy.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                        <ExternalLink className="ml-auto h-3 w-3" />
                      </Link>
                    </Button>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-10">
        <Container>
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="py-10 bg-muted/30">
        <Container>
          <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex gap-4 items-start p-4 rounded-lg bg-background border"
              >
                <div className="rounded-full p-2 bg-primary/10 flex items-center justify-center text-primary">
                  <Code className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-10">
        <Container>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            {caseStudy.results}
          </p>
        </Container>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-muted/50">
        <Container className="text-center">
          <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
