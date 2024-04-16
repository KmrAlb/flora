import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { pricingCards } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="h-full w-full relative flex items-center justify-center flex-col pt-32 md:pt-40 lg:pt-44">
        {/* Background gradient */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        {/* Heading */}
        <p className="text-center text-2xl md:text-4xl lg:text-4xl">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-7xl sm:text-[120px] md:text-9xl lg:text-[300px] font-bold text-center sm:mt-5">Flora</h1>
        </div>

        {/* Banner image */}
        <div className="flex justify-center items-center relative w-full md:mt-[-50px] lg:mt-[-30px] z-10">
          <Image
            src="/assets/preview.png"
            alt="banner image"
            height={600}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted w-full max-w-[1200px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t dark:from-background z-10"></div>
        </div>
      </section>

      <section className='flex justify-center items-center flex-col gap-4 md:mt-20 mt-[-50px]'>
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
         
        </div>
        <h2 className='text-3xl text-center relative z-10'> Choose what fits you right</h2>
        <p className='text-muted-foreground text-center relative z-10'>
          Our straight forward pricing plans are taulored to meet your needs.If {"you're"} not <br />
          ready to commit you can start for free
        </p>

        <div className="flex justify-center gap-4 flex-wrap mt-6 relative z-10">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx('w-[300px] flex flex-col justify-between', {
                'border-2 border-primary': card.title === 'Unlimited Saas',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas',
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex gap-2 items-center">
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${pricingCards[0].priceID}`}
                  className={clsx('w-full text-center bg-primary p-2 rounded-md', {
                    '!bg-muted-foreground': card.title !== 'Unlimited Saas',
                  })}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}