import { useState } from "react";
import FaqCard from "@/components/faqcard";
import StarsCanvas from "@/components/Stars";
const data = [
    {
        ques: "What is Pantheon?",
        ans: "Pantheon is the annual tech extravaganza of BIT Mesra which is held every year in October."
    },
    {
        ques: "What is the theme of the fest?",
        ans: "The fest follows a theme every year, which resonates with the recent technological advancements and forms the basis of this tech extravaganza. The organizing committee will soon be releasing the fest theme on the socials. So, stay tuned!         "
    },
    {
        ques: "What are the types of events?",
        ans: "There are 3 types of events in the fest. Flagship, Informal, Formal inviting best of minds from within and outside the college!         "
    },
    {
        ques: "When and where will Pantheon be held?",
        ans: "Everywhere you lay your eyes on! The classrooms, grounds, halls, roads, the whole campus is filled with tech and fun.        "
    },
    {
        ques: "How can I register for Pantheon?",
        ans: "On the official website. You can participate in teams or even run solo, whichever suits your style!        "
    },
    {
        ques: "Who can participate in Pantheon?",
        ans: "Anyone and everyone! Be it a student of BIT Mesra or your friend from school or college. It's a haven for young minds to pursue their knowledge and have fun, and all are duly welcomed. "
    },
    {
        ques: "Any advisory for participating teams?",
        ans: "Initially, each individual is required to complete the registration process by providing their email address. Individuals who are not already part of a team have the privilege of creating a new team. Furthermore, anyone has the option to become a member of a team by using a team join code. It is important to note that a single user can be part of only one team, switching teams after joining a team is not permitted. Lastly, teams may consist of a maximum of 8 members."
    },
    {
        ques: "Is there a registration fee for individual events?",
        ans: "There are no fees for taking part in any Pantheon event for BIT Mesra Students. But the students from other colleges will have to pay a nominal admission price of ₹1100, payable upon arrival at the campus, which covers the cost of an official Pantheon T-shirt, a three-day accommodation, entry to Pantheon nights, and participation in all the  events.!"
    },
    {
        ques: "What is the dress code for Pantheon?",
        ans: "BITians are proud of the fest and they do so in style. Every year the official T-shirt for Pantheon is released which represents the fest and unity of the college. Even though there is no official dress code for Pantheon, wouldn't it look great when everyone is wearing the colors of Pantheon."
    },
    {
        ques: "What are the prizes and awards for winners?",
        ans: "The earlier mentioned 3 types of events each have different points associated with them. It is the sum of all these points that would lead you or your team to the Pantheon cup, prize money and much more!        "
    },
    {
        ques: "Is there a food court or refreshment area at the venue?",
        ans: "There’ll be lots and varieties all at your own IC arena. Enjoy it as you enjoy the fest."
    },
    {
        ques: "What will be the theme of Pantheon this year?",
        ans: "The stars have aligned and the sun has given a sign. But why spoil the fun when you know the place to find. Let's meet at CAT HALL on 29th September 5 O'Clock in the Weekender event and find out where this cosmic blend of a technical fest is going to take us.        "
    },
    {
        ques: "Are there any celebrities coming?",
        ans: "Shh! Secret!"
    },
    {
        ques: "How can I get updates and announcements about Pantheon?",
        ans: "Keep an eye on our official website and keep checking the social media channels. You will also receive timely updates on Epistle and Newsrooms. Until then keep your spirits high and hopes up higher.        "
    },
]


export default function Faq() {
  return (
    <div className=" bg-black relative z-0">
      <section >
        <div className="container px-6 py-12 mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            Frequently Asked Questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            {data.map((item, index) => {
              return (
                <FaqCard question={item.ques} answer={item.ans} key={index} />
              );
            })}
          </div>
        </div>
      </section>
      <StarsCanvas />
    </div>
  );
}
