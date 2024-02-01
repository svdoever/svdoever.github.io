---
title: AI Adventures - how I started
published: true
date: 2024-02-01
spoiler: Finally a write-up of my first steps into AI, an interesting ride, that just got started...
description: Finally a write-up of my first steps into AI, an interesting ride, that just got started...
image: external image URL, starting with https:// - store at https://imgbb.com/
tags:
  - AI
  - LLM
  - chatbot
  - OpenAI
canonical_url: https://www.sergevandenoever.nl/AI_Adventures_how_I_started/
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
Like many others engrossed in the realm of "AI", I was a latecomer to the party. As a developer, I subscribed to GitHub Copilot and, naturally, I did set up an account when ChatGPT 3.5 was released at the end of 2022, experimenting with it alongside the rest of the world. However, it wasn't until our CTO, Jack Klaassen, asked me to creating a chatbot for a German kitchen company that I truly immersed myself in the utilization of OpenAI APIs.

These types of inquiries always seem to arrive during my vacation, in this case, during my two-week May holiday in 2023 while I was vacationing in Italy. My son was preparing for his HAVO exam, providing the perfect opportunity for me to sit beside him, laptop at the ready, and delve into the fascinating world of Large Language Models (LLMs), vector databases, creating embeddings, and making calls to the OpenAI API using the GPT 4 model.

### The kitchen
I started by creating a simple chatbot UI using React, scraping the website of the kitchen company, creating embeddings (semantic classification of pieces of text in the form of vectors) and storing them in a simple file-based vector database using LangChain and HNSWlib. Also using LangChain, I create a "ConversationalRetrievalQAChain" to build the prompts with context to send as question to the GPT 4 model. 

Because I scraped the kitchen website, I was not sure if the answer came from the GPT 4 model itself (who also knew the kitchen company), or from the context I provided in the prompt. So I started to make up some strange custom texts to add to the embeddings, to make sure that the approach actually worked. And it did!

