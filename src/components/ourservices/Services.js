import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="Services container-fluid py-5 text-light">
      <div className="container py-md-5">
        <div className="row my-2">
          <div className="col-md-6 m-auto">
            <img
              src="https://www.cortexcopywriter.com/img/services/services-6.svg"
              alt="ux-writing"
            />
          </div>
          <div className="col-md-6 mt-md-4">
            <p className="display-5 mt-3 mt-md-0">UX Writing</p>
            <p>
              Your website is a dialogue with your audience. I capture the
              essence of your business and communicate it clearly. Carefully
              considered writing and SEO best practices allow me to craft the
              perfect user journey online. Let me draw the map that guides users
              every step of the way from discovery, to consideration, to
              conversion.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item m-2">- Microcopy</li>
              <li className="list-inline-item m-2">- TaxonomyLabeling</li>
              <li className="list-inline-item m-2">- Chatbots</li>
              <li className="list-inline-item m-2">- User Research</li>
              <li className="list-inline-item m-2">- Content Style Guide</li>
              <li className="list-inline-item m-2">- User Testing</li>
              <li className="list-inline-item m-2">- Design Principles</li>
              <li className="list-inline-item m-2">- Prototype</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container  py-md-5">
        <div className="row my-2">
          <div className="col-md-6 mt-md-4 order-2 orde-md-1">
            <p className="display-5 mt-3 mt-md-0">Website Copywriting</p>
            <p>
              I develop clear and useful text in product interfaces to help
              users reach a specific goal, whether that's completing a form or
              tapping a button. This includes every type of content from
              on-screen help systems, user onboarding and in-app messages to
              push notifications and tooltips.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item m-2">- Wireframes</li>
              <li className="list-inline-item m-2">- Competitor Analysis</li>
              <li className="list-inline-item m-2">- On-page SEO</li>
              <li className="list-inline-item m-2">- Off-page SEO</li>
              <li className="list-inline-item m-2">- USP/UVP</li>
              <li className="list-inline-item m-2">- Landing Page</li>
              <li className="list-inline-item m-2">- Sales Letter</li>
            </ul>
          </div>
          <div className="col-md-6 m-auto">
            <img
              src="https://www.cortexcopywriter.com/img/services/services-7.svg"
              alt="ux-writing"
            />
          </div>
        </div>
      </div>
      <div className="container py-md-5">
        <div className="row my-2">
          <div className="col-md-6 m-auto">
            <img
              src="https://www.cortexcopywriter.com/img/services/services-5.svg"
              alt="ux-writing"
            />
          </div>
          <div className="col-md-6 mt-md-4">
            <p className="display-5 mt-3 mt-md-0">Content Writing</p>
            <p>
              Give your business a competitive edge with powerful content that
              can be targeted to any segment of your audience. No matter how
              large or complex your project, my custom-built solutions including
              articles, eDMs, and case studies will help you implement a plan
              that maximizes your business’s online exposure.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item m-2">- Headlines & Taglines</li>
              <li className="list-inline-item m-2">- Content Strategy</li>
              <li className="list-inline-item m-2">- Blogs & Articles</li>
              <li className="list-inline-item m-2">- Social Media Content</li>
              <li className="list-inline-item m-2">- Video Scripts</li>
              <li className="list-inline-item m-2">- eDMs & Newsletters</li>
              <li className="list-inline-item m-2">- Case Studies</li>
              <li className="list-inline-item m-2">- Whitepapers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
