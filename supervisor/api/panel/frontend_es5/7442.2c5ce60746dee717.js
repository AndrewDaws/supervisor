/*! For license information please see 7442.2c5ce60746dee717.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["7442"],{67840:function(e,t,i){i.d(t,{A:function(){return I}});var n,o,a,r=i("27862"),s=i("52565"),l=i("92776"),d=i("5776"),c=i("9065"),h=i("50778"),p=i("10265"),u=i("22936"),v=i("11655"),m=i("63038"),f=i("9833"),g=i("94524"),y=i("77204"),b=(i("19083"),i("71695"),i("64228"),i("92745"),i("42713"),i("40251"),i("61006"),i("99341"),i("13334"),i("47021"),i("1231"),i("57243")),x=i("35359"),k=i("13823"),w=i("79679"),C=i("88854"),_=function(e){function t(){var e;return(0,s.Z)(this,t),(e=(0,l.Z)(this,t)).quick=!1,e.returnValue="",e.noFocusTrap=!1,e.getOpenAnimation=function(){return C.I},e.getCloseAnimation=function(){return C.G},e.isOpen=!1,e.isOpening=!1,e.isConnectedPromise=e.getIsConnectedPromise(),e.isAtScrollTop=!1,e.isAtScrollBottom=!1,e.nextClickIsFromContent=!1,e.hasHeadline=!1,e.hasActions=!1,e.hasIcon=!1,e.escapePressedWithoutCancel=!1,e.treewalker=b.sk?null:document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),b.sk||e.addEventListener("submit",e.handleSubmit),e}return(0,d.Z)(t,e),(0,r.Z)(t,[{key:"open",get:function(){return this.isOpen},set:function(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}},{key:"show",value:(c=(0,g.Z)((0,f.Z)().mark((function e(){var t,i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isOpening=!0,e.next=3,this.isConnectedPromise;case 3:return e.next=5,this.updateComplete;case 5:if(!(i=this.dialog).open&&this.isOpening){e.next=9;break}return this.isOpening=!1,e.abrupt("return");case 9:if(this.dispatchEvent(new Event("open",{cancelable:!0}))){e.next=14;break}return this.open=!1,this.isOpening=!1,e.abrupt("return");case 14:return i.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),null===(t=this.querySelector("[autofocus]"))||void 0===t||t.focus(),e.next=20,this.animateDialog(this.getOpenAnimation());case 20:this.dispatchEvent(new Event("opened")),this.isOpening=!1;case 22:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"close",value:(a=(0,g.Z)((0,f.Z)().mark((function e(){var t,i,n,o=arguments;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:this.returnValue,this.isOpening=!1,this.isConnected){e.next=5;break}return this.open=!1,e.abrupt("return");case 5:return e.next=7,this.updateComplete;case 7:if((i=this.dialog).open&&!this.isOpening){e.next=11;break}return this.open=!1,e.abrupt("return");case 11:if(n=this.returnValue,this.returnValue=t,this.dispatchEvent(new Event("close",{cancelable:!0}))){e.next=17;break}return this.returnValue=n,e.abrupt("return");case 17:return e.next=19,this.animateDialog(this.getCloseAnimation());case 19:i.close(t),this.open=!1,this.dispatchEvent(new Event("closed"));case 22:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"connectedCallback",value:function(){(0,y.Z)(t,"connectedCallback",this,3)([]),this.isConnectedPromiseResolve()}},{key:"disconnectedCallback",value:function(){(0,y.Z)(t,"disconnectedCallback",this,3)([]),this.isConnectedPromise=this.getIsConnectedPromise()}},{key:"render",value:function(){var e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,a=(0,b.dy)(n||(n=(0,m.Z)([' <div class="focus-trap" tabindex="0" aria-hidden="true" @focus="','"></div> '])),this.handleFocusTrapFocus),r=this.ariaLabel;return(0,b.dy)(o||(o=(0,m.Z)([' <div class="scrim"></div> <dialog class="','" aria-label="','" aria-labelledby="','" role="','" @cancel="','" @click="','" @close="','" @keydown="','" .returnValue="','"> ',' <div class="container" @click="','"> <div class="headline"> <div class="icon" aria-hidden="true"> <slot name="icon" @slotchange="','"></slot> </div> <h2 id="headline" aria-hidden="','"> <slot name="headline" @slotchange="','"></slot> </h2> <md-divider></md-divider> </div> <div class="scroller"> <div class="content"> <div class="top anchor"></div> <slot name="content"></slot> <div class="bottom anchor"></div> </div> </div> <div class="actions"> <md-divider></md-divider> <slot name="actions" @slotchange="','"></slot> </div> </div> '," </dialog> "])),(0,x.$)(t),r||b.Ld,this.hasHeadline?"headline":b.Ld,"alert"===this.type?"alertdialog":b.Ld,this.handleCancel,this.handleDialogClick,this.handleClose,this.handleKeydown,this.returnValue||b.Ld,i?a:b.Ld,this.handleContentClick,this.handleIconChange,!this.hasHeadline||b.Ld,this.handleHeadlineChange,this.handleActionsChange,i?a:b.Ld)}},{key:"firstUpdated",value:function(){var e=this;this.intersectionObserver=new IntersectionObserver((function(t){var i,n=(0,v.Z)(t);try{for(n.s();!(i=n.n()).done;){var o=i.value;e.handleAnchorIntersection(o)}}catch(a){n.e(a)}finally{n.f()}}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}},{key:"handleDialogClick",value:function(){this.nextClickIsFromContent?this.nextClickIsFromContent=!1:!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}},{key:"handleContentClick",value:function(){this.nextClickIsFromContent=!0}},{key:"handleSubmit",value:function(e){var t,i=e.target,n=e.submitter;"dialog"===i.method&&n&&this.close(null!==(t=n.getAttribute("value"))&&void 0!==t?t:this.returnValue)}},{key:"handleCancel",value:function(e){if(e.target===this.dialog){this.escapePressedWithoutCancel=!1;var t=!(0,w.e)(this,e);e.preventDefault(),t||this.close()}}},{key:"handleClose",value:function(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,null===(e=this.dialog)||void 0===e||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}},{key:"handleKeydown",value:function(e){var t=this;"Escape"===e.key&&(this.escapePressedWithoutCancel=!0,setTimeout((function(){t.escapePressedWithoutCancel=!1})))}},{key:"animateDialog",value:(i=(0,g.Z)((0,f.Z)().mark((function e(t){var i,n,o,a,r,s,l,d,c,h,m,g,y,b,x,k,w,C,_,A,E,I,Z=this;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(i=this.cancelAnimations)||void 0===i||i.abort(),this.cancelAnimations=new AbortController,!this.quick){e.next=4;break}return e.abrupt("return");case 4:if(n=this.dialog,o=this.scrim,a=this.container,r=this.headline,s=this.content,l=this.actions,n&&o&&a&&r&&s&&l){e.next=7;break}return e.abrupt("return");case 7:d=t.container,c=t.dialog,h=t.scrim,m=t.headline,g=t.content,y=t.actions,b=[],x=0,k=[[n,null!=c?c:[]],[o,null!=h?h:[]],[a,null!=d?d:[]],[r,null!=m?m:[]],[s,null!=g?g:[]],[l,null!=y?y:[]]];case 11:if(!(x<k.length)){e.next=32;break}w=(0,u.Z)(k[x],2),C=w[0],_=w[1],A=(0,v.Z)(_),e.prev=14,I=(0,f.Z)().mark((function e(){var t,i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=E.value,i=C.animate.apply(C,(0,p.Z)(t)),Z.cancelAnimations.signal.addEventListener("abort",(function(){i.cancel()})),b.push(i);case 4:case"end":return e.stop()}}),e)})),A.s();case 17:if((E=A.n()).done){e.next=21;break}return e.delegateYield(I(),"t0",19);case 19:e.next=17;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(14),A.e(e.t1);case 26:return e.prev=26,A.f(),e.finish(26);case 29:x++,e.next=11;break;case 32:return e.next=34,Promise.all(b.map((function(e){return e.finished.catch((function(){}))})));case 34:case"end":return e.stop()}}),e,this,[[14,23,26,29]])}))),function(e){return i.apply(this,arguments)})},{key:"handleHeadlineChange",value:function(e){var t=e.target;this.hasHeadline=t.assignedElements().length>0}},{key:"handleActionsChange",value:function(e){var t=e.target;this.hasActions=t.assignedElements().length>0}},{key:"handleIconChange",value:function(e){var t=e.target;this.hasIcon=t.assignedElements().length>0}},{key:"handleAnchorIntersection",value:function(e){var t=e.target,i=e.isIntersecting;t===this.topAnchor&&(this.isAtScrollTop=i),t===this.bottomAnchor&&(this.isAtScrollBottom=i)}},{key:"getIsConnectedPromise",value:function(){var e=this;return new Promise((function(t){e.isConnectedPromiseResolve=t}))}},{key:"handleFocusTrapFocus",value:function(e){var t=this.getFirstAndLastFocusableChildren(),i=(0,u.Z)(t,2),n=i[0],o=i[1];if(n&&o){var a=e.target===this.firstFocusTrap,r=!a,s=e.relatedTarget===n,l=e.relatedTarget===o,d=!s&&!l;if(r&&l||a&&d)n.focus();else(a&&s||r&&d)&&o.focus()}else{var c;null===(c=this.dialog)||void 0===c||c.focus()}}},{key:"getFirstAndLastFocusableChildren",value:function(){if(!this.treewalker)return[null,null];var e=null,t=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){var i=this.treewalker.currentNode;A(i)&&(e||(e=i),t=i)}return[e,t]}}]);var i,a,c}((0,k.T)(b.oi));function A(e){var t,i,n=":not(:disabled,[disabled])";return!!e.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+n+':not([tabindex^="-"])')||!!e.localName.includes("-")&&(!!e.matches(n)&&(null!==(t=null===(i=e.shadowRoot)||void 0===i?void 0:i.delegatesFocus)&&void 0!==t&&t))}(0,c.__decorate)([(0,h.Cb)({type:Boolean})],_.prototype,"open",null),(0,c.__decorate)([(0,h.Cb)({type:Boolean})],_.prototype,"quick",void 0),(0,c.__decorate)([(0,h.Cb)({attribute:!1})],_.prototype,"returnValue",void 0),(0,c.__decorate)([(0,h.Cb)()],_.prototype,"type",void 0),(0,c.__decorate)([(0,h.Cb)({type:Boolean,attribute:"no-focus-trap"})],_.prototype,"noFocusTrap",void 0),(0,c.__decorate)([(0,h.IO)("dialog")],_.prototype,"dialog",void 0),(0,c.__decorate)([(0,h.IO)(".scrim")],_.prototype,"scrim",void 0),(0,c.__decorate)([(0,h.IO)(".container")],_.prototype,"container",void 0),(0,c.__decorate)([(0,h.IO)(".headline")],_.prototype,"headline",void 0),(0,c.__decorate)([(0,h.IO)(".content")],_.prototype,"content",void 0),(0,c.__decorate)([(0,h.IO)(".actions")],_.prototype,"actions",void 0),(0,c.__decorate)([(0,h.SB)()],_.prototype,"isAtScrollTop",void 0),(0,c.__decorate)([(0,h.SB)()],_.prototype,"isAtScrollBottom",void 0),(0,c.__decorate)([(0,h.IO)(".scroller")],_.prototype,"scroller",void 0),(0,c.__decorate)([(0,h.IO)(".top.anchor")],_.prototype,"topAnchor",void 0),(0,c.__decorate)([(0,h.IO)(".bottom.anchor")],_.prototype,"bottomAnchor",void 0),(0,c.__decorate)([(0,h.IO)(".focus-trap")],_.prototype,"firstFocusTrap",void 0),(0,c.__decorate)([(0,h.SB)()],_.prototype,"hasHeadline",void 0),(0,c.__decorate)([(0,h.SB)()],_.prototype,"hasActions",void 0),(0,c.__decorate)([(0,h.SB)()],_.prototype,"hasIcon",void 0);var E=(0,b.iv)(a||(a=(0,m.Z)([':host{border-start-start-radius:var(--md-dialog-container-shape-start-start,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:0;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:0 0}.scrim{background:var(--md-sys-color-scrim,#000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color,var(--md-sys-color-on-surface,#1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight,var(--md-sys-typescale-headline-small-weight,var(--md-ref-typeface-weight-regular,400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color,var(--md-sys-color-secondary,#625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size,24px);width:var(--md-dialog-icon-size,24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color,var(--md-sys-color-surface-container-high,#ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, .875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight,var(--md-sys-typescale-body-medium-weight,var(--md-ref-typeface-weight-regular,400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-actions.show-bottom-divider .actions md-divider,.has-headline.show-top-divider .headline md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors:active){dialog{outline:2px solid WindowText}}']))),I=function(e){function t(){return(0,s.Z)(this,t),(0,l.Z)(this,t,arguments)}return(0,d.Z)(t,e),(0,r.Z)(t)}(_);I.styles=[E],I=(0,c.__decorate)([(0,h.Mo)("md-dialog")],I)},88854:function(e,t,i){i.d(t,{G:function(){return a},I:function(){return o}});var n=i(43921),o={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:n.Xt.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:n.Xt.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},a={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:n.Xt.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:n.Xt.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]}}}]);
//# sourceMappingURL=7442.2c5ce60746dee717.js.map