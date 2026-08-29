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


---

<Progress :current="1" />

## The low hanging fruit: AI Analyst

<div class="slide-body">
  <p class="text-slate-300 text-2xl">Chat directly with your data warehouse. Every major platform ships one now.</p>
  <div class="grid grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
    <div class="card card-i text-center">
      <carbon-snowflake class="text-6xl mb-3 mx-auto text-indigo-200" />
      <div class="font-bold text-indigo-200 text-2xl">Snowflake</div>
        <div class="text-slate-400 text-base mt-2">CoCo Analyst</div>
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

---

<Progress :current="1" />

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

---

<Progress :current="1" />

## How these solutions works under the hood is much like a sandwich store.

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
</div>

<!--
The hard engineering happened at OpenAI, Anthropic, and Google. The chef is basically solved. What no vendor can fix for you: the ingredients. Even the best chef in the world can't rescue a dish made from rotten ingredients — and that's exactly what happens when you point a great model at a messy warehouse.
-->

---

<Progress :current="2" />

## How we ended up adopting AI analytics

<div class="slide-body">
  <div class="max-w-6xl mx-auto">
    <div class="relative mt-8">
      <div class="absolute left-[6%] right-[6%] top-8 h-0.5 bg-slate-700"></div>
      <div class="grid grid-cols-4 gap-6 relative">
        <div class="flex flex-col items-center text-center">
          <div class="w-5 h-5 rounded-full bg-indigo-400 mt-6 mb-5 ring-4 ring-slate-900 shadow-lg shadow-indigo-500/40"></div>
          <div class="label-sm label-i mb-4">January 2025</div>
          <carbon-rocket class="text-3xl text-indigo-300 mb-3" />
          <div class="text-slate-100 text-lg font-semibold mb-2">Let's get data-driven</div>
          <p class="text-slate-400 text-sm leading-relaxed">First hire: a data engineer / analyst.</p>
        </div>
        <div v-click class="flex flex-col items-center text-center">
          <div class="w-5 h-5 rounded-full bg-green-400 mt-6 mb-5 ring-4 ring-slate-900 shadow-lg shadow-green-500/40"></div>
          <div class="label-sm label-g mb-4">June 2025</div>
          <carbon-datastore class="text-3xl text-green-300 mb-3" />
          <div class="text-slate-100 text-lg font-semibold mb-2">Foundations form</div>
          <p class="text-slate-400 text-sm leading-relaxed">Snowflake + PowerBI. Transactions, accounts, users. Leadership is happy.</p>
        </div>
        <div v-click class="flex flex-col items-center text-center">
          <div class="w-5 h-5 rounded-full bg-orange-400 mt-6 mb-5 ring-4 ring-slate-900 shadow-lg shadow-orange-500/40"></div>
          <div class="label-sm label-o mb-4">August 2025</div>
          <carbon-warning-alt class="text-3xl text-orange-300 mb-3" />
          <div class="text-slate-100 text-lg font-semibold mb-2">Collisions</div>
          <p class="text-slate-400 text-sm leading-relaxed">Sales wants churn data. Requests start to pile up.</p>
        </div>
        <div v-click class="flex flex-col items-center text-center">
          <div class="w-5 h-5 rounded-full bg-red-400 mt-6 mb-5 ring-4 ring-slate-900 shadow-lg shadow-red-500/40"></div>
          <div class="label-sm label-r mb-4">December 2025</div>
          <carbon-bot class="text-3xl text-red-300 mb-3" />
          <div class="text-slate-100 text-lg font-semibold mb-2">Promise of AI</div>
          <p class="text-slate-400 text-sm leading-relaxed">Team stalls under stakeholder load. Enter <span class="text-red-300">Cortex Analyst</span>.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
This is a year in the life of a data team — and the moment AI walked in. January: first data hire. June: Snowflake + PowerBI, leadership is happy. August: sales wants churn data, requests pile up. December: the team is drowning, and someone points at Cortex Analyst as the way out. That's the moment we're really talking about today.
-->

---

<Progress :current="2" :pitfall="1" />

## Pitfall 1: The warehouse wasn't built to be read by strangers

