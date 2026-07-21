---
theme: default
colorSchema: dark
title: AI is Easy, Data is Hard
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

<div class="flex flex-col items-center gap-6 w-full mx-auto text-center" style="max-width:60rem">
  <span class="label label-i">JavaZone 2026</span>
  <h1 class="text-8xl font-extrabold leading-none tracking-tight mb-2">
    AI is <span class="text-indigo-400">easy</span>.<br>
    Data is <span class="text-orange-400">hard</span>.
  </h1>
  <p class="text-slate-300 text-3xl">Why data engineers matter more than ever</p>
  <p class="text-slate-500 text-lg mt-8">Vegard Sjåvik · Data Engineer at Bekk</p>
</div>

<!--
Set the tone: this is not anti-AI. It's about what the actually hard part is.
-->

---

<div class="slide-body">
  <div class="max-w-5xl">
    <p class="text-orange-300 text-5xl font-bold leading-tight">"The model is rarely the bottleneck."</p>
    <p class="text-slate-400 text-xl mt-8 max-w-3xl">— what I've learned across banking, humanitarian aid, and studying AI at NTNU.</p>
    <div class="flex items-center gap-4 mt-12">
      <carbon-user-avatar class="text-5xl text-indigo-300 flex-shrink-0" />
      <div>
        <div class="text-slate-100 text-xl font-semibold">Vegard Sjåvik</div>
        <div class="text-slate-400">Data Engineer at Bekk</div>
      </div>
    </div>
  </div>
</div>

<!--
Short bio. Land the thesis line hard — that is what this whole talk defends.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <span class="label label-o">The question every business is asking</span>
  <div class="hero">
    "What can <span class="text-orange-400">AI</span><br>do for us?"
  </div>
</div>

<!--
This is the question everyone is asking right now. Let it hang for a beat.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 1 · The Promise</div>

## The upside is real

<div class="slide-body">
  <div class="grid grid-cols-3 gap-10 mt-4">
    <div class="text-center">
      <carbon-user-multiple class="text-8xl mb-6 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-3xl">Accessible</div>
      <div class="text-slate-400 text-lg mt-3">Data opens up to the whole organisation</div>
    </div>
    <div v-click class="text-center">
      <carbon-flash class="text-8xl mb-6 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-3xl">Fast</div>
      <div class="text-slate-400 text-lg mt-3">Insights in seconds, not sprint cycles</div>
    </div>
    <div v-click class="text-center">
      <carbon-chat class="text-8xl mb-6 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-3xl">Self-serve</div>
      <div class="text-slate-400 text-lg mt-3">Your CFO can just ask</div>
    </div>
  </div>
</div>

<!--
Be honest that this is real value. Don't dismiss the concept.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 1 · The Promise</div>

## And every vendor is selling it to your CEO

<div class="slide-body">
  <p class="text-slate-300 text-2xl">Chat directly with your data warehouse. Every major platform ships one now.</p>

  <div class="grid grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
    <div class="card card-i text-center">
      <carbon-snowflake class="text-6xl mb-3 mx-auto text-indigo-200" />
      <div class="font-bold text-indigo-200 text-2xl">Snowflake</div>
      <div class="text-slate-400 text-base mt-2">Cortex Analyst</div>
    </div>
    <div class="card card-o text-center">
      <carbon-cube class="text-6xl mb-3 mx-auto text-orange-200" />
      <div class="font-bold text-orange-200 text-2xl">Databricks</div>
      <div class="text-slate-400 text-base mt-2">AI/BI Genie</div>
    </div>
    <div class="card card-g text-center">
      <carbon-logo-google class="text-6xl mb-3 mx-auto text-green-200" />
      <div class="font-bold text-green-200 text-2xl">BigQuery</div>
      <div class="text-slate-400 text-base mt-2">Gemini in BigQuery</div>
    </div>
  </div>
</div>

<!--
Real products. All the big players have one. This is not hypothetical anymore.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## Think of it like making a sandwich

