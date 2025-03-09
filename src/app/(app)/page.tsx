"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Layers,
  Layout,
  Monitor,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Mock data (to be replaced with actual data from Payload CMS)
const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully-featured e-commerce platform with inventory management",
    image: "/placeholder-case-study-1.jpg",
    slug: "ecommerce-platform",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Banking App",
    description:
      "Modern banking app with transaction visualization and budgeting tools",
    image: "/placeholder-case-study-2.jpg",
    slug: "banking-app",
    tags: ["React Native", "TypeScript", "GraphQL"],
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for a SaaS product with data visualization",
    image: "/placeholder-case-study-3.jpg",
    slug: "saas-dashboard",
    tags: ["React", "TypeScript", "D3.js", "Material UI"],
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A social media platform for connecting professionals",
    image: "/placeholder-case-study-4.jpg",
    slug: "social-media-app",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Modern React Patterns",
    excerpt: "An in-depth look at modern React patterns and best practices",
    image: "/placeholder-blog-1.jpg",
    slug: "modern-react-patterns",
    date: "2023-12-01",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Optimizing Next.js Applications",
    excerpt:
      "Tips and tricks for optimizing the performance of your Next.js applications",
    image: "/placeholder-blog-2.jpg",
    slug: "optimizing-nextjs",
    date: "2023-11-15",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips & Tricks",
    excerpt: "Useful Tailwind CSS techniques to enhance your workflow",
    image: "/placeholder-blog-3.jpg",
    slug: "tailwind-tips",
    date: "2023-10-22",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends in web development",
    image: "/placeholder-blog-4.jpg",
    slug: "future-web-development",
    date: "2023-10-05",
    readTime: "6 min read",
  },
];

const skills = [
  { name: "Front-end Development", icon: <Layout className="h-5 w-5" /> },
  { name: "Back-end Development", icon: <Database className="h-5 w-5" /> },
  { name: "UI/UX Design", icon: <Monitor className="h-5 w-5" /> },
  { name: "Mobile Development", icon: <Layers className="h-5 w-5" /> },
  { name: "DevOps", icon: <Rocket className="h-5 w-5" /> },
  { name: "Full Stack Development", icon: <Code className="h-5 w-5" /> },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div>
                <Badge className="mb-4" variant="outline">
                  Welcome to my portfolio
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  Creating digital{" "}
                  <span className="text-primary">experiences</span> that matter
                </h1>
                <p className="text-xl text-muted-foreground">
                  I'm a software developer specializing in building exceptional
                  digital experiences with modern technologies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button asChild size="lg">
                  <Link href="/case-studies">
                    View my work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact me</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-video bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center"
            >
              {/* Placeholder for hero image/illustration */}
              <div className="text-5xl font-bold text-primary/40">DEV</div>
            </motion.div>
          </div>
        </div>
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm border hover:border-primary/20 hover:shadow transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Featured Case Studies
              </h2>
              <p className="text-muted-foreground">
                Explore some of my recent projects and the problems they solve
              </p>
            </div>
            <Button variant="ghost" asChild className="mt-4 md:mt-0">
              <Link href="/case-studies" className="flex items-center">
                View all case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="block h-full"
                >
                  <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 group">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="w-full h-full bg-muted/80 flex items-center justify-center">
                        <span className="text-muted-foreground font-semibold">
                          Image
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-xs font-normal"
                          >
                            +{project.tags.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Latest from the Blog
              </h2>
              <p className="text-muted-foreground">
                Thoughts, insights, and perspectives on development
              </p>
            </div>
            <Button variant="ghost" asChild className="mt-4 md:mt-0">
              <Link href="/blog" className="flex items-center">
                View all posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 group">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="w-full h-full bg-muted/80 flex items-center justify-center">
                        <span className="text-muted-foreground font-semibold">
                          Image
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <time className="text-xs text-muted-foreground">
                          {post.date}
                        </time>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Let's work together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have a project in mind? Let's discuss how I can help bring your
              ideas to life.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
