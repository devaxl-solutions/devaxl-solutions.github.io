/**
 * Renders a JSON-LD block. Server component — the markup ships in the initial
 * HTML so crawlers and LLM fetchers see it without executing JavaScript.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is injected verbatim; `<` is escaped so a stray
      // "</script>" inside any content string can't break out of the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
