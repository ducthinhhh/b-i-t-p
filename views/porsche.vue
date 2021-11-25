<template>
<span>
<h3>Siêu Xe Porsche</h3>
</span>
  
  <div class="sieuxePorsche">
    <table>
      <tr>
        <th><a href="/giaPorsche"><img src="images/p1.jpg" alt=""></a></th>
        <th><a href="/giaPorsche"><img src="images/p2.jpg" alt=""></a></th>
        <th><a href="/giaPorsche"><img src="images/p3.jpg" alt=""></a></th>
      </tr>
      <tr>
        <td><a href="/giaPorsche"><img src="images/p4.jpg" alt=""></a></td>
        <td><a href="/giaPorsche"><img src="images/p5.jpg" alt=""></a></td>
        <td><a href="/giaPorsche"><img src="images/p6.jpg" alt=""></a></td>
      </tr>
      <tr>
        <td><a href="/giaPorsche"><img src="images/p2.jpg" alt=""></a></td>
        <td><a href="/giaPorsche"><img src="images/p8.jpg" alt=""></a></td>
        <td><a href="/giaPorsche"><img src="images/p1.jpg" alt=""></a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span h3 {
  width: 200px;
}
h3 {
position: relative;
left: 790px;
margin-top: 30px;
margin-bottom: 30px;
font-size: 1.5rem;
box-shadow:  5px 5px 3px .9px #333;
border-radius: 20px;
}
h3:hover {
  color: #fff;
  background: #333;
  box-shadow: none;
  transition: all 1s ease-in-out;
}
.sieuxePorsche {
  margin-left: 300px;
  display: inline-block;

}
.sieuxePorsche a {
  display: inline-block;
}

.sieuxePorsche img {
  width: 370px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;

  


}
</style>