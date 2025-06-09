import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Briefcase, Clock, Loader2 } from "lucide-react";
import { z } from "zod";

const formSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "Name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [projectType, setProjectType] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/contact", { ...data, projectType });
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
      setProjectType("");
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate({ ...data, projectType });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "piotrzkowski.jan@gmail.com",
      link: "mailto:piotrzkowski.jan@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/jan-piotrzkowski/",
    },
    {
      icon: Briefcase,
      title: "Upwork",
      content: "Available for freelance projects",
      link: "https://www.upwork.com/freelancers/~01fcc24c24ccfa60d9",
    },
  ];

  return (
    <section id="contact" className="py-24" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
          >
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch and let's discuss how I
            can help bring your vision to life.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Get In Touch
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon
                    className="text-primary h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-lg">
                    {info.title}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-slate-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-slate-600">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