<div class="slide-body">
  <div class="flex justify-center gap-16">
    <div class="flex flex-col items-center gap-3 text-center">
      <carbon-data-base class="text-8xl text-indigo-300" />
      <div class="font-bold text-slate-100 text-2xl">Ingredients</div>
      <div class="text-slate-400 text-lg">Your data</div>
    </div>
    <div class="flex flex-col items-center gap-3 text-center">
      <carbon-bot class="text-8xl text-green-300" />
      <div class="font-bold text-slate-100 text-2xl">The Chef</div>
      <div class="text-slate-400 text-lg">The AI model</div>
    </div>
    <div class="flex flex-col items-center gap-3 text-center">
      <carbon-user class="text-8xl text-orange-300" />
      <div class="font-bold text-slate-100 text-2xl">The Customer</div>
      <div class="text-slate-400 text-lg">The business user</div>
    </div>
  </div>

  <p v-click class="text-slate-200 text-center text-2xl mt-16 max-w-3xl mx-auto">
    Even the best chef can't fix <span class="text-orange-400 font-semibold">rotten ingredients</span>.
  </p>
</div>

<!--
Compressed sandwich metaphor. One slide, one payoff.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## The chef is good enough

<div class="slide-body">
  <div class="flex items-center gap-12">
    <div class="text-center flex-shrink-0">
      <carbon-bot class="text-9xl mb-4 mx-auto text-green-300" />
      <div class="font-bold text-green-300 text-2xl">The AI models</div>
      <div class="text-slate-400 mt-2">GPT-4o · Claude · Gemini</div>
    </div>
    <ul class="flex flex-col gap-4 text-slate-200 text-2xl flex-1">
      <li v-click class="flex items-center gap-4"><carbon-checkmark class="text-green-400 text-3xl flex-shrink-0" /> Turn "show me last quarter's churn" into working SQL</li>
      <li v-click class="flex items-center gap-4"><carbon-checkmark class="text-green-400 text-3xl flex-shrink-0" /> Explain why a number moved this week</li>
      <li v-click class="flex items-center gap-4"><carbon-checkmark class="text-green-400 text-3xl flex-shrink-0" /> Write the follow-up query you didn't think to ask</li>
      <li v-click class="flex items-center gap-4"><carbon-checkmark class="text-green-400 text-3xl flex-shrink-0" /> Turn a table of numbers into a paragraph a CFO understands</li>
    </ul>
  </div>

  <p class="text-slate-300 text-center text-xl mt-10">
    The hard engineering happened at OpenAI, Anthropic and Google. You get to consume it.
  </p>
</div>

<!--
The chef is not perfect, but good enough. The bottleneck has moved somewhere else.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-8 max-w-4xl w-full mx-auto text-center">
  <span class="label label-r">So where does it break down?</span>
  <div class="flex items-center justify-center gap-8">
    <div class="text-center">
      <carbon-warning-alt class="text-8xl mx-auto text-red-300" />
      <div class="font-bold text-red-300 text-2xl mt-3">Bad ingredients</div>
    </div>
    <span class="text-slate-500 text-6xl">+</span>
    <div class="text-center">
      <carbon-bot class="text-8xl mx-auto text-green-300" />
      <div class="font-bold text-green-300 text-2xl mt-3">Great chef</div>
    </div>
    <span class="text-slate-500 text-6xl">=</span>
    <div v-click class="text-center">
      <carbon-close-outline class="text-8xl mx-auto text-red-300" />
      <div class="font-bold text-red-300 text-2xl mt-3">Bad sandwich</div>
    </div>
  </div>
</div>

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## The core insight

<div class="slide-body">
  <div class="text-center max-w-5xl mx-auto">
    <carbon-search class="text-7xl mb-8 mx-auto text-indigo-300" />
    <p class="text-4xl font-bold text-slate-100 leading-snug">
      AI doesn't <em>create</em> data quality problems.
    </p>
    <p class="text-indigo-300 text-3xl mt-8 font-semibold leading-snug">
      It shows you the ones that were already there.
    </p>
  </div>
</div>

<!--
The payoff. Let it land before moving into the concrete failure modes.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## So why do smart companies skip this?

