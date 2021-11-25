<template>

    <span>
        <h2> welcome to AutoShop</h2>
    </span>
  <div class="show">
        <div class="show-xe">
            <img :src="produpSelect.image" alt=""> 
        </div>
                    <!--liệt kê các thông số của xe  -->
        <div class="text-xe">
                <p>{{ produpSelect.name }}</p>
                <div class="gia">{{ produpSelect.price }}₫</div>
                <div class="quantity">
                        <p v-if="produpSelect.quantity > 0">Còn lại:{{ produpSelect.quantity }} sản Phẩm</p>
                        <p v-else> Sản phẩm đã hết hàng</p>
                </div>
                <button class="buying"> Mua Ngay </button> <br>
                <button class="shop"> Đang Có Tại Cửa Hàng </button>
                <div class="kieuxe">Các kiểu LAMBORGHINI:</div>
       </div>
       
                    <!--Danh sách các siêu xe  -->
        <div class="show_xe" >   
                <div id="ao1" v-for="(item, index) in listProdup"  @click="clickimage($event, index)" :key="item.image">
                <img :src="item.image" alt="">
           
                </div>
          </div>

  </div>

</template>

<script>
export default {
el:'show',
data(){
    return {
        selectProdup:0,
        listProdup:[
            {
                name:'LAMBORGHINI Loai 1',
                price:10000000000,
                image:'images/100.jpg',
                quantity:5,
            }, {
                 name:'LAMBORGHINI Loai 2',
                 price:20000000000,
                 image:'images/102.jpg',
                 quantity:3,
            }, {
                 name:'LAMBORGHINI Loai 3',
                 price:12000000000,
                 image:'images/103.jpg',
                 quantity:0,
            }, {
                 name:'LAMBORGHINI Loai 4',
                 price:30000000000,
                 image:'images/104.jpg',
                 quantity:6,
            }, {
                 name:'LAMBORGHINI Loai 5',
                 price:43000000000,
                 image:'images/106.jpg',
                 quantity:3,
            },
        ]
    }
},
methods:{
    clickimage(e,index){
        this.selectProdup = index;
    }
},
computed:{
    produpSelect(){
        let index = this.selectProdup;
        return this.listProdup[index];
    }
}


}
</script>

<style scoped>
:root {
    background-color: aliceblue;

}


span h2 {
    width: 340px;
    font-size: 2rem;
    margin-left: 650px;
    margin-top: 30px;
    margin-bottom: 100px;
    border-radius: 20px;
    box-shadow:  5px 5px 3px .9px #999;

}
.show {
    margin-left: 300px;
    display: flex;
}

.show-xe img {
    padding-bottom: 20px;
    padding-bottom: 50px;
    border-radius: 20px;
    width: 450px;
    height: 450px;
}

.ao1 img {
    margin: 0;
    padding: 0;
}

#ao1 {
    margin-top: 650px;
}
#ao1 img:hover {
    border-radius: 50px;
    transition: all 1s;
}
#ao1 img{
    width: 115px;
    height: 100px;
    margin: 0px 10px;
    /* border-radius: 20px; */
    
  
}
/* di chuyển ảnh nhỏ  */
.show_xe {
    display: flex;
    position: relative;
    margin-left: -410px;
    top: -300px;
}
/* Giá Tiền */
.text-xe{
margin-left: 30px;
margin-top: -30px;

}
/* thay đổi tên mầu áo: */
.kieuxe {
    font-size: 1.2rem;
    margin-top: 15px;
}
.text-xe p {
    font-size: 2.5rem;
    margin: 20px 0px;

}
.gia {
    color: red;
    font-size: 1.5rem;
    margin: 20px 0px;
    font-weight: 550;
}
.quantity p {
    font-size: 1.4rem;
}
.buying {
    margin: 20px 0px;
    width: 400px;
    height: 30px;
    font-size: 1rem;
    background-color: aliceblue;
    border-bottom-color: aqua;

}
.buying:hover {
    color: #fff;
    background-color:#333;
    transition: all .7s;
}
.shop {
    margin: 20px 0px;
    width: 400px;
    height: 30px;
    font-size: 1rem;
    background-color: aliceblue;
    border-bottom-color: aqua;

}
.shop:hover {
    color: #fff;
    background-color:#333;
    transition: all .7s;

}


</style>