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
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data - to be replaced with actual data from the CMS
const allCaseStudies = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully-featured e-commerce platform with inventory management",
    image: "/placeholder-case-study-1.jpg",
    slug: "ecommerce-platform",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
    date: "2023-12-10",
  },
  {
    id: 2,
    title: "Banking App",
    description:
      "Modern banking app with transaction visualization and budgeting tools",
    image: "/placeholder-case-study-2.jpg",
    slug: "banking-app",
    tags: ["React Native", "TypeScript", "GraphQL"],
    category: "Mobile Development",
    featured: true,
    date: "2023-11-15",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for a SaaS product with data visualization",
    image: "/placeholder-case-study-3.jpg",
    slug: "saas-dashboard",
    tags: ["React", "TypeScript", "D3.js", "Material UI"],
    category: "Web Development",
    featured: false,
    date: "2023-10-20",
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A social media platform for connecting professionals",
    image: "/placeholder-case-study-4.jpg",
    slug: "social-media-app",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
    category: "Web Development",
    featured: true,
    date: "2023-09-05",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "Collaborative task management tool for remote teams",
    image: "/placeholder-case-study-5.jpg",
    slug: "task-management-tool",
    tags: ["Vue.js", "Vuex", "Firebase", "Tailwind CSS"],
    category: "Web Development",
    featured: false,
    date: "2023-08-12",
  },
  {
    id: 6,
    title: "Food Delivery App",
    description: "Mobile app for food ordering and delivery tracking",
    image: "/placeholder-case-study-6.jpg",
    slug: "food-delivery-app",
    tags: ["React Native", "Redux", "Firebase", "Google Maps API"],
    category: "Mobile Development",
    featured: false,
    date: "2023-07-20",
  },
  {
    id: 7,
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tours",
    image: "/placeholder-case-study-7.jpg",
    slug: "real-estate-platform",
    tags: ["Next.js", "Three.js", "MongoDB", "Tailwind CSS"],
    category: "Web Development",
    featured: false,
    date: "2023-06-15",
  },
  {
    id: 8,
    title: "Healthcare Portal",
    description: "Patient management system for healthcare providers",
    image: "/placeholder-case-study-8.jpg",
    slug: "healthcare-portal",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Web Development",
    featured: false,
    date: "2023-05-10",
  },
  {
    id: 9,
    title: "Learning Management System",
    description: "Platform for online courses and student progress tracking",
    image: "/placeholder-case-study-9.jpg",
    slug: "learning-management-system",
    tags: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    category: "Web Development",
    featured: false,
    date: "2023-04-05",
  },
  {
    id: 10,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts and nutrition",
    image: "/placeholder-case-study-10.jpg",
    slug: "fitness-tracking-app",
    tags: ["React Native", "Redux", "Firebase", "Health API"],
    category: "Mobile Development",
    featured: false,
    date: "2023-03-20",
  },
  {
    id: 11,
    title: "Travel Planning Platform",
    description: "Trip planning and itinerary management platform",
    image: "/placeholder-case-study-11.jpg",
    slug: "travel-planning-platform",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
    category: "Web Development",
    featured: false,
    date: "2023-02-15",
  },
  {
    id: 12,
    title: "Event Management System",
    description: "Platform for organizing and managing events",
    image: "/placeholder-case-study-12.jpg",
    slug: "event-management-system",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    category: "Web Development",
    featured: false,
    date: "2023-01-10",
  },
];

// All unique categories and tags for filtering
const allCategories = [
  ...new Set(allCaseStudies.map((study) => study.category)),
];
const allTags = [...new Set(allCaseStudies.flatMap((study) => study.tags))];

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter case studies based on search, category, and tags
  const filteredCaseStudies = allCaseStudies.filter((study) => {
    const matchesSearch =
      searchQuery === "" ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === null || study.category === selectedCategory;

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => study.tags.includes(tag));

    return matchesSearch && matchesCategory && matchesTags;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCaseStudies = filteredCaseStudies.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  // Handle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
    handleFilterChange();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore my projects and the solutions I've built for real-world
              problems.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_auto] max-w-4xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search case studies..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleFilterChange();
                }}
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Case Studies</SheetTitle>
                  <SheetDescription>
                    Narrow down projects by category or technology.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Category</h3>
                    <Select
                      value={selectedCategory || ""}
                      onValueChange={(value) => {
                        setSelectedCategory(value === "" ? null : value);
                        handleFilterChange();
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Categories</SelectItem>
                        {allCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={
                            selectedTags.includes(tag) ? "default" : "outline"
                          }
                          className="cursor-pointer"
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {(selectedCategory !== null || selectedTags.length > 0) && (
                    <Button
                      variant="ghost"
                      className="w-full"
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedTags([]);
                        handleFilterChange();
                      }}
                    >
                      Clear all filters
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <Container>
          {paginatedCaseStudies.length > 0 ? (
            <>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {paginatedCaseStudies.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                          {project.featured && (
                            <Badge
                              className="absolute top-2 right-2"
                              variant="secondary"
                            >
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          <CardDescription>
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs font-normal"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs font-normal"
                              >
                                +{project.tags.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-12">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                          }
                        }}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, i) => {
                      const page = i + 1;

                      // Show first page, last page, current page, and pages around current page
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page);
                              }}
                              isActive={page === currentPage}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }

                      // Show ellipsis if there's a gap
                      if (
                        (page === 2 && currentPage > 3) ||
                        (page === totalPages - 1 &&
                          currentPage < totalPages - 2)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }

                      return null;
                    })}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1);
                          }
                        }}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-muted/50 rounded-full p-6 mb-6">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No case studies found
              </h3>
              <p className="text-muted-foreground max-w-md mb-6">
                We couldn't find any case studies that match your search
                criteria. Try adjusting your filters.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                  setSelectedTags([]);
                  handleFilterChange();
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
