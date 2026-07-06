---
theme: default
colorSchema: dark
title: How Data Engineering Survives the AI Wave
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
---

---
layout: cover
class: text-center
---

<div class="flex flex-col items-center gap-5 w-full mx-auto text-center" style="max-width:52rem">
  <span class="label label-i">JavaZone 2026</span>
  <h1 class="text-7xl font-extrabold leading-tight mb-6">
    How Data Engineering<br><span class="text-indigo-400">Survives</span> the AI Wave
  </h1>
  <p class="text-slate-400 text-xl">Vegard Sjåvik · Data Engineer at Bekk</p>
</div>

<!--
Kort intro om deg selv. Sett forventningene: dette handler ikke om vi forsvinner — det handler om hva jobben blir. Si at du har en analogi på lur.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>What is a Data Engineer?</h2>
  <div class="border-l-4 border-indigo-700 pl-6 text-slate-300 text-xl leading-relaxed italic my-6">
    "Data engineers build and maintain the systems and infrastructure that allow organizations to collect, store, and analyze large amounts of data."
  </div>
  <p class="text-slate-400 text-sm">— IBM</p>
</div>

<!--
Start med IBM-definisjonen. Gi den litt rom til å lande.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>What does that actually mean?</h2>
  <div class="flex gap-4">
    <div class="card flex-1 text-center">
      <div class="text-3xl mb-2">🏗️</div>
      <div class="font-semibold text-slate-200">Build & Maintain</div>
      <div class="text-sm text-slate-400 mt-1">Systems & infrastructure</div>
    </div>
    <div class="card flex-1 text-center">
      <div class="text-3xl mb-2">🗄️</div>
      <div class="font-semibold text-slate-200">Collect & Store</div>
      <div class="text-sm text-slate-400 mt-1">Data at scale</div>
    </div>
    <div class="card flex-1 text-center">
      <div class="text-3xl mb-2">📊</div>
      <div class="font-semibold text-slate-200">Enable Analysis</div>
      <div class="text-sm text-slate-400 mt-1">For the business</div>
    </div>
  </div>
</div>

<!--
Rask gjennomgang. Kontekst, ikke argument.
-->

---
layout: center
---

<div class="flex flex-col gap-5 w-full mx-auto" style="max-width: 60rem">
  <h2>The Classic Data Pipeline</h2>
  <div class="flex items-center justify-center gap-4" style="padding: 1.5rem 0">
    <div class="step step-i"><span>📥</span> Collect</div>
    <span class="text-slate-500 text-2xl">→</span>
    <div class="step step-i"><span>⚙️</span> Transform</div>
    <span class="text-slate-500 text-2xl">→</span>
    <div class="step step-i"><span>🗄️</span> Store</div>
    <span class="text-slate-500 text-2xl">→</span>
    <div class="step step-i"><span>📈</span> Report</div>
  </div>
  <div class="card text-center">
    <p class="text-slate-300">Engineers own the <span class="text-indigo-400 font-semibold">pipes</span>. Analysts own the <span class="text-indigo-400 font-semibold">outputs</span>. Everyone knows their lane.</p>
  </div>
</div>

<!--
De fleste her kjenner dette setuppet. Rask slide — det er bakgrunn for neste.
-->

---
layout: center
---

<div class="flex flex-col gap-5 w-full mx-auto" style="max-width: 62rem">
  <h2>Then AI Changed the Game</h2>
  <div style="display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.5rem 0.75rem; align-items: center;">
    <div class="step step-i">📥 Collect</div>
    <span class="text-slate-500 text-2xl">→</span>
    <div class="step step-i">⚙️ Transform</div>
    <span class="text-slate-500 text-2xl">→</span>
    <div class="step step-i">🗄️ Store</div>
    <span class="text-slate-500 text-2xl">→</span>
    <div class="step step-i">📈 Report</div>
    <div v-click="1" class="text-center text-slate-500 text-xl">↓</div>
    <div></div>
    <div v-click="2" class="text-center text-slate-500 text-xl">↓</div>
    <div></div>
    <div v-click="3" class="text-center text-slate-500 text-xl">↓</div>
    <div></div>
    <div v-click="4" class="text-center text-slate-500 text-xl">↓</div>
    <div v-click="1" class="step step-o">🔍 Search</div>
    <div></div>
    <div v-click="2" class="step step-o">💻 AI Coding</div>
    <div></div>
    <div v-click="3" class="step step-o">🤖 RAG</div>
    <div></div>
    <div v-click="4" class="step step-o">💬 Chat Agents</div>
  </div>
  <div v-click="5" class="card card-o text-center">
    <p class="text-orange-200">An AI agent can now query your data in plain English. No SQL. No analyst in the loop.</p>
  </div>
