import React from 'react';
import literature from '@site/src/data/literature.json';

export default function LiteratureList({
  topic,
  title = 'Literatura',
  sortBy = 'year',
  order = 'desc',
}) {
  const items = literature[String(topic)] || [];
  if (!items.length) return null;

  const sorted = [...items].sort((a, b) => {
    const dir = order === 'asc' ? 1 : -1;
    if (sortBy === 'year') {
      const ay = Number(a.year) || 0;
      const by = Number(b.year) || 0;
      return (ay - by) * dir;
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title) * dir;
    }
    return a.authors.localeCompare(b.authors) * dir;
  });

  return (
    <section>
      <h2>{title}</h2>
      <ol>
        {sorted.map((it, i) => (
          <li key={i}>
            <span>
              {it.authors} ({it.year}). <strong>{it.title}</strong>
              {it.source ? `. ${it.source}` : ''}
            </span>
            {it.link ? (
              <>
                {' '}
                — <a href={it.link} target="_blank" rel="noreferrer">link</a>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

