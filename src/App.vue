<script setup>
import { ref, computed } from 'vue'
import { usePrimeVue } from 'primevue/config'

import { StringOperations } from './operations'

const inputText = ref('')
const selectedOperation = ref(0)

const outputText = computed(() => {
    const operation = StringOperations[selectedOperation.value]
    return operation ? operation.fn(inputText.value) : ''
})

// workaround to fix ripple in 'script setup' components
// see https://github.com/primefaces/primevue/issues/2454
const $primevue = usePrimeVue()
defineExpose({
    $primevue
})
</script>

<template>
  <div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-13" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-rightsurface-border select-none" style="width: 280px">
      <div class="flex flex-column h-full">
        <div class="flex align-items-center justify-content-center px-3 py-5 border-bottom-1 surface-border" style="height: 60px">
          <h1>stringtools</h1>
        </div>
        <div class="overflow-y-auto px-5 flex-1">
            <ul class="list-none p-0 m-0">
                <li v-for="(item, index) in StringOperations" :key="index">
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" :class="{'text-primary': selectedOperation === index}" style="border-radius: 12px" @click="selectedOperation = index">
                        <span class="font-medium">{{ item.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-column flex-auto surface-ground p-5">
      <div class="surface-card flex flex-column flex-auto border-round-xl p-5">
        <div class="flex justify-content-between align-items-center relative lg:static mb-5 lg:mb-0 column-gap-5">
          <div class="flex align-items-center">
            <a
              v-ripple
              class="cursor-pointer block lg:hidden text-700 mr-3 p-ripple"
              v-styleclass="{
                selector: '#app-sidebar-13',
                enterClass: 'hidden',
                enterActiveClass: 'fadeinleft',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeoutleft',
                hideOnOutsideClick: true,
              }">
              <i class="pi pi-bars text-4xl"></i>
            </a>
          </div>
        </div>
        <div class="grid h-full">
            <div class="col-6">
                <Textarea v-model="inputText" class="w-full h-full" />
            </div>
            <div class="col-6">
                <Textarea v-model="outputText" class="w-full h-full" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
    font-family: "Raleway";
}

textarea {
    font-family: "Jetbrains Mono";
}
</style>
