(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-laporan-print"],{2144:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"font-family":"times new roman"}},[s("div",{staticClass:"no-print bg-black",staticStyle:{color:"White"}},[s("hr"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-2"},[s("button",{staticClass:"btn btn-sm btn-outline-danger no-print mt-4",attrs:{type:"button"},on:{click:function(a){return t.back()}}},[t._v("Go Back!")]),s("br"),s("br")]),s("div",{staticClass:"col-sm-4"},[t._v(" Mengetahui Perangkat Desa : "),s("tr",[s("td",[t._v("Jabatan ")]),s("td",[t._v(" : ")]),s("td",[s("div",{staticClass:"sm-form "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jabatan,expression:"vdata.jabatan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"Jabatan",name:"Jabatan",placeholder:"Jabatan"},domProps:{value:t.vdata.jabatan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"jabatan",a.target.value)}}})]),s("div",{staticClass:"sm-form "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"Nama",name:"Nama",placeholder:"Nama"},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})])])])]),s("div",{staticClass:"col-sm-6"},[s("button",{staticClass:"btn btn-sm btn-primary float-right pr-4 mt-4",attrs:{type:"button"},on:{click:function(a){return t.print()}}},[s("span",{staticClass:"typcn typcn-printer"}),t._v(" Print")])])])]),s("hr",{staticClass:"style13"})]),s("div",{},[t._m(0),s("img",{staticClass:"img-fluid",staticStyle:{width:"100%",height:"20px"},attrs:{src:e("f703")}}),s("p",{staticClass:"text-center underline text-uppercase",staticStyle:{"font-size":"21px","font-weight":"bold"}},[t._v("LAPORAN DATA KETERANGAN "+t._s(t._f("nounderline")("BTN BANJARBARU")))]),s("br"),s("p",[t._v("Jumlah Data : "+t._s(t.$store.state.print2.length))]),s("div",{staticClass:"table-responsive",staticStyle:{width:"100%",display:"table","overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[s("table",{staticStyle:{border:"1px solid black",widht:"100%",margin:"1em auto"},attrs:{border:"1"}},[s("thead",{staticClass:"mdb-color bg-white",staticStyle:{width:"100%"}},[s("tr",{staticStyle:{color:"black"}},[s("th",{staticClass:"uppercase p-1",staticStyle:{"font-size":"14px",padding:"7px",border:"1px solid"}},[t._v("NO")]),t._l(t.key,(function(a,e){return s("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:e+"key",staticClass:"uppercase p-1",staticStyle:{"font-size":"11px",padding:"2px",border:"1px solid"}},[t._v(t._s(t._f("nounderline")(a)))])}))],2)]),s("tbody",t._l(t.$store.state.print2,(function(a,e){return s("tr",{key:e+"print",staticStyle:{"font-size":"12px"}},[s("td",{staticClass:"p-1",staticStyle:{"font-size":"12px",border:"1px solid",padding:"2px"}},[t._v(t._s(e+1))]),t._l(a,(function(a,e,n){return s("td",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(e),expression:"!less.includes(keys)"}],key:n,staticClass:"p-1",staticStyle:{"font-size":"12px",border:"1px solid",padding:"2px"}},[t._v(t._s(a))])}))],2)})),0)])]),s("div",{staticClass:"float-right",staticStyle:{"padding-right":"70px","font-size":"19px"}},[s("p",[t._v("Banjarbaru, "+t._s(t.format(new Date)))]),s("p",[t._v(t._s(t.ttd.Jabatan))]),s("br"),s("br"),s("p",{staticClass:"underline font-bold",staticStyle:{"font-size":"19px"}},[t._v(t._s(t.ttd.Nama))])])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("img",{staticClass:"kinoLightBox img-fluid rounded-top z-depth-2",staticStyle:{"margin-left":"10px",position:"absolute",left:"20px",height:"80px"},attrs:{src:e("9658"),alt:"no found"}})]),s("div",{staticClass:"col-9"},[s("p",{staticClass:"pl-3 text-center",staticStyle:{"font-size":"25px","line-height":"1.5","line-spacing":"3px"}},[t._v(" PT. BANK TABUNGAN NEGARA (PERSERO) Tbk "),s("br"),t._v("KANTOR CABANG BANJARBARU ")]),s("p",{staticClass:"pl-3 text-center",staticStyle:{"font-size":"18px"}}),s("p",{staticClass:"text-center",staticStyle:{"font-size":"18px"}},[t._v("Jl. A. Yani No.11, Guntung Payung, Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan 70714, Indonesia")])])])}],i=(e("b64b"),e("ac1f"),e("5319"),e("1276"),e("03a0")),r={data:function(){return{less:["UrutID","Gambar","_id","username"],thnya:[],records:"",key:[],vdata:{jabatan:"Kepala Bagian",nama:"....................................."},listnya:[{Nama:"Taufik",Jabatan:"Programmer"},{Nama:"Akbar",Jabatan:"Desainer"},{Nama:"agendabtn",Jabatan:"Web Master"},{Nama:"Kino",Jabatan:"Traveller"}],ttd:{Nama:".................................",Jabatan:"Kepala Bagian"}}},filters:{nounderline:function(t){return t.replace("_"," ")}},methods:{getKeys:function(){var t=this.$store.state.print2[0];t=Object.keys(t),this.key=t},scramble:function(t){for(var a="",e="",s=0;s<t.length;s++)a="",a=t.charAt(s),"a"==a?a=a.replace("a","x"):"b"==a?a=a.replace("b","v"):"c"==a?a=a.replace("c","u"):"d"==a?a=a.replace("d","w"):"e"==a?a=a.replace("e","y"):"f"==a?a=a.replace("f","z"):"g"==a?a=a.replace("g","t"):"h"==a?a=a.replace("h","s"):"i"==a?a=a.replace("i","r"):"j"==a?a=a.replace("j","q"):"k"==a?a=a.replace("k","p"):"l"==a?a=a.replace("l","o"):"m"==a?a=a.replace("m","n"):"z"==a?a=a.replace("z","f"):"y"==a?a=a.replace("y","e"):"x"==a?a=a.replace("x","a"):"w"==a?a=a.replace("w","d"):"v"==a?a=a.replace("v","b"):"u"==a?a=a.replace("u","c"):"t"==a?a=a.replace("t","g"):"s"==a?a=a.replace("s","h"):"r"==a?a=a.replace("r","i"):"q"==a?a=a.replace("q","j"):"p"==a?a=a.replace("p","k"):"o"==a?a=a.replace("o","l"):"n"==a?a=a.replace("n","m"):"1"==a?a=a.replace("1","0"):"2"==a?a=a.replace("2","8"):"3"==a?a=a.replace("3","9"):"4"==a?a=a.replace("4","7"):"5"==a?a=a.replace("5","6"):"0"==a?a=a.replace("0","1"):"8"==a?a=a.replace("8","2"):"9"==a?a=a.replace("9","3"):"7"==a?a=a.replace("7","4"):"6"==a?a=a.replace("6","5"):" "==a?a=a.replace(" ","_"):"_"==a?a=a.replace("_"," "):"*"==a?a=a.replace("*","/"):"/"==a?a=a.replace("/","*"):","==a?a=a.replace(",","^"):"^"==a&&(a=a.replace("^",",")),e+=a;return e},ganti:function(t){console.log(t),this.ttd.Nama=JSON.parse(t).Nama,this.ttd.Jabatan=JSON.parse(t).Jabatan,this.$forceUpdate()},print:function(){window.print()},back:function(){this.$router.go(-1)},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:i})}},mounted:function(){var t=this;this.less=this.$route.query.less.split(","),setTimeout((function(){t.getKeys()}),500)}},l=r,c=(e("9b4d"),e("2877")),o=Object(c["a"])(l,s,n,!1,null,"0ac0e580",null);a["default"]=o.exports},9658:function(t,a,e){t.exports=e.p+"img/btn.4ca301eb.png"},"9b4d":function(t,a,e){"use strict";var s=e("c778"),n=e.n(s);n.a},c778:function(t,a,e){},f703:function(t,a,e){t.exports=e.p+"img/line.6a5ee0b6.jpg"}}]);
//# sourceMappingURL=page-laporan-print.7ae4ef4f.js.map