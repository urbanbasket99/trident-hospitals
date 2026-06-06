import React from "react";
import BlogTemplate from "../../components/BlogTemplate";

export default function JointPain() {
  return (
    <BlogTemplate
      category="Orthopedics"
      title="5 Signs You Should Not Ignore Joint Pain"
      image="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
      content={`
Joint pain is a common problem affecting people of all ages.

1. Persistent Pain
If pain lasts for weeks, consult a specialist.

2. Swelling Around Joints
Swelling and redness may indicate inflammation.

3. Difficulty Walking
Pain affecting mobility should never be ignored.

4. Morning Stiffness
Could indicate arthritis or joint degeneration.

5. Pain During Daily Activities
Seek early treatment before it worsens.
      `}
      ctaTitle="Need Expert Orthopedic Care?"
      ctaText="Book an appointment with Trident Hospitals today."
    />
  );
}