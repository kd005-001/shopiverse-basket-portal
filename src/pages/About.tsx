
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl font-medium mb-4">About Minima</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We create thoughtfully designed products that enhance your everyday experience.
          </p>
        </motion.div>
        
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Minima began with a simple idea: create products that combine beautiful design with everyday functionality. 
              Founded in 2021, we set out to build a brand that reflects our belief that the objects we surround ourselves 
              with should bring joy through their form and purpose.
            </p>
            <p className="text-gray-600">
              Our team of designers and craftspeople work together to create items that stand the test of time, 
              both in durability and aesthetic. We source sustainable materials and partner with responsible 
              manufacturers who share our values.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Our studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-medium mb-8">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Thoughtful Design",
                description: "Every detail matters. We obsess over form, materials, and usefulness to create products that enhance your life."
              },
              {
                title: "Sustainability",
                description: "We're committed to responsible practices throughout our supply chain and creating products that last."
              },
              {
                title: "Quality Craftsmanship",
                description: "We partner with skilled artisans and manufacturers who share our commitment to exceptional quality."
              }
            ].map((value, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-medium mb-8 text-center">Our Team</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Sam Taylor",
                role: "Head of Product Design",
                image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Jamie Rivera",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Morgan Williams",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="rounded-full overflow-hidden mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-sm mb-1">{member.name}</h3>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
