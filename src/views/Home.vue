<template>
    <div class="home">
        <div class="logo">
            <a href="#">
                로고텍스트
            </a>
        </div>
        <div class="main">
            <div>main 1section</div>
            <div>main 2section</div>
            <div>main 3section</div>
            <div>main 4section</div>
        </div>
        <div class="footer">
        &copy; testVue
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Home',
    components: {

    }
}
</script>

<style scoped>
.main > div {
    margin: 1rem 0;
    background: #ddd;
    padding: 1rem 0;
}
</style>