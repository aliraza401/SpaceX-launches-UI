import { useEffect } from "react";
import Head from "next/head";

const MetaController = ({
  title = "Space X Launch Tracker",
  description = "Space X mission launch tracker",
  viewport = "width=device-width, initial-scale=1",
  favicon = "/favicon.ico",
  additionalMetaTags = [],
  canonicalUrl,
  ogTags = {},
  twitterTags = {},
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {isDataSomething(viewport) ? (
        <meta name="viewport" content={viewport} />
      ) : (
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      )}

      {isDataSomething(favicon) ? (
        <link rel="icon" href={favicon} />
      ) : (
        <link rel="icon" href="/favicon.ico" />
      )}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook Meta Tags */}
      {ogTags.title && <meta property="og:title" content={ogTags.title} />}
      {ogTags.description && (
        <meta property="og:description" content={ogTags.description} />
      )}
      {ogTags.url && <meta property="og:url" content={ogTags.url} />}
      {ogTags.type && <meta property="og:type" content={ogTags.type} />}
      {ogTags.image && <meta property="og:image" content={ogTags.image} />}

      {/* Twitter Meta Tags */}
      {twitterTags.card && (
        <meta name="twitter:card" content={twitterTags.card} />
      )}
      {twitterTags.title && (
        <meta name="twitter:title" content={twitterTags.title} />
      )}
      {twitterTags.description && (
        <meta name="twitter:description" content={twitterTags.description} />
      )}
      {twitterTags.image && (
        <meta name="twitter:image" content={twitterTags.image} />
      )}

      {/* Additional meta tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
    </Head>
  );
};

export default MetaController;