<div class="slide-body">
  <p class="text-slate-400 text-xl">Three reasons — none of them stupid.</p>

  <div class="flex flex-col gap-6 mt-8 max-w-4xl mx-auto w-full">
    <div class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">1</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">AI is sexy. Data cleanup isn't.</div>
        <div class="text-slate-400 mt-1">Nobody gets promoted for renaming columns.</div>
      </div>
    </div>
    <div v-click class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">2</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Bad data fails quietly.</div>
        <div class="text-slate-400 mt-1">Definitions don't crash — they produce plausible-looking wrong numbers.</div>
      </div>
    </div>
    <div v-click class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">3</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Every vendor sells the sandwich.</div>
        <div class="text-slate-400 mt-1">Nobody is selling you better ingredients.</div>
      </div>
    </div>
  </div>
</div>

<!--
Reframe from "you're doing it wrong" to "of course you are — here's why the incentives are broken."
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## The same problem blocks dashboards too

<div class="slide-body">
  <p class="text-slate-300">Before you get to AI, ask: does your <span class="text-indigo-400 font-semibold">dashboard</span> even show numbers people believe?</p>

  <div class="flex gap-10 mt-8 items-start">
    <div class="flex-1">
      <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Column in the warehouse</p>
      <code class="text-red-300 text-xl">usr_chn_flg_30d</code>
      <p class="text-slate-400 mt-3">Nobody outside the original team knows what this means.</p>
    </div>
    <div class="flex-1">
      <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Same column, renamed</p>
      <code class="text-green-300 text-xl">is_churned_within_30_days</code>
      <p class="text-slate-400 mt-3">Any analyst — or AI — can pick it up.</p>
    </div>
  </div>

  <p class="text-slate-300 mt-6">The AI failure mode and the dashboard failure mode are the same failure mode.</p>
</div>

<!--
The same root problem stops both the dashboard and the AI agent.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## It's not the name. It's the gap.

<div class="slide-body">
  <p class="text-slate-200 text-xl leading-relaxed max-w-2xl mx-auto">
    The column name is just the symptom. Most schemas were built for machines and memorised by the team who wrote them. <span class="text-orange-300">Nobody wrote them for a stranger.</span>
  </p>

  <p v-click class="text-slate-200 text-xl leading-relaxed mt-8 max-w-2xl mx-auto">
    Every new dashboard user is a stranger. Every AI agent is a stranger. <span class="text-indigo-300 font-semibold">Someone needs to write it down.</span>
  </p>
</div>

<!--
It's about implicit knowledge that nobody wrote down.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## Every company has this meeting

<div class="slide-body">
  <p class="text-slate-400">Take any metric that matters. Ask three departments what it means.</p>

  <div class="grid grid-cols-3 gap-8 mt-8">
    <div>
      <div class="label-sm label-i mb-3">Sales</div>
      <p class="text-slate-200">"Revenue = invoiced amount, this quarter"</p>
    </div>
    <div>
      <div class="label-sm label-o mb-3">Finance</div>
      <p class="text-slate-200">"Revenue = recognised, net of refunds"</p>
    </div>
    <div>
      <div class="label-sm label-g mb-3">Product</div>
      <p class="text-slate-200">"Revenue = subscription MRR, annualised"</p>
    </div>
  </div>

  <div v-click class="mt-10 max-w-2xl mx-auto text-center">
    <p class="font-bold text-indigo-300 text-lg mb-1">Until this is resolved:</p>
    <p class="text-slate-300">No dashboard is trustworthy. No AI answer is trustworthy. Every meeting starts with "whose number is right?"</p>
  </div>
</div>

<!--
Ask the room: who has been in the meeting where two reports showed different revenue?
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## Your data readiness scorecard

<div class="slide-body">
  <div class="flex flex-col gap-6 mt-10 max-w-4xl mx-auto w-full">
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-4xl leading-none">1</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">A stranger can read the schema</div>
        <div class="text-slate-400 mt-1">Column names + descriptions. <span class="text-slate-500 italic">— the <code>usr_chn_flg_30d</code> problem</span></div>
      </div>
    </div>
    <div class="check-item just-unlocked">
      <span class="text-indigo-400 font-bold text-4xl leading-none">2</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">One definition per metric</div>
        <div class="text-slate-400 mt-1">Written, findable, agreed. <span class="text-slate-500 italic">— the revenue problem</span></div>
      </div>
    </div>
    <div class="check-item locked">
      <span class="text-indigo-400 font-bold text-4xl leading-none">3</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">The right people see the right data</div>
        <div class="text-slate-400 mt-1">Access, lineage, and regulatory basis are clear.</div>
      </div>
    </div>
  </div>
