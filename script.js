function showFunFact() {

  const facts = [
    "Fun Fact: I began my career in database administration and enterprise systems before transitioning into digital channel leadership. I previously led front-end development teams before moving into regional governance and strategy roles.",
    "Fun Fact: I have worked across banking, financial services, and pharmaceutical digital transformation. I have over 15 years of experience in enterprise technology and digital systems.",
    "Fun Fact: My work spans multiple countries across the ASKAN region, aligning digital initiatives with business priorities. I combine technical foundations with customer experience strategy to drive measurable digital impact."
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("funFact").textContent = facts[randomIndex];
}

document.getElementById("year").textContent = new Date().getFullYear();