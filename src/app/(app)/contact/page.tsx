"use client";

import { Github, Linkedin, Twitter } from "@/components";
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
import { mySocialLinks } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import Link from "next/link";
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
              I&apos;d love to hear from you! Whether you have a project in mind
              or just want to say hello.
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
                      <Link
                        href={mySocialLinks.email}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {mySocialLinks.email.split("mailto:")?.at(1)}
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-bold mb-4">Let&apos;s Connect</h2>
                <p className="text-muted-foreground mb-4">
                  Follow me on social media for updates on my latest projects
                  and articles.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link
                      href={mySocialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter />
                      Twitter
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link
                      href={mySocialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link
                      href={mySocialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href={mySocialLinks.email}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </Link>
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
                could take 2-3 months or more. I&apos;ll provide a detailed
                timeline during the proposal phase.
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
