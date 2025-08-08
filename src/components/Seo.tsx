import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
};

export const Seo = ({ title, description, canonical, jsonLd }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />} 
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
