import React from 'react';
import PritamAnand from "../assets/PritamAnand.pdf";

function Hireme() {
  return (
    <section className="min-h-screen py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">💼 Hire Me</h2>
        <p className="text-lg mb-6">
          I’m open to new opportunities. You can view or download my resume below!
        </p>

        {/* Resume PDF Viewer */}
        <div className="w-full h-[600px] bg-white rounded-lg overflow-hidden shadow-lg mb-6">
          <iframe
            src={PritamAnand}
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>
      </div>
    </section>
  );
}

export default Hireme;
