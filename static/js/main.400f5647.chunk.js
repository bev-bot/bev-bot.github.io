(this["webpackJsonpgnosis-wallet-ui"]=this["webpackJsonpgnosis-wallet-ui"]||[]).push([[0],{254:function(e,t,n){},255:function(e,t,n){},257:function(e,t){},338:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"HC_NFT_ADDRESS",(function(){return E})),n.d(a,"NETWORK_CONFIG",(function(){return F}));var r,i=n(5),s=n(0),u=n.n(s),c=n(49),l=n.n(c),o=(n(254),n(25)),p=(n(255),n(147)),d=n(17),y=n(33),b=n(10),m=n(2),g=n.n(m),h=n(232),j=n(350),v=n(353),T=n(354),O=n(352),f=n(234),x=n(156),w=n(105),C=function(e){return w.a.utils.isAddress(e)||""===e},B=function(e){return e.startsWith("0x")&&10===e.length||""===e},N=function(e){return/^\d*(\.\d*)?$/.test(e)},M=function(e){return/^\d*$/.test(e)},S=n(30),A=n(6),_=n(347),I=n(351),k=n(233),W=n(44),E="0x1234567890123456789012345678901234567890",F={chainId:W.b.BSC,chainName:"Binance Smart Chain",rpcUrls:["https://bsc-dataseed1.binance.org"],nativeCurrency:{name:"BINANCE COIN",symbol:"BNB",decimals:18},blockExplorerUrls:["https://bscscan.com/"]},P=a,L=n(11),G=x.a.div(r||(r=Object(p.a)(["\n  button {\n    margin-left: 2rem;\n  }\n\n  span {\n    color: #f6b426;\n  }\n\n  .ant-btn:hover {\n    opacity: 0.8;\n  }\n"]))),R=function(e){var t=Object(_.a)(),n=t.account,a=t.activateBrowserWallet,r=t.library,i=t.chainId;var u=Object(s.useMemo)((function(){return n?Object(I.b)(n):n}),[n]);return Object(s.useEffect)((function(){n&&Number(i)!==Number(P.NETWORK_CONFIG.chainId)&&null!=i&&null!=r&&r.send("wallet_addEthereumChain",[Object(A.a)(Object(A.a)({},P.NETWORK_CONFIG),{},{chainId:S.a.from(P.NETWORK_CONFIG.chainId).toHexString()})])}),[n,i,r]),Object(L.jsxs)(G,{children:[Object(L.jsxs)("span",{children:["ChainId: ",n?i:"-"]}),Object(L.jsx)(f.a,Object(A.a)(Object(A.a)({onClick:function(){a((function(e){return k.b.error(e.message)}))}},e),{},{children:u||"Connect wallet"}))]})},D=n(93);function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not valid";if(!e)throw new Error(t)}var K=n(8),U=n(9),Q=n(85),H=n(59),J=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];(function(){function e(){Object(K.a)(this,e)}return Object(U.a)(e,null,[{key:"createInterface",value:function(){return new Q.utils.Interface(J)}},{key:"connect",value:function(e,t){return new H.b(e,J,t)}}]),e}()).abi=J;var V=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"},{internalType:"uint256",name:"stableAmount",type:"uint256"},{internalType:"uint256",name:"targetAmount",type:"uint256"}],name:"BuyTokenByToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"}],name:"BuyTokenByToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"MultiSellExactTargetTokensToWBNB",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"SLIPPAGE_SCALE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_CHI_TOKEN_",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_GAS_MAX_RETURN_",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"__ALL__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"__LIQUIDITY__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"__SWITCH__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"canAcceptMaxTestSlippage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceivers",outputs:[{internalType:"address[]",name:"receivers_",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTarget",outputs:[{internalType:"address",name:"migrateToNewContract",type:"address"},{internalType:"address",name:"targetTokenAddress",type:"address"},{internalType:"uint256",name:"gasLimit",type:"uint256"},{internalType:"uint256",name:"sendCountsPerAccount",type:"uint256"},{internalType:"uint256",name:"sendTxAccCounts",type:"uint256"},{internalType:"uint256",name:"lpBNBAmountThreshold",type:"uint256"},{internalType:"uint256",name:"sendIntervalMS",type:"uint256"},{internalType:"address",name:"targetOwner",type:"address"},{internalType:"bytes4",name:"methodSighash",type:"bytes4"},{internalType:"address",name:"stableCoin",type:"address"},{internalType:"string",name:"triggerMode",type:"string"},{internalType:"uint256",name:"hugeTriggerGasPrice_",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_router",type:"address"},{internalType:"address[]",name:"_whitelistSet",type:"address[]"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isOperator",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newContract",type:"address"}],name:"migrateTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"migrateToNewContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"realWantToBuyToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"restartCurrentTarget",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gasMaxReturn",type:"uint256"}],name:"setGasMaxReturn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"},{internalType:"bool",name:"flag",type:"bool"}],name:"setOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_canAcceptMaxSlippage",type:"uint256"},{internalType:"uint256",name:"_targetSellSlippage",type:"uint256"}],name:"setSlippages",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_target",type:"address"},{internalType:"address",name:"_realWantToBuyToken",type:"address"},{internalType:"string",name:"_triggerMode",type:"string"},{internalType:"address",name:"_targetOwner",type:"address"},{internalType:"bytes4",name:"_methodSighash",type:"bytes4"},{internalType:"address",name:"_stableCoin",type:"address"},{internalType:"uint256",name:"_lpBNBAmountThreshold",type:"uint256"},{internalType:"uint256[4]",name:"_buyConfigs",type:"uint256[4]"},{internalType:"address[]",name:"_receivers",type:"address[]"},{internalType:"uint256[3]",name:"_hugeAccountConfigs",type:"uint256[3]"}],name:"setTargetToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_testAmountIn",type:"uint256"}],name:"setTestAmountIn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"targetConfigMap",outputs:[{internalType:"uint256",name:"amountInByWBNB",type:"uint256"},{internalType:"uint256",name:"canAcceptTargetAmountOut",type:"uint256"},{internalType:"uint256",name:"amountOutPerReceiverByTarget",type:"uint256"},{internalType:"uint256",name:"canAcceptMaxWBNBAmountIn",type:"uint256"},{internalType:"uint256",name:"gasLimit",type:"uint256"},{internalType:"uint256",name:"sendCountsPerAccount",type:"uint256"},{internalType:"uint256",name:"sendTxAccCounts",type:"uint256"},{internalType:"uint256",name:"sendIntervalMS",type:"uint256"},{internalType:"uint256",name:"boughtAmount",type:"uint256"},{internalType:"uint256",name:"soldWBNBAmount",type:"uint256"},{internalType:"uint256",name:"lpBNBAmountThreshold",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"targetToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"}],name:"testBuy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address",name:"to",type:"address"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"triggerConfigMap",outputs:[{internalType:"address",name:"targetOwner",type:"address"},{internalType:"bytes4",name:"methodSighash",type:"bytes4"},{internalType:"address",name:"stableCoin",type:"address"},{internalType:"string",name:"mode",type:"string"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],$=function(){function e(){Object(K.a)(this,e)}return Object(U.a)(e,null,[{key:"createInterface",value:function(){return new Q.utils.Interface(V)}},{key:"connect",value:function(e,t){return new H.b(e,V,t)}}]),e}();$.abi=V;var z=function(){function e(t,n){Object(K.a)(this,e),this.SuperBevBotAddress=t,this.provider=n,this.SuperBevBotContract=void 0,this.signer=void 0,this.SuperBevBotContract=$.connect(t,n.getSigner()),this.signer=n.getSigner()}return Object(U.a)(e,[{key:"getTargetConfig",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,n,a,r,i,s,u,c,l,o,p,d,y,b,m,h,j,v,T;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.SuperBevBotContract.getTarget();case 2:return t=e.sent,n=t.targetTokenAddress,a=t.gasLimit,r=t.sendCountsPerAccount,i=t.sendTxAccCounts,s=t.lpBNBAmountThreshold,u=t.sendIntervalMS,c=t.hugeTriggerGasPrice_,e.next=12,this.SuperBevBotContract.targetConfigMap(n);case 12:return l=e.sent,o=l.amountInByWBNB,p=l.canAcceptTargetAmountOut,d=l.boughtAmount,e.next=18,this.SuperBevBotContract.triggerConfigMap(n);case 18:return y=e.sent,b=y.targetOwner,m=y.methodSighash,h=y.stableCoin,j=y.mode,e.next=25,this.SuperBevBotContract.realWantToBuyToken();case 25:return v=e.sent,e.next=28,this.SuperBevBotContract.getReceivers();case 28:return T=e.sent,e.abrupt("return",{targetTokenAddress:n,realWantToBuyToken:v,triggerMode:j,targetOwner:b,methodSighash:m,stableCoin:h,lpBNBAmountThreshold:s,amountInByWBNB:o,amountOutByTarget:p,gasLimit:a.toNumber(),triggerAccountNum:i.toNumber(),receivers:T,hugeTxCount:r.toNumber(),hugeGasPrice:c,hugeTriggerAccountIntervalMs:u.toNumber(),boughtAmount:d});case 30:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setTargetToken",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var n,a,r,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.receivers,a=[t.amountInByWBNB,t.amountOutByTarget,t.gasLimit,t.triggerAccountNum],r=[t.hugeTxCount,t.hugeGasPrice,t.hugeTriggerAccountIntervalMs],e.next=5,this.SuperBevBotContract.setTargetToken(t.targetTokenAddress,t.realWantToBuyToken,t.triggerMode,t.targetOwner,t.methodSighash,t.stableCoin,t.lpBNBAmountThreshold,a,n,r);case 5:return i=e.sent,e.next=8,i.wait();case 8:return e.abrupt("return",i.hash);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function X(){var e=function(){var e=Object(_.a)().library;return Object(s.useMemo)((function(){if(e)return new z("0xC8251A2654ad8550Dd66821678719A24CE65e54A",e)}),[e])}(),t=Object(_.a)().account,n=Object(D.useQueryClient)();return Object(D.useQuery)(["queryBev",{account:t}],Object(y.a)(g.a.mark((function a(){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return q(e),q(t),a.next=4,e.getTargetConfig();case 4:return r=a.sent,a.abrupt("return",{targetConfig:r,setTargetToken:function(){var t=Object(y.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.setTargetToken(a).then(function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.invalidateQueries("queryBev");case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});case 6:case"end":return a.stop()}}),a)}))),{enabled:!!e&&!!t})}var Y,Z=n(131),ee=n(100);function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not valid";if(!e)throw new Error(t)}var ne="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",ae=function(){var e=Object(_.a)().account,t=X(),n=t.data,a=t.isLoading,r=Object(s.useState)("1"),i=Object(b.a)(r,2),u=i[0],c=i[1],l=Object(s.useState)([]),o=Object(b.a)(l,2),p=o[0],m=o[1],x=Object(s.useState)(""),w=Object(b.a)(x,2),A=w[0],I=w[1],k=Object(s.useState)("switch"),W=Object(b.a)(k,2),E=W[0],F=W[1],P=Object(s.useState)(""),G=Object(b.a)(P,2),q=G[0],K=G[1],U=Object(s.useState)(ne),Q=Object(b.a)(U,2),H=Q[0],J=Q[1],V=Object(s.useState)("0x00000000"),$=Object(b.a)(V,2),z=$[0],Y=$[1],ae=Object(s.useState)("0"),ie=Object(b.a)(ae,2),se=ie[0],ue=ie[1],ce=Object(s.useState)("0"),le=Object(b.a)(ce,2),oe=le[0],pe=le[1],de=Object(s.useState)("0"),ye=Object(b.a)(de,2),be=ye[0],me=ye[1],ge=Object(s.useState)("0"),he=Object(b.a)(ge,2),je=he[0],ve=he[1],Te=Object(s.useState)("0"),Oe=Object(b.a)(Te,2),fe=Oe[0],xe=Oe[1],we=Object(s.useState)("0"),Ce=Object(b.a)(we,2),Be=Ce[0],Ne=Ce[1],Me=Object(s.useState)("0"),Se=Object(b.a)(Me,2),Ae=Se[0],_e=Se[1],Ie=Object(D.useMutation)(Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",h.a.error({message:"data loading"}));case 2:return te(n),t={targetTokenAddress:A,realWantToBuyToken:A,triggerMode:E,targetOwner:q,methodSighash:z,stableCoin:H,lpBNBAmountThreshold:Object(Z.parseEther)(se),amountInByWBNB:Object(Z.parseEther)(oe),amountOutByTarget:Object(Z.parseEther)(be),gasLimit:parseInt(je),triggerAccountNum:parseInt(fe),receivers:p,hugeTxCount:parseInt(Be),hugeGasPrice:Object(Z.parseUnits)(Ae,"gwei"),hugeTriggerAccountIntervalMs:2e3,boughtAmount:S.a.from(0)},e.abrupt("return",n.setTargetToken(t));case 5:case"end":return e.stop()}}),e)}))),{onSuccess:function(){return h.a.success({message:"setTarget succeed"})},onError:function(e){var t;return h.a.error({message:"setTarget failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}}),ke=Ie.mutateAsync,We=Ie.isLoading,Ee=function(){for(var e=parseInt(u),t=[],n=function(e){t.push(Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{children:["receiver \u5730\u5740-",e]}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:p[e],onChange:function(t){return C(t.target.value)&&m((function(n){var a=Object(d.a)(n);return a[e]=t.target.value,a}))},placeholder:""},"".concat(e,"-").concat(p[e]))]}))},a=0;a<e;a++)n(a);return t};return a?Object(L.jsx)("div",{className:"tc f2 mt3 mt4-ns",children:Object(L.jsx)(ee.a,{})}):Object(L.jsxs)(re,{children:[Object(L.jsx)(R,{}),Object(L.jsxs)(v.a,{gutter:16,className:"flex mb2 mt3",children:[Object(L.jsx)(T.a,{xs:12,sm:12,md:12,lg:12,children:Object(L.jsxs)("div",{className:"mb4",children:[Object(L.jsx)("h1",{children:"Set Target"}),Object(L.jsx)("div",{children:"Target Token"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:A,onChange:function(e){return C(e.target.value)&&I(e.target.value)},placeholder:""}),Object(L.jsx)("div",{children:"\u89e6\u53d1\u6a21\u5f0f"}),Object(L.jsxs)(O.a,{value:E,dropdownClassName:"marketplaceSelectorDropdown",dropdownMatchSelectWidth:!1,onChange:function(e){return F(e)},children:[Object(L.jsx)(O.a.Option,{value:"switch",children:"\u5f00\u5173\u89e6\u53d1"},"switch"),Object(L.jsx)(O.a.Option,{value:"liquidity",children:"\u6d41\u52a8\u6027\u89e6\u53d1"},"liquidity"),Object(L.jsx)(O.a.Option,{value:"",children:"\u5f00\u5173/\u6d41\u52a8\u6027\u90fd\u89e6\u53d1"},"all")]}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u6536\u5e01\u5730\u5740\u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:u,onChange:function(e){return M(u)&&c(e.target.value)},placeholder:"1"}),Ee()]}),"liquidity"!==E&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"Target Owner"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:q,onChange:function(e){return C(e.target.value)&&K(e.target.value)},placeholder:""}),Object(L.jsx)("div",{children:"Target LP \u7684\u7a33\u5b9a\u5e01\u5730\u5740"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:H,onChange:function(e){return C(e.target.value)&&J(e.target.value)},placeholder:ne}),Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684 MethodId"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:z,onChange:function(e){return B(e.target.value)&&Y(e.target.value)},placeholder:"0x00000000"})]}),"switch"!==E&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684\u6d41\u52a8\u6027\u9608\u503c"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:se,onChange:function(e){return N(e.target.value)&&ue(e.target.value)},placeholder:"0",suffix:"WBNB"})]}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u5e0c\u671b\u4e70\u5165 WBNB \u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:oe,onChange:function(e){return N(e.target.value)&&pe(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u53ef\u4ee5\u63a5\u53d7\u4e70\u5165\u7684\u6700\u5c11\u7684 Target \u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:be,onChange:function(e){return N(e.target.value)&&me(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u89e6\u53d1\u4ea4\u6613\u7684 gasLimit"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:je,onChange:function(e){return M(e.target.value)&&ve(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u9700\u8981\u89e6\u53d1\u4ea4\u6613\u7684\u8d26\u53f7\u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:fe,onChange:function(e){return M(e.target.value)&&xe(e.target.value)},placeholder:"0"})]}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7, \u89e6\u53d1\u9ad8 gasPrice \u4ea4\u6613\u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:Be,onChange:function(e){return M(e.target.value)&&Ne(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7\u7684 gasPrice"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:Ae,onChange:function(e){return N(e.target.value)&&_e(e.target.value)},placeholder:"0"})]}),Object(L.jsx)(f.a,{loading:We,className:"mw-100 ml3-ns ml4 mt3 mt0-ns w4 mr4 mr0-ns",type:"primary",onClick:function(){return ke()},disabled:!n||!e,children:"Set Target"})]})}),Object(L.jsx)(T.a,{xs:12,sm:12,md:12,lg:12,children:Object(L.jsxs)("div",{className:"mb4",children:[Object(L.jsx)("h1",{children:"\u5f53\u524d\u5408\u7ea6\u5df2\u8bbe\u7f6e\u7684\u4fe1\u606f"}),Object(L.jsx)("div",{children:"Target Token"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:A,onChange:function(e){return C(e.target.value)&&I(e.target.value)},placeholder:""}),Object(L.jsx)("div",{children:"\u89e6\u53d1\u6a21\u5f0f"}),Object(L.jsxs)(O.a,{value:E,dropdownClassName:"marketplaceSelectorDropdown",dropdownMatchSelectWidth:!1,onChange:function(e){return F(e)},children:[Object(L.jsx)(O.a.Option,{value:"switch",children:"\u5f00\u5173\u89e6\u53d1"},"switch"),Object(L.jsx)(O.a.Option,{value:"liquidity",children:"\u6d41\u52a8\u6027\u89e6\u53d1"},"liquidity"),Object(L.jsx)(O.a.Option,{value:"",children:"\u5f00\u5173/\u6d41\u52a8\u6027\u90fd\u89e6\u53d1"},"all")]}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u6536\u5e01\u5730\u5740\u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:u,onChange:function(e){return M(u)&&c(e.target.value)},placeholder:"1"}),Ee()]}),"liquidity"!==E&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"Target Owner"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:q,onChange:function(e){return C(e.target.value)&&K(e.target.value)},placeholder:""}),Object(L.jsx)("div",{children:"Target LP \u7684\u7a33\u5b9a\u5e01\u5730\u5740"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:H,onChange:function(e){return C(e.target.value)&&J(e.target.value)},placeholder:ne}),Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684 MethodId"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:z,onChange:function(e){return B(e.target.value)&&Y(e.target.value)},placeholder:"0x00000000"})]}),"switch"!==E&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684\u6d41\u52a8\u6027\u9608\u503c"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:se,onChange:function(e){return N(e.target.value)&&ue(e.target.value)},placeholder:"0",suffix:"WBNB"})]}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u5e0c\u671b\u4e70\u5165 WBNB \u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:oe,onChange:function(e){return N(e.target.value)&&pe(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u53ef\u4ee5\u63a5\u53d7\u4e70\u5165\u7684\u6700\u5c11\u7684 Target \u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:be,onChange:function(e){return N(e.target.value)&&me(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u89e6\u53d1\u4ea4\u6613\u7684 gasLimit"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:je,onChange:function(e){return M(e.target.value)&&ve(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u9700\u8981\u89e6\u53d1\u4ea4\u6613\u7684\u8d26\u53f7\u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:fe,onChange:function(e){return M(e.target.value)&&xe(e.target.value)},placeholder:"0"})]}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7, \u89e6\u53d1\u9ad8 gasPrice \u4ea4\u6613\u6570\u91cf"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:Be,onChange:function(e){return M(e.target.value)&&Ne(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7\u7684 gasPrice"}),Object(L.jsx)(j.a,{className:"ba b--grey mr2 mb2",value:Ae,onChange:function(e){return N(e.target.value)&&_e(e.target.value)},placeholder:"0"})]}),Object(L.jsx)(f.a,{loading:We,className:"mw-100 ml3-ns ml4 mt3 mt0-ns w4 mr4 mr0-ns",type:"primary",onClick:function(){return ke()},disabled:!n||!e,children:"Set Target"})]})})]})]})},re=x.a.div(Y||(Y=Object(p.a)(["\n  padding: 6rem;\n\n  input.ant-input::placeholder {\n    color: rgba(69, 73, 80, 0.81);\n  }\n"]))),ie=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)("div",{children:Object(L.jsx)(o.c,{children:Object(L.jsx)(o.a,{index:!0,element:Object(L.jsx)(ae,{})})})})})},se=n(349),ue=n(185),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,355)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};l.a.render(Object(L.jsx)(u.a.StrictMode,{children:Object(L.jsx)(D.QueryClientProvider,{client:new D.QueryClient,children:Object(L.jsx)(ue.a,{children:Object(L.jsx)(se.a,{config:{readOnlyChainId:P.NETWORK_CONFIG.chainId,readOnlyUrls:Object(i.a)({},P.NETWORK_CONFIG.chainId,P.NETWORK_CONFIG.rpcUrls),pollingInterval:3e3},children:Object(L.jsx)(ie,{})})})})}),document.getElementById("root")),ce()}},[[338,1,2]]]);