import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { RF,DTC,LR,check } from "../assets";

const Services = () => { 

  return (
    <Section id="models">
      <div className="container">
        <Heading
          title="Checkout Our Models' Confusion Matrix under Different Algorithms"
          text="Random Forest Classifier, Decision Tree Classifier and Logistic Regression"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={RF}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Random Forest</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Currently using Algorithm
              </p>
              <ul className="body-2">
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">Precision Score : 0.959905</p>
                  </li>
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">AUC Score : 0.975699</p>
                  </li>
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">F1 Score : 0.959439</p>
                  </li>
              </ul>
            </div>
          </div>
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={DTC}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Decision Tree Classifier</h4>
              <ul className="body-2">
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">Precision Score : 0.953869</p>
                  </li>
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">AUC Score : 0.943126</p>
                  </li>
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">F1 Score : 0.9546197</p>
                  </li>
              </ul>
            </div>
          </div>
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={LR}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Logistic Regression</h4>
              <ul className="body-2">
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">Precision Score : 0.926923</p>
                  </li>
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">AUC Score : 0.948744</p>
                  </li>
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">F1 Score : 0.922598</p>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
