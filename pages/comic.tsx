'use strict';

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { Comic as ComicType } from '../src/types';
import Image from 'next/image';

const Comic: React.FC = () => {
  const [comic, setComic] = useState<ComicType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const email = 'a.mukhutdinov@innopolis.university';
    fetch(
      `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`,
    )
      .then((response) => response.json())
      .then((comicId) =>
        fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`),
      )
      .then((response) => response.json())
      .then(setComic)
      .catch((error) => console.error('Error while fetching comic:', error));
  }, []);

  if (!comic) return <div>Loading...</div>;

  const date = new Date(
    Number(comic.year),
    Number(comic.month) - 1,
    Number(comic.day),
  );
  const timeSinceReleased = moment(date).fromNow();

  return (
    <section id="comic-content">
      <h2>Just for your fun</h2>
      <div id="comic-container">
        <h3>{comic.safe_title}</h3>
        <p>
          Published on: {date.toLocaleDateString()} ({timeSinceReleased})
        </p>
        <Image src={comic.img} alt={comic.alt} />
      </div>
      <button onClick={() => router.push('/')}>Back to Reality</button>
    </section>
  );
};

export default Comic;