<div class="slide-body">
  <div class="grid grid-cols-3 gap-8 mt-8">
    <div class="text-center">
      <carbon-string-text class="text-8xl text-indigo-300 mx-auto mb-6" />
      <div class="text-slate-100 font-semibold text-3xl">Naming</div>
    </div>
    <div v-click="1" class="text-center">
      <carbon-tree-view class="text-8xl text-orange-300 mx-auto mb-6" />
      <div class="text-slate-100 font-semibold text-3xl">Structure</div>
    </div>
    <div v-click="2" class="text-center">
      <carbon-document class="text-8xl text-green-300 mx-auto mb-6" />
      <div class="text-slate-100 font-semibold text-3xl">Documentation</div>
    </div>
  </div>
</div>

<!--
Three things had to change, not one.

Naming — usr_chn_flg_30d is clear to whoever wrote it, opaque to everyone else and to any model. Rename it so it reads like English.

Structure — our warehouse had years of TBL_A_v3_final and tmp_join_use_this. No AI, no new engineer, can navigate that. We reorganized into layers: raw, staging, marts.

Documentation — almost no column had a description. Even a perfectly named column needs a sentence explaining what it means, what it excludes, and who owns it.

The whole warehouse was built by a small team for that team. To make AI work on top of it, we had to rebuild it to be self-documenting.
-->

<!--
Three things had to change, not one.

Naming: usr_chn_flg_30d is clear to whoever wrote it, opaque to everyone else and to any model. Rename it so it reads like English.

Structure: our warehouse had years of TBL_A_v3_final and tmp_join_use_this — the sprawl every team accumulates. No AI, no new engineer, can navigate that. We reorganized into layers — raw, staging, marts.

Documentation: almost no column had a description. Even a perfectly named column needs a sentence explaining what it means, what it excludes, and who owns it.

The bigger point: the whole warehouse was built by a small team for that team. To make AI work on top of it, we had to rebuild it to be self-documenting and unambiguous.
-->

<!--
Three things had to change, not one.

Naming: usr_chn_flg_30d might be perfectly clear to whoever wrote it, but it's opaque to everyone else — and completely opaque to a model. Rename it so it reads like English.

Structure: our warehouse had years of TBL_A_v3_final, customers_new, tmp_join_use_this — the kind of sprawl every team accumulates. No AI, and no new engineer, can navigate that. We had to reorganize into clear layers — raw, staging, marts — with predictable names in each layer.

Documentation: almost no column had a description. Even the perfectly named column needs a sentence explaining what it actually means, what edge cases it excludes, who owns it. Without that, the model — and every human after us — is guessing.

The bigger point: the whole warehouse was built by a small team for that team. To make AI work on top of it, we effectively have to rebuild it to be self-documenting and unambiguous.
-->


---


<Progress :current="2" :pitfall="2" />

## Pitfall 2: Diverging definitions

<div class="slide-body">
  <div class="max-w-6xl mx-auto">
    <div class="relative mt-8">
      <div class="absolute left-[8%] right-[8%] top-8 h-0.5 bg-slate-700"></div>
      <div class="grid grid-cols-3 gap-10 relative">
        <div class="flex flex-col items-center text-center">
          <div class="w-5 h-5 rounded-full bg-indigo-400 mt-6 mb-5 ring-4 ring-slate-900 shadow-lg shadow-indigo-500/40"></div>
          <div class="label-sm label-i mb-4">August 2025</div>
          <div class="text-slate-100 text-xl font-semibold mb-2">One definition</div>
          <p class="text-slate-400 text-sm leading-relaxed">Both definitions gathered and consolidated into a single shared one.</p>
        </div>
        <div v-click class="flex flex-col items-center text-center">
          <div class="w-5 h-5 rounded-full bg-orange-400 mt-6 mb-5 ring-4 ring-slate-900 shadow-lg shadow-orange-500/40"></div>
          <div class="label-sm label-o mb-4">+ 6 months</div>
          <div class="text-slate-100 text-xl font-semibold mb-2">Quiet drift</div>
          <p class="text-slate-400 text-sm leading-relaxed">Customer team adds <span class="text-orange-300">"credit card transaction in last 45 days"</span>. Leadership keeps the old rule.</p>
        </div>
        <div v-click class="flex flex-col items-center text-center">
          <div class="w-5 h-5 rounded-full bg-red-400 mt-6 mb-5 ring-4 ring-slate-900 shadow-lg shadow-red-500/40"></div>
          <div class="label-sm label-r mb-4">+ 12 months</div>
          <div class="text-slate-100 text-xl font-semibold mb-3">Two truths</div>
          <div class="flex items-baseline justify-center gap-3 mb-3">
            <span class="text-4xl font-extrabold text-indigo-300">13k</span>
            <span class="text-slate-500 text-lg">vs</span>
            <span class="text-4xl font-extrabold text-orange-300">55k</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">Same word. Two numbers. Everyone thinks they agree.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