</div>

<!--
Klikk gjennom én kobling av gangen. Poenget: hvert steg i pipelinen har nå en AI-motpart.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-i">The Question</span>
  <div class="hero">
    If AI can write the code,<br>run the queries,<br>build the pipelines…
  </div>
  <div v-click class="hero text-indigo-400">
    …what is left for<br>the data engineer?
  </div>
</div>

<!--
Ikke svar. La det henge.
-->

---
layout: statement
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <p class="text-slate-400 text-2xl">Let me explain with an analogy.</p>
  <div class="text-9xl">🥪</div>
</div>

<!--
Litt lettere tone. Analogien fungerer for alle i rommet.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>Think of it like making a sandwich</h2>
  <div class="flex justify-center gap-6">
    <div class="card flex flex-col items-center gap-3 flex-1 text-center">
      <div class="text-5xl">🧀</div>
      <div class="font-bold text-slate-200">Ingredients</div>
      <div class="text-sm text-slate-400">Your data</div>
    </div>
    <div v-click class="card flex flex-col items-center gap-3 flex-1 text-center">
      <div class="text-5xl">👨‍🍳</div>
      <div class="font-bold text-slate-200">The Chef</div>
      <div class="text-sm text-slate-400">The AI model</div>
    </div>
    <div v-click class="card flex flex-col items-center gap-3 flex-1 text-center">
      <div class="text-5xl">🙋</div>
      <div class="font-bold text-slate-200">The Customer</div>
      <div class="text-sm text-slate-400">The business user</div>
    </div>
  </div>
  <div v-click class="card text-center">
    <p class="text-slate-300">The customer wants a <strong class="text-slate-100">great sandwich</strong>. The chef's job is to make one. But even the best chef can't fix bad <span class="text-orange-400 font-semibold">ingredients</span>.</p>
  </div>
</div>

<!--
Bygg opp med klikk. Ikke rush forbi ingredienser — det er hele poenget.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>The Chef Problem is Solved</h2>
  <div class="flex items-center gap-6">
    <div class="card card-g flex-1 text-center" style="padding: 2rem">
      <div class="text-5xl mb-3">👨‍🍳</div>
      <div class="font-bold text-green-200 text-xl">The AI models</div>
      <div class="text-sm text-green-300 mt-1">GPT-4o · Claude · Gemini</div>
    </div>
    <div class="flex flex-col gap-3 flex-1">
      <div v-click class="card flex items-center gap-3">
        <span class="text-green-400 text-xl">✓</span>
        <span class="text-slate-200">Make sense of complex questions</span>
      </div>
      <div v-click class="card flex items-center gap-3">
        <span class="text-green-400 text-xl">✓</span>
        <span class="text-slate-200">Write and run code</span>
      </div>
      <div v-click class="card flex items-center gap-3">
        <span class="text-green-400 text-xl">✓</span>
        <span class="text-slate-200">Query your database in plain language</span>
      </div>
      <div v-click class="card flex items-center gap-3">
        <span class="text-green-400 text-xl">✓</span>
        <span class="text-slate-200">Explain results to non-technical users</span>
      </div>
    </div>
  </div>
</div>

<!--
Dette er ikke fremtidsteknologi. Det er her nå. Kokkeproblemet er løst.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-r">So where does it break down?</span>
  <div class="flex items-center justify-center gap-6">
    <div class="card card-r text-center" style="padding: 1.5rem">
      <div class="text-5xl">🗑️</div>
      <div class="font-bold text-red-200 mt-3">Bad ingredients</div>
    </div>
    <span class="text-slate-500 text-3xl">+</span>
    <div class="card card-g text-center" style="padding: 1.5rem">
      <div class="text-5xl">👨‍🍳</div>
      <div class="font-bold text-green-200 mt-3">Great chef</div>
    </div>
    <span class="text-slate-500 text-3xl">=</span>
    <div v-click class="card card-r text-center" style="padding: 1.5rem">
      <div class="text-5xl">🤢</div>
      <div class="font-bold text-red-200 mt-3">Bad sandwich</div>
    </div>
  </div>
  <div v-click class="card max-w-lg">
    <p class="text-slate-200 text-lg font-semibold">A great chef can't fix rotten ingredients.</p>
  </div>
</div>

