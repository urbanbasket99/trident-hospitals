import React from "react";
import BlogTemplate from "../../components/BlogTemplate";

export default function HeartWarningSigns() {
  return (
    <BlogTemplate
      category="Cardiology"
      title="Warning Signs of Heart Problems You Should Know"
      image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
      content={`
Heart problems should never be ignored.

Watch for:

• Chest pain
• Shortness of breath
• Irregular heartbeat
• Dizziness
• Fatigue
• Swelling in legs

Early diagnosis can save lives.
      `}
      ctaTitle="Need a Heart Checkup?"
      ctaText="Consult our cardiology specialists today."
    />
  );
}