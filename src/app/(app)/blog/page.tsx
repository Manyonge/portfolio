"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Clock, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data - to be replaced with actual data from CMS
const blogPosts = [
  {
    id: 1,
    title: "Modern React Patterns",
    slug: "modern-react-patterns",
    excerpt:
      "An in-depth look at modern React patterns and best practices for building scalable applications.",
    image: "/placeholder-blog-1.jpg",
    date: "2023-12-01",
    readTime: "5 min read",
    author: {
      name: "John Doe",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "React",
    tags: ["React", "JavaScript", "Web Development"],
    featured: true,
  },
  {
    id: 2,
    title: "Optimizing Next.js Applications",
    slug: "optimizing-nextjs",
    excerpt:
      "Tips and tricks for optimizing the performance of your Next.js applications, from image optimization to code splitting.",
    image: "/placeholder-blog-2.jpg",
    date: "2023-11-15",
    readTime: "7 min read",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "Next.js",
    tags: ["Next.js", "Performance", "React"],
    featured: true,
  },
  {
    id: 3,
    title: "Tailwind CSS Tips & Tricks",
    slug: "tailwind-tips",
    excerpt:
      "Useful Tailwind CSS techniques to enhance your workflow and create beautiful interfaces faster.",
    image: "/placeholder-blog-3.jpg",
    date: "2023-10-22",
    readTime: "4 min read",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Design"],
    featured: false,
  },
  {
    id: 4,
    title: "The Future of Web Development",
    slug: "future-web-development",
    excerpt:
      "Exploring emerging technologies and trends that will shape the future of web development.",
    image: "/placeholder-blog-4.jpg",
    date: "2023-10-05",
    readTime: "6 min read",
    author: {
      name: "Sarah Lee",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "Web Development",
    tags: ["Web Development", "Future Tech", "Trends"],
    featured: true,
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-applications",
    excerpt:
      "A comprehensive guide to creating web applications that are accessible to everyone.",
    image: "/placeholder-blog-5.jpg",
    date: "2023-09-18",
    readTime: "8 min read",
    author: {
      name: "Michael Brown",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "Accessibility",
    tags: ["Accessibility", "HTML", "ARIA", "UX"],
    featured: false,
  },
  {
    id: 6,
    title: "TypeScript Best Practices",
    slug: "typescript-best-practices",
    excerpt:
      "Learn how to use TypeScript effectively in your projects with these best practices and tips.",
    image: "/placeholder-blog-6.jpg",
    date: "2023-08-30",
    readTime: "6 min read",
    author: {
      name: "John Doe",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Development"],
    featured: false,
  },
  {
    id: 7,
    title: "State Management in React",
    slug: "state-management-react",
    excerpt:
      "A comparison of different state management solutions in React applications.",
    image: "/placeholder-blog-7.jpg",
    date: "2023-08-15",
    readTime: "7 min read",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "React",
    tags: ["React", "State Management", "Redux", "Context API"],
    featured: false,
  },
  {
    id: 8,
    title: "GraphQL vs. REST",
    slug: "graphql-vs-rest",
    excerpt:
      "Comparing GraphQL and REST API architectures: when to use each and why.",
    image: "/placeholder-blog-8.jpg",
    date: "2023-07-25",
    readTime: "5 min read",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "API",
    tags: ["GraphQL", "REST", "API", "Backend"],
    featured: false,
  },
  {
    id: 9,
    title: "Introduction to Framer Motion",
    slug: "introduction-framer-motion",
    excerpt:
      "Get started with Framer Motion for creating beautiful animations in React.",
    image: "/placeholder-blog-9.jpg",
    date: "2023-07-10",
    readTime: "4 min read",
    author: {
      name: "Sarah Lee",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "Animation",
    tags: ["Framer Motion", "React", "Animation", "UX"],
    featured: false,
  },
  {
    id: 10,
    title: "Serverless Functions with Next.js",
    slug: "serverless-functions-nextjs",
    excerpt:
      "Learn how to leverage serverless functions in your Next.js applications.",
    image: "/placeholder-blog-10.jpg",
    date: "2023-06-28",
    readTime: "6 min read",
    author: {
      name: "Michael Brown",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "Next.js",
    tags: ["Next.js", "Serverless", "API Routes", "Backend"],
    featured: false,
  },
  {
    id: 11,
    title: "CSS Grid Mastery",
    slug: "css-grid-mastery",
    excerpt:
      "A deep dive into CSS Grid and how to create complex layouts with ease.",
    image: "/placeholder-blog-11.jpg",
    date: "2023-06-15",
    readTime: "7 min read",
    author: {
      name: "John Doe",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "CSS",
    tags: ["CSS", "CSS Grid", "Layout", "Design"],
    featured: false,
  },
  {
    id: 12,
    title: "Testing React Components",
    slug: "testing-react-components",
    excerpt:
      "A comprehensive guide to testing React components using Jest and React Testing Library.",
    image: "/placeholder-blog-12.jpg",
    date: "2023-06-05",
    readTime: "8 min read",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder-avatar.jpg",
    },
    category: "Testing",
    tags: ["Testing", "React", "Jest", "RTL"],
    featured: false,
  },
];

// All unique categories and tags for filtering
const allCategories = [...new Set(blogPosts.map((post) => post.category))];
const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const itemsPerPage = 6;

  // Filter blog posts based on search, category, tags, and active tab
  const filteredBlogPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === null || post.category === selectedCategory;

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag));

    const matchesTab =
      activeTab === "all" || (activeTab === "featured" && post.featured);

    return matchesSearch && matchesCategory && matchesTags && matchesTab;
  });

  // Sort posts by date (newest first)
  const sortedBlogPosts = [...filteredBlogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  // Pagination
  const totalPages = Math.ceil(sortedBlogPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogPosts = sortedBlogPosts.slice(
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
              Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thoughts, insights, and perspectives on development.
            </p>
          </motion.div>

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              handleFilterChange();
            }}
            className="max-w-xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Search and Filters */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_auto] max-w-4xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
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
                  <SheetTitle>Filter Articles</SheetTitle>
                  <SheetDescription>
                    Filter articles by category or topics.
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
                    <h3 className="text-sm font-medium">Topics</h3>
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

      {/* Blog Posts Grid */}
      <section className="py-16">
        <Container>
          {paginatedBlogPosts.length > 0 ? (
            <>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {paginatedBlogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 group">
                        <div className="relative aspect-video overflow-hidden">
                          <div className="w-full h-full bg-muted/80 flex items-center justify-center">
                            <span className="text-muted-foreground font-semibold">
                              Image
                            </span>
                          </div>
                          {post.featured && (
                            <Badge
                              className="absolute top-2 right-2"
                              variant="secondary"
                            >
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="text-xs font-normal"
                            >
                              {post.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              •
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>
                                {post.author.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs">{post.author.name}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
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
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                We couldn't find any articles that match your search criteria.
                Try adjusting your filters.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                  setSelectedTags([]);
                  setActiveTab("all");
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
