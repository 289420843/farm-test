<template>
  <div @click="update">点我更新</div>
  <div id="test1" style="width:300px;height: 300px"></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue"
import { Chart } from "@antv/g2";



let chart:any|undefined = undefined;
onMounted(()=>{
  chart = new Chart({
    container: "test1",
    autoFit: true,
    padding: [30, 20, 30, 70],
  });
  chart.data([
    {
      "id": "1",
      "name": "name1",
      "value": 1
    },
    {
      "id": "2",
      "name": "name2",
      "value": 2
    }
  ]);
  const value = "value"
  const label = "name"
  chart.scale("value", {
    nice: true,
  });
  chart.legend(false);
  chart
      .interval()
      .position(label + "*" + value)
      .color("l(90) 0:#7DB4F9 1:#2772F0")
      .tooltip(label + "*" + value, (label, value) => {
        return {
          name:  label,
          value: value,
        };
      });
  chart.interaction("active-region");
  chart.render();
})

function update(){
  chart?.changeData([{
    "id": "1",
    "name": "name1",
    "value": 3
  },
    {
      "id": "2",
      "name": "name2",
      "value": 2
    }]);
}
</script>