Real example from a bank. One metric — "active customer" — used both by leadership to steer the business and by the customer team to run activation campaigns. August: we agree on one shared definition. Six months later: the customer team quietly adds "credit card transaction in the last 45 days" to catch more customers; leadership keeps the original rule. Twelve months in: leadership sees 13k active customers, the customer team sees 55k. Same word, two numbers. Everyone in the room still thinks they're agreeing.
-->


---

<Progress :current="2" :pitfall="3" />

## Pitfall 3: Lack of data quality checking

<div class="slide-body">
  <div class="grid grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto items-stretch">
    <div class="p-8 rounded-2xl bg-slate-900 border border-indigo-800/50 text-center">
      <carbon-checkmark-outline class="text-6xl text-indigo-300 mx-auto mb-5" />
      <div class="text-slate-100 text-2xl font-semibold mb-3">AI catches broken data</div>
      <p class="text-slate-400 text-base">Nulls, types, freshness, outliers</p>
    </div>
    <div v-click class="p-8 rounded-2xl bg-slate-900 border border-orange-700/60 text-center">
      <carbon-warning-alt class="text-6xl text-orange-300 mx-auto mb-5" />
      <div class="text-slate-100 text-2xl font-semibold mb-3">Only humans catch wrong data</div>
      <p class="text-slate-400 text-base">A clean number telling a lie</p>
    </div>
  </div>
</div>

<!--
A model will happily spot nulls, outliers, broken joins — the syntactic stuff. What it cannot spot: that "active customer" quietly started including trial users last quarter. The left side is what AI sees: schemas, freshness, null rates, statistical anomalies — syntactically valid, domain-blind. The right side is what only a human knows: what a field actually means this quarter, which edge cases are real customers vs noise, when a perfectly clean-looking number is lying. Context lives in people, not columns.
-->


---

<Progress :current="2" />

## The core insight

<div class="slide-body">
  <div class="text-center max-w-5xl mx-auto">
    <carbon-search class="text-7xl mb-8 mx-auto text-indigo-300" />
    <p class="text-4xl font-bold text-slate-100 leading-snug">
      None of these problems are new.
    </p>
    <p v-click class="text-slate-300 text-2xl mt-6 leading-snug">
      AI is an amplifier: it makes them faster, louder, and harder to catch.
    </p>
  </div>
</div>


---

<Progress :current="2" />

## We end up in these situations when we don't understand data development processes

<div class="slide-body">
  <div class="max-w-6xl mx-auto w-full mt-4">
  <div class="flex items-center justify-center gap-8 mb-10 text-sm">
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-sm bg-indigo-400"></div><span class="text-slate-300">Coding</span></div>
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-sm bg-purple-400"></div><span class="text-slate-300">Architecture</span></div>
    <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-sm bg-orange-400"></div><span class="text-slate-300">Stakeholder work</span></div>
  </div>
  <div class="flex flex-col gap-10">
    <div>
      <div class="text-slate-400 text-sm uppercase tracking-widest mb-3">Perceived</div>
      <div class="flex h-20 rounded-xl overflow-hidden shadow-lg">
        <div class="bg-indigo-500 flex items-center justify-center text-white font-bold text-xl" style="width:70%">Coding</div>
        <div class="bg-purple-500 flex items-center justify-center text-white font-bold text-base" style="width:20%">Architecture</div>
        <div class="bg-orange-500" style="width:10%"></div>
      </div>
    </div>
    <div v-click="1">
      <div class="text-slate-400 text-sm uppercase tracking-widest mb-3">Actual</div>
      <div class="flex h-20 rounded-xl overflow-hidden shadow-lg">
        <div class="bg-indigo-500" style="width:5%"></div>
        <div class="bg-purple-500" style="width:25%"></div>
        <div class="bg-orange-500 flex items-center justify-center text-white font-bold text-xl" style="width:70%">Stakeholder work</div>
      </div>
    </div>
  </div>
  </div>
</div>

<!--
Here's the punchline behind reason number one.

The business — and honestly a lot of engineers before they've done the job — thinks data engineering is 70% coding, 20% architecture, 10% talking to people. That's the picture that makes AI look like a silver bullet: if the job is mostly code, then a code-writing model must eat most of the job.

