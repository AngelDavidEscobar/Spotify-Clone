<script lang="ts">
    const currentTime = new Date()
    const currrentHour = currentTime.getHours()

    let greeting = ''

    if (currrentHour < 12) {
        greeting = 'Buenos dias'
    } else if (currrentHour < 18) {
        greeting = 'Buenas tardes'
    } else {
        greeting = 'Buenas noches'
    }
</script>


<h1 class="text-3xl font-bold ">{greeting}</h1>