### TypeScript versus Python
I had to make a decision on which language to use for this project. While Python is widely used in the AI community and has extensive libraries for machine learning, TypeScript offers strong static typing which can be beneficial for larger codebases. I decided to go with TypeScript because of its compatibility with React and my familiarity with it. LangChain has a [TypeScript version](https://js.langchain.com/) which made it easy to integrate into my project.
### Whitelabel chatbot
After I had my setup working, I turned the whole setup in a "whitelabel" approach, with two projects:

- **openai-chat-headstart** - the React chatbot frontend in Next.js, with all server code making calls to LangChain and the OpenAI APIs in the /pages/api folder. Yes, it was still a good old page router based Next.js application.
- **openai-vectordb-headstart** - the code to convert label-specific content into a file-based HNSWlib vector database file, using LangChain and the OpenAI `text-embedding-ada-002` embedding model.  

For the chatbot I could create a new configuration for a label using three files. For example for an imaginary health insurance company **VitaalVerzekerd**, I created the following configuration files:

chatbot-configuration.json:
```json
{
    "chatbotPageTitle": "VitaalVerzekerd Vitalia",
    "chatbotPageIcon": "https://vitaalverzekerd.sitecoresandbox.cloud/api/public/content/vitaalverzekerd-icon-orignal.png?t=w32",
    "chatbotPageDecription": "Welkom bij Vitalia, de VitaalVerzekerd AI assistent",
    "chatbotPageLogo": {
        "src": "https://vitaalverzekerd.sitecoresandbox.cloud/api/public/content/vitaalverzekerd-logo-original.png",
        "height": 36,
        "alt": "VitaalVerzekerd Vitalia AI Assistent",
        "url": "https://www.vitaalverzekerd.nl"
    },
    "chatbotPageLabelName": "",
    "chatbotPageLabelUrl": "https://www.vitaalverzekerd.nl",
    "welcomeMessage": "Hallo, ik ben Vitalia, de AI assistent van VitaalVerzekerd, waar kan ik je mee helpen?",
    "waitingForResponse": "Wacht op antwoord...",
    "typeYourQuestion": "Typ je vraag...",
    "chatbotIcon": "https://vitaalverzekerd.sitecoresandbox.cloud/api/public/content/vitaalverzekerd-icon-orignal.png?t=w32",
    "openai": {
        "model": "gpt-4",
        "temperature": 0.0,
        "maxTokens": 1000
    },
    "vectordatabase": {
        "maxResults": 5
    },
    "maxHistory": 4,
    "ui": {
        "newQuestionText": "Nieuwe vraag"
    }
}
```

condense-prompt.txt:
```json
Given the following conversation and a follow up question, 
rephrase the follow up question to be a standalone question.
Doe dit allemaal in het Nederlands.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:
```

qa-prompt.txt:
```json
Je bent een AI assistent voor de zorgverzekeraar VitaalVerzekerd.
De website van VitaalVerzekerd is te vinden op https://www.vitaalverzekerd.nl/.

Je krijgt context informatie en een vraag. Geef een conversational en compleet, maar beknopt antwoord.
Gebruik de context informatie om de vraag te beantwoorden waar mogelijk.

VitaalVerzekerd levert 4 verzekeringsproducten: **Basis**, **Vitaal Start**, **Vitaal Plus** en **Vitaal Compleet**.
Toon de producten in de volgorde waarin ze hierboven zijn genoemd.

Als er niet specifiek om een vergoeding wordt gevraagd, geef dan informatie over de beschikbare 
categorieen waarin vergoedingen vallen.
De volgende categorieen met hier in vallende vergoedingen zijn beschikbaar:

**Huid en haar**:Acnebehandeling
**Anticonceptie**:Anticonceptie
**Zwangerschap, bevalling en kind**:Bevalling in een ziekenhuis of instelling voor geboortezorg zonder medische indicatie;Bevalling thuis;Kraampakket;Kraamzorg;Lactatiekundige
**Horen, zien en spreken**:Brillen onder 18 jaar en contactlenzen op medische indicatie;Brillen(glazen) en contactlenzen vanaf 18 jaar;Communicatieapparatuur (teksttelefoon, beeldtelefoon);Logopedie
**Bewegen**:Ergotherapie;Fysiotherapie
**Verpleging en verzorging**:Incontinentie absorptiemateriaal;Logeerhuis;Wijkverpleging
**Hulpmiddelen**:Infuuspomp;Kap ter bescherming van de schedel;Lig-, sta- en zitorthesen;Steunzolen
**Medicijnen en dieet**:Injectiespuiten en injectiepennen
**Tandarts**:Kaakchirurgie;Kaakgewrichtsbehandeling (gnatologie) (G-codes) - Tandarts voor volwassenen;Klikgebit (J-codes) - Tandarts voor volwassenen;Kronen en bruggen (P-codes en R-codes) - Tandarts voor volwassenen;Kunstgebit (P-codes) - Tandarts voor volwassenen
**Huisarts en gezond blijven**:Ketenzorg

Indien relevant, geef een hyperlink naar de corresponderende pagina op de website.
Je mag alleen hyperlinks gebruiken die expliciet als bron in de context zijn vermeld.
Maak geen hyperlink die niet in de context is vermeld.

Als je het antwoord niet weet, zeg dan "Hmm, ik weet het niet zeker." 
Probeer geen antwoord te verzinnen.
Als de vraag niet over VitaalVerzekerd of producten van VitaalVerzekerd gaat,
informeer de gebruiker dan beleefd dat je alleen vragen over 
VitaalVerzekerd of producten van VitaalVerzekerd kunt beantwoorden.
Vraag: {question}
Context (tussen ========= en =========):
=========
{context}
=========
Antwoord in Markdown:
```

Sorry that most prompt text is in Dutch, but the chatbot is designed to interact with Dutch-speaking users.

### Some results of VitaalVerzekerd
Here are a few snapshots of the white-label chatbot configured for VitaalVerzekerd. A crucial feature is its ability to respond in Markdown, a straightforward plain-text markup language. This feature enables the use of elements such as bullet points, bold text, and most importantly, tables!

![[VitaalVerzekerd_Q1.png]]

![[VitaalVerzekerd_Q2.png]]

### Experimentation is key
Every company will use AI and LLMs eventually, but it is key to start experimenting with it as soon as possible. See what AI can do for your problem domain. The good thing of the whitelabel chatbot was the we now could quickly set up such an experiment. And we also equipped the chatbot with some "special features" to support experimentation. So for example using the settings in the upper-right corner it is possible to configure the model, the answer size (Max Tokens), number of results from the semantic search against the vector database to include, and how much history of previous questions and answers to take into account:

![[Configuration_settings.png]]

We also allowed to enter "system commands" to interact directly with the chatbot system:
![[System_commands.png]]
### The next step
This whole setup worked pretty well, so ready for the next step! Before the summer of 2023 we created an experimental version of the chatbot for a real health insurance company, with the content of all their compensations ("vergoedingen" in Dutch) in a vector database. Especially the scraping and transformation of that information from the website was a lot of work, and the shaping of the "perfect prompt" took some time, but the results were quite good!

### Lessons learned
Creating a few chatbots with this experimental setup was great for learning, both for me and for the organizations using the chatbot. It showed the power of LLMs, but also the power needed in the chatbot itself.

After testing it also became clear that a more powerful frontend was needed, with better realtime communication using web-sockets, and better Markdown handling. Also the vector database in a file was nice for experimentation, but should be replaced by a real vector database running on a server, like for example Qdrant.

### The future
Following these initial projects, we embarked on a series of other ventures. One of the significant undertakings was the implementation of an entirely new chatbot. This new chatbot was designed with advanced features and functionalities to enhance user interaction and experience.

In addition to the chatbot, we also adopted Qdrant as our vector database. Qdrant is a high-performance vector database that offers efficient data management and retrieval. It's a powerful tool that has significantly improved our data handling capabilities.

However, these are just the highlights of our recent projects. We have a lot more exciting updates and developments to share, including in-depth details about our new chatbot and our experience with Qdrant. Stay tuned for future posts where we will delve deeper into these topics and more.