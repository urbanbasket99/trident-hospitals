import React from "react";
import BlogTemplate from "../../components/BlogTemplate";

export default function BloodPressureSymptoms() {
  return (
    <BlogTemplate
      category="Cardiology"
      title="High Blood Pressure Symptoms Explained"
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1"
      content={`
High blood pressure often develops silently.

Common symptoms include:

• Frequent headaches
• Dizziness
• Blurred vision
• Chest discomfort
• Fatigue
• Shortness of breath

Regular health checkups are essential.
      `}
      ctaTitle="Need BP Monitoring?"
      ctaText="Visit Trident Hospitals for expert cardiac care."
    />
  );
}