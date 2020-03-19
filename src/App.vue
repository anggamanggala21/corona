<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: 'Montserrat' !important;  
}
.h-full {
  min-height: 100vh;
}
.w-full {
  width: 100%;
}
.bg-dark2 {
  background: #1e272e;
  color: white;
}
.table-dark {
  background-color: #34495e !important;
}
.title {
  font-size: 30px;
}
.sub-title {
  font-size: 26px;
}
.table thead th {
  vertical-align: middle !important;
}
@media only screen and (max-width: 768px) {
  .title{
    font-size: 24px;
    text-align: center;
  }
  .sub-title {
    font-size: 22px;
  }
}
</style>
