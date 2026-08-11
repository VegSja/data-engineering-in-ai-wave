<script setup lang="ts">
const props = defineProps<{
  current: 1 | 2 | 3
  pitfall?: 1 | 2 | 3
}>()

const parts = [
  { n: 1, label: 'AI-driven insights' },
  { n: 2, label: 'The problem we try to avoid' },
  { n: 3, label: 'What to do' },
]
</script>

<template>
  <div class="absolute top-0 left-0 right-0 z-10 pointer-events-none">
    <div class="flex gap-1 px-6 pt-2">
      <div v-for="p in parts" :key="p.n" class="flex-1 flex flex-col gap-1">
        <div class="h-[3px] rounded-full overflow-hidden bg-slate-800">
          <div
            class="h-full transition-all duration-500"
            :class="p.n < props.current
              ? 'w-full bg-slate-600'
              : p.n === props.current
                ? 'w-full bg-indigo-400'
                : 'w-0'"
          />
        </div>
        <span
          class="text-[9px] uppercase tracking-widest transition-colors flex items-center gap-2"
          :class="p.n === props.current ? 'text-indigo-300' : 'text-slate-600'"
        >
          <span>{{ p.n }} · {{ p.label }}</span>
          <span
            v-if="p.n === 2 && props.current === 2 && props.pitfall"
            class="text-orange-300 normal-case tracking-normal"
          >— Pitfall {{ props.pitfall }} / 3</span>
        </span>
      </div>
    </div>
  </div>
</template>
