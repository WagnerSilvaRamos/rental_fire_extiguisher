<template>
<div>
    
  <div class="container">

<Hero />
<LargeCardDisplay
v-for="cardInfo in largeCardInfo"
:key="cardInfo.id"
:cardsSection="cardInfo"
 />
 <SmallCardDisplay
     v-for="cardInfo in smallCardSections"
     :key="cardInfo.id"
     :cardsSection="cardInfo"
   />
  </div>
</div>
</template>

<script>
import {largeCardSections, smallCardSections} from "@/assets/data.js";


export default {

data(){
     return{
    largeCardInfo: largeCardSections,
    smallCardSections: smallCardSections
}
}


}
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
  height: auto;


}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
