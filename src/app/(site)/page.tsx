import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Banner from "../../../public/image-removebg-preview.png";
import Cal from "../../../public/image-calendar-preview.png";
import Diamond from "../../../public/icons/diamond.svg";
import CheckIcon from "../../../public/icons/check.svg";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landing-page/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          sm:w-[300px]
        "
        >
          <Button
            variant="btn-secondary"
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-black dark:text-white text-white
          "
          >
            Get CollabSuite Free
          </Button>
        </div>
        <div
          className="md:mt-[-90px]
          w-full
          flex
          justify-center
          items-center
          relative
          max-sm:mt-10
        "
        >
          <div
            className="w-full
          blur-[120px]
          rounded-[50%]
          h-20
          absolute
          bg-white/70
          -z-100
          top-0
        "
          />
          <Image src={Banner} alt="Application Banner" />
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-black
          after:to-transparent
          after:from-black
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-black
          before:to-transparent
          before:from-black
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      "
      >
        <div
          className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-white/70
          -z-10
          top-22
        "
        />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />
        <div
          className="mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-3xl
          border-8
          border-white 
          border-opacity-20
        "
        >
          <Image src={Cal} alt="Banner" className="rounded-lg" />
        </div>
      </section>
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-white/70
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  border-none
                  bg-gradient-to-b
                  from-black to-black/30
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-white">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-white/70">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-white/70">{testimonial.message}</p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="mt-20
        px-4
        sm:px-6
      "
      >
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div
          className="flex 
        flex-col-reverse
        sm:flex-row
        gap-4
        justify-center
        sm:items-stretch
        items-center
        mt-10
        "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "w-[300px] rounded-2xl dark:bg-black/40 background-blur-3xl relative",
                {
                  "border-white/70": card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="hidden dark:block w-full blur-[120px] rounded-full h-32
                        absolute
                        bg-white/80
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal 
                    text-2xl
                "
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="dark:text-white/70 ml-1">/mo</span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-white/70">{card.description}</p>
                  <Button className="whitespace-nowrap w-full mt-4 bg-transparent border border-white bg-black text-white shadow-white/70">
                    {card.planType === PRICING_PLANS.proplan
                      ? "Go Pro"
                      : "Get Started"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4
                "
                >
                  <small className="text-white/80">
                    {card.highlightFeature}
                  </small>
                  {card.freatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                      text-white
                    "
                    >
                      <Image src={CheckIcon} alt="Check Icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
