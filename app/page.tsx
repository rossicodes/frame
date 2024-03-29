import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import Image from 'next/image';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time',
    },
    {
      action: 'tx',
      label: 'Send Base Sepolia',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-between h-full p-4">
        <div className="pb-4 flex flex-col justify-center items-center">
          <h1 className="text-xl p-4 tracking-wider">FULLSTACKDEGEN.ETH</h1>
          <div className="p-6 rounded-full">
            <Image src="/logo.png" width={200} height={200} alt={'logo'} />
          </div>
        </div>
        <footer className="flex items-center justify-center w-full">
          {' '}
          <p>
            by{' '}
            <span className="tracking-wider">
              <a href="https://twitter.com/fullstackdegen_">fullstackdegen.eth</a>
            </span>{' '}
          </p>
        </footer>
      </main>
    </>
  );
}
