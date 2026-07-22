---
theme: default
colorSchema: dark
title: AI is Easy, Trustworthy Data is Hard
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

<div class="flex flex-col items-center gap-6 w-full mx-auto text-center" style="max-width:64rem">
  <span class="label label-i">JavaZone 2026</span>
  <h1 class="text-8xl font-extrabold leading-none tracking-tight mb-2">
    AI is <span class="text-indigo-400">easy</span>.<br>
    <span class="text-orange-400">Trustworthy</span> data is <span class="text-orange-400">hard</span>.
  </h1>
  <p class="text-slate-300 text-3xl">Why data engineers matter more than ever</p>
  <p class="text-slate-500 text-lg mt-8">Vegard Sjåvik · Data Engineer at Bekk</p>
</div>

<!--
Set the tone: this is not anti-AI. The operative word is TRUSTWORTHY. Say it out loud.
-->

---

<div class="slide-body">
  <div class="max-w-5xl">
    <p class="text-orange-300 text-5xl font-bold" style="line-height:1.25">"High-confidence visibility beats low-confidence intelligence."</p>
    <p class="text-slate-400 text-xl mt-8 max-w-3xl">What I've learned across banking, humanitarian aid, and studying AI at NTNU.</p>
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
This is the thesis line the whole talk defends. Repeat it verbatim at the end.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6 w-full mx-auto text-center" style="max-width:60rem">
  <span class="label label-o">The question every business is asking</span>
  <div class="text-7xl font-extrabold tracking-tight" style="line-height:1.15">
    "What can <span class="text-orange-400">AI</span><br>do for us?"
  </div>
</div>

<!--
This is the question everyone is asking. Let it hang. Then in a few slides I'll offer a better one.
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

  <p v-click class="text-slate-300 text-center text-lg mt-12 max-w-3xl mx-auto italic">
    A PM pulls a cohort query in 30 seconds that used to be a two-week ticket. That is real.
  </p>
</div>

<!--
Be honest: this is real value. Land one concrete example so it doesn't feel like performative balance.
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
Real products. All the big players. This is not hypothetical anymore.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6 w-full mx-auto text-center" style="max-width:60rem">
  <span class="label label-o">But here's a better question</span>
  <div class="text-7xl font-extrabold tracking-tight" style="line-height:1.15">
    "Which <span class="text-indigo-400">KPI</span><br>can you <span class="text-indigo-400">trust</span> today?"
  </div>
  <p v-click class="text-slate-400 text-xl mt-4 max-w-2xl">
    If you can't answer this one, the first question doesn't matter yet.
  </p>
</div>

<!--
The pivot. Mirror to slide 3. This is the hinge of the whole talk. Pause after it.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## A story from a bank

<div class="slide-body">
  <div class="max-w-3xl mx-auto">
    <p class="text-slate-200 text-2xl leading-relaxed">
      Two teams. Same customer. Different <span class="text-orange-400 font-semibold">churn number</span>.
    </p>
    <p v-click class="text-slate-300 text-xl mt-8 leading-relaxed">
      Weeks of debugging. Models retrained. Dashboards rebuilt.
    </p>
    <p v-click class="text-slate-100 text-2xl mt-8 leading-relaxed">
      Root cause: <span class="text-indigo-300">one column</span> nobody had written down what it meant.
    </p>
    <p v-click class="text-slate-400 text-lg mt-10 italic">
      No AI would have saved us. AI would have picked a definition and answered with confidence.
    </p>
  </div>
</div>

<!--
Spend the credibility from the bio. 30 seconds max. The point: this is not a hypothetical failure mode.
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

  <p v-click class="text-slate-200 text-center text-2xl mt-12 max-w-3xl mx-auto">
    Even the best chef can't fix <span class="text-orange-400 font-semibold">rotten ingredients</span>.
    <span class="block text-slate-400 text-lg mt-4">The hard engineering happened at OpenAI, Anthropic, Google. The chef is good enough.</span>
  </p>
</div>

<!--
Sandwich + "chef is good enough" collapsed to one slide. One idea, one slide.
-->

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
The payoff line. Let it land before moving into the concrete failure modes.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

## So why do smart companies skip this?

<div class="slide-body">
  <p class="text-slate-400 text-xl">Three reasons. None of them stupid.</p>

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
        <div class="text-slate-400 mt-1">Definitions don't crash. They produce plausible-looking wrong numbers.</div>
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
  <p class="text-slate-300">Before AI, ask: does your <span class="text-indigo-400 font-semibold">dashboard</span> even show numbers people believe?</p>

  <div class="flex gap-10 mt-8 items-start">
    <div class="flex-1">
      <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Column in the warehouse</p>
      <code class="text-red-300 text-xl">usr_chn_flg_30d</code>
      <p class="text-slate-400 mt-3">Nobody outside the original team knows what this means.</p>
    </div>
    <div class="flex-1">
      <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Same column, renamed</p>
      <code class="text-green-300 text-xl">is_churned_within_30_days</code>
      <p class="text-slate-400 mt-3">Any analyst, or AI, can pick it up.</p>
    </div>
  </div>

  <p v-click class="text-slate-200 text-lg mt-10 max-w-3xl">
    Schemas were built for machines and memorised by the team who wrote them. <span class="text-orange-300">Every new user is a stranger. Every AI agent is a stranger.</span> Someone needs to write it down.
  </p>
</div>

<!--
Merged usr_chn_flg + "it's the gap" — one point, one slide.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 2 · The Diagnosis</div>

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
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6 max-w-4xl w-full mx-auto text-center px-8 py-8">
  <span class="label label-r">The cost of skipping this</span>
  <p class="text-slate-100 text-3xl font-bold mt-2" style="line-height:1.5">
    A confident wrong answer in front of your CFO<br>
    is worse than no answer.
  </p>
  <p v-click class="text-orange-300 text-2xl mt-2">And AI is always confident.</p>
