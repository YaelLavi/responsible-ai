import pandas as pd

# Define the data for the document
regulations = [
    ["EU AI Act", "Global / EU", "Risk-based classification; bans on social scoring and subliminal manipulation."],
    ["U.S. State Laws", "USA (CA, CO)", "Focus on automated decision-making and consumer data protection."],
    ["National AI Program", "Israel", "Sector-specific ethical sandboxes and 'Responsible Innovation' frameworks."]
]

env_costs = [
    ["Text Query", "~0.3 Wh", "~0.03 g", "~0.5 mL"],
    ["Image (Nano Banana)", "~0.5 Wh", "~3.0 g", "~0.5 mL"],
    ["Image (Midjourney)", "~2.2 Wh", "~5.0 g", "~2.0 mL"],
    ["5s AI Video", "~944 Wh", "~150.0 g", "~120.0 mL"]
]

# Create the markdown content
md_content = f"""# Research Report: Responsible AI & Environmental Sustainability (March 2026)

## Executive Summary
As the AI revolution accelerates, the role of the **Product Manager** has shifted from purely driving growth to acting as the ethical and environmental steward of the product. This report outlines the current state of AI regulation, the hidden costs of "talking to machines," and the movements shaping the future of humanity.

---

## 1. The Regulatory Landscape
Governments have moved from voluntary guidelines to mandatory enforcement. 

| Regulation | Jurisdiction | Key Focus |
| :--- | :--- | :--- |
| **EU AI Act** | European Union | Mandatory oversight for "High-Risk" AI (recruitment, infrastructure). |
| **State Privacy Acts** | USA (CA, CO, TX) | Protection against algorithmic bias and transparency in automated decisions. |
| **Israeli AI Sandbox** | Israel | Sector-specific ethics managed by the National AI Directorate. |

---

## 2. The Environmental "Invoice"
The cost of AI is often invisible to the end-user. Below is the resource consumption breakdown for common AI tasks compared to traditional search.

### Comparative Resource Consumption Table
| Action | Electricity (Wh) | CO2 Emissions (g) | Water Cooling (mL) |
| :--- | :--- | :--- | :--- |
| {env_costs[0][0]} | {env_costs[0][1]} | {env_costs[0][2]} | {env_costs[0][3]} |
| {env_costs[1][0]} | {env_costs[1][1]} | {env_costs[1][2]} | {env_costs[1][3]} |
| {env_costs[2][0]} | {env_costs[2][1]} | {env_costs[2][2]} | {env_costs[2][3]} |
| {env_costs[3][0]} | {env_costs[3][1]} | {env_costs[3][2]} | {env_costs[3][3]} |

> **Pro-Tip:** One high-quality image generation in 2026 consumes as much electricity as a full smartphone charge. A 5-second video is equivalent to running a microwave for an hour.

---

## 3. Responsible AI: Safety & Ethics
The core danger isn't the "machine," but the **human definition** of its goals. 

### Key Ethical Pillars for PMs:
* **Bias Mitigation:** Ensuring datasets do not reinforce racism or discrimination.
* **Human-in-the-Loop:** Preventing autonomous agents from making life-altering decisions without human oversight.
* **Alignment:** Ensuring AI doesn't perceive human species as "hazardous" to the planet through narrow optimization.

---

## 4. Community Initiatives & Open Letters
As a PM, you can contribute to several active movements:

* **The Pro-Human AI Declaration:** Focuses on existential safety and uncontrollable agents.
* **Climate Action Tech:** A community for tech workers driving the "Green AI" movement.
* **Israeli Ethics by Design Pledge:** A local initiative for startups to integrate ethical risk assessments into their roadmaps.
* **The "Digital Mindfulness" Campaign:** Advocacy for "Carbon Nutrition Labels" on AI interfaces to make users aware of the cost of "fun" queries.

---

## 5. Strategic Recommendations for PM Engagement
1. **Selective Inference:** Design products that only trigger heavy AI models when necessary.
2. **Transparency:** Advocate for displaying "estimated CO2/Water cost" per query within your product.
3. **The PM Manifesto:** Shift success metrics from "Max Engagement" to "Sustainable Utility."

---
*Report compiled for community awareness initiatives in the Israeli tech ecosystem.*
"""

# Write to file
with open('Responsible_AI_Research_2026.md', 'w', encoding='utf-8') as f:
    f.write(md_content)

print("Markdown file generated successfully.")