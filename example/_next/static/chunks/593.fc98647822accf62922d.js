(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[593],{95354:function(t,n,i){"use strict";i.r(n),i.d(n,{default:function(){return X}});var e,o=i(64762),c=i(92346),r=i(86478),s=i(71348),u=i(63513),l=i(7400),M=i(42243);!function(t){t.Bitpie="Bitpie",t.Blocto="Blocto",t.Clover="Clover",t.Coin98="Coin98",t.Ledger="Ledger",t.MathWallet="MathWallet",t.Phantom="Phantom",t.SafePal="SafePal",t.Slope="Slope",t.Solflare="Solflare",t.SolflareWeb="Solflare (Web)",t.Sollet="Sollet",t.SolletExtension="Sollet (Extension)",t.Solong="Solong",t.Torus="Torus"}(e||(e={}));i(34958);var a=i(36301),d=i.n(a);var h=i(74918),w=i(80452),g=i(75291).Buffer,y=function(t,n,i,e){return new(i||(i=Promise))((function(o,c){function r(t){try{u(e.next(t))}catch(n){c(n)}}function s(t){try{u(e.throw(t))}catch(n){c(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}u((e=e.apply(t,n||[])).next())}))};function N(t){return(2147483648|t)>>>0}const j=255;function I(t,n,i){return y(this,void 0,void 0,(function*(){const e=g.alloc(1);e.writeUInt8(1,0);const o=n.serializeMessage(),c=g.concat([e,i,o]);return yield D(t,6,1,c)}))}function D(t,n,i,e){return y(this,void 0,void 0,(function*(){let o=0,c=0;if(e.length>j)for(;e.length-c>j;){const r=e.slice(c,c+j);if(2!==(yield t.send(224,n,i,2|o,r)).length)throw new w.rZ(w.WC.INCORRECT_DATA);o|=1,c+=j}const r=e.slice(c),s=yield t.send(224,n,i,o,r);return s.slice(0,s.length-2)}))}var T=function(t,n,i,e){return new(i||(i=Promise))((function(o,c){function r(t){try{u(e.next(t))}catch(n){c(n)}}function s(t){try{u(e.throw(t))}catch(n){c(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}u((e=e.apply(t,n||[])).next())}))};class A extends u.sz{constructor(t={}){super(),this._disconnected=()=>{const t=this._transport;t&&(t.off("disconnect",this._disconnected),this._transport=null,this._publicKey=null,this.emit("error",new u.at),this.emit("disconnect"))},this._derivationPath=t.derivationPath||function(t,n){const i=void 0!==t?void 0===n?3:4:2,e=g.alloc(1+4*i);let o=e.writeUInt8(i,0);return o=e.writeUInt32BE(N(44),o),o=e.writeUInt32BE(N(501),o),void 0!==t&&(o=e.writeUInt32BE(N(t),o),void 0!==n&&e.writeUInt32BE(N(n),o)),e}(0,0),this._connecting=!1,this._transport=null,this._publicKey=null}get publicKey(){return this._publicKey}get ready(){return"undefined"!==typeof window&&!!navigator.hid}get connecting(){return this._connecting}get connected(){return!!this._transport}connect(){return T(this,void 0,void 0,(function*(){try{if(this.connected||this.connecting)return;let n,i;this._connecting=!0;try{n=yield h.Z.create()}catch(t){throw new u.$w(null===t||void 0===t?void 0:t.message,t)}try{i=yield function(t,n){return y(this,void 0,void 0,(function*(){const i=yield D(t,5,0,n);return new M.nh(i)}))}(n,this._derivationPath)}catch(t){throw new u.Nx(null===t||void 0===t?void 0:t.message,t)}n.on("disconnect",this._disconnected),this._transport=n,this._publicKey=i,this.emit("connect")}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}))}disconnect(){return T(this,void 0,void 0,(function*(){const t=this._transport;if(t){t.off("disconnect",this._disconnected),this._transport=null,this._publicKey=null;try{yield t.close()}catch(n){this.emit("error",new u.UG(null===n||void 0===n?void 0:n.message,n))}}this.emit("disconnect")}))}signTransaction(t){return T(this,void 0,void 0,(function*(){try{const i=this._transport,e=this._publicKey;if(!i||!e)throw new u.oS;try{const n=yield I(i,t,this._derivationPath);t.addSignature(e,n)}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}return t}catch(n){throw this.emit("error",n),n}}))}signAllTransactions(t){return T(this,void 0,void 0,(function*(){try{const i=this._transport,e=this._publicKey;if(!i||!e)throw new u.oS;try{const n=this._derivationPath;for(const o of t){const t=yield I(i,o,n);o.addSignature(e,t)}}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}return t}catch(n){throw this.emit("error",n),n}}))}}const L=(t={})=>({name:e.Ledger,url:"https://www.ledger.com",icon:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+",adapter:()=>new A(t)});var f=function(t,n,i,e){return new(i||(i=Promise))((function(o,c){function r(t){try{u(e.next(t))}catch(n){c(n)}}function s(t){try{u(e.throw(t))}catch(n){c(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}u((e=e.apply(t,n||[])).next())}))};class v extends u.eC{constructor(t={}){super(),this._disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null,this.emit("error",new u.at),this.emit("disconnect"))},this._connecting=!1,this._wallet=null,this._publicKey=null,this.ready||(0,u._j)(this,t.pollInterval||1e3,t.pollCount||3)}get publicKey(){return this._publicKey}get ready(){var t;return"undefined"!==typeof window&&!!(null===(t=window.solana)||void 0===t?void 0:t.isPhantom)}get connecting(){return this._connecting}get connected(){var t;return!!(null===(t=this._wallet)||void 0===t?void 0:t.isConnected)}connect(){return f(this,void 0,void 0,(function*(){try{if(this.connected||this.connecting)return;this._connecting=!0;const n="undefined"!==typeof window&&window.solana;if(!n)throw new u.l5;if(!n.isPhantom)throw new u.Yf;if(!n.isConnected){const i=n._handleDisconnect;try{yield new Promise(((t,e)=>{const o=()=>{n.off("connect",o),t()};n._handleDisconnect=(...t)=>(n.off("connect",o),e(new u.hd),i.apply(n,t)),n.on("connect",o),n.connect().catch((t=>{n.off("connect",o),e(t)}))}))}catch(t){if(t instanceof u.lj)throw t;throw new u.$w(null===t||void 0===t?void 0:t.message,t)}finally{n._handleDisconnect=i}}if(!n.publicKey)throw new u.$w;let i;try{i=new M.nh(n.publicKey.toBytes())}catch(t){throw new u.Nx(null===t||void 0===t?void 0:t.message,t)}n.on("disconnect",this._disconnected),this._wallet=n,this._publicKey=i,this.emit("connect")}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}))}disconnect(){return f(this,void 0,void 0,(function*(){const t=this._wallet;if(t){t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null;try{yield t.disconnect()}catch(n){this.emit("error",new u.UG(null===n||void 0===n?void 0:n.message,n))}}this.emit("disconnect")}))}signTransaction(t){return f(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{return(yield i.signTransaction(t))||t}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}signAllTransactions(t){return f(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{return(yield i.signAllTransactions(t))||t}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}signMessage(t){return f(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{const{signature:n}=yield i.signMessage(t);return Uint8Array.from(n)}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}}const m=(t={})=>({name:e.Phantom,url:"https://www.phantom.app",icon:"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K",adapter:()=>new v(t)});var z=function(t,n,i,e){return new(i||(i=Promise))((function(o,c){function r(t){try{u(e.next(t))}catch(n){c(n)}}function s(t){try{u(e.throw(t))}catch(n){c(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}u((e=e.apply(t,n||[])).next())}))};class O extends u.eC{constructor(t={}){super(),this._connecting=!1,this._wallet=null,this._publicKey=null,this.ready||(0,u._j)(this,t.pollInterval||1e3,t.pollCount||3)}get publicKey(){return this._publicKey}get ready(){return"undefined"!==typeof window&&!!window.Slope}get connecting(){return this._connecting}get connected(){return!!this._publicKey}connect(){return z(this,void 0,void 0,(function*(){try{if(this.connected||this.connecting)return;if(this._connecting=!0,!window.Slope)throw new u.l5;const n=new window.Slope;let i,e;try{const{data:t}=yield n.connect();if(!t.publicKey)throw new u.$w;i=t.publicKey}catch(t){if(t instanceof u.lj)throw t;throw new u.$w(null===t||void 0===t?void 0:t.message,t)}try{e=new M.nh(i)}catch(t){throw new u.Nx(null===t||void 0===t?void 0:t.message,t)}this._wallet=n,this._publicKey=e,this.emit("connect")}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}))}disconnect(){return z(this,void 0,void 0,(function*(){const t=this._wallet;if(t){this._wallet=null,this._publicKey=null;try{const{msg:n}=yield t.disconnect();if("ok"!==n)throw new u.UG(n)}catch(n){n instanceof u.lj||(n=new u.UG(null===n||void 0===n?void 0:n.message,n)),this.emit("error",n)}}this.emit("disconnect")}))}signTransaction(t){return z(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{const n=d().encode(t.serializeMessage()),{msg:e,data:o}=yield i.signTransaction(n);if(!o.publicKey||!o.signature)throw new u.PY(e);const c=new M.nh(o.publicKey),r=d().decode(o.signature);return t.addSignature(c,r),t}catch(n){if(n instanceof u.lj)throw n;throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}signAllTransactions(t){var n;return z(this,void 0,void 0,(function*(){try{const e=this._wallet;if(!e)throw new u.oS;try{const i=t.map((t=>d().encode(t.serializeMessage()))),{msg:o,data:c}=yield e.signAllTransactions(i),r=t.length;if(!c.publicKey||(null===(n=c.signatures)||void 0===n?void 0:n.length)!==r)throw new u.PY(o);const s=new M.nh(c.publicKey);for(let n=0;n<r;n++)t[n].addSignature(s,d().decode(c.signatures[n]));return t}catch(i){if(i instanceof u.lj)throw i;throw new u.PY(null===i||void 0===i?void 0:i.message,i)}}catch(i){throw this.emit("error",i),i}}))}signMessage(t){return z(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{const n=yield i.signMessage(t);return d().decode(n.data.signature)}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}}const S=(t={})=>({name:e.Slope,url:"https://www.slope.finance/#/wallet",icon:"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgZmlsbD0iIzZlNjZmYSIgcj0iNjQiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzUuMTk2MyA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNzMuNTk3IDU0LjM5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtNzMuNTk3IDczLjU5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjc1Ii8+PHBhdGggZD0ibTczLjYwNCA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNTQuMzk2OCAzNS4yIDE5LjItMTkuMnYxOS4ybC0xOS4yIDE5LjJoLTE5LjJ6IiBmaWxsLW9wYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Im03My41OTE1IDkyLjgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMmgxOS4yeiIgZmlsbC1vcGFjaXR5PSIuNCIvPjwvZz48L3N2Zz4=",adapter:()=>new O(t)});var p=function(t,n,i,e){return new(i||(i=Promise))((function(o,c){function r(t){try{u(e.next(t))}catch(n){c(n)}}function s(t){try{u(e.throw(t))}catch(n){c(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}u((e=e.apply(t,n||[])).next())}))};class x extends u.sz{constructor(t={}){super(),this._disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null,this.emit("error",new u.at),this.emit("disconnect"))},this._connecting=!1,this._wallet=null,this._publicKey=null,this.ready||(0,u._j)(this,t.pollInterval||1e3,t.pollCount||3)}get publicKey(){return this._publicKey}get ready(){var t;return"undefined"!==typeof window&&!!(null===(t=window.solflare)||void 0===t?void 0:t.isSolflare)}get connecting(){return this._connecting}get connected(){var t;return!!(null===(t=this._wallet)||void 0===t?void 0:t.isConnected)}connect(){return p(this,void 0,void 0,(function*(){try{if(this.connected||this.connecting)return;this._connecting=!0;const n="undefined"!==typeof window&&window.solflare;if(!n)throw new u.l5;if(!n.isSolflare)throw new u.Yf;if(!n.isConnected)try{yield n.connect()}catch(t){throw new u.$w(null===t||void 0===t?void 0:t.message,t)}if(!n.publicKey)throw new u.$w;let i;try{i=new M.nh(n.publicKey.toBytes())}catch(t){throw new u.Nx(null===t||void 0===t?void 0:t.message,t)}n.on("disconnect",this._disconnected),this._wallet=n,this._publicKey=i,this.emit("connect")}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}))}disconnect(){return p(this,void 0,void 0,(function*(){const t=this._wallet;if(t){t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null;try{yield t.disconnect()}catch(n){this.emit("error",new u.UG(null===n||void 0===n?void 0:n.message,n))}}this.emit("disconnect")}))}signTransaction(t){return p(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{return(yield i.signTransaction(t))||t}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}signAllTransactions(t){return p(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{return(yield i.signAllTransactions(t))||t}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}}const Y=(t={})=>({name:e.Solflare,url:"https://solflare.com",icon:"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+",adapter:()=>new x(t)});var E=i(73886),C=function(t,n,i,e){return new(i||(i=Promise))((function(o,c){function r(t){try{u(e.next(t))}catch(n){c(n)}}function s(t){try{u(e.throw(t))}catch(n){c(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}u((e=e.apply(t,n||[])).next())}))};class k extends u.eC{constructor(t={}){super(),this._disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),this._wallet=null,this.emit("error",new u.at),this.emit("disconnect"))},this._provider=t.provider||("undefined"===typeof window?void 0:window.sollet),this._network=t.network||u.QZ.Mainnet,this._connecting=!1,this._wallet=null,this.ready||(0,u._j)(this,t.pollInterval||1e3,t.pollCount||3)}get publicKey(){var t;return(null===(t=this._wallet)||void 0===t?void 0:t.publicKey)||null}get ready(){var t;return"string"===typeof this._provider||"undefined"!==typeof window&&"function"===typeof(null===(t=window.sollet)||void 0===t?void 0:t.postMessage)}get connecting(){return this._connecting}get connected(){var t;return!!(null===(t=this._wallet)||void 0===t?void 0:t.connected)}connect(){return C(this,void 0,void 0,(function*(){try{if(this.connected||this.connecting)return;this._connecting=!0;const n=this._provider||"undefined"!==typeof window&&window.sollet;if(!n)throw new u.l5;let i;try{i=new E.Z(n,this._network);const t=i.handleDisconnect;let e,o;try{yield new Promise(((c,r)=>{const s=()=>{e&&clearTimeout(e),i.off("connect",s),c()};if(i.handleDisconnect=(...n)=>(i.off("connect",s),r(new u.hd),t.apply(i,n)),i.on("connect",s),i.connect().catch((t=>{i.off("connect",s),r(t)})),"string"===typeof n){let t=0;o=setInterval((()=>{const n=i._popup;n?n.closed&&r(new u.hd):t>50&&r(new u.d2),t++}),100)}else e=setTimeout((()=>r(new u.NK)),1e4)}))}finally{i.handleDisconnect=t,o&&clearInterval(o)}}catch(t){if(t instanceof u.lj)throw t;throw new u.$w(null===t||void 0===t?void 0:t.message,t)}i.on("disconnect",this._disconnected),this._wallet=i,this.emit("connect")}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}))}disconnect(){return C(this,void 0,void 0,(function*(){const t=this._wallet;if(t){t.off("disconnect",this._disconnected),this._wallet=null;const i=t.handleDisconnect;try{yield new Promise(((n,e)=>{const o=setTimeout((()=>n()),250);t.handleDisconnect=(...e)=>(clearTimeout(o),n(),t._responsePromises=new Map,i.apply(t,e)),t.disconnect().then((()=>{clearTimeout(o),n()}),(t=>{clearTimeout(o),"Wallet disconnected"===(null===t||void 0===t?void 0:t.message)?n():e(t)}))}))}catch(n){this.emit("error",new u.UG(null===n||void 0===n?void 0:n.message,n))}finally{t.handleDisconnect=i}}this.emit("disconnect")}))}signTransaction(t){return C(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{return(yield i.signTransaction(t))||t}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}signAllTransactions(t){return C(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{return(yield i.signAllTransactions(t))||t}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}signMessage(t){return C(this,void 0,void 0,(function*(){try{const i=this._wallet;if(!i)throw new u.oS;try{const{signature:n}=yield i.sign(t,"utf8");return Uint8Array.from(n)}catch(n){throw new u.fk(null===n||void 0===n?void 0:n.message,n)}}catch(n){throw this.emit("error",n),n}}))}}var b=function(t,n){var i={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(i[e[o]]=t[e[o]])}return i};const P=(t={})=>{var{provider:n}=t,i=b(t,["provider"]);return{name:e.Sollet,url:"https://www.sollet.io",icon:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUzMCIgd2lkdGg9IjUzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLTEtMWg1MzJ2NTMyaC01MzJ6IiBmaWxsPSJub25lIi8+PGcgZmlsbD0iIzAwZmZhMyI+PHBhdGggZD0ibTg4Ljg4OTM1IDM3Mi45ODIwMWMzLjE5My0zLjE5IDcuNTIyLTQuOTgyIDEyLjAzNS00Ljk4Mmg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTc0IDYuMDE3IDE0LjUzNmwtODIuMjkxIDgyLjIyNmMtMy4xOTMgMy4xOTEtNy41MjIgNC45ODMtMTIuMDM2IDQuOTgzaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NS05LjE3NC02LjAxNzgtMTQuNTM3bDgyLjI5MTktODIuMjI2eiIvPjxwYXRoIGQ9Im04OC44ODkzNSA2NS45ODI1YzMuMTkzLTMuMTkwNCA3LjUyMi00Ljk4MjUgMTIuMDM1LTQuOTgyNWg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTczOSA2LjAxNyAxNC41MzYzbC04Mi4yOTEgODIuMjI2N2MtMy4xOTMgMy4xOS03LjUyMiA0Ljk4Mi0xMi4wMzYgNC45ODJoLTQxNi40NjAxYy03LjU4NjYgMC0xMS4zODQ1LTkuMTc0LTYuMDE3OC0xNC41MzZsODIuMjkxOS04Mi4yMjY1eiIvPjxwYXRoIGQ9Im00NDEuMTExMzUgMjE5LjEwOTVjLTMuMTkzLTMuMTktNy41MjItNC45ODItMTIuMDM2LTQuOTgyaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NSA5LjE3My02LjAxNzggMTQuNTM2bDgyLjI5MTkgODIuMjI2YzMuMTkzIDMuMTkgNy41MjIgNC45ODMgMTIuMDM1IDQuOTgzaDQxNi40NjFjNy41ODYgMCAxMS4zODQtOS4xNzQgNi4wMTctMTQuNTM3eiIvPjwvZz48L3N2Zz4=",adapter:()=>new k(Object.assign({provider:"https://www.sollet.io"},i))}};var Z=function(t,n){var i={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(i[e[o]]=t[e[o]])}return i};const Q=(t={})=>{var{provider:n}=t,i=Z(t,["provider"]);return{name:e.SolletExtension,url:"https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno",icon:"data:image/png;base64,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",adapter:()=>new k(i)}};var B=i(38016),U=i.n(B),G=i(84862),W=function(t,n,i,e){return new(i||(i=Promise))((function(o,c){function r(t){try{u(e.next(t))}catch(n){c(n)}}function s(t){try{u(e.throw(t))}catch(n){c(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}u((e=e.apply(t,n||[])).next())}))};class _ extends u.sz{constructor(t){super(),this._options=Object.assign({uxMode:"popup",network:B.OPENLOGIN_NETWORK.MAINNET},t.options),this._connecting=!1,this._openLogin=null,this._keypair=null}get publicKey(){var t;return(null===(t=this._keypair)||void 0===t?void 0:t.publicKey)||null}get ready(){return"undefined"!==typeof window}get connecting(){return this._connecting}get connected(){return!!this._keypair}connect(){return W(this,void 0,void 0,(function*(){try{if(this.connected||this.connecting)return;let n,i,e;this._connecting=!0;try{if(n=new(U())(this._options),yield n.init(),i=n.privKey,!i){let t;try{i=yield new Promise(((i,e)=>{t=({reason:t})=>{switch(null===t||void 0===t?void 0:t.message.toLowerCase()){case"user closed popup":t=new u.hd(t.message,t);break;case"unable to open window":t=new u.d2(t.message,t)}e(t)},window.addEventListener("unhandledrejection",t),n.login().then((t=>i(n.privKey)),(n=>t({reason:n})))}))}finally{window.removeEventListener("unhandledrejection",t)}}}catch(t){if(t instanceof u.lj)throw t;throw new u.$w(null===t||void 0===t?void 0:t.message,t)}try{e=M.RG.fromSecretKey((0,G.getED25519Key)(i).sk)}catch(t){throw new u.Db(null===t||void 0===t?void 0:t.message,t)}this._openLogin=n,this._keypair=e,this.emit("connect")}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}))}disconnect(){return W(this,void 0,void 0,(function*(){const t=this._openLogin;if(t){this._openLogin=null,this._keypair=null;try{yield t.logout(),yield t._cleanup()}catch(n){this.emit("error",new u.UG(null===n||void 0===n?void 0:n.message,n))}}this.emit("disconnect")}))}signTransaction(t){return W(this,void 0,void 0,(function*(){try{const i=this._keypair;if(!i)throw new u.oS;try{t.partialSign(i)}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}return t}catch(n){throw this.emit("error",n),n}}))}signAllTransactions(t){return W(this,void 0,void 0,(function*(){try{const i=this._keypair;if(!i)throw new u.oS;try{for(const n of t)n.partialSign(i)}catch(n){throw new u.PY(null===n||void 0===n?void 0:n.message,n)}return t}catch(n){throw this.emit("error",n),n}}))}}var K=i(96325),H=i(32735),R=i(48475),J=i(74512),V=(0,o.Z)({palette:{type:"dark",primary:{main:r.Z[700]},secondary:{main:s.Z[700]}},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),F=function(t){var n=t.children,i=u.QZ.Devnet,o=(0,H.useMemo)((function(){return(0,M.Wf)(i)}),[i]),c=(0,R.vl)().autoConnect,r=(0,H.useMemo)((function(){return[m(),S(),Y(),(t={options:{clientId:"BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ"}},{name:e.Torus,url:"https://tor.us",icon:"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB3aWR0aD0iNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOS40MDY5MSAwYy0zLjcyMjcxIDAtNi43NDA1NiAzLjAxNzg0LTYuNzQwNTYgNi43NDA1NXY3Ljg1MjI1YzAgMy43MjI3IDMuMDE3ODUgNi43NDA1IDYuNzQwNTUgNi43NDA1aDExLjkyNTg1djQzLjkyNjFjMCAzLjcyMjcgMy4wMTc5IDYuNzQwNiA2Ljc0MDYgNi43NDA2aDcuODUyMmMzLjcyMjcgMCA2Ljc0MDYtMy4wMTc5IDYuNzQwNi02Ljc0MDZ2LTUwLjYwOTVjLjAwMDEtLjAxOTEuMDAwMi0uMDM4MS4wMDAyLS4wNTcxdi03Ljg1MjI0YzAtMy43MjI3MS0zLjAxNzktNi43NDA1Ni02Ljc0MDYtNi43NDA1NmgtNy44NTI0LTE4LjY2NjQ0eiIgZmlsbD0iIzAzNjRmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTU4LjY2Njk1IDIxLjMzMzNjNS44OTExIDAgMTAuNjY2Ny00Ljc3NTYgMTAuNjY2Ny0xMC42NjY2IDAtNS44OTEwNy00Ljc3NTYtMTAuNjY2Ny0xMC42NjY3LTEwLjY2NjctNS44OTEgMC0xMC42NjY2IDQuNzc1NjMtMTAuNjY2NiAxMC42NjY3IDAgNS44OTEgNC43NzU2IDEwLjY2NjYgMTAuNjY2NiAxMC42NjY2eiIgZmlsbD0iIzFhYzdmZSIvPjwvc3ZnPg==",adapter:()=>new _(t)}),L(),P({network:i}),Q({network:i})];var t}),[i]),s=(0,K.Ds)().enqueueSnackbar,a=(0,H.useCallback)((function(t){s(t.message?"".concat(t.name,": ").concat(t.message):t.name,{variant:"error"}),console.error(t)}),[s]);return(0,J.jsx)(l.U,{endpoint:o,children:(0,J.jsx)(l.nS,{wallets:r,onError:a,autoConnect:c,children:n})})},X=function(t){var n=t.children;return(0,J.jsx)(c.Z,{theme:V,children:(0,J.jsx)(K.wT,{children:(0,J.jsx)(R.Tu,{children:(0,J.jsx)(F,{children:n})})})})}},64399:function(){},47475:function(){},41145:function(){},18164:function(){},83784:function(){},2905:function(){},50126:function(){},17854:function(){},28529:function(){},87876:function(){},14013:function(){},98673:function(){}}]);