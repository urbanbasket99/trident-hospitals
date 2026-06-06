import React from "react";
import BlogTemplate from "../../components/BlogTemplate";

export default function OrthopedicDoctor() {
  return (
    <BlogTemplate
      category="Orthopedics"
      title="When Should You Visit an Orthopedic Doctor?"
      image="https://images.unsplash.com/photo-1666214280557-f1b5022eb634"
      content={`
Many people ignore bone and joint pain for too long.

Visit an orthopedic doctor if:

• Persistent joint pain
• Sports injuries
• Difficulty walking
• Fractures or swelling
• Back or neck pain
• Joint stiffness

Early treatment can prevent long-term complications.
      `}
      ctaTitle="Need an Orthopedic Specialist?"
      ctaText="Book your consultation at Trident Hospitals."
    />
  );
}