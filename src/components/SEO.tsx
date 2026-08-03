import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Daniel Liu - Software Developer & Full Stack Specialist",
  description = "Software Developer specializing in Full Stack Development with expertise in Web Technologies, Database Systems and Cloud Computing. Based in California, US.",
  canonicalUrl = "http://localhost:3000",
  ogImage = "http://localhost:3000/og-image.jpg",
  ogType = "website"
}) => {
  const siteTitle = "Daniel Liu - Portfolio";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="canonical" href={canonicalUrl} /> */}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Daniel Liu Portfolio" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="keywords" content="software developer, full stack developer, web developer, California, US, React, Node.js, MongoDB, AWS, portfolio" />
      <meta name="author" content="Daniel Liu" />
      <meta name="robots" content="index, follow" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Daniel Liu",
            "jobTitle": "Software Developer",
            "url": "http://localhost:3000",
            "sameAs": [
              "https://github.com/danielliu",
              "https://linkedin.com/in/Hatalabdallah"
            ],
            "knowsAbout": [
              "Web Development",
              "Full Stack Development",
              "Database Systems",
              "Cloud Computing",
              "React.js",
              "Node.js",
              "TypeScript",
              "MongoDB"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kampala",
              "addressCountry": "Uganda"
            }
          })
        }}
      />
    </Head>
  );
};

export default SEO;
