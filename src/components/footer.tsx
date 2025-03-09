"use client";

import { Button } from "@/components/ui/button";
import { mySocialLinks } from "@/lib";
import { Briefcase, FileText, Home, Mail } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "./svg";
import { Container } from "./ui/container";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background py-8">
      <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Arthur Manyonge</h3>
          <p className="text-muted-foreground">
            Building digital experiences with creativity and precision.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Button size="icon" variant="ghost" asChild>
              <Link
                href={mySocialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link
                href={mySocialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter />
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link
                href={mySocialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <Briefcase className="h-3.5 w-3.5" />
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <FileText className="h-3.5 w-3.5" />
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Latest Case Studies</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/case-studies/ecommerce-platform"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                E-commerce Platform
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies/banking-app"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Banking App
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies/saas-dashboard"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                SaaS Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Latest Posts</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/blog/modern-react-patterns"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Modern React Patterns
              </Link>
            </li>
            <li>
              <Link
                href="/blog/optimizing-nextjs"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Optimizing Next.js Applications
              </Link>
            </li>
            <li>
              <Link
                href="/blog/tailwind-tips"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Tailwind CSS Tips & Tricks
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
