<template>

  <div v-if="show" :class="notificationType" class="flex items-center p-3 mb-2 text-sm  rounded-lg" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class=" font-medium me-2">Alert! </span>  {{ message }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    notificationType: {
      type: String,
      default: 'success', // You can pass 'error', 'info', or 'warning' to change the notification style
    },
  },
};
</script>

<style>

.success {
  border: 1px solid #03543F;
  color:#84E1BC;
}

.error {
  border: 1px solid #9B1C1C;
  color:#F8B4B4;
}

.info {
  border: 1px solid #1E429F
;
  color: #A4CAFE;
}

.warning {
  border: 1px solid #E3A008;
  color: #FCE96A;
}
</style>