<!--
La ligningen bygge seg opp. Vanligvis latter på den dårlige sandwichen. La kortkortet lande.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-r">The Real Problem</span>
  <div class="hero">
    The bottleneck is not<br>the <span class="text-green-400">chef</span>.<br>It's the <span class="text-red-400">ingredients</span>.
  </div>
  <p class="text-slate-400 text-lg">Here's what that looks like in practice.</p>
</div>

<!--
Gjenta tesen tydelig. Gå rett videre til det konkrete eksempelet.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>The Core Insight</h2>
  <div class="card card-i text-center" style="padding: 2rem">
    <div class="text-4xl mb-4">🔍</div>
    <p class="text-2xl font-bold text-slate-100 leading-snug">
      AI doesn't <em>create</em> data quality problems.
    </p>
    <p class="text-indigo-200 text-lg mt-3">
      It just surfaces the ones that were already there.
    </p>
  </div>
  <div v-click class="card text-center">
    <p class="text-slate-300">That BI report you've trusted for three years? Probably wrong too. The AI will say so. Out loud. In a meeting.</p>
  </div>
</div>

<!--
Pause etter klikket. Kjenningslatteren her er god — folk har vært i det møtet.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>The Agent Reads. It Doesn't Remember.</h2>
  <p class="text-slate-300 text-lg">Agents navigate your schema the same way you'd search the web — by reading column names, table descriptions, and whatever docs exist. That's all they have.</p>
  <p class="text-slate-400">No senior engineer to ask. No context. Just what's written down.</p>
  <div v-click class="flex gap-4">
    <div class="card card-r flex-1">
      <p class="text-xs text-slate-400 mb-3">Query: "show me churn rate"</p>
      <code class="text-red-300">usr_chn_flg_30d</code>
      <p class="text-sm text-slate-400 mt-3">Could mean anything. The agent moves on.</p>
    </div>
    <div class="card card-g flex-1">
      <p class="text-xs text-slate-400 mb-3">Query: "show me churn rate"</p>
      <code class="text-green-300">is_churned_within_30_days</code>
      <p class="text-sm text-slate-400 mt-3">Unambiguous. Found immediately.</p>
    </div>
  </div>
</div>

<!--
Spør rommet: hvor mange skjemaer i din organisasjon ser ut som den røde kolonnen?
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>It's Not the Name. It's the Gap.</h2>
  <div class="card card-o">
    <p class="text-orange-200">The column name is just the symptom. Most schemas were built for machines and memorised by people — not written for something that reads like a human.</p>
  </div>
  <div v-click class="card card-i text-center">
    <p class="text-indigo-200">The schemas that worked because everyone knew the abbreviations? They don't work anymore. Someone needs to write it down.</p>
  </div>
</div>

<!--
Dette handler ikke egentlig om kolonnenavn. Det handler om all den implisitte kunnskapen som AI ikke har tilgang til.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-r">The Consequence</span>
  <div class="hero text-red-400">
    Garbage in.<br>Garbage out.
  </div>
  <div v-click class="card max-w-xl">
    <p class="text-slate-200 text-lg">A confident wrong answer is worse than no answer. And AI is always confident.</p>
  </div>
</div>

<!--
Ikke "AI fungerer ikke" — AI gir feil tall foran CFO-en din med full overbevisning. Det er et tillitsproblem.
-->

---
layout: statement
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <p class="text-slate-400 text-2xl">So who fixes this?</p>
  <div class="text-9xl">🔧</div>
</div>

<!--
La spørsmålet henge. Publikum bør allerede tenke "data engineer".
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>The Data Engineer's Evolving Role</h2>
  <div class="flex flex-col gap-3">
    <div class="card flex items-center gap-4">
      <div class="text-3xl">💻</div>
      <div>
        <div class="font-bold text-slate-200">Coding</div>
        <div class="text-sm text-slate-400">Pipelines, transformations, infrastructure — <span class="text-green-400">AI is taking over the grunt work</span></div>
      </div>
    </div>
    <div v-click class="card card-i flex items-center gap-4">
      <div class="text-3xl">🗂️</div>
      <div>
        <div class="font-bold text-indigo-200">Data Modeling & Semantic Design</div>
        <div class="text-sm text-indigo-300">Naming things well, semantic layers, data contracts — <span class="font-semibold">AI cannot do this</span></div>
      </div>
    </div>
    <div v-click class="card card-o flex items-center gap-4">
      <div class="text-3xl">🤝</div>
      <div>
        <div class="font-bold text-orange-200">Stakeholder Alignment</div>
        <div class="text-sm text-orange-300">Getting three departments to agree on what "revenue" means — <span class="font-semibold">AI cannot do this either</span></div>
      </div>
    </div>
  </div>
