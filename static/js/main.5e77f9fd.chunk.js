(this["webpackJsonpgnosis-wallet-ui"]=this["webpackJsonpgnosis-wallet-ui"]||[]).push([[0],{254:function(e,t,n){},255:function(e,t,n){},257:function(e,t){},338:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"HC_NFT_ADDRESS",(function(){return W})),n.d(a,"NETWORK_CONFIG",(function(){return E}));var r,s=n(5),i=n(0),u=n.n(i),c=n(49),l=n.n(c),o=(n(254),n(25)),p=(n(255),n(147)),d=n(17),y=n(33),b=n(11),m=n(2),g=n.n(m),j=n(232),h=n(350),O=n(353),v=n(354),T=n(352),f=n(234),x=n(156),w=n(87),B=function(e){return w.a.utils.isAddress(e)||""===e},N=function(e){return/^\d*(\.\d*)?$/.test(e)},C=function(e){return/^\d*$/.test(e)},M=n(30),A=n(6),S=n(347),I=n(351),_=n(233),k=n(44),W="0x1234567890123456789012345678901234567890",E={chainId:k.b.BSC,chainName:"Binance Smart Chain",rpcUrls:["https://bsc-dataseed1.binance.org"],nativeCurrency:{name:"BINANCE COIN",symbol:"BNB",decimals:18},blockExplorerUrls:["https://bscscan.com/"]},F=a,P=n(10),L=x.a.div(r||(r=Object(p.a)(["\n  button {\n    margin-left: 2rem;\n  }\n\n  span {\n    color: #f6b426;\n  }\n\n  .ant-btn:hover {\n    opacity: 0.8;\n  }\n"]))),G=function(e){var t=Object(S.a)(),n=t.account,a=t.activateBrowserWallet,r=t.library,s=t.chainId;var u=Object(i.useMemo)((function(){return n?Object(I.b)(n):n}),[n]);return Object(i.useEffect)((function(){n&&Number(s)!==Number(F.NETWORK_CONFIG.chainId)&&null!=s&&null!=r&&r.send("wallet_addEthereumChain",[Object(A.a)(Object(A.a)({},F.NETWORK_CONFIG),{},{chainId:M.a.from(F.NETWORK_CONFIG.chainId).toHexString()})])}),[n,s,r]),Object(P.jsxs)(L,{children:[Object(P.jsxs)("span",{children:["ChainId: ",n?s:"-"]}),Object(P.jsx)(f.a,Object(A.a)(Object(A.a)({onClick:function(){a((function(e){return _.b.error(e.message)}))}},e),{},{children:u||"Connect wallet"}))]})},R=n(95);function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not valid";if(!e)throw new Error(t)}var q=n(8),K=n(9),U=n(86),Q=n(59),H=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];(function(){function e(){Object(q.a)(this,e)}return Object(K.a)(e,null,[{key:"createInterface",value:function(){return new U.utils.Interface(H)}},{key:"connect",value:function(e,t){return new Q.b(e,H,t)}}]),e}()).abi=H;var J=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"},{internalType:"uint256",name:"stableAmount",type:"uint256"},{internalType:"uint256",name:"targetAmount",type:"uint256"}],name:"BuyTokenByToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"}],name:"BuyTokenByToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"MultiSellExactTargetTokensToWBNB",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"SLIPPAGE_SCALE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_CHI_TOKEN_",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_GAS_MAX_RETURN_",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"__ALL__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"__LIQUIDITY__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"__SWITCH__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"canAcceptMaxTestSlippage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceivers",outputs:[{internalType:"address[]",name:"receivers_",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTarget",outputs:[{internalType:"address",name:"migrateToNewContract",type:"address"},{internalType:"address",name:"targetTokenAddress",type:"address"},{internalType:"uint256",name:"gasLimit",type:"uint256"},{internalType:"uint256",name:"sendCountsPerAccount",type:"uint256"},{internalType:"uint256",name:"sendTxAccCounts",type:"uint256"},{internalType:"uint256",name:"lpBNBAmountThreshold",type:"uint256"},{internalType:"uint256",name:"sendIntervalMS",type:"uint256"},{internalType:"address",name:"targetOwner",type:"address"},{internalType:"bytes4",name:"methodSighash",type:"bytes4"},{internalType:"address",name:"stableCoin",type:"address"},{internalType:"string",name:"triggerMode",type:"string"},{internalType:"uint256",name:"hugeTriggerGasPrice_",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_router",type:"address"},{internalType:"address[]",name:"_whitelistSet",type:"address[]"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isOperator",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newContract",type:"address"}],name:"migrateTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"migrateToNewContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"realWantToBuyToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"restartCurrentTarget",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gasMaxReturn",type:"uint256"}],name:"setGasMaxReturn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"},{internalType:"bool",name:"flag",type:"bool"}],name:"setOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_canAcceptMaxSlippage",type:"uint256"},{internalType:"uint256",name:"_targetSellSlippage",type:"uint256"}],name:"setSlippages",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_target",type:"address"},{internalType:"address",name:"_realWantToBuyToken",type:"address"},{internalType:"string",name:"_triggerMode",type:"string"},{internalType:"address",name:"_targetOwner",type:"address"},{internalType:"bytes4",name:"_methodSighash",type:"bytes4"},{internalType:"address",name:"_stableCoin",type:"address"},{internalType:"uint256",name:"_lpBNBAmountThreshold",type:"uint256"},{internalType:"uint256[4]",name:"_buyConfigs",type:"uint256[4]"},{internalType:"address[]",name:"_receivers",type:"address[]"},{internalType:"uint256[3]",name:"_hugeAccountConfigs",type:"uint256[3]"}],name:"setTargetToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_testAmountIn",type:"uint256"}],name:"setTestAmountIn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"targetConfigMap",outputs:[{internalType:"uint256",name:"amountInByWBNB",type:"uint256"},{internalType:"uint256",name:"canAcceptTargetAmountOut",type:"uint256"},{internalType:"uint256",name:"amountOutPerReceiverByTarget",type:"uint256"},{internalType:"uint256",name:"canAcceptMaxWBNBAmountIn",type:"uint256"},{internalType:"uint256",name:"gasLimit",type:"uint256"},{internalType:"uint256",name:"sendCountsPerAccount",type:"uint256"},{internalType:"uint256",name:"sendTxAccCounts",type:"uint256"},{internalType:"uint256",name:"sendIntervalMS",type:"uint256"},{internalType:"uint256",name:"boughtAmount",type:"uint256"},{internalType:"uint256",name:"soldWBNBAmount",type:"uint256"},{internalType:"uint256",name:"lpBNBAmountThreshold",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"targetToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"}],name:"testBuy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address",name:"to",type:"address"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"triggerConfigMap",outputs:[{internalType:"address",name:"targetOwner",type:"address"},{internalType:"bytes4",name:"methodSighash",type:"bytes4"},{internalType:"address",name:"stableCoin",type:"address"},{internalType:"string",name:"mode",type:"string"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],V=function(){function e(){Object(q.a)(this,e)}return Object(K.a)(e,null,[{key:"createInterface",value:function(){return new U.utils.Interface(J)}},{key:"connect",value:function(e,t){return new Q.b(e,J,t)}}]),e}();V.abi=J;var Z=function(){function e(t,n){Object(q.a)(this,e),this.SuperBevBotAddress=t,this.provider=n,this.SuperBevBotContract=void 0,this.signer=void 0,this.SuperBevBotContract=V.connect(t,n.getSigner()),this.signer=n.getSigner()}return Object(K.a)(e,[{key:"getTargetConfig",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,n,a,r,s,i,u,c,l,o,p,d,y,b,m,j,h,O,v;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.SuperBevBotContract.getTarget();case 2:return t=e.sent,n=t.targetTokenAddress,a=t.gasLimit,r=t.sendCountsPerAccount,s=t.sendTxAccCounts,i=t.lpBNBAmountThreshold,u=t.sendIntervalMS,c=t.hugeTriggerGasPrice_,e.next=12,this.SuperBevBotContract.targetConfigMap(n);case 12:return l=e.sent,o=l.amountInByWBNB,p=l.canAcceptTargetAmountOut,d=l.boughtAmount,e.next=18,this.SuperBevBotContract.triggerConfigMap(n);case 18:return y=e.sent,b=y.targetOwner,m=y.methodSighash,j=y.stableCoin,h=y.mode,e.next=25,this.SuperBevBotContract.realWantToBuyToken();case 25:return O=e.sent,e.next=28,this.SuperBevBotContract.getReceivers();case 28:return v=e.sent,e.abrupt("return",{targetTokenAddress:n,realWantToBuyToken:O,triggerMode:h,targetOwner:b,methodSighash:m,stableCoin:j,lpBNBAmountThreshold:i,amountInByWBNB:o,amountOutByTarget:p,gasLimit:a.toNumber(),triggerAccountNum:s.toNumber(),receivers:v,hugeTxCount:r.toNumber(),hugeGasPrice:c,hugeTriggerAccountIntervalMs:u.toNumber(),boughtAmount:d});case 30:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setTargetToken",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var n,a,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.receivers,a=[t.amountInByWBNB,t.amountOutByTarget,t.gasLimit,t.triggerAccountNum],r=[t.hugeTxCount,t.hugeGasPrice,t.hugeTriggerAccountIntervalMs],e.next=5,this.SuperBevBotContract.setTargetToken(t.targetTokenAddress,t.realWantToBuyToken,t.triggerMode,t.targetOwner,t.methodSighash,t.stableCoin,t.lpBNBAmountThreshold,a,n,r);case 5:return s=e.sent,e.next=8,s.wait();case 8:return e.abrupt("return",s.hash);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function $(){var e=function(){var e=Object(S.a)().library;return Object(i.useMemo)((function(){if(e)return new Z("0xC8251A2654ad8550Dd66821678719A24CE65e54A",e)}),[e])}(),t=Object(S.a)().account,n=Object(R.useQueryClient)();return Object(R.useQuery)(["queryBev",{account:t}],Object(y.a)(g.a.mark((function a(){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return D(e),D(t),a.next=4,e.getTargetConfig();case 4:return r=a.sent,a.abrupt("return",{targetConfig:r,setTargetToken:function(){var t=Object(y.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.setTargetToken(a).then(function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.invalidateQueries("queryBev");case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});case 6:case"end":return a.stop()}}),a)}))),{enabled:!!e&&!!t,refetchInterval:1e3})}var z,X=n(84),Y=n(102);function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not valid";if(!e)throw new Error(t)}var te="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",ne=function(){return Object(P.jsxs)(re,{children:[Object(P.jsx)(G,{}),Object(P.jsx)(ae,{})]})},ae=function(){var e=Object(S.a)().account,t=$(),n=t.data,a=t.isLoading,r=Object(i.useState)("1"),s=Object(b.a)(r,2),u=s[0],c=s[1],l=Object(i.useState)([]),o=Object(b.a)(l,2),p=o[0],m=o[1],x=Object(i.useState)(""),A=Object(b.a)(x,2),I=A[0],_=A[1],k=Object(i.useState)("switch"),W=Object(b.a)(k,2),E=W[0],F=W[1],L=Object(i.useState)(""),G=Object(b.a)(L,2),D=G[0],q=G[1],K=Object(i.useState)(te),U=Object(b.a)(K,2),Q=U[0],H=U[1],J=Object(i.useState)("0x00000000"),V=Object(b.a)(J,2),Z=V[0],z=V[1],ne=Object(i.useState)("0"),ae=Object(b.a)(ne,2),re=ae[0],se=ae[1],ie=Object(i.useState)("0"),ue=Object(b.a)(ie,2),ce=ue[0],le=ue[1],oe=Object(i.useState)("0"),pe=Object(b.a)(oe,2),de=pe[0],ye=pe[1],be=Object(i.useState)("0"),me=Object(b.a)(be,2),ge=me[0],je=me[1],he=Object(i.useState)("0"),Oe=Object(b.a)(he,2),ve=Oe[0],Te=Oe[1],fe=Object(i.useState)("0"),xe=Object(b.a)(fe,2),we=xe[0],Be=xe[1],Ne=Object(i.useState)("0"),Ce=Object(b.a)(Ne,2),Me=Ce[0],Ae=Ce[1],Se=Object(R.useMutation)(Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",j.a.error({message:"data loading"}));case 2:return ee(n),t={targetTokenAddress:I,realWantToBuyToken:I,triggerMode:E,targetOwner:D||w.a.constants.AddressZero,methodSighash:Z,stableCoin:Q||w.a.constants.AddressZero,lpBNBAmountThreshold:Object(X.parseEther)(re),amountInByWBNB:Object(X.parseEther)(ce),amountOutByTarget:Object(X.parseEther)(de),gasLimit:parseInt(ge),triggerAccountNum:parseInt(ve),receivers:p,hugeTxCount:parseInt(we),hugeGasPrice:Object(X.parseUnits)(Me,"gwei"),hugeTriggerAccountIntervalMs:2e3,boughtAmount:M.a.from(0)},console.log(t),e.abrupt("return",n.setTargetToken(t));case 6:case"end":return e.stop()}}),e)}))),{onSuccess:function(){return j.a.success({message:"setTarget succeed"})},onError:function(e){var t;return j.a.error({message:"setTarget failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}}),Ie=Se.mutateAsync,_e=Se.isLoading;if(a)return Object(P.jsx)("div",{className:"tc f2 mt3 mt4-ns",children:Object(P.jsx)(Y.a,{})});if(!n)return null;var ke=n.targetConfig;return Object(P.jsxs)(O.a,{gutter:45,className:"flex mb2 mt3",children:[Object(P.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,children:Object(P.jsxs)("div",{className:"mb4",children:[Object(P.jsx)("h1",{children:"\u8bbe\u7f6e Target \u76d1\u63a7\u8d2d\u4e70"}),Object(P.jsx)("div",{children:"\u76ee\u6807\u4e70\u5165 token \u5408\u7ea6\u5730\u5740"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:I,onChange:function(e){return B(e.target.value)&&_(e.target.value)},placeholder:""}),Object(P.jsx)("div",{children:"\u89e6\u53d1\u6a21\u5f0f"}),Object(P.jsxs)(T.a,{value:E,dropdownClassName:"marketplaceSelectorDropdown",dropdownMatchSelectWidth:!1,onChange:function(e){return F(e)},children:[Object(P.jsx)(T.a.Option,{value:"switch",children:"\u5f00\u5173\u89e6\u53d1"},"switch"),Object(P.jsx)(T.a.Option,{value:"liquidity",children:"\u6d41\u52a8\u6027\u89e6\u53d1"},"liquidity"),Object(P.jsx)(T.a.Option,{value:"",children:"\u5f00\u5173/\u6d41\u52a8\u6027\u90fd\u89e6\u53d1"},"all")]}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"\u6536\u5e01\u5730\u5740\u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:u,onChange:function(e){return C(u)&&c(e.target.value)},placeholder:"1"}),function(){for(var e=parseInt(u),t=[],n=function(e){t.push(Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{children:["\u6536\u5e01\u5730\u5740-",e]}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:p[e],onChange:function(t){return B(t.target.value)&&m((function(n){var a=Object(d.a)(n);return a[e]=t.target.value,a}))},placeholder:""},"".concat(e,"-").concat(p[e]))]}))},a=0;a<e;a++)n(a);return t}()]}),"liquidity"!==E&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"Target Owner"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:D,onChange:function(e){return B(e.target.value)&&q(e.target.value)},placeholder:""}),Object(P.jsx)("div",{children:"Target LP \u7684\u7a33\u5b9a\u5e01\u5730\u5740"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Q,onChange:function(e){return B(e.target.value)&&H(e.target.value)},placeholder:te}),Object(P.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684 MethodId"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Z,onChange:function(e){return function(e){return e.startsWith("0x")&&10===e.length||""===e}(e.target.value)&&z(e.target.value)},placeholder:"0x00000000"})]}),"switch"!==E&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684\u6d41\u52a8\u6027\u9608\u503c"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:re,onChange:function(e){return N(e.target.value)&&se(e.target.value)},placeholder:"0",suffix:"WBNB"})]}),Object(P.jsxs)(P.Fragment,{children:[parseInt(u)>1?Object(P.jsx)("div",{children:"\u5355\u8d26\u6237\u80fd\u63a5\u53d7\u7684\u6700\u5927 WBNB \u6295\u5165\u6570\u91cf"}):Object(P.jsx)("div",{children:"\u5e0c\u671b\u4e70\u5165 WBNB \u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ce,onChange:function(e){return N(e.target.value)&&le(e.target.value)},placeholder:"0"}),parseInt(u)>1?Object(P.jsx)("div",{children:"\u5355\u8d26\u6237\u4e70\u5165\u6307\u5b9a\u7684 Target \u6570\u91cf"}):Object(P.jsx)("div",{children:"\u53ef\u4ee5\u63a5\u53d7\u4e70\u5165\u7684\u6700\u5c11\u7684 Target \u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:de,onChange:function(e){return N(e.target.value)&&ye(e.target.value)},placeholder:"0"}),Object(P.jsx)("div",{children:"\u89e6\u53d1\u4ea4\u6613\u7684 gasLimit"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ge,onChange:function(e){return C(e.target.value)&&je(e.target.value)},placeholder:"0"}),Object(P.jsx)("div",{children:"\u9700\u8981\u89e6\u53d1\u4ea4\u6613\u7684\u8d26\u53f7\u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ve,onChange:function(e){return C(e.target.value)&&Te(e.target.value)},placeholder:"0"})]}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7, \u89e6\u53d1\u9ad8 gasPrice \u4ea4\u6613\u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:we,onChange:function(e){return C(e.target.value)&&Be(e.target.value)},placeholder:"0"}),Object(P.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7\u7684 gasPrice"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Me,onChange:function(e){return N(e.target.value)&&Ae(e.target.value)},placeholder:"0"})]}),Object(P.jsx)(f.a,{loading:_e,className:"mw-100 ml3-ns ml4 mt3 mt0-ns w4 mr4 mr0-ns",type:"primary",onClick:function(){return Ie()},disabled:!n||!e,children:"Set Target"})]})}),Object(P.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,children:Object(P.jsxs)("div",{className:"mb4",children:[Object(P.jsx)("h1",{children:"\u5f53\u524d\u5408\u7ea6\u5df2\u8bbe\u7f6e\u7684\u4fe1\u606f"}),Object(P.jsx)("div",{children:"Target Token"}),Object(P.jsx)(h.a,{disabled:!0,className:"ba b--grey mr2 mb2",value:ke.targetTokenAddress,placeholder:""}),Object(P.jsx)("div",{children:"\u89e6\u53d1\u6a21\u5f0f"}),Object(P.jsxs)(T.a,{value:ke.triggerMode,dropdownClassName:"marketplaceSelectorDropdown",dropdownMatchSelectWidth:!1,disabled:!0,children:[Object(P.jsx)(T.a.Option,{value:"switch",children:"\u5f00\u5173\u89e6\u53d1"},"switch"),Object(P.jsx)(T.a.Option,{value:"liquidity",children:"\u6d41\u52a8\u6027\u89e6\u53d1"},"liquidity"),Object(P.jsx)(T.a.Option,{value:"",children:"\u5f00\u5173/\u6d41\u52a8\u6027\u90fd\u89e6\u53d1"},"all")]}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"\u6536\u5e01\u5730\u5740\u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ke.receivers.length,disabled:!0}),function(){for(var e=ke.receivers,t=[],n=0;n<e.length;n++)t.push(Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{children:["\u6536\u5e01\u5730\u5740-",n]}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:e[n],disabled:!0,placeholder:""},"".concat(n,"-").concat(e[n]))]}));return t}()]}),"liquidity"!==E&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"Target Owner"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ke.targetOwner,disabled:!0,placeholder:""}),Object(P.jsx)("div",{children:"Target LP \u7684\u7a33\u5b9a\u5e01\u5730\u5740"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ke.stableCoin,disabled:!0,placeholder:te}),Object(P.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684 MethodId"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ke.methodSighash,disabled:!0,placeholder:"0x00000000"})]}),"switch"!==E&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684\u6d41\u52a8\u6027\u9608\u503c"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Object(X.formatEther)(ke.lpBNBAmountThreshold),disabled:!0,suffix:"WBNB"})]}),Object(P.jsxs)(P.Fragment,{children:[ke.receivers.length>1?Object(P.jsx)("div",{children:"\u5355\u8d26\u6237\u80fd\u63a5\u53d7\u7684\u6700\u5927 WBNB \u6295\u5165\u6570\u91cf"}):Object(P.jsx)("div",{children:"\u5e0c\u671b\u4e70\u5165 WBNB \u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Object(X.formatEther)(ke.amountInByWBNB),disabled:!0}),ke.receivers.length>1?Object(P.jsx)("div",{children:"\u5355\u8d26\u6237\u4e70\u5165\u6307\u5b9a\u7684 Target \u6570\u91cf"}):Object(P.jsx)("div",{children:"\u53ef\u4ee5\u63a5\u53d7\u4e70\u5165\u7684\u6700\u5c11\u7684 Target \u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Object(X.formatEther)(ke.amountOutByTarget),disabled:!0}),Object(P.jsx)("div",{children:"\u89e6\u53d1\u4ea4\u6613\u7684 gasLimit"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ke.gasLimit,disabled:!0}),Object(P.jsx)("div",{children:"\u9700\u8981\u89e6\u53d1\u4ea4\u6613\u7684\u8d26\u53f7\u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ke.triggerAccountNum,disabled:!0})]}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7, \u89e6\u53d1\u9ad8 gasPrice \u4ea4\u6613\u6570\u91cf"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ke.hugeTxCount,disabled:!0}),Object(P.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7\u7684 gasPrice"}),Object(P.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Object(X.formatUnits)(ke.hugeGasPrice,"gwei"),disabled:!0})]})]})})]})},re=x.a.div(z||(z=Object(p.a)(["\n  padding: 6rem;\n\n  input.ant-input::placeholder {\n    color: rgba(69, 73, 80, 0.81);\n  }\n"]))),se=function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)("div",{children:Object(P.jsx)(o.c,{children:Object(P.jsx)(o.a,{index:!0,element:Object(P.jsx)(ne,{})})})})})},ie=n(349),ue=n(185),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,355)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};l.a.render(Object(P.jsx)(u.a.StrictMode,{children:Object(P.jsx)(R.QueryClientProvider,{client:new R.QueryClient,children:Object(P.jsx)(ue.a,{children:Object(P.jsx)(ie.a,{config:{readOnlyChainId:F.NETWORK_CONFIG.chainId,readOnlyUrls:Object(s.a)({},F.NETWORK_CONFIG.chainId,F.NETWORK_CONFIG.rpcUrls),pollingInterval:3e3},children:Object(P.jsx)(se,{})})})})}),document.getElementById("root")),ce()}},[[338,1,2]]]);