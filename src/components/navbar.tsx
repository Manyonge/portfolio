"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Briefcase, FileText, Home, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Container } from "./ui/container";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Placeholder for logo */}
          <Link href="/" className="font-bold text-xl">
            <span className="sr-only">Home</span>
            DevPortfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === "/" && "text-primary font-medium",
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/case-studies" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === "/case-studies" &&
                        "text-primary font-medium",
                    )}
                  >
                    Case Studies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === "/blog" && "text-primary font-medium",
                    )}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === "/contact" && "text-primary font-medium",
                    )}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent",
                    pathname === "/" && "text-primary font-medium bg-accent/50",
                  )}
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  href="/case-studies"
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent",
                    pathname === "/case-studies" &&
                      "text-primary font-medium bg-accent/50",
                  )}
                >
                  <Briefcase className="h-4 w-4" />
                  Case Studies
                </Link>
                <Link
                  href="/blog"
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent",
                    pathname === "/blog" &&
                      "text-primary font-medium bg-accent/50",
                  )}
                >
                  <FileText className="h-4 w-4" />
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent",
                    pathname === "/contact" &&
                      "text-primary font-medium bg-accent/50",
                  )}
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