</div>

<!--
Start med det grå kortet — det som automatiseres. Klikk deretter gjennom de to tingene AI ikke kan gjøre. Understreket "AI cannot do this" begge ganger.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>The Real Work: Reconciling Definitions</h2>
  <p class="text-slate-400 text-sm">Take any metric that matters. Ask three departments what it means.</p>
  <div class="grid grid-cols-3 gap-3">
    <div class="card">
      <div class="label-sm label-i mb-3">Sales</div>
      <p class="text-sm text-slate-300">"Revenue = invoiced amount, this quarter"</p>
    </div>
    <div class="card">
      <div class="label-sm label-o mb-3">Finance</div>
      <p class="text-sm text-slate-300">"Revenue = recognised, net of refunds"</p>
    </div>
    <div class="card">
      <div class="label-sm label-g mb-3">Product</div>
      <p class="text-sm text-slate-300">"Revenue = subscription MRR, annualised"</p>
    </div>
  </div>
  <div v-click class="card card-i text-center">
    <p class="font-bold text-indigo-200 mb-1">The data engineer's job:</p>
    <p class="text-slate-300">Sit in that room, listen to all three teams, and come out with one definition everyone signs off on — so there's one version of revenue for everything, including the AI.</p>
  </div>
</div>

<!--
Spør rommet: hvem har vært i det møtet der to rapporter viste forskjellig omsetning? Ingen AI deltar i det møtet.
-->

---
layout: two-cols-header
---

## The Payoff: When Data is Done Right

::left::

<div class="card card-r mt-4">
  <div class="label-sm label-r mb-4">Before</div>
  <div class="flex flex-col gap-2">
    <div class="card text-sm flex items-center gap-2"><span class="text-red-400">✗</span> <code>rev_q_invoiced_amt</code></div>
    <div class="card text-sm flex items-center gap-2"><span class="text-red-400">✗</span> <code>fin_net_rev_recog</code></div>
    <div class="card text-sm flex items-center gap-2"><span class="text-red-400">✗</span> <code>prd_mrr_annualised</code></div>
    <p class="text-xs text-slate-400 mt-2">Three tables. Three teams. Three different answers.</p>
  </div>
</div>

::right::

<div class="card card-g mt-4">
  <div class="label-sm label-g mb-4">After</div>
  <div class="flex flex-col gap-2">
    <div class="card text-sm flex items-center gap-2"><span class="text-green-400">✓</span> <code>total_recognised_revenue</code></div>
    <div class="card text-sm flex items-center gap-2"><span class="text-green-400">✓</span> <code>fct_revenue</code></div>
    <div class="card text-sm flex items-center gap-2"><span class="text-green-400">✓</span> Documented definition</div>
    <p class="text-xs text-slate-400 mt-2">One table. AI gets it right.</p>
  </div>
</div>

<!--
Gå gjennom begge sider. Kryptisk, tvetydig, tribal — vs. lesbart, udiskutabelt, dokumentert. Transformasjonen er arbeidet.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>What Still Needs Humans</h2>
  <p class="text-slate-400">Clean data isn't enough on its own. Three things still need a human attached.</p>
  <div class="flex gap-4">
    <div class="card flex-1 text-center">
      <div class="text-4xl mb-3">🏛️</div>
      <div class="font-bold text-slate-200">Governance</div>
      <div class="text-sm text-slate-400 mt-2">Who owns what. Who can access what. Who is accountable.</div>
    </div>
    <div class="card flex-1 text-center">
      <div class="text-4xl mb-3">✅</div>
      <div class="font-bold text-slate-200">Quality Assurance</div>
      <div class="text-sm text-slate-400 mt-2">Catching what's broken before the business does.</div>
    </div>
    <div class="card flex-1 text-center">
      <div class="text-4xl mb-3">⚖️</div>
      <div class="font-bold text-slate-200">Compliance</div>
      <div class="text-sm text-slate-400 mt-2">GDPR, audit trails, data lineage. When something goes wrong, a regulator wants a name.</div>
    </div>
  </div>
</div>

