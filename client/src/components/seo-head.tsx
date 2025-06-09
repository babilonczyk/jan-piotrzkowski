import { useEffect } from "react";

import me from "../assets/me.jpg";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function SEOHead({
  title = "Jan Piotrzkowski - Software Engineer | Ruby on Rails & JavaScript Developer",
  description = "Software Engineer with 4+ years experience in Ruby on Rails, Angular, Vue.js. Remote contractor available worldwide. Currently at Quickmail.com building scalable solutions.",
  keywords = "software engineer, ruby on rails developer, angular developer, vue.js, remote contractor, javascript, typescript, Jan Piotrzkowski, quickmail, scalable solutions",
  ogTitle,
  ogDescription,
  ogImage = me,
  ogUrl = "https://janpiotrzkowski.com",
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Remove existing meta tags we're going to set
    const existingMetas = document.querySelectorAll("meta[data-seo]");
    existingMetas.forEach((meta) => meta.remove());

    // Create and append new meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "Jan Piotrzkowski" },
      { property: "og:title", content: ogTitle || title },
      { property: "og:description", content: ogDescription || description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ogUrl },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle || title },
      { name: "twitter:description", content: ogDescription || description },
    ];

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      meta.setAttribute("data-seo", "true");
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
    });

    // Add structured data
    const existingScript = document.querySelector(
      'script[type="application/ld+json"][data-seo]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jan Piotrzkowski",
      jobTitle: "Software Engineer",
      url: ogUrl,
      email: "piotrzkowski.jan@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/jan-piotrzkowski/",
        "https://www.upwork.com/freelancers/~01fcc24c24ccfa60d9",
      ],
      knowsAbout: [
        "Software Engineering",
        "Ruby on Rails",
        "JavaScript",
        "TypeScript",
        "Angular",
        "Vue.js",
        "Remote Work",
        "Scalable Solutions",
        "Project Coordination",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "true");
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

  return null;
}
