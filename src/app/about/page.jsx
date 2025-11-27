"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/team/ceo.jpg",
      description: "10+ years in ecommerce and retail management",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Head of Technology",
      image: "/team/cto.jpg",
      description: "Former tech lead at major retail platforms",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Customer Experience Director",
      image: "/team/customer-care.jpg",
      description: "Passionate about creating exceptional shopping experiences",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Brand Partners" },
    { number: "24/7", label: "Customer Support" },
    { number: "5M+", label: "Products Delivered" },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Constantly evolving to bring you the latest trends and technologies",
    },
    {
      icon: "🤝",
      title: "Trust",
      description:
        "Building lasting relationships through transparency and reliability",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and responsible sourcing",
    },
    {
      icon: "💫",
      title: "Excellence",
      description:
        "Delivering exceptional quality in every aspect of our service",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-96 bg-gradient-to-r from-primary to-secondary">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold">
              We belive in Trust, Management
            </h1>
            <p className="mb-8 text-xl">
              Transforming online shopping with passion, innovation, and
              customer-centric values since 2020
            </p>
            <button className="btn btn-accent btn-lg">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="card bg-base-200 shadow-xl">
                <figure>
                  <Image
                    src="/about/mission.jpg"
                    alt="Our Mission"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </figure>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                We believe that everyone deserves access to quality products at
                affordable prices. Our mission is to create a seamless shopping
                experience that connects customers with the best products from
                around the world.
              </p>
              <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                {stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <div className="stat-value text-primary">{stat.number}</div>
                    <div className="stat-desc">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="card-title justify-center text-xl mb-2">
                    {value.title}
                  </h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl max-w-2xl mx-auto">
              The passionate individuals behind your shopping experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="card bg-base-100 shadow-xl">
                <figure className="px-6 pt-6">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-24 h-24">
                      <span className="text-3xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-sm opacity-70">{member.description}</p>
                  <div className="card-actions">
                    <button className="btn btn-ghost btn-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full items-center flex-col mb-5">
        <h1 className="text-5xl  my-10">We belive In....</h1>
        <div className="flex w-full h-50 items-center justify-center text-xl">
          <div className="divider divider-horizontal divider-start">
            Success
          </div>
          <div className="divider divider-horizontal">Try again..</div>
          <div className="divider divider-horizontal divider-end">Try</div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our growing family of satisfied customers and experience
            the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-accent btn-lg">Start Shopping</button>
            <button className="btn btn-outline btn-lg text-primary-content border-primary-content">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