<!--
Dette er ansvarlighetsutfordringer, ikke tekniske. GDPR-bøter går til mennesker, ikke modeller.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>How the Job is Shifting</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="card">
      <p class="font-semibold text-slate-400 mb-3 text-sm">AI takes over</p>
      <ul class="space-y-2 text-sm">
        <li class="flex items-center gap-2 text-slate-400"><span>→</span> Writing boilerplate pipelines</li>
        <li class="flex items-center gap-2 text-slate-400"><span>→</span> Translating queries to SQL</li>
        <li class="flex items-center gap-2 text-slate-400"><span>→</span> Generating transformation code</li>
        <li class="flex items-center gap-2 text-slate-400"><span>→</span> Basic documentation</li>
      </ul>
    </div>
    <div class="card card-i">
      <p class="font-semibold text-indigo-300 mb-3 text-sm">Data engineers own</p>
      <ul class="space-y-2 text-sm">
        <li class="flex items-center gap-2 text-indigo-200"><span class="text-indigo-400">→</span> Semantic modeling</li>
        <li class="flex items-center gap-2 text-indigo-200"><span class="text-indigo-400">→</span> Business definition alignment</li>
        <li class="flex items-center gap-2 text-indigo-200"><span class="text-indigo-400">→</span> Data architecture decisions</li>
        <li class="flex items-center gap-2 text-indigo-200"><span class="text-indigo-400">→</span> Trust and governance</li>
      </ul>
    </div>
  </div>
  <div v-click class="card text-center">
    <p class="text-slate-200">Less time writing boilerplate. More time in rooms where decisions get made.</p>
  </div>
</div>

<!--
La kontrasten lande. Jobben forsvinner ikke — den flyttes oppstrøms.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-o">The Paradox</span>
  <div class="hero">
    Better AI means<br><span class="text-orange-400">higher demand</span><br>for good data.
  </div>
  <div v-click class="card max-w-xl">
    <p class="text-slate-200">Better AI is a bigger amplifier. Good data gets amplified into good answers. Bad data gets amplified into confidently wrong ones.</p>
  </div>
</div>

<!--
Kontraintuitivt, men sant. Organisasjoner med rene data trekker lenger fremover — ikke bakover.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-i">Revisiting the Question</span>
  <div class="hero">
    How does a data engineer<br>survive in 2026?
  </div>
</div>

<!--
Full sirkel. Publikum har alle brikkene nå. La dem tenke.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-g">The Answer</span>
  <div class="hero text-green-400">
    By becoming<br>indispensable.
  </div>
  <div v-click class="card card-g text-left max-w-xl">
    <p class="text-green-100 text-lg leading-relaxed">
      AI is only as trustworthy as the data underneath it. Someone has to make that data trustworthy. <strong>That's the data engineer.</strong>
    </p>
  </div>
</div>

<!--
Les kortet sakte. Det er den ene setningen folk skal ta med seg hjem.
-->

---
layout: center
---

<div class="flex flex-col gap-5 max-w-3xl w-full mx-auto">
  <h2>Takeaway</h2>
  <div class="card card-i" style="padding: 2rem">
    <ul class="space-y-4 text-slate-200 text-lg">
      <li v-click class="flex items-start gap-3"><span class="text-indigo-400 font-bold text-xl mt-0.5">1</span> AI exposes data quality problems that were always there</li>
      <li v-click class="flex items-start gap-3"><span class="text-indigo-400 font-bold text-xl mt-0.5">2</span> The job shifts from writing code to deciding what data means</li>
      <li v-click class="flex items-start gap-3"><span class="text-indigo-400 font-bold text-xl mt-0.5">3</span> Better AI increases the value — and demand — for clean data</li>
      <li v-click class="flex items-start gap-3"><span class="text-indigo-400 font-bold text-xl mt-0.5">4</span> Data engineers don't disappear. They become the foundation everything else is built on.</li>
    </ul>
  </div>
</div>

<!--
Gå gjennom hvert punkt. Punkt 4 er landingen — ikke rush det.
-->

---
layout: end
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <h2 class="text-6xl font-extrabold">Thank You</h2>
  <p class="text-slate-400 text-xl">Questions?</p>
  <div class="flex items-center gap-8 mt-4">
    <a href="https://github.com/vegsja" target="_blank" class="flex items-center gap-2 text-slate-300 hover:text-white no-underline">
      <carbon-logo-github class="text-2xl" />
      <span>VegSja</span>
    </a>
    <a href="https://www.linkedin.com/in/vegard-sj%C3%A5vik-215463218" target="_blank" class="flex items-center gap-2 text-slate-300 hover:text-white no-underline">
      <carbon-logo-linkedin class="text-2xl" />
      <span>Vegard Sjåvik</span>
    </a>
  </div>
</div>

<!--
Hold energien oppe. De beste samtalene skjer her.
-->
