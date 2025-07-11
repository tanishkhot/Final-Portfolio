import React from "react";
import { useState } from "react";
import { Layout } from "../../layout/Layout";

import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";

const ForZS = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const prompt = `You are a helpful assistant that evaluates a candidate based on their self-description and analyzes how well they fit a given company and role.

Candidate Description:
"I'm Tanish Khot, an IT student from PICT. I've built data pipelines, dashboards using Streamlit, held leadership roles at TEDxPICT and Pulzion, and have mountaineering world records. I work well under pressure and specialize in Python, SQL, full-stack engineering, and data analytics."

Task:
Evaluate how this candidate fits for the company "${company}" and the role "${role}". Summarize relevant experience, skills match, and potential value add.`;

    try {
      const chatCompletion = await getGroqChatCompletion(prompt);
      console.log("Chat Completion Response:", chatCompletion);
      setResponse(chatCompletion.choices[0]?.message?.content || "No response from model.");
    } catch (err) {
      console.error("Groq API Error:", err);
      setResponse("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  async function getGroqChatCompletion(prompt) {
    const Groq = (await import("groq-sdk")).default;
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
  }

  return (
    <Layout>
      <Section>
        <SectionTitle> Hello ZS Team</SectionTitle>
        <SectionText>
          I'm Tanish Khot, an IT student from PICT, and I've created this space
          specifically for your team. I believe initiative = leadership. So, to
          showcase what I can do and have done before, I created this page so
          you can find exactly what you need to know about me.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle> Why ZS?</SectionTitle>
        <SectionText>
          I have always thought Engineering is about solving problems. Fro
          getting from point A to point B, to building a bridge, or even
          creating a software solution, Engineering is everywhere. I have always
          wanted to work in a place where I can solve problems, and ZS is the
          perfect place for that. I am particularly drawn to ZS because of its
          focus on data-driven decision-making.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>💡 What I Bring</SectionTitle>
        <SectionText>
          - Strong foundation in software engineering and data pipelines
          <br />
          - My IIT Degree in Data Science is something that will help me to
          provide maximum value to ZS
          <br />
          - Hands-on experience with Python, SQL, and full-stack projects
          <br />
          - A deep interest in problem solving, case interviews, and
          guesstimates
          <br />
          - Excellent communication and presentation skills honed through
          leadership roles
          <br />
          - I have been Operations Head of TEDxPICT, Technical Head of TEDxPICT,
          Overall head for Pulzion'24 and have been a part of the organizing
          team of PICT's annual technical fest, InC.
          <br />- I have held world records in mountaineering and I thrive under
          high pressure.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle> My Project (Top project for ZS):</SectionTitle>
        <SectionText>
          Out of all my projects, after talking to my seniors at ZS about what
          is the most relevant skills, I build a data pipeline and streamlit app
          showcasing my data analytics skills.
          <br />
          You can find the deployed link here:
          <a
            href="https://tanishkhot2.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Click here
          </a>
        </SectionText>
      </Section>

      {/* <Section>
        <SectionTitle>Dynamic Fit Analysis</SectionTitle>
        <SectionText>
          Type in any company and role you're considering me for, and see how I
          fit based on my experience:
        </SectionText>
        <input
          type="text"
          placeholder="Enter company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "200px" }}
        />
        <input
          type="text"
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "200px" }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: "8px 16px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {loading ? "Loading..." : "Analyze Fit"}
        </button>
        <br />
        <br />
        <SectionText>
          {response && (
            <div>
              <strong>Summary:</strong>
              <br />
              {response}
            </div>
          )}
        </SectionText>
      </Section> */}

      <Section>
        <SectionTitle> Final Note</SectionTitle>
        <SectionText>
          I would love the opportunity to contribute to ZS. Feel free to explore
          my portfolio and connect with me. Thank you for considering my
          application!
        </SectionText>
      </Section>
    </Layout>
  );
};

export default ForZS;
