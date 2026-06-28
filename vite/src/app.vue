<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef } from "vue";
import { Box, Text, useApp, useInput } from "@vue-tui/runtime";
import { Spinner } from "@vue-tui/components";

const ready = shallowRef(false);
const { exit } = useApp();

// Give the <Spinner> from @vue-tui/components a brief moment before we greet —
// a stand-in for whatever real startup work your app does. Always clear the
// timer on unmount so quitting (q) during loading exits immediately instead of
// waiting for a stray timer to keep the process alive.
let timer: ReturnType<typeof setTimeout>;
onMounted(() => {
  timer = setTimeout(() => {
    ready.value = true;
  }, 1500);
});
onUnmounted(() => clearTimeout(timer));

useInput((input) => {
  if (input === "q") exit();
});
</script>

<template>
  <Box flexDirection="column" :padding="1" borderStyle="round" borderColor="green">
    <Spinner v-if="!ready" type="dots" color="cyan" label="Starting up" />
    <template v-else>
      <Text bold color="green">Hello from vue-tui 👋</Text>
      <Text dimColor>Edit src/app.vue and save — the terminal updates instantly.</Text>
    </template>
    <Box :margin-top="1">
      <Text dimColor>Press q to quit.</Text>
    </Box>
  </Box>
</template>
