(this["webpackJsonpgnosis-wallet-ui"]=this["webpackJsonpgnosis-wallet-ui"]||[]).push([[0],{299:function(e,t,n){},300:function(e,t,n){},302:function(e,t){},383:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"HC_NFT_ADDRESS",(function(){return W})),n.d(a,"NETWORK_CONFIG",(function(){return E}));var r,s=n(10),i=n(0),u=n.n(i),c=n(53),o=n.n(c),l=(n(299),n(28)),p=(n(300),n(164)),d=n(19),b=n(32),y=n(14),m=n(1),g=n.n(m),j=n(261),h=n(424),v=n(426),T=n(428),O=n(425),f=n(263),x=n(173),w=n(60),B=function(e){return w.a.utils.isAddress(e)||""===e},N=function(e){return/^\d*(\.\d*)?$/.test(e)},C=function(e){return/^\d*$/.test(e)},M=n(35),A=n(11),k=n(418),S=n(422),I=n(262),_=n(50),W="0x1234567890123456789012345678901234567890",E={chainId:_.b.BSC,chainName:"Binance Smart Chain",rpcUrls:["https://bsc-dataseed1.binance.org"],nativeCurrency:{name:"BINANCE COIN",symbol:"BNB",decimals:18},blockExplorerUrls:["https://bscscan.com/"]},F=a,L=n(15),P=x.a.div(r||(r=Object(p.a)(["\n  button {\n    margin-left: 2rem;\n  }\n\n  span {\n    color: #f6b426;\n  }\n\n  .ant-btn:hover {\n    opacity: 0.8;\n  }\n"]))),D=function(e){var t=Object(k.a)(),n=t.account,a=t.activateBrowserWallet,r=t.library,s=t.chainId;var u=Object(i.useMemo)((function(){return n?Object(S.b)(n):n}),[n]);return Object(i.useEffect)((function(){n&&Number(s)!==Number(F.NETWORK_CONFIG.chainId)&&null!=s&&null!=r&&r.send("wallet_addEthereumChain",[Object(A.a)(Object(A.a)({},F.NETWORK_CONFIG),{},{chainId:M.a.from(F.NETWORK_CONFIG.chainId).toHexString()})])}),[n,s,r]),Object(L.jsxs)(P,{children:[Object(L.jsxs)("span",{className:"dib dim-ns",children:["ChainId: ",n?s:"-"]}),Object(L.jsx)(f.a,Object(A.a)(Object(A.a)({onClick:function(){a((function(e){return I.b.error(e.message)}))}},e),{},{children:u||"Connect wallet"}))]})},G=n(89);function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not valid";if(!e)throw new Error(t)}var U=n(2),q=n(3),K=n(92),Q=n(106),H=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],Z=function(){function e(){Object(U.a)(this,e)}return Object(q.a)(e,null,[{key:"createInterface",value:function(){return new K.utils.Interface(H)}},{key:"connect",value:function(e,t){return new Q.b(e,H,t)}}]),e}();Z.abi=H;var J=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"},{internalType:"uint256",name:"stableAmount",type:"uint256"},{internalType:"uint256",name:"targetAmount",type:"uint256"}],name:"BuyTokenByToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"}],name:"BuyTokenByToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"MultiSellExactTargetTokensToWBNB",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"SLIPPAGE_SCALE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_CHI_TOKEN_",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_GAS_MAX_RETURN_",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"__ALL__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"__LIQUIDITY__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"__SWITCH__",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"canAcceptMaxTestSlippage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceivers",outputs:[{internalType:"address[]",name:"receivers_",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTarget",outputs:[{internalType:"address",name:"migrateToNewContract",type:"address"},{internalType:"address",name:"targetTokenAddress",type:"address"},{internalType:"uint256",name:"gasLimit",type:"uint256"},{internalType:"uint256",name:"sendCountsPerAccount",type:"uint256"},{internalType:"uint256",name:"sendTxAccCounts",type:"uint256"},{internalType:"uint256",name:"lpBNBAmountThreshold",type:"uint256"},{internalType:"uint256",name:"sendIntervalMS",type:"uint256"},{internalType:"address",name:"targetOwner",type:"address"},{internalType:"bytes4",name:"methodSighash",type:"bytes4"},{internalType:"address",name:"stableCoin",type:"address"},{internalType:"string",name:"triggerMode",type:"string"},{internalType:"uint256",name:"hugeTriggerGasPrice_",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_router",type:"address"},{internalType:"address[]",name:"_whitelistSet",type:"address[]"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isOperator",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newContract",type:"address"}],name:"migrateTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"migrateToNewContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"realWantToBuyToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"restartCurrentTarget",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gasMaxReturn",type:"uint256"}],name:"setGasMaxReturn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"},{internalType:"bool",name:"flag",type:"bool"}],name:"setOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_canAcceptMaxSlippage",type:"uint256"},{internalType:"uint256",name:"_targetSellSlippage",type:"uint256"}],name:"setSlippages",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_target",type:"address"},{internalType:"address",name:"_realWantToBuyToken",type:"address"},{internalType:"string",name:"_triggerMode",type:"string"},{internalType:"address",name:"_targetOwner",type:"address"},{internalType:"bytes4",name:"_methodSighash",type:"bytes4"},{internalType:"address",name:"_stableCoin",type:"address"},{internalType:"uint256",name:"_lpBNBAmountThreshold",type:"uint256"},{internalType:"uint256[4]",name:"_buyConfigs",type:"uint256[4]"},{internalType:"address[]",name:"_receivers",type:"address[]"},{internalType:"uint256[3]",name:"_hugeAccountConfigs",type:"uint256[3]"}],name:"setTargetToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_testAmountIn",type:"uint256"}],name:"setTestAmountIn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"targetConfigMap",outputs:[{internalType:"uint256",name:"amountInByWBNB",type:"uint256"},{internalType:"uint256",name:"canAcceptTargetAmountOut",type:"uint256"},{internalType:"uint256",name:"amountOutPerReceiverByTarget",type:"uint256"},{internalType:"uint256",name:"canAcceptMaxWBNBAmountIn",type:"uint256"},{internalType:"uint256",name:"gasLimit",type:"uint256"},{internalType:"uint256",name:"sendCountsPerAccount",type:"uint256"},{internalType:"uint256",name:"sendTxAccCounts",type:"uint256"},{internalType:"uint256",name:"sendIntervalMS",type:"uint256"},{internalType:"uint256",name:"boughtAmount",type:"uint256"},{internalType:"uint256",name:"soldWBNBAmount",type:"uint256"},{internalType:"uint256",name:"lpBNBAmountThreshold",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"targetToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"path",type:"address[]"}],name:"testBuy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address",name:"to",type:"address"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"triggerConfigMap",outputs:[{internalType:"address",name:"targetOwner",type:"address"},{internalType:"bytes4",name:"methodSighash",type:"bytes4"},{internalType:"address",name:"stableCoin",type:"address"},{internalType:"string",name:"mode",type:"string"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],V=function(){function e(){Object(U.a)(this,e)}return Object(q.a)(e,null,[{key:"createInterface",value:function(){return new K.utils.Interface(J)}},{key:"connect",value:function(e,t){return new Q.b(e,J,t)}}]),e}();V.abi=J;var $=n(427),z=new $.a("-","-",_.b.BSC,w.a.constants.AddressZero,18),X=function(){function e(t,n){Object(U.a)(this,e),this.SuperBevBotAddress=t,this.provider=n,this.SuperBevBotContract=void 0,this.signer=void 0,this.SuperBevBotContract=V.connect(t,n.getSigner()),this.signer=n.getSigner()}return Object(q.a)(e,[{key:"getTargetConfig",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t,n,a,r,s,i,u,c,o,l,p,d,b,y,m,j,h,v,T;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.SuperBevBotContract.getTarget();case 2:return t=e.sent,n=t.targetTokenAddress,a=t.gasLimit,r=t.sendCountsPerAccount,s=t.sendTxAccCounts,i=t.lpBNBAmountThreshold,u=t.sendIntervalMS,c=t.hugeTriggerGasPrice_,e.next=12,this.SuperBevBotContract.targetConfigMap(n);case 12:return o=e.sent,l=o.amountInByWBNB,p=o.canAcceptTargetAmountOut,d=o.boughtAmount,e.next=18,this.SuperBevBotContract.triggerConfigMap(n);case 18:return b=e.sent,y=b.targetOwner,m=b.methodSighash,j=b.stableCoin,h=b.mode,e.next=25,this.SuperBevBotContract.realWantToBuyToken();case 25:return v=e.sent,e.next=28,this.SuperBevBotContract.getReceivers();case 28:return T=e.sent,e.abrupt("return",{targetTokenAddress:n,realWantToBuyToken:v,triggerMode:h,targetOwner:y,methodSighash:m,stableCoin:j,lpBNBAmountThreshold:i,amountInByWBNB:l,amountOutByTarget:p,gasLimit:a.toNumber(),triggerAccountNum:s.toNumber(),receivers:T,hugeTxCount:r.toNumber(),hugeGasPrice:c,hugeTriggerAccountIntervalMs:u.toNumber(),boughtAmount:d});case 30:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=Object(b.a)(g.a.mark((function e(t){var n,a,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Z.connect(t,this.signer),e.next=4,n.name();case 4:return a=e.sent,e.next=7,n.decimals();case 7:return r=e.sent,e.next=10,n.symbol();case 10:return s=e.sent,e.abrupt("return",new $.a(a,s,_.b.BSC,t,r));case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",z);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setTargetToken",value:function(){var e=Object(b.a)(g.a.mark((function e(t){var n,a,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.receivers,a=[t.amountInByWBNB,t.amountOutByTarget,t.gasLimit,t.triggerAccountNum],r=[t.hugeTxCount,t.hugeGasPrice,t.hugeTriggerAccountIntervalMs],e.next=5,this.SuperBevBotContract.setTargetToken(t.targetTokenAddress,t.realWantToBuyToken,t.triggerMode,t.targetOwner,t.methodSighash,t.stableCoin,t.lpBNBAmountThreshold,a,n,r);case 5:return s=e.sent,e.next=8,s.wait();case 8:return e.abrupt("return",s.hash);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var Y=n(81);function ee(e){var t=function(){var e=Object(k.a)().library;return Object(i.useMemo)((function(){if(e)return new X("0xC8251A2654ad8550Dd66821678719A24CE65e54A",e)}),[e])}(),n=Object(k.a)().account,a=Object(G.useQueryClient)();return e||(e=w.a.constants.AddressZero),Object(G.useQuery)(["queryBev",{account:n,willSetTargetTokenAddress:e}],Object(b.a)(g.a.mark((function r(){var s,i,u;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return R(t),R(n),r.next=4,t.getTargetConfig();case 4:return s=r.sent,r.next=7,t.getToken(s.targetTokenAddress);case 7:return i=r.sent,r.next=10,t.getToken(e);case 10:return u=r.sent,r.abrupt("return",{targetConfig:s,alreadySetTargetToken:i,willSetTargetToken:u,setTargetToken:function(){var e=Object(b.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.setTargetToken(n).then(function(){var e=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.invalidateQueries("queryBev");case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setTestConfig:function(){var e=Object(b.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={targetTokenAddress:"0xBbfD94F68cB92A2aD6d8d3CBEB4FCA566f71F86f",realWantToBuyToken:"0xBbfD94F68cB92A2aD6d8d3CBEB4FCA566f71F86f",triggerMode:"switch",targetOwner:"0x6FF5E69520662c8479612dbBdad6BC9f0217a9c5",methodSighash:"0x00000000",stableCoin:ue.WBNB,lpBNBAmountThreshold:M.a.from(0),amountInByWBNB:ie.mul(1).div(1e7),amountOutByTarget:ie.mul(0),gasLimit:199e4,triggerAccountNum:5,receivers:["0x6FF5E69520662c8479612dbBdad6BC9f0217a9c5"],hugeTxCount:5,hugeGasPrice:Object(Y.parseUnits)("10","gwei"),hugeTriggerAccountIntervalMs:2e3,boughtAmount:M.a.from(0)},e.abrupt("return",t.setTargetToken(n).then(function(){var e=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.invalidateQueries("queryBev");case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});case 12:case"end":return r.stop()}}),r)}))),{enabled:!!t&&!!n,refetchInterval:1e3})}var te=n(111),ne=n(421);function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.token,n=e.amount;return t?n?new ne.a(t,n).format({suffix:" "+t.ticker}):"0 "+t.ticker:"-"}var re;function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not valid";if(!e)throw new Error(t)}var ie=w.a.constants.WeiPerEther,ue={WBNB:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",USDT:"0x55d398326f99059fF775485246999027B3197955",BUSD:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","\u5176\u4ed6":""},ce=function(){return Object(L.jsxs)(le,{children:[Object(L.jsx)(D,{}),Object(L.jsx)(oe,{})]})},oe=function(){var e=Object(k.a)().account,t=Object(i.useState)(""),n=Object(y.a)(t,2),a=n[0],r=n[1],s=ee(a),u=s.data,c=s.isLoading,o=Object(i.useState)("1"),l=Object(y.a)(o,2),p=l[0],m=l[1],x=Object(i.useState)([]),A=Object(y.a)(x,2),S=A[0],I=A[1],_=Object(i.useState)("switch"),W=Object(y.a)(_,2),E=W[0],F=W[1],P=Object(i.useState)(""),D=Object(y.a)(P,2),R=D[0],U=D[1],q=Object(i.useState)(ue.WBNB),K=Object(y.a)(q,2),Q=K[0],H=K[1],Z=Object(i.useState)("0x00000000"),J=Object(y.a)(Z,2),V=J[0],$=J[1],z=Object(i.useState)("0"),X=Object(y.a)(z,2),ne=X[0],re=X[1],ie=Object(i.useState)("0"),ce=Object(y.a)(ie,2),oe=ce[0],le=ce[1],pe=Object(i.useState)("0"),de=Object(y.a)(pe,2),be=de[0],ye=de[1],me=Object(i.useState)("1990000"),ge=Object(y.a)(me,2),je=ge[0],he=ge[1],ve=Object(i.useState)("0"),Te=Object(y.a)(ve,2),Oe=Te[0],fe=Te[1],xe=Object(i.useState)("5"),we=Object(y.a)(xe,2),Be=we[0],Ne=we[1],Ce=Object(i.useState)("10"),Me=Object(y.a)(Ce,2),Ae=Me[0],ke=Me[1],Se=Object(G.useMutation)(Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return",j.a.error({message:"data loading"}));case 2:if(se(u),a){e.next=5;break}return e.abrupt("return",j.a.error({message:"targetAddress \u4e0d\u5408\u6cd5"}));case 5:if("liquidity"===E||R&&Q){e.next=7;break}return e.abrupt("return",j.a.error({message:"targetOwnerAddress \u6216\u8005 \u7a33\u5b9a\u5e01\u5730\u5740 \u4e0d\u5408\u6cd5"}));case 7:if("0"!==oe){e.next=9;break}return e.abrupt("return",j.a.error({message:"\u4e70\u5165 WBNB \u6570\u91cf\u4e0d\u80fd\u4e3a 0"}));case 9:return t={targetTokenAddress:a,realWantToBuyToken:a,triggerMode:E,targetOwner:R||w.a.constants.AddressZero,methodSighash:V,stableCoin:Q||w.a.constants.AddressZero,lpBNBAmountThreshold:Object(Y.parseEther)(ne),amountInByWBNB:Object(Y.parseEther)(oe),amountOutByTarget:Object(Y.parseUnits)(be,u.willSetTargetToken.decimals),gasLimit:parseInt(je),triggerAccountNum:parseInt(Oe),receivers:S,hugeTxCount:parseInt(Be),hugeGasPrice:Object(Y.parseUnits)(Ae,"gwei"),hugeTriggerAccountIntervalMs:2e3,boughtAmount:M.a.from(0)},e.abrupt("return",u.setTargetToken(t));case 11:case"end":return e.stop()}}),e)}))),{onSuccess:function(){return j.a.success({message:"setTarget succeed"})},onError:function(e){var t;return j.a.error({message:"setTarget failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}}),Ie=Se.mutateAsync,_e=Se.isLoading,We=Object(G.useMutation)(Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return",j.a.error({message:"data loading"}));case 2:return se(u),e.abrupt("return",u.setTestConfig());case 4:case"end":return e.stop()}}),e)}))),{onSuccess:function(){return j.a.success({message:"setTarget succeed"})},onError:function(e){var t;return j.a.error({message:"setTarget failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}}),Ee=We.mutateAsync,Fe=We.isLoading;if(c)return Object(L.jsx)("div",{className:"tc f2 mt3 mt4-ns",children:Object(L.jsx)(te.a,{})});if(!u)return null;var Le=u.targetConfig;return Object(L.jsxs)(v.a,{gutter:48,className:"flex mb2 mt3",children:[Object(L.jsx)(T.a,{xs:24,sm:24,md:12,lg:12,children:Object(L.jsxs)("div",{className:"mb4",children:[Object(L.jsx)("h1",{children:"\u8bbe\u7f6e Target \u76d1\u63a7\u8d2d\u4e70"}),Object(L.jsxs)("div",{children:["\u76ee\u6807\u4e70\u5165 token \u5408\u7ea6\u5730\u5740 - ",u.willSetTargetToken.ticker]}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:a,onChange:function(e){return B(e.target.value)&&r(e.target.value)},placeholder:""}),Object(L.jsxs)("div",{className:"mt3 bt b--dark-yellow pt3",children:[Object(L.jsxs)(O.a,{value:E,dropdownClassName:"marketplaceSelectorDropdown",dropdownMatchSelectWidth:!1,onChange:function(e){return F(e)},children:[Object(L.jsx)(O.a.Option,{value:"switch",children:"\u5f00\u5173\u89e6\u53d1"},"switch"),Object(L.jsx)(O.a.Option,{value:"liquidity",children:"\u6d41\u52a8\u6027\u89e6\u53d1"},"liquidity"),Object(L.jsx)(O.a.Option,{value:"",children:"\u5f00\u5173/\u6d41\u52a8\u6027\u90fd\u89e6\u53d1"},"all")]}),"liquidity"!==E&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"Target Owner"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:R,onChange:function(e){return B(e.target.value)&&U(e.target.value)},placeholder:""}),Object(L.jsx)("div",{children:"Target LP \u7684\u7a33\u5b9a\u5e01\u5730\u5740"}),Object(L.jsxs)(v.a,{gutter:16,children:[Object(L.jsx)(T.a,{xs:18,sm:18,md:18,lg:18,children:Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2 mt1",value:Q?w.a.utils.getAddress(Q):"",onChange:function(e){return B(e.target.value)&&H(e.target.value)}})}),Object(L.jsx)(T.a,{xs:4,sm:4,md:4,lg:4,children:Object(L.jsx)(O.a,{className:"mt1",value:function(){for(var e in ue)if(ue[e].toLowerCase()===Q.toLowerCase())return e}(),dropdownClassName:"marketplaceSelectorDropdown",dropdownMatchSelectWidth:!1,onChange:function(e){H(ue[e])},children:Object.keys(ue).map((function(e){return Object(L.jsx)(O.a.Option,{value:e,children:e},e)}))})})]}),Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684 MethodId"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:V,onChange:function(e){return function(e){return e.startsWith("0x")&&10===e.length||""===e}(e.target.value)&&$(e.target.value)},placeholder:"0x00000000"})]}),"switch"!==E&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684 LP \u9608\u503c"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ne,onChange:function(e){return N(e.target.value)&&re(e.target.value)},placeholder:"0",suffix:"WBNB"})]})]}),Object(L.jsxs)("div",{className:"mt3 bt b--dark-yellow pt3",children:[Object(L.jsx)("div",{children:"\u6536\u5e01\u5730\u5740\u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:p,onChange:function(e){return C(p)&&m(e.target.value)},placeholder:"1"}),function(){for(var e=parseInt(p),t=[],n=function(e){t.push(Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{children:["\u6536\u5e01\u5730\u5740-",e+1]}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:S[e],onChange:function(t){return B(t.target.value)&&I((function(n){var a=Object(d.a)(n);return a[e]=t.target.value,a}))},placeholder:""})]},"".concat(e,"-").concat(S[e])))},a=0;a<e;a++)n(a);return t}()]}),Object(L.jsxs)("div",{className:"mt3 bt b--dark-yellow pt3",children:[parseInt(p)>1?Object(L.jsx)("div",{children:"\u5355\u8d26\u6237\u80fd\u63a5\u53d7\u7684\u6700\u5927 WBNB \u6295\u5165\u6570\u91cf"}):Object(L.jsx)("div",{children:"\u5e0c\u671b\u82b1\u8d39 WBNB \u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:oe,onChange:function(e){return N(e.target.value)&&le(e.target.value)},placeholder:"0"}),parseInt(p)>1?Object(L.jsx)("div",{children:"\u5355\u8d26\u6237\u4e70\u5165\u6307\u5b9a\u7684 Target \u6570\u91cf"}):Object(L.jsx)("div",{children:"\u53ef\u4ee5\u63a5\u53d7\u4e70\u5165\u7684\u6700\u5c11\u7684 Target \u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:be,onChange:function(e){return N(e.target.value)&&ye(e.target.value)},placeholder:"0"}),Object(L.jsx)("div",{children:"\u89e6\u53d1\u4ea4\u6613\u7684 gasLimit (\u591a\u8d26\u53f7\u6a21\u5f0f\u52a1\u5fc5\u8bbe\u7f6e\u8d85\u8fc7 \u8d26\u53f7\u6570 * 20W)"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:je,onChange:function(e){return C(e.target.value)&&he(e.target.value)},placeholder:"1990000"}),Object(L.jsx)("div",{children:"\u9700\u8981\u89e6\u53d1\u4ea4\u6613\u7684\u8d26\u53f7\u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Oe,onChange:function(e){return C(e.target.value)&&fe(e.target.value)},placeholder:"0"})]}),Object(L.jsxs)("div",{className:"mt3 bt b--dark-yellow pt3",children:[Object(L.jsxs)("div",{children:["\u9ad8gwei\u8d26\u53f7, \u89e6\u53d1\u9ad8 gasPrice \u4ea4\u6613\u6b21\u6570( ",">="," 5 )"]}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Be,onChange:function(e){return C(e.target.value)&&Ne(e.target.value)},placeholder:"5"}),Object(L.jsxs)("div",{children:["\u9ad8gwei\u8d26\u53f7\u53d1\u4ea4\u6613\u7684 gasPrice( ",">="," 10 )"]}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Ae,onChange:function(e){return N(e.target.value)&&ke(e.target.value)},placeholder:"10"})]}),Object(L.jsx)(f.a,{loading:_e,className:"mw-100 ml3-ns ml4 mt3 mt0-ns w4 mr4 mr0-ns",type:"primary",onClick:function(){return Ie()},disabled:!u||!e,children:"\u8bbe\u7f6e Target"})]})}),Object(L.jsx)(T.a,{xs:24,sm:24,md:12,lg:12,children:Object(L.jsxs)("div",{className:"mb4",children:[Object(L.jsx)("h1",{children:"\u5f53\u524d\u5408\u7ea6\u5df2\u8bbe\u7f6e\u7684\u4fe1\u606f"}),Object(L.jsx)(f.a,{loading:Fe,className:"mb2",type:"primary",disabled:!u||!e,onClick:function(){return Ee()},children:"\u4e00\u952e\u5feb\u901f\u8bbe\u7f6e\u6d4b\u8bd5\u914d\u7f6e"}),Object(L.jsxs)("div",{children:["\u76ee\u6807 Token - ",u.alreadySetTargetToken.ticker]}),Object(L.jsx)(h.a,{disabled:!0,className:"ba b--grey mr2 mb2",value:Le.targetTokenAddress,placeholder:""}),Le.boughtAmount.gt(M.a.from(0))?Object(L.jsxs)("h2",{className:"mt3 mb3",children:["\u5df2\u4e70\u5165:"," ",ae({token:u.alreadySetTargetToken,amount:Le.boughtAmount})]}):Object(L.jsx)("h2",{className:"mt3 mb3",children:"\u672a\u4e70\u5165"}),Object(L.jsxs)(O.a,{value:Le.triggerMode,dropdownClassName:"marketplaceSelectorDropdown",dropdownMatchSelectWidth:!1,disabled:!0,children:[Object(L.jsx)(O.a.Option,{value:"switch",children:"\u5f00\u5173\u89e6\u53d1"},"switch"),Object(L.jsx)(O.a.Option,{value:"liquidity",children:"\u6d41\u52a8\u6027\u89e6\u53d1"},"liquidity"),Object(L.jsx)(O.a.Option,{value:"",children:"\u5f00\u5173/\u6d41\u52a8\u6027\u90fd\u89e6\u53d1"},"all")]}),"liquidity"!==Le.triggerMode&&Object(L.jsxs)("div",{className:"mt3",children:[Object(L.jsx)("div",{children:"Target Owner"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Le.targetOwner,disabled:!0,placeholder:""}),Object(L.jsx)("div",{children:"Target LP \u7684\u7a33\u5b9a\u5e01\u5730\u5740"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Le.stableCoin,disabled:!0,placeholder:ue.WBNB}),Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684 MethodId"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Le.methodSighash,disabled:!0,placeholder:"0x00000000"})]}),"switch"!==Le.triggerMode&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u8981\u76d1\u63a7\u7684\u6d41\u52a8\u6027\u9608\u503c"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Object(Y.formatEther)(Le.lpBNBAmountThreshold),disabled:!0,suffix:"WBNB"})]}),Object(L.jsxs)("div",{className:"mt3 bt b--dark-yellow pt3",children:[Object(L.jsx)("div",{children:"\u6536\u5e01\u5730\u5740\u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Le.receivers.length,disabled:!0}),function(){for(var e=Le.receivers,t=[],n=0;n<e.length;n++)t.push(Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{children:["\u6536\u5e01\u5730\u5740-",n+1]}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:e[n],disabled:!0,placeholder:""})]},"".concat(n,"-").concat(e[n])));return t}()]}),Object(L.jsxs)(L.Fragment,{children:[Le.receivers.length>1?Object(L.jsx)("div",{children:"\u5355\u8d26\u6237\u80fd\u63a5\u53d7\u7684\u6700\u5927 WBNB \u6295\u5165\u6570\u91cf"}):Object(L.jsx)("div",{children:"\u5e0c\u671b\u82b1\u8d39 WBNB \u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Object(Y.formatEther)(Le.amountInByWBNB),disabled:!0}),Le.receivers.length>1?Object(L.jsx)("div",{children:"\u5355\u8d26\u6237\u4e70\u5165\u6307\u5b9a\u7684 Target \u6570\u91cf"}):Object(L.jsx)("div",{children:"\u53ef\u4ee5\u63a5\u53d7\u4e70\u5165\u7684\u6700\u5c11\u7684 Target \u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:ae({token:u.alreadySetTargetToken,amount:Le.amountOutByTarget}),disabled:!0}),Object(L.jsx)("div",{children:"\u89e6\u53d1\u4ea4\u6613\u7684 gasLimit"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Le.gasLimit,disabled:!0}),Object(L.jsx)("div",{children:"\u9700\u8981\u89e6\u53d1\u4ea4\u6613\u7684\u8d26\u53f7\u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Le.triggerAccountNum,disabled:!0})]}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7, \u89e6\u53d1\u9ad8 gasPrice \u4ea4\u6613\u6570\u91cf"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Le.hugeTxCount,disabled:!0}),Object(L.jsx)("div",{children:"\u9ad8gwei\u8d26\u53f7\u7684 gasPrice"}),Object(L.jsx)(h.a,{className:"ba b--grey mr2 mb2",value:Object(Y.formatUnits)(Le.hugeGasPrice,"gwei"),disabled:!0})]})]})})]})},le=x.a.div(re||(re=Object(p.a)(["\n  padding: 3rem;\n  color: rgb(210, 153, 86);\n  font-weight: bold;\n  div {\n    // margin-top: 0.15rem;\n    margin-bottom: 0.15rem;\n  }\n\n  input.ant-input::placeholder {\n    color: rgba(69, 73, 80, 0.81);\n  }\n"]))),pe=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)("div",{children:Object(L.jsx)(l.c,{children:Object(L.jsx)(l.a,{index:!0,element:Object(L.jsx)(ce,{})})})})})},de=n(423),be=n(203),ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,429)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};o.a.render(Object(L.jsx)(u.a.StrictMode,{children:Object(L.jsx)(G.QueryClientProvider,{client:new G.QueryClient,children:Object(L.jsx)(be.a,{children:Object(L.jsx)(de.a,{config:{readOnlyChainId:F.NETWORK_CONFIG.chainId,readOnlyUrls:Object(s.a)({},F.NETWORK_CONFIG.chainId,F.NETWORK_CONFIG.rpcUrls),pollingInterval:3e3},children:Object(L.jsx)(pe,{})})})})}),document.getElementById("root")),ye()}},[[383,1,2]]]);