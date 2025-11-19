import React from 'react';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="bg-brand-black aspect-square relative p-8 flex items-end">
               <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-brand-red"></div>
               <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-brand-red"></div>
               <h3 className="font-display font-black text-5xl text-white leading-tight z-10">
                 BUILT FOR<br />THE<br /><span className="text-brand-red">OBSESSED</span>.
               </h3>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="font-display font-black text-4xl mb-6">WHY NOWDOER?</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Most brands sell you a lifestyle of leisure. We sell the lifestyle of effort. 
              We understand that true satisfaction comes from doing hard things.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 border-b border-gray-200 pb-6">
                <span className="text-3xl font-black text-brand-red/20">01</span>
                <div>
                  <h4 className="font-bold text-xl mb-2">Athletic Fit & Feel</h4>
                  <p className="text-gray-500">Designed to accentuate your physique, not hide it.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 border-b border-gray-200 pb-6">
                <span className="text-3xl font-black text-brand-red/20">02</span>
                <div>
                  <h4 className="font-bold text-xl mb-2">Motivational Durability</h4>
                  <p className="text-gray-500">Prints that won't fade, messages that won't quit.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl font-black text-brand-red/20">03</span>
                <div>
                  <h4 className="font-bold text-xl mb-2">Community Access</h4>
                  <p className="text-gray-500">Every purchase grants access to our monthly challenges.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};