<template>
<!-- slide -->
 <div class="slide" >
                
                <div class="chuyen-slide"  >
                    <img src="images/bm13.jpg" alt="" v-if="select ===0">
                    <img src="images/102.jpg" alt="" v-if="select ===1">
                    <img src="images/103.jpg" alt="" v-if="select ===2">
                    <img src="images/104.jpg" alt="" v-if="select ===3">
                </div>     
</div>
    <span>
                <li v-for="(item,index) in listImg" :key="index" @click="clickme(index)"> {{ item.tap  }}</li>
   </span>

<!-- danh sách các mẫu xe -->
<div class="listsieuxe">
    <h2>danh sách siêu xe</h2>
</div>

<!-- show list sieuxe -->
<div class="sieuxe">
     <h3>BMV</h3>
     <table>
    <div class="bmv" v-for="bmv in listBmv " :key="bmv.id">
                 <a href="/giaBmv"><img :src="bmv.images" alt=""></a>
    </div>
     </table>

    <h3>PORCHER</h3>
    <div class="porcher" v-for="porcher in listPorcher" :key="porcher.id">
        <a href="/giaPorsche"><img :src="porcher.images" alt=""></a>
    </div>

    <h3>LAMBORGHINI</h3>
    <div class="lamborghini" v-for="lamborghini in listLambo " :key="lamborghini.id">
        <a href="/giaLambo"><img :src="lamborghini.images" alt=""></a>
    </div>
</div>
</template>
<script>
export default {
el:'#app',
props:[ 'title'],
data() {
  return {
    select:0,
    listImg:[
      {
        tap:1
      },
      {
        tap:2
      },
      {
        tap:3
      },
      {
        tap:4
      },
],
    listLambo:[
        {
            id:0,
            images:'images/100.jpg',
        },
        {
            id:1,
            images:'images/102.jpg',
        },
        {
            id:2,
            images:'images/103.jpg',
        },
    ],
     listPorcher:[
        {
            id:0,
            images:'images/p1.jpg',
        },
        {
            id:1,
            images:'images/p2.jpg',
        },
        {
            id:2,
            images:'images/p3.jpg',
        }
    ],
    listBmv:[
        {
            id:0,
            images:'images/bm1.jpg',
        },
        {
            id:1,
            images:'images/bm2.jpg',
        },
        {
            id:2,
            images:'images/bm3.jpg',
        }
    ],
  }
},
methods :{
  clickme(index) {
      this.select =index;

  },
  click(e,index) {
    this.selectProudct = index;

    }
},
computed:{
  productSelect() {
      let index = this.select;
      return this.listProduct[index];
      
},

}
}


</script>

<style scoped>
/* css slide */
.slide {
    width: 1270;
    height: 514px;
    overflow: hidden;
    margin-top: 0px;
    margin-left: 300px;
    position: relative;
}

.dieuhuong i:last-child {
    position: relative;
    left: 860px;
}
.slide:hover .dieuhuong {
    display: block;
}

.chuyen-slide {
  width: 9999px;

}

.chuyen-slide img {
    width: 1220px;
    height: 550px;
    float: left;
   transition: all 0.4s ease;
}
span {
  position: absolute;
  display: flex;
  margin-left:820px ;
  cursor: pointer;
  top: 450px;
  
}
span li {
  list-style: none;
  font-weight: 660;
  font-size: 1rem;
  justify-items: center;
  display: flex;
  margin: 30px 5px;
  padding: 4px 10px;
  background-color: #fff;
  color: #333;
  border-radius: 50%;
  
  
  
}
span li:hover {
  background-color: #dbd;
  transition: all .4s ease;
  color:#fff
}
/* css slide end */

/* css thẻ h2 danh sách các loại xe*/
 h2 {
     font-size: 2rem;
     margin-left: 750px ;
     margin-top: 30px;
     
 }
/* css danh sách xe */
.sieuxe {
    margin-top: 30px;
    margin-left:300px ;
}
.bmv, .porcher, .lamborghini  {
    display: inline-block;
}
.sieuxe img {
    margin:10px;
    width: 370px;
    height: 300px;
    border-radius: 20px;
}

h3 {
    font-size: 1.5rem;
    margin-top: 30px;
    margin-left: 15px;
}





</style>