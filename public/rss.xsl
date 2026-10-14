<?xml version="1.0" encoding="UTF-8"?>
<!-- Makes /rss.xml readable when opened in a browser. Feed readers ignore this file. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>RSS feed · <xsl:value-of select="/rss/channel/title"/></title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&amp;family=Libre+Franklin:wght@800&amp;family=Plus+Jakarta+Sans:wght@400;600&amp;display=swap"/>
        <style>
          :root { --page:#f5f5f2; --paper:#ffffff; --ink:#2f3a45; --muted:#626d77; --line:#e3e3dc; --bar:#2f3a45; --slate:#4a6274; --mustard:#e2b23c; --mustard-soft:#f3d27a; --on-dark:#f5f5f2; }
          * { box-sizing: border-box; }
          body { margin:0; background:var(--page); color:var(--ink); font-family:'Plus Jakarta Sans', system-ui, sans-serif; line-height:1.65; }
          .frame { max-width:64rem; margin-inline:auto; padding-inline:clamp(1rem, 4vw, 2rem); }
          header.bar { background:var(--bar); }
          header.bar .frame { padding-block:0.9rem; }
          .brand { font-family:'Libre Franklin', Arial, sans-serif; font-weight:800; color:var(--on-dark); text-decoration:none; font-size:1.1rem; }
          .brand span { color:var(--mustard); }
          .band { background:var(--slate); color:var(--on-dark); }
          .band .frame { padding-block:clamp(2.25rem, 6vw, 3.5rem); display:grid; gap:0.8rem; }
          .kicker { font-size:0.75rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--mustard-soft); margin:0; }
          h1, h2 { font-family:'Libre Franklin', Arial, sans-serif; font-weight:800; letter-spacing:-0.02em; line-height:1.12; margin:0; }
          h1 { font-size:clamp(2rem, 5vw, 2.8rem); }
          .band p { margin:0; max-width:40rem; opacity:0.92; }
          .url { display:flex; flex-wrap:wrap; gap:0.6rem; align-items:center; margin-top:0.4rem; }
          code { font-family:'IBM Plex Mono', ui-monospace, monospace; background:var(--paper); color:var(--bar); padding:0.45rem 0.7rem; border-radius:4px; font-size:0.9rem; overflow-wrap:anywhere; }
          main .frame { padding-block:2rem 4rem; display:grid; gap:1rem; }
          ol { list-style:none; margin:0; padding:0; }
          li { padding-block:1.2rem; border-top:1px solid var(--line); display:grid; gap:0.3rem; max-width:42rem; }
          li:last-child { border-bottom:1px solid var(--line); }
          li a { font-family:'Libre Franklin', Arial, sans-serif; font-weight:800; font-size:1.25rem; color:var(--ink); text-decoration:none; }
          li a:hover { text-decoration:underline; text-decoration-color:var(--mustard); text-decoration-thickness:2px; }
          .meta { font-family:'IBM Plex Mono', ui-monospace, monospace; font-size:0.8rem; color:var(--muted); }
          .desc { color:var(--muted); margin:0; }
          a.back { color:var(--slate); font-weight:600; text-decoration-color:var(--mustard); text-decoration-thickness:2px; text-underline-offset:0.2em; }
        </style>
      </head>
      <body>
        <header class="bar"><div class="frame"><a class="brand" href="/">Learning the <span>AI</span> Way</a></div></header>
        <section class="band">
          <div class="frame">
            <p class="kicker">RSS feed</p>
            <h1>Follow <xsl:value-of select="/rss/channel/title"/></h1>
            <p>This is the RSS feed. Copy the address below into a feed reader such as Feedly, Inoreader or NetNewsWire, and new posts will show up there automatically.</p>
            <div class="url"><code><xsl:value-of select="/rss/channel/atom:link[@rel='self']/@href"/></code></div>
          </div>
        </section>
        <main>
          <div class="frame">
            <h2>Posts in this feed</h2>
            <ol>
              <xsl:for-each select="/rss/channel/item">
                <li>
                  <span class="meta"><xsl:value-of select="substring(pubDate, 6, 11)"/></span>
                  <a href="{link}"><xsl:value-of select="title"/></a>
                  <p class="desc"><xsl:value-of select="description"/></p>
                </li>
              </xsl:for-each>
            </ol>
            <p><a class="back" href="/">← Back to the blog</a></p>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
