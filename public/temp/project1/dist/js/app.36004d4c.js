(function(t){function e(e){for(var a,s,c=e[0],i=e[1],u=e[2],l=0,_=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&_.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(_.length)_.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c0d":function(t,e,n){"use strict";var a=n("ffb3"),o=n.n(a);o.a},"0e33":function(t,e,n){"use strict";var a=n("be73"),o=n.n(a);o.a},"4a93":function(t,e,n){"use strict";var a=n("6940"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("BOOTSTRAP")]),n("button",{staticClass:"btn btn-primary"},[t._v("LOVE U")]),n("topbar"),n("HelloWorld",{attrs:{welcome:t.welcome}}),n("router-view")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.indicator)+"--"+t._s(t.welcome)+" ")]),n("h1",[t._v("hi it is me "+t._s(t.myname))]),n("button",{on:{click:t.change_name}},[t._v("click")]),n("h1",[t._v(t._s(t.mynewname))])])},i=[],u={name:"HelloWorld",props:["welcome"],data:function(){return{myname:"pramod",indicator:""}},methods:{change_name:function(){"PRAMOD"==this.myname?this.myname="VINOD":this.myname="PRAMOD"}},computed:{mynewname:function(){return this.myname}},watch:{myname:function(){var t=this;this.indicator="your name changed successfully",setTimeout((function(){t.indicator=""}),3e3)}}},d=u,l=(n("d702"),n("2877")),_=Object(l["a"])(d,c,i,!1,null,"647c5297",null),m=_.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("ul",t._l(t.nav_items,(function(e){return n("li",{key:e},[n("router-link",{attrs:{to:e}},[t._v(t._s(e))])],1)})),0)])])},p=[],v={name:"topbar",data:function(){return{nav_items:["home","about us","contact us","list","make"]}}},h=v,b=(n("0c0d"),Object(l["a"])(h,f,p,!1,null,"7af9de71",null)),y=b.exports,w={name:"app",data:function(){return{welcome:"i pramod welcome you all to this group"}},components:{HelloWorld:m,topbar:y}},g=w,k=(n("6187"),Object(l["a"])(g,r,s,!1,null,"fe2f27ae",null)),O=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" it is for list record component "+t._s(t.my_new_data)+" ")])},j=[],x={computed:{my_new_data:function(){return this.$store.state.mycollection}}},E=x,P=Object(l["a"])(E,$,j,!1,null,null,null),T=P.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" it is my make list records "),t._l(t.mydata,(function(e,a){return n("div",{key:a,staticClass:"myname"},[t._v(t._s(e)+"-"+t._s(a))])})),n("input",{directives:[{name:"model",rawName:"v-model",value:t.new_member,expression:"new_member"}],attrs:{type:"text"},domProps:{value:t.new_member},on:{enter:t.add_new_member,input:function(e){e.target.composing||(t.new_member=e.target.value)}}}),n("button",{on:{click:t.add_new_member}},[t._v("Add New Member")]),n("fatch_data")],2)},C=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("MY POST DATA ")]),t._v(" "+t._s(t.loading_status)+" "),t._l(t.my_new_data,(function(e){return n("div",{key:e.id},[n("div",{staticClass:"mypost"},[n("div",{staticClass:"mytitle",on:{click:function(n){return t.show_post_body(e)}}},[t._v(" "+t._s(e.title)+" "+t._s(e.show_status)+" ")]),e.show_status?n("div",{staticClass:"postbody"},[t._v(" "+t._s(e.body)+" ")]):t._e()])])}))],2)},M=[],D={name:"fatch_data",data:function(){return{}},computed:{loading_status:function(){return this.$store.state.loading_status},my_new_data:function(){return this.$store.getters.myfatchdata}},methods:{show_post_body:function(t){0==t.show_status?t.show_status=!0:t.show_status=!1,alert(t.show_status)}}},H=D,N=(n("adc8"),Object(l["a"])(H,S,M,!1,null,"453d87b0",null)),L=N.exports,R={components:{fatch_data:L},data:function(){return{new_member:""}},computed:{mydata:function(){return this.$store.state.mycollection},myfatch:function(){return this.$store.getters.myfatchdata}},created:function(){this.$store.dispatch("get_post_record")},methods:{add_new_member:function(){this.$store.commit("add_new_member",this.new_member),this.new_member=""}}},W=R,G=(n("0e33"),Object(l["a"])(W,A,C,!1,null,"0d54c7ad",null)),I=G.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"test_record"}},[n("h1",[t._v("It is used to fatch data from database ")]),n("button",{on:{click:t.get_data_base_record}},[t._v("Click to know all data in database")]),n("div",[t._v(" "+t._s(t.database_record)+" ")]),t._l(t.database_record,(function(e){return n("div",{key:e._id,staticClass:"myrecord"},[t._v(" "+t._s(t.mykey=Object.keys(e))+" "),t._l(t.mykey,(function(a,o){return n("div",{key:o},[n("h1",[t._v(t._s(a))]),n("div",[n("u",[t._v("key:")]),t._v(" is "),n("u",[t._v(t._s(a)+" ")]),t._v(" and "),n("u",[t._v("value ")]),t._v(" is "),n("u",[t._v(" "+t._s(e[a])+" ")])])])}))],2)})),n("update_database")],2)},U=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"test_record"}},t._l(t.database_record,(function(e){return n("div",{key:e._id,staticClass:"myrecord"},[n("form",[t._v(" "+t._s(t.mykey=Object.keys(e))+" "),t._l(t.mykey,(function(a,o){return n("div",{key:o},[n("h1",[t._v(t._s(a))]),n("div",[n("u",[t._v("key:")]),t._v(" is "),n("u",[t._v(t._s(a)+" ")]),t._v(" and "),n("u",[t._v("value ")]),t._v(" is "),n("input",{attrs:{type:"text"},domProps:{value:e[a]}})])])})),n("input",{attrs:{type:"button",value:"UPDATE"},on:{click:function(n){return t.send_post_data(e)}}})],2)])})),0)},B=[],Y={data:function(){return{}},computed:{database_record:function(){return this.$store.state.database_data}},methods:{get_data_base_record:function(){this.$store.dispatch("get_database_record")},send_post_data:function(t){alert("love you manisha"+t)}},created:function(){}},q=Y,z=(n("4a93"),Object(l["a"])(q,V,B,!1,null,"5e2a7f57",null)),F=z.exports,K={components:{update_database:F},data:function(){return{}},computed:{database_record:function(){return this.$store.state.database_data}},methods:{get_data_base_record:function(){this.$store.dispatch("get_database_record")}},created:function(){}},Q=K,X=(n("9bf5"),Object(l["a"])(Q,J,U,!1,null,"b7d49bfc",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" it is home page ")])},et=[],nt={name:"home",data:function(){return{}},computed:{},methods:{}},at=nt,ot=Object(l["a"])(at,tt,et,!1,null,"fbe53ed6",null),rt=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" it is about us page ")])},ct=[],it={name:"about us",data:function(){return{}},computed:{},methods:{}},ut=it,dt=Object(l["a"])(ut,st,ct,!1,null,"4022e1b0",null),lt=dt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" it is contact us page ")])},mt=[],ft={name:"home",data:function(){return{}},computed:{},methods:{}},pt=ft,vt=Object(l["a"])(pt,_t,mt,!1,null,"30d0ac56",null),ht=vt.exports,bt=[{path:"/contact us",component:ht},{path:"/about us",component:lt},{path:"/home",component:rt},{path:"/make",component:I},{path:"/list",component:T},{path:"/mytest",component:Z}],yt=n("2f62"),wt=n("bc3a"),gt=n.n(wt);a["a"].use(yt["a"]);var kt=new yt["a"].Store({state:{mycollection:["pramod","vinod","sarita","kavita"],myfatch:"",loading_status:"Loading....",show_status:"",database_data:"Loading.....",post_data:"Post the Loading...."},getters:{myfatchdata:function(t){return t.myfatch}},actions:{get_post_record:function(t){var e=t.commit,n=t.state;gt.a.get("").then((function(t){n.loading_status="",e("CHANGE_STATE",t.data)}))},get_database_record:function(t){var e=t.state;gt.a.get("http://localhost:3000/mytest").then((function(t){e.database_data=t.data}))},post_data_to_server:function(t){gt.a.get("http://localhost:3000/post_data",t).then((function(t){state.database_data=t.data}))}},mutations:{add_new_member:function(t,e){t.mycollection.push(e)},CHANGE_STATE:function(t,e){for(var n=0;n<e.length;n++)e[n].show_status=!1;t.myfatch=e}}});n("1157"),n("4989"),n("ab8b");a["a"].config.productionTip=!1,a["a"].use(o["a"]);var Ot=new o["a"]({routes:bt,mode:"history"});new a["a"]({store:kt,router:Ot,render:function(t){return t(O)}}).$mount("#app")},"5c37":function(t,e,n){},6187:function(t,e,n){"use strict";var a=n("fa15"),o=n.n(a);o.a},6940:function(t,e,n){},"9bf5":function(t,e,n){"use strict";var a=n("5c37"),o=n.n(a);o.a},adc8:function(t,e,n){"use strict";var a=n("e6c0"),o=n.n(a);o.a},b722:function(t,e,n){},be73:function(t,e,n){},d702:function(t,e,n){"use strict";var a=n("b722"),o=n.n(a);o.a},e6c0:function(t,e,n){},fa15:function(t,e,n){},ffb3:function(t,e,n){}});
//# sourceMappingURL=app.36004d4c.js.map