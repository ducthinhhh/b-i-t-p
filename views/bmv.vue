<template>
<span>
<h3>Siêu Xe BMV</h3>
</span>
  
  <div class="sieuxePorsche">
    <table>
      <tr>
        <th><a href="/giaBmv"><img src="images/bm1.jpg" alt=""></a></th>
        <th><a href="/giaBmv"><img src="images/bm2.jpg" alt=""></a></th>
        <th><a href="/giaBmv"><img src="images/bm3.jpg" alt=""></a></th>
      </tr>
      <tr>
        <td><a href="/giaBmv"><img src="images/bm4.jpg" alt=""></a></td>
        <td><a href="/giaBmv"><img src="images/bm5.jpg" alt=""></a></td>
        <td><a href="/giaBmv"><img src="images/bm6.jpg" alt=""></a></td>
      </tr>
      <tr>
        <td><a href="/giaBmv"><img src="images/bm7.jpg" alt=""></a></td>
        <td><a href="/giaBmv"><img src="images/bm8.jpg" alt=""></a></td>
        <td><a href="/giaBmv"><img src="images/bm10.jpg" alt=""></a></td>
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
  width: 150px;
}
h3 {
position: relative;
left: 800px;
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