</div>

<!--
Emotional stakes BEFORE the prescription. This is why Part 3 matters.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## The order that actually works

<div class="slide-body">
  <div class="flex items-center justify-center gap-3 max-w-6xl mx-auto w-full">
    <div class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-orange-950 border border-orange-800 flex items-center justify-center">
        <carbon-data-base class="text-4xl text-orange-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">Readable schema</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">Foundation</div>
    </div>
    <carbon-chevron-right class="text-slate-600 text-3xl flex-shrink-0" />
    <div class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-orange-950 border border-orange-800 flex items-center justify-center">
        <carbon-ruler class="text-4xl text-orange-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">Agreed metrics</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">&nbsp;</div>
    </div>
    <carbon-chevron-right class="text-slate-600 text-3xl flex-shrink-0" />
    <div class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-indigo-950 border border-indigo-800 flex items-center justify-center">
        <carbon-dashboard class="text-4xl text-indigo-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">Trusted dashboards</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">&nbsp;</div>
    </div>
    <carbon-chevron-right class="text-slate-600 text-3xl flex-shrink-0" />
    <div class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-indigo-950 border border-indigo-800 flex items-center justify-center">
        <carbon-bot class="text-4xl text-indigo-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">AI on top</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">Capstone</div>
    </div>
  </div>
</div>

<p v-click class="absolute bottom-16 left-0 right-0 text-slate-300 text-center text-xl max-w-3xl mx-auto italic px-8">
  You can't skip a step. AI on shaky ground falls faster than dashboards on shaky ground.
</p>

<!--
The mental model the pitch promised. Build it bottom-up when presenting. This is the takeaway diagram.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## Your data readiness scorecard

<div class="slide-body">
  <div class="flex flex-col gap-3 max-w-4xl mx-auto w-full">
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">1</span>
      <div>
        <div class="font-semibold text-slate-100 text-lg">A stranger can read the schema</div>
        <div class="text-slate-400 text-sm mt-1">Column names and descriptions. <span class="text-slate-500 italic">(the <code>usr_chn_flg_30d</code> problem)</span></div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">2</span>
      <div>
        <div class="font-semibold text-slate-100 text-lg">One definition per metric</div>
        <div class="text-slate-400 text-sm mt-1">Written, findable, agreed. <span class="text-slate-500 italic">(the revenue problem)</span></div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">3</span>
      <div>
        <div class="font-semibold text-slate-100 text-lg">Every number traces back to its source</div>
        <div class="text-slate-400 text-sm mt-1">Lineage, ownership, access. If you can't trace it, you can't trust it.</div>
      </div>
    </div>
  </div>
</div>

<!--
Shown ONCE. Item 3 rewritten so it maps 1:1 to Monday action 3.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## This is data engineering

<div class="slide-body">
  <div class="grid grid-cols-4 gap-8 max-w-5xl mx-auto w-full">
    <div class="text-center">
      <carbon-tag class="text-7xl mb-4 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-xl">Naming</div>
    </div>
    <div class="text-center">
      <carbon-model-alt class="text-7xl mb-4 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-xl">Modelling</div>
    </div>
    <div class="text-center">
      <carbon-document class="text-7xl mb-4 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-xl">Contracts</div>
    </div>
    <div class="text-center">
      <carbon-flow class="text-7xl mb-4 mx-auto text-indigo-300" />
      <div class="font-bold text-slate-100 text-xl">Lineage</div>
    </div>
  </div>
</div>

<p v-click class="absolute bottom-16 left-0 right-0 text-slate-300 text-center text-xl max-w-5xl mx-auto italic px-8">
  The vendors sold your CEO the chef. Someone still has to prep the kitchen.
</p>

<!--
Land the title's claim explicitly. Data engineers own the floors under the AI.
-->

---

<div class="absolute top-6 right-8 text-xs uppercase tracking-widest text-slate-500">Part 3 · What To Do</div>

## What to do on Monday

<div class="slide-body">
  <p class="text-slate-400 text-xl">Three concrete things. No AI budget required.</p>

  <div class="flex flex-col gap-5 mt-6 max-w-4xl mx-auto w-full">
    <div class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">1</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Run the stranger test</div>
        <div class="text-slate-400 mt-1">Hand your most-used schema to someone who's never seen it. Ask them to explain three columns.</div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">2</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Describe every column in one table</div>
        <div class="text-slate-400 mt-1">dbt <code>description:</code>, <code>COMMENT ON COLUMN</code>, catalog entry. Ship before lunch.</div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-orange-400 font-bold text-4xl leading-none">3</span>
      <div>
        <div class="font-semibold text-slate-100 text-xl">Audit one dashboard end-to-end</div>
        <div class="text-slate-400 mt-1">Trace every number to its source. If you can't, neither can the AI.</div>
      </div>
    </div>
  </div>
</div>

<!--
Action 2 is now technical — a data engineer can do it before lunch. Matches audience.
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-8 max-w-4xl w-full mx-auto text-center">
  <span class="label label-i">Remember one thing</span>
  <p class="text-orange-300 text-5xl font-extrabold" style="line-height:1.25">
    High-confidence visibility<br>
    beats<br>
    low-confidence intelligence.
  </p>
  <p v-click class="text-slate-300 text-2xl mt-6">
    The AI you want is often a dashboard you'd believe.
  </p>
</div>

<!--
The closer. This is the line from the pitch. Say it, pause, then thank them.
-->

---
layout: end
class: text-center
---

<div class="flex flex-col items-center gap-6 w-full mx-auto text-center" style="max-width:48rem">
  <h1 class="text-6xl font-extrabold" style="line-height:1.2">Thank You</h1>
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
