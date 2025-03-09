"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler (mock implementation for design mode)
  const handleSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);

      // Show success message
      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: "Thank you for reaching out!",
      });

      // Reset form
      form.reset();
    }, 1500);
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I'd love to hear from you! Whether you have a project in mind or
              just want to say hello.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-lg border shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Send Me a Message
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="John Doe"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="your.email@example.com"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What is this regarding?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            className="resize-none min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-background border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24-48 hours.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary mt-0.5">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block font-medium">Email</span>
                      <a
                        href="mailto:contact@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-bold mb-4">Let's Connect</h2>
                <p className="text-muted-foreground mb-4">
                  Follow me on social media for updates on my latest projects
                  and articles.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start" asChild>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21.543 7.104c.015.211.015.422.015.633 0 6.445-4.904 13.879-13.879 13.879-2.759 0-5.319-.808-7.484-2.197.392.046.769.061 1.176.061 2.283 0 4.384-.784 6.06-2.112-2.137-.039-3.935-1.453-4.559-3.391.3.046.6.077.915.077.43 0 .854-.061 1.253-.17-2.229-.454-3.905-2.419-3.905-4.785v-.062c.649.362 1.407.584 2.198.615-1.307-.874-2.168-2.36-2.168-4.042 0-.893.239-1.721.654-2.436 2.382 2.936 5.958 4.857 9.968 5.066-.077-.362-.123-.735-.123-1.108 0-2.675 2.167-4.85 4.85-4.85 1.399 0 2.659.592 3.544 1.537 1.099-.215 2.137-.616 3.067-1.169-.362 1.13-1.13 2.075-2.137 2.675.979-.108 1.919-.384 2.783-.769-.653.977-1.483 1.837-2.43 2.52z" />
                      </svg>
                      Twitter
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                      </svg>
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="mailto:contact@example.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQs or Additional Info */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Here are answers to some common questions about working with me.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="font-bold text-lg mb-2">
                What is your typical process?
              </h3>
              <p className="text-muted-foreground">
                I start with a consultation to understand your requirements,
                then create a proposal with timeline and cost estimates. After
                approval, I begin the design and development process with
                regular check-ins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="font-bold text-lg mb-2">What are your rates?</h3>
              <p className="text-muted-foreground">
                My rates depend on the scope and complexity of the project. I
                offer both fixed-price and hourly billing options. Contact me
                with your project details for a custom quote.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="font-bold text-lg mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity and scope. A simple
                website might take 2-4 weeks, while a complex web application
                could take 2-3 months or more. I'll provide a detailed timeline
                during the proposal phase.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="font-bold text-lg mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-muted-foreground">
                Yes, I offer maintenance and support packages to keep your
                project running smoothly after launch. This can include bug
                fixes, updates, and feature enhancements.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
