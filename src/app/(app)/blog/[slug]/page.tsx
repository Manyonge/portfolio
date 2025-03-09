"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Globe,
  Linkedin,
  Share2,
  Tag,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock blog data - to be replaced with actual data from CMS
const blogPostsData = {
  "modern-react-patterns": {
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
      role: "Senior Frontend Developer",
      bio: "John is a senior frontend developer with 8+ years of experience specializing in React and modern JavaScript frameworks.",
    },
    category: "React",
    tags: ["React", "JavaScript", "Web Development", "Hooks", "Patterns"],
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>React has evolved significantly since its initial release, introducing new patterns and best practices that help developers build more maintainable and scalable applications. In this article, we'll explore some of the most useful modern React patterns that can elevate your development workflow.</p>
      
      <h2>Compound Components</h2>
      <p>Compound components is a pattern that allows you to create components that work together to form a cohesive unit. This pattern is particularly useful when you have a component with multiple related parts that need to share state.</p>
      
      <pre><code>
// Example of compound components
const Tabs = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.List = ({ children }) => <div className="tabs-list">{children}</div>;
Tabs.Tab = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  return (
    <button
      className={\`tab \${activeIndex === index ? 'active' : ''}\`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};

Tabs.Panels = ({ children }) => <div className="tabs-panels">{children}</div>;
Tabs.Panel = ({ index, children }) => {
  const { activeIndex } = useContext(TabsContext);
  return activeIndex === index ? <div className="tab-panel">{children}</div> : null;
};
      </code></pre>
      
      <h2>Custom Hooks</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions, making your code more modular and easier to test. This pattern has become a cornerstone of modern React development.</p>
      
      <pre><code>
// Example of a custom hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}
      </code></pre>
      
      <h2>Context + Reducer Pattern</h2>
      <p>Combining React Context with useReducer is a powerful pattern for managing complex state logic in larger applications. This approach provides a lightweight alternative to external state management libraries.</p>
      
      <pre><code>
// Example of Context + Reducer pattern
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
      </code></pre>
      
      <h2>Render Props</h2>
      <p>The render props pattern involves passing a function as a prop to a component, allowing that component to call the function with its internal state to determine what to render.</p>
      
      <pre><code>
// Example of render props
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return render(position);
}

// Usage
<MouseTracker
  render={({ x, y }) => (
    <div>
      Mouse position: {x}, {y}
    </div>
  )}
/>
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>These modern React patterns provide powerful tools for building scalable and maintainable applications. By incorporating these patterns into your workflow, you can write cleaner, more modular code that is easier to test and reason about.</p>
    `,
    relatedPosts: [2, 3, 7],
  },
  "optimizing-nextjs": {
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
      role: "Full Stack Developer",
      bio: "Jane is a full stack developer with expertise in Next.js, React, and Node.js. She loves sharing performance optimization techniques.",
    },
    category: "Next.js",
    tags: [
      "Next.js",
      "Performance",
      "React",
      "Optimization",
      "Web Development",
    ],
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>Next.js has become one of the most popular React frameworks for building modern web applications. Its built-in features like server-side rendering, static site generation, and image optimization make it a powerful choice for developers. However, to get the most out of Next.js, it's important to follow best practices for optimization.</p>
      
      <h2>Image Optimization</h2>
      <p>Next.js provides an <code>Image</code> component that automatically optimizes images, serving them in the most efficient format and size for each device. This is a critical feature for performance.</p>
      
      <pre><code>
import Image from 'next/image';

function OptimizedImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile picture"
      width={500}
      height={300}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
}
      </code></pre>
      
      <h2>Code Splitting</h2>
      <p>Next.js automatically splits your code into smaller bundles, loading only what's needed for each page. You can further optimize this with dynamic imports.</p>
      
      <pre><code>
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable server-side rendering if the component uses browser-specific APIs
});

function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <DynamicComponent />
    </div>
  );
}
      </code></pre>
      
      <h2>Incremental Static Regeneration (ISR)</h2>
      <p>ISR is a powerful feature that allows you to update static pages after they've been built, combining the benefits of static generation and server-side rendering.</p>
      
      <pre><code>
// pages/products/[id].js
export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`);
  const product = await res.json();
  
  return {
    props: {
      product,
    },
    revalidate: 60, // Regenerate the page every 60 seconds if requested
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  
  const paths = products.slice(0, 10).map((product) => ({
    params: { id: product.id.toString() },
  }));
  
  return { paths, fallback: 'blocking' };
}
      </code></pre>
      
      <h2>Font Optimization</h2>
      <p>Starting from Next.js 10.2, you can use <code>next/font</code> to optimize font loading and reduce layout shifts.</p>
      
      <pre><code>
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>Optimizing a Next.js application involves leveraging the framework's built-in features and following best practices. By implementing image optimization, code splitting, ISR, font optimization, and other techniques covered in this article, you can significantly improve the performance of your Next.js applications.</p>
    `,
    relatedPosts: [1, 10, 4],
  },
  // Add more blog posts as needed
};

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  // In a real app, you would fetch this data from your CMS
  const post = blogPostsData[slug as keyof typeof blogPostsData];

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The article you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts
        .map((id) => {
          const relatedPost = Object.values(blogPostsData).find(
            (p) => p.id === id,
          );
          return relatedPost;
        })
        .filter(Boolean)
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6 -ml-3">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge>{post.category}</Badge>
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Avatar>
                        <AvatarFallback>
                          {post.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{post.author.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {post.author.role}
                        </div>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarFallback>
                          {post.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                          {post.author.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {post.author.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {post.author.bio}
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <Separator orientation="vertical" className="h-6" />

                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <Separator orientation="vertical" className="h-6" />

                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="py-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video rounded-lg bg-muted overflow-hidden flex items-center justify-center max-w-4xl mx-auto"
          >
            <span className="text-muted-foreground font-semibold text-lg">
              Featured Image
            </span>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-stone dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="space-y-8">
              {/* Share Article */}
              <div className="bg-muted/30 p-6 rounded-lg sticky top-20">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Article
                </h3>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Share on Web"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost?.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${relatedPost?.slug}`}
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
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="text-xs font-normal"
                          >
                            {relatedPost?.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            •
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {relatedPost?.readTime}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg">
                          {relatedPost?.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Next Article */}
      <section className="py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold mb-6">Continue Reading</h2>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
