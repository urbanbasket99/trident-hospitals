import React from "react";
import BlogTemplate from "../../components/BlogTemplate";

export default function ChildSpecialist() {
  return (
    <BlogTemplate
      category="Pediatrics"
      title="Best Child Specialist in Shamshabad"
      metaTitle="Child Specialist in Shamshabad | Trident Hospitals"
      metaDescription="Looking for a child specialist in Shamshabad? Trident Hospitals provides expert pediatric care for children and infants."
      keywords="child specialist shamshabad, pediatric doctor shamshabad, child doctor shamshabad"
      image="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200"
      content={`
Children require specialized medical care for healthy growth and development. Trident Hospitals provides trusted pediatric care in Shamshabad.

Common Child Health Issues:

1. Fever
2. Cold & Cough
3. Nutrition Problems
4. Immunity Concerns
5. Growth Monitoring

Why Choose Trident Hospitals?

• Experienced Pediatric Specialists  
• Child-Friendly Care  
• Vaccination Support  
• Expert Guidance for Parents
      `}
      ctaTitle="Need Child Consultation?"
      ctaText="Book an appointment with our pediatric specialists today."
    />
  );
}