</div>

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## What still needs humans

<div class="slide-body">
  <p class="text-slate-400 text-xl">Even with clean data and good dashboards, three things stay human.</p>

  <div class="grid grid-cols-3 gap-10 mt-16">
    <div class="text-center">
      <carbon-policy class="text-8xl mb-6 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-2xl">Governance</div>
      <div class="text-slate-400 text-lg mt-3">Who owns what. Who can access what. Who is accountable.</div>
    </div>
    <div class="text-center">
      <carbon-checkmark-outline class="text-8xl mb-6 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-2xl">Quality Assurance</div>
      <div class="text-slate-400 text-lg mt-3">Catching what's broken before the business does.</div>
    </div>
    <div class="text-center">
      <carbon-scales class="text-8xl mb-6 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-2xl">Compliance</div>
      <div class="text-slate-400 text-lg mt-3">GDPR, audit trails, lineage. When something goes wrong, a regulator wants a name.</div>
    </div>
  </div>

  <p class="text-slate-300 text-center text-xl mt-16 max-w-3xl mx-auto">
    AI moves the bottleneck. It doesn't remove the humans who own it.
  </p>
</div>

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## Your data readiness scorecard

<div class="slide-body">
  <div class="flex flex-col gap-6 mt-10 max-w-4xl mx-auto w-full">
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-4xl leading-none">1</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">A stranger can read the schema</div>
        <div class="text-slate-400 mt-1">Column names + descriptions. <span class="text-slate-500 italic">— the <code>usr_chn_flg_30d</code> problem</span></div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-4xl leading-none">2</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">One definition per metric</div>
        <div class="text-slate-400 mt-1">Written, findable, agreed. <span class="text-slate-500 italic">— the revenue problem</span></div>
      </div>
    </div>
    <div class="check-item just-unlocked">
      <span class="text-indigo-400 font-bold text-4xl leading-none">3</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">The right people see the right data</div>
        <div class="text-slate-400 mt-1">Access, lineage, and regulatory basis are clear.</div>
      </div>
    </div>
  </div>
</div>

<!--
The final. Take the photo moment. Everything we diagnosed is now on one picture.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6 max-w-4xl w-full mx-auto text-center px-8 py-8">
  <span class="label label-r">Consequences of skipping step 1 and 2</span>
  <p class="text-slate-100 text-3xl font-bold leading-snug mt-2">
    A confident wrong answer in front of your CFO<br>
    is worse than no answer.
  </p>
  <p v-click class="text-orange-300 text-2xl mt-2">And AI is always confident.</p>
</div>

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## What to do on Monday

<div class="slide-body">
  <p class="text-slate-400 text-xl">Three concrete things. None of them require an AI budget.</p>

  <div class="flex flex-col gap-6 mt-8 max-w-4xl mx-auto w-full">
    <div class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">1</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Run the stranger test</div>
        <div class="text-slate-400 mt-1">Pick your most-used table. Hand the schema to someone who has never seen it. Ask them to explain three columns.</div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">2</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Reconcile one metric</div>
        <div class="text-slate-400 mt-1">Pick the KPI in your last board deck. Ask three teams to define it in one sentence. Write down the winner.</div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">3</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Audit one dashboard</div>
        <div class="text-slate-400 mt-1">Trace every number back to its source. If you can't, neither can the AI you're about to plug in.</div>
      </div>
    </div>
  </div>
</div>

<!--
Concrete Monday-morning actions. None require budget or headcount. This is what turns the talk into behaviour change.
-->

---
layout: end
class: text-center
---

<div class="flex flex-col items-center gap-5 max-w-2xl w-full mx-auto text-center">
  <h1 class="text-6xl font-extrabold">Thank You</h1>
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