The reality is almost inverted. In my experience it's more like 70% stakeholder work — chasing definitions, reconciling metrics, sitting between finance and product, translating a vague question into a query someone can actually trust — and only about 15% each on architecture and code.

So when a vendor drops an AI chatbot on top of your warehouse, it doesn't shrink the 70%. It grows it. Every new consumer of data becomes a new source of ambiguous questions, drifting definitions, and confident-looking wrong answers you now have to defend. The bottleneck was never the code.
-->


---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6 w-full mx-auto text-center" style="max-width:60rem">
  <span class="label label-o">Take one step back</span>
  <div class="text-7xl font-extrabold tracking-tight" style="line-height:1.15">
    "Which <span class="text-indigo-400">metrics</span><br>do we <span class="text-indigo-400">trust</span> today?"
  </div>
</div>

<Progress :current="3" />

---

## The order that actually works

<div class="slide-body">
  <div class="flex items-center justify-center gap-3 max-w-6xl mx-auto w-full">
    <div class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-orange-950 border border-orange-800 flex items-center justify-center">
        <carbon-data-base class="text-4xl text-orange-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">Schema + Quality</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">Foundation</div>
    </div>
    <carbon-chevron-right v-click="1" class="text-slate-600 text-3xl flex-shrink-0" />
    <div v-click="1" class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-orange-950 border border-orange-800 flex items-center justify-center">
        <carbon-ruler class="text-4xl text-orange-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">Agreed metrics</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">&nbsp;</div>
    </div>
    <carbon-chevron-right v-click="2" class="text-slate-600 text-3xl flex-shrink-0" />
    <div v-click="2" class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-indigo-950 border border-indigo-800 flex items-center justify-center">
        <carbon-dashboard class="text-4xl text-indigo-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">Trusted dashboards</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">&nbsp;</div>
    </div>
    <carbon-chevron-right v-click="3" class="text-slate-600 text-3xl flex-shrink-0" />
    <div v-click="3" class="flex flex-col items-center gap-3 flex-1">
      <div class="w-20 h-20 rounded-2xl bg-indigo-950 border border-indigo-800 flex items-center justify-center">
        <carbon-bot class="text-4xl text-indigo-300" />
      </div>
      <div class="text-slate-200 text-base font-semibold text-center">AI on top</div>
      <div class="text-slate-500 text-xs uppercase tracking-widest">Capstone</div>
    </div>
  </div>
</div>

<p v-click class="absolute bottom-16 left-0 right-0 text-slate-300 text-center text-xl max-w-3xl mx-auto italic px-8">
  You can't skip a step.
</p>

<!--
Foundation first: schema and quality. Then agreed metrics on top of that. Then dashboards you actually trust. Then, and only then, AI on top as the capstone. You cannot skip a step — AI on shaky ground falls faster than dashboards on shaky ground, because it moves faster and speaks with more confidence.
-->


---

<Progress :current="3" />

## Take this home: Rigoursly test your project with this checklist

<div class="slide-body">
  <div class="flex flex-col gap-4 max-w-4xl mx-auto w-full mt-4">
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">1</span>
      <div class="font-semibold text-slate-100 text-lg">Can a stranger read the schema?</div>
    </div>
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">2</span>
      <div class="font-semibold text-slate-100 text-lg">Is there one definition per metric?</div>
    </div>
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">3</span>
      <div class="font-semibold text-slate-100 text-lg">Does the data match your expectations?</div>
    </div>
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">4</span>
      <div class="font-semibold text-slate-100 text-lg">Can every number trace back to its source and its consumers?</div>
    </div>
  </div>
</div>

<!--
Run these against your own company on Monday morning. Any "no" is where AI will hurt you first.

One: can a stranger read the schema? Column names, descriptions — the usr_chn_flg_30d problem.

Two: is there one definition per metric — written, findable, agreed? The active-customer problem.

Three: does the data actually match your expectations? Quality checks, domain sanity, and coverage of the questions the business actually asks.

Four: can every number trace back to its source and its consumers? Lineage, ownership, access. If you can't trace it, you can't trust it.
-->


---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-8 max-w-4xl w-full mx-auto text-center">
  <p class="text-orange-300 text-5xl font-extrabold" style="line-height:1.25">
    The AI you want is often a dashboard you'd believe.
  </p>
</div>


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
