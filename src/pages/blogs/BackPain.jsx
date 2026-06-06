import React from "react";
import BlogTemplate from "../../components/BlogTemplate";

export default function BackPain() {
  return (
    <BlogTemplate
      category="Orthopedics"
      title="Common Causes of Back Pain You Should Know"
      image="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8"
      content={`
Back pain is one of the most common health problems affecting adults.

1. Poor Posture
Sitting incorrectly for long hours can strain your spine.

2. Muscle Strain
Heavy lifting or sudden movements may cause muscle injuries.

3. Herniated Disc
A slipped disc may cause severe pain and numbness.

4. Arthritis
Joint inflammation in the spine can cause chronic pain.

5. Lack of Exercise
Weak muscles increase pressure on the spine.

Early diagnosis can prevent worsening conditions.
      `}
      ctaTitle="Need Back Pain Treatment?"
      ctaText="Consult our Orthopedic specialists at Trident Hospitals."
    />
  );
}