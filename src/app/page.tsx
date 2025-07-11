'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-blue-500 text-white p-8 rounded-lg shadow-lg text-center'>
        <h1 className='text-3xl font-bold mb-4'>Tailwind CSS Test</h1>
        <p className='mb-2'>
          If you see this blue box with white text, Tailwind is working! 🎉
        </p>
        <button className='mt-4 px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition'>
          Test Button
        </button>
      </div>
    </div>
  );
}
