<template>
    <div class="menu">
            <div class="logo">
            <img src="images/logo.png" alt="">
            </div>

            <div class="search">
                <input type="text" placeholder=" " v-model="search">
                <label for="">search</label>
            </div>
                <a href="/"><li class="trangchu">Trang Chủ</li></a>
                <a href="/lambo"><li>LAMBORGHINI</li></a>
                <a href="/bmv"><li>BMV</li></a>
                <a href="/porsche"><li>PORSCHE</li></a>

                <div class="telephone">
                <i class="fas fa-phone-square-alt"> 0359266182</i>
                </div>

            <div class="internet">
                <a href="https://www.facebook.com/watch/?ref=tab"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-youtube"></i></a>
            </div>
    </div>


</template>
<script>


</script>

<style scoped>
/* menu */
.menu {
    width: 300px;
    height: 800px;
    background-color: whitesmoke;
    /* hiển thị thanh cuộn */
    display: block;
    position:fixed;
    margin-top: -30px;
}
.menu a:hover {

}
.menu a {
    text-decoration: none;
}
.menu li {
    list-style: none;
    font-size: 1.5rem;
    align-items: center;
    padding:10px ;
    color: black;
    margin: 40px 30px;
    border-radius: 20px ;
    cursor: pointer;
   text-align: center;
   text-decoration: none; 
    transition: .5s ease-in;
    position: relative;

}
/* đổ bóng  */
.menu .trangchu {
    box-shadow:  5px 5px 5px 0px #999;
    color: violet;
}

.menu li:hover {
    color: #fff;
    background-color: black;
    transition: 1s ease;
    box-shadow: none;
}

.logo img {
    width: 190px;
    height: 30px;
    margin: 60px 60px;
}



/* search */
.search {
    position: relative;
}
.search input {
    width: 220px;
    height: 28px;
    border-radius: 10px;
    margin: 16px;
    border-color: #333;
    
    padding: 0 24px ;
   
    
}

.search label {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: 42px;
    user-select: none;
    color: #999;
    transition: .25s ease-in;
}

/* khi focus vào thì chữ search di chuyển lên trên */
 input:not(:placeholder-shown) +label,
 input:focus + label {
     top: 15px;
     padding: 0px 10px;
     display: inline-block;
     background-color: whitesmoke;
 }



/* telephone */
.telephone i {
    font-size: 1.5rem;
    padding:10px 38px ;
    color: black;
    margin: 0px 30px;
    border-radius: 20px ;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    transition: .5s ease-in;

}

.telephone i:hover {
    color: #fff;
    background-color: red;
    transition: 1s ease;

}

/* internet */
.internet i {
    font-size: 1.5rem;
    color: #333;
    margin-left: 40px;
    margin-top: 30px;
    border-radius: 20px ;
    text-align: center;
    cursor: pointer;
    padding: 10px;

}
.internet i:hover {
    color: greenyellow;
}
</style>