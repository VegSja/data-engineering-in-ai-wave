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
    The CFO of your company can now get insights in 30 seconds, instead of waiting for a 2 week ticket
  </p>
</div>


---

<Progress :current="1" />

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


---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6 w-full mx-auto text-center" style="max-width:60rem">
  <span class="label label-o">Take one step back</span>
  <div class="text-7xl font-extrabold tracking-tight" style="line-height:1.15">
    "Which <span class="text-indigo-400">metrics</span><br>do we <span class="text-indigo-400">trust</span> today?"
  </div>
  <p v-click class="text-slate-400 text-xl mt-4 max-w-2xl">
    A story of how fast premature AI solutions can destroy data driven companies
  </p>
</div>


---

<Progress :current="2" />

## How we ended up adopting AI analytics

<div class="slide-body">
  <div class="max-w-6xl mx-auto">
    <p class="text-slate-400 text-lg text-center mb-12">
      A year in the life of a data team — and the moment <span class="text-slate-100 font-semibold">AI</span> walked in.
    </p>
    <div class="relative">
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

---

<Progress :current="2" />

## Pitfall 1: The system isn´t built for AI driven search

<div class="slide-body">
  <p class="text-slate-300">The documentation and code standards are stored in a single persons head. It isn't useful for AI yet</p>
  <div class="flex gap-10 mt-8 items-start">
    <div class="flex-1">
      <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Column in the warehouse</p>
      <code class="text-red-300 text-xl">usr_chn_flg_30d</code>
      <p class="text-slate-400 mt-3">Could be understandable for a single human, but vague</p>
    </div>
    <div class="flex-1">
      <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Same column, renamed</p>
      <code class="text-green-300 text-xl">is_churned_within_30_days</code>
      <p class="text-slate-400 mt-3">Less vague, easier to understand. With documentation on how this is used, it can become more useful</p>
    </div>
  </div>
  <p v-click class="text-slate-200 text-lg mt-10 max-w-3xl">
    The entire datawarehouse was built by a small team. We have to rebuild the system to be self documenting and unambiguos
  </p>
</div>

---


<Progress :current="2" />

## Pitfall 2: Diverging definitions

<div class="slide-body">
  <div class="max-w-6xl mx-auto">
    <p class="text-slate-400 text-lg text-center mb-12">
      A bank. One metric: <span class="text-slate-100 font-semibold">Active customer</span>. Used by leadership to steer, and by the customer team to activate.
    </p>
    <div class="relative">
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

---


<Progress :current="2" />

## One definition. One owner. One place.

<div class="slide-body">
  <p class="text-slate-400 text-lg max-w-3xl">The LTV drift wasn't a math problem. It was a <span class="text-slate-100 font-semibold">governance</span> problem.</p>
  <div class="grid grid-cols-4 gap-5 mt-10 max-w-6xl mx-auto">
    <div class="p-6 rounded-2xl bg-slate-900 border border-indigo-800/50 hover:border-indigo-500/60 transition">
      <carbon-document class="text-4xl text-indigo-300 mb-4" />
      <div class="label-sm label-i mb-3">Definition</div>
      <p class="text-slate-100 font-semibold text-lg mb-2">Written down.</p>
      <p class="text-slate-400 text-sm leading-relaxed">In plain language, next to the data.</p>
    </div>
    <div v-click class="p-6 rounded-2xl bg-slate-900 border border-orange-800/50 hover:border-orange-500/60 transition">
      <carbon-user-avatar class="text-4xl text-orange-300 mb-4" />
      <div class="label-sm label-o mb-3">Owner</div>
      <p class="text-slate-100 font-semibold text-lg mb-2">A name, not a team.</p>
      <p class="text-slate-400 text-sm leading-relaxed">Someone who says yes or no when it needs to change.</p>
    </div>
    <div v-click class="p-6 rounded-2xl bg-slate-900 border border-purple-800/50 hover:border-purple-500/60 transition">
      <carbon-group class="text-4xl text-purple-300 mb-4" />
      <div class="label-sm label-p mb-3">Users</div>
      <p class="text-slate-100 font-semibold text-lg mb-2">Who consumes it.</p>
      <p class="text-slate-400 text-sm leading-relaxed">So you know who to notify when it changes.</p>
    </div>
    <div v-click class="p-6 rounded-2xl bg-slate-900 border border-green-800/50 hover:border-green-500/60 transition">
      <carbon-location class="text-4xl text-green-300 mb-4" />
      <div class="label-sm label-g mb-3">Place</div>
      <p class="text-slate-100 font-semibold text-lg mb-2">One source of truth.</p>
      <p class="text-slate-400 text-sm leading-relaxed">Every dashboard, query, and AI agent reads from the same spot.</p>
    </div>
  </div>
</div>


---

<Progress :current="2" />

## Pitfall 3: Lack of data quality checking

<div class="slide-body">
  <p class="text-slate-400 text-lg max-w-4xl">A model spots nulls, outliers, and broken joins. It <span class="text-slate-100 font-semibold">cannot</span> tell you that "active customer" quietly started including trial users last quarter.</p>
  <div class="grid grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
    <div class="p-7 rounded-2xl bg-slate-900 border border-indigo-800/50">
      <div class="flex items-center gap-3 mb-5">
        <carbon-machine-learning-model class="text-3xl text-indigo-300" />
        <div class="label-sm label-i">What AI sees</div>
      </div>
      <ul class="text-slate-200 text-base space-y-3">
        <li class="flex gap-3"><span class="text-indigo-400">▸</span> Schemas, types, freshness</li>
        <li class="flex gap-3"><span class="text-indigo-400">▸</span> Null rates, duplicates, distributions</li>
        <li class="flex gap-3"><span class="text-indigo-400">▸</span> Statistical anomalies</li>
      </ul>
      <p class="text-slate-500 text-sm mt-5 italic border-t border-slate-800 pt-4">Syntactically valid. Domain-blind.</p>
    </div>
    <div v-click class="p-7 rounded-2xl bg-slate-900 border border-orange-700/60">
      <div class="flex items-center gap-3 mb-5">
        <carbon-user-multiple class="text-3xl text-orange-300" />
        <div class="label-sm label-o">What only a human knows</div>
      </div>
      <ul class="text-slate-200 text-base space-y-3">
        <li class="flex gap-3"><span class="text-orange-400">▸</span> What the field <span class="text-orange-300 font-medium">means</span> this quarter</li>
        <li class="flex gap-3"><span class="text-orange-400">▸</span> Which edge cases are real customers vs noise</li>
        <li class="flex gap-3"><span class="text-orange-400">▸</span> When a "clean" number is telling a lie</li>
      </ul>
      <p class="text-slate-500 text-sm mt-5 italic border-t border-slate-800 pt-4">Context lives in people, not columns.</p>
    </div>
  </div>
  <p v-click class="text-slate-100 text-center text-2xl mt-10 max-w-4xl mx-auto leading-relaxed">
    Without a <span class="text-indigo-400 font-semibold">human in the loop</span>, the AI confidently answers the <span class="text-orange-400 font-semibold">wrong question</span> — perfectly.
  </p>
</div>

---

<Progress :current="2" />

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


---

<Progress :current="2" />

## The core insight

<div class="slide-body">
  <div class="text-center max-w-5xl mx-auto">
    <carbon-search class="text-7xl mb-8 mx-auto text-indigo-300" />
    <p class="text-4xl font-bold text-slate-100 leading-snug">
      AI didn't <em>create</em> these problems.
    </p>
    <p class="text-indigo-300 text-3xl mt-8 font-semibold leading-snug">
      It shows you the ones that were already there and makes them much worse.
    </p>
  </div>
</div>


---

<Progress :current="2" />

## My hypothesis on why companies fall into these situations

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

---

<Progress :current="2" />

## A better, alternative reality

<div class="slide-body">
  <div class="max-w-6xl mx-auto">
    <p class="text-slate-300 text-lg text-center mb-10">
      Fix the fundamentals first. Most of the value is already there — <span class="text-slate-100 font-semibold">before</span> AI enters the picture.
    </p>
    <div class="grid grid-cols-12 gap-8 items-center">
      <div class="col-span-5">
        <div class="label-sm label-i mb-4">The work we already did</div>
        <ul class="space-y-3 text-slate-200 text-base">
          <li class="flex gap-3"><carbon-checkmark class="text-green-400 text-xl flex-shrink-0 mt-0.5" /> Clear metric definitions</li>
          <li class="flex gap-3"><carbon-checkmark class="text-green-400 text-xl flex-shrink-0 mt-0.5" /> A named owner per metric</li>
          <li class="flex gap-3"><carbon-checkmark class="text-green-400 text-xl flex-shrink-0 mt-0.5" /> Self-documenting schema</li>
          <li class="flex gap-3"><carbon-checkmark class="text-green-400 text-xl flex-shrink-0 mt-0.5" /> Data quality with humans in the loop</li>
          <li class="flex gap-3"><carbon-checkmark class="text-green-400 text-xl flex-shrink-0 mt-0.5" /> One source of truth</li>
        </ul>
      </div>
      <div class="col-span-1 flex justify-center">
        <carbon-arrow-right class="text-4xl text-slate-500" />
      </div>
      <div class="col-span-6">
        <div class="label-sm label-g mb-4">What the company actually needs</div>
        <div v-click class="p-6 rounded-2xl bg-slate-900 border border-green-800/60 mb-3">
          <div class="flex items-baseline justify-between mb-2">
            <div class="flex items-center gap-3">
              <carbon-dashboard class="text-3xl text-green-300" />
              <span class="text-slate-100 text-xl font-semibold">Dashboards</span>
            </div>
            <span class="text-green-300 text-3xl font-extrabold">~80%</span>
          </div>
          <p class="text-slate-400 text-sm">Every recurring question leadership, sales and product actually ask.</p>
        </div>
        <div v-click class="p-5 rounded-2xl bg-slate-900 border border-purple-800/60">
          <div class="flex items-baseline justify-between mb-2">
            <div class="flex items-center gap-3">
              <carbon-bot class="text-2xl text-purple-300" />
              <span class="text-slate-100 text-lg font-semibold">AI (Cortex)</span>
            </div>
            <span class="text-purple-300 text-2xl font-extrabold">~20%</span>
          </div>
          <p class="text-slate-400 text-sm">Ad-hoc questions the dashboards don't cover — on trustworthy data.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

---

<Progress :current="3" />

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


---

<Progress :current="3" />

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
        <div class="font-semibold text-slate-100 text-lg">Check if the data matches your expectations</div>
        <div class="text-slate-400 text-sm mt-1">Quality, mapping to your domain knowledge, covers the needs of the business</div>
      </div>
    </div>
    <div class="check-item">
      <span class="text-indigo-400 font-bold text-3xl leading-none">3</span>
      <div>
        <div class="font-semibold text-slate-100 text-lg">Every number traces back to its source and its consumers</div>
        <div class="text-slate-400 text-sm mt-1">Lineage, ownership, access. If you can't trace it, you can't trust it.</div>
      </div>
    </div>
  </div>
</div>


---

<Progress :current="3" />

## The communication skills of a data engineer becomes more important

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
