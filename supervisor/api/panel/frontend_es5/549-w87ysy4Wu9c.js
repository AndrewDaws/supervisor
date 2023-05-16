"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[549],{67622:function(e,t,i){var a,n,l,r,o,d,s=i(88962),c=i(33368),u=i(71650),f=i(82390),p=i(69205),h=i(70906),v=i(91808),k=i(88771),m=i(47838),_=i(31338),y=i(68144),b=i(14243),g=i(83448),x=i(47181);i(76870),i(5666),(0,v.Z)([(0,b.Mo)("ha-file-upload")],(function(e,t){var i=function(t){(0,p.Z)(a,t);var i=(0,h.Z)(a);function a(){var t;(0,u.Z)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=i.call.apply(i,[this].concat(l)),e((0,f.Z)(t)),t}return(0,c.Z)(a)}(t);return{F:i,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"accept",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"value",value:function(){return null}},{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"uploading",value:function(){return!1}},{kind:"field",decorators:[(0,b.Cb)({type:Boolean,attribute:"auto-open-file-dialog"})],key:"autoOpenFileDialog",value:function(){return!1}},{kind:"field",decorators:[(0,b.SB)()],key:"_drag",value:function(){return!1}},{kind:"field",decorators:[(0,b.IO)("#input")],key:"_input",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){(0,k.Z)((0,m.Z)(i.prototype),"firstUpdated",this).call(this,e),this.autoOpenFileDialog&&this._openFilePicker()}},{kind:"method",key:"render",value:function(){var e;return(0,y.dy)(a||(a=(0,s.Z)([" "," "])),this.uploading?(0,y.dy)(n||(n=(0,s.Z)(['<ha-circular-progress alt="Uploading" size="large" active></ha-circular-progress>']))):(0,y.dy)(l||(l=(0,s.Z)([' <label for="input" class="mdc-text-field mdc-text-field--filled ','" @drop="','" @dragenter="','" @dragover="','" @dragleave="','" @dragend="','"> <span class="mdc-text-field__ripple"></span> <span class="mdc-floating-label ','" id="label">',"</span> ",' <div class="value">','</div> <input id="input" type="file" class="mdc-text-field__input file" accept="','" @change="','" aria-labelledby="label"> ',' <span class="mdc-line-ripple ','"></span> </label> '])),(0,g.$)({"mdc-text-field--focused":this._drag,"mdc-text-field--with-leading-icon":Boolean(this.icon),"mdc-text-field--with-trailing-icon":Boolean(this.value)}),this._handleDrop,this._handleDragStart,this._handleDragStart,this._handleDragEnd,this._handleDragEnd,this.value||this._drag?"mdc-floating-label--float-above":"",this.label,this.icon?(0,y.dy)(r||(r=(0,s.Z)(['<span class="mdc-text-field__icon mdc-text-field__icon--leading"> <ha-icon-button @click="','" .path="','"></ha-icon-button> </span>'])),this._openFilePicker,this.icon):"",this.value,this.accept,this._handleFilePicked,this.value?(0,y.dy)(o||(o=(0,s.Z)(['<span class="mdc-text-field__icon mdc-text-field__icon--trailing"> <ha-icon-button slot="suffix" @click="','" .label="','" .path="','"></ha-icon-button> </span>'])),this._clearValue,(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.close"))||"close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):"",this._drag?"mdc-line-ripple--active":""))}},{kind:"method",key:"_openFilePicker",value:function(){var e;null===(e=this._input)||void 0===e||e.click()}},{kind:"method",key:"_handleDrop",value:function(e){var t;e.preventDefault(),e.stopPropagation(),null!==(t=e.dataTransfer)&&void 0!==t&&t.files&&(0,x.B)(this,"file-picked",{files:e.dataTransfer.files}),this._drag=!1}},{kind:"method",key:"_handleDragStart",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!0}},{kind:"method",key:"_handleDragEnd",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!1}},{kind:"method",key:"_handleFilePicked",value:function(e){(0,x.B)(this,"file-picked",{files:e.target.files})}},{kind:"method",key:"_clearValue",value:function(e){e.preventDefault(),this.value=null,(0,x.B)(this,"change")}},{kind:"get",static:!0,key:"styles",value:function(){return[_.W,(0,y.iv)(d||(d=(0,s.Z)([':host{display:block}.mdc-text-field--filled{height:auto;padding-top:16px;cursor:pointer}.mdc-text-field--filled.mdc-text-field--with-trailing-icon{padding-top:28px}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field--filled.mdc-text-field--with-trailing-icon .mdc-text-field__icon{align-self:flex-end}.mdc-text-field__icon--leading{margin-bottom:12px;inset-inline-start:initial;inset-inline-end:0px;direction:var(--direction)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:scale(.75);top:8px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field--filled .mdc-floating-label{inset-inline-start:48px!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__icon--trailing{pointer-events:auto!important}.dragged:before{position:var(--layout-fit_-_position);top:var(--layout-fit_-_top);right:var(--layout-fit_-_right);bottom:var(--layout-fit_-_bottom);left:var(--layout-fit_-_left);background:currentColor;content:"";opacity:var(--dark-divider-opacity);pointer-events:none;border-radius:4px}.value{width:100%}input.file{display:none}img{max-width:100%;max-height:125px}ha-icon-button{--mdc-icon-button-size:24px;--mdc-icon-size:20px}ha-circular-progress{display:block;text-align-last:center}'])))]}}]}}),y.oi)},20549:function(e,t,i){i.r(t),i.d(t,{HaFileSelector:function(){return g}});var a,n=i(99312),l=i(81043),r=i(88962),o=i(33368),d=i(71650),s=i(82390),c=i(69205),u=i(70906),f=i(91808),p=i(88771),h=i(47838),v=i(68144),k=i(14243),m=i(47181),_=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(t,i){var a,l,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",i),e.next=4,t.fetchWithAuth("/api/file_upload",{method:"POST",body:a});case 4:if(413!==(l=e.sent).status){e.next=9;break}throw new Error("Uploaded file is too large (".concat(i.name,")"));case 9:if(200===l.status){e.next=11;break}throw new Error("Unknown error");case 11:return e.next=13,l.json();case 13:return r=e.sent,e.abrupt("return",r.file_id);case 15:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),y=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(t,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callApi("DELETE","file_upload",{file_id:i}));case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),b=i(26765),g=(i(67622),(0,f.Z)([(0,k.Mo)("ha-selector-file")],(function(e,t){var i,f=function(t){(0,c.Z)(a,t);var i=(0,u.Z)(a);function a(){var t;(0,d.Z)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=i.call.apply(i,[this].concat(l)),e((0,s.Z)(t)),t}return(0,o.Z)(a)}(t);return{F:f,d:[{kind:"field",decorators:[(0,k.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"field",decorators:[(0,k.SB)()],key:"_filename",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_busy",value:function(){return!1}},{kind:"method",key:"render",value:function(){var e,t;return(0,v.dy)(a||(a=(0,r.Z)([' <ha-file-upload .hass="','" .accept="','" .icon="','" .label="','" .required="','" .disabled="','" .helper="','" .uploading="','" .value="','" @file-picked="','" @change="','"></ha-file-upload> '])),this.hass,null===(e=this.selector.file)||void 0===e?void 0:e.accept,"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z",this.label,this.required,this.disabled,this.helper,this._busy,this.value?(null===(t=this._filename)||void 0===t?void 0:t.name)||"Unknown file":"",this._uploadFile,this._removeFile)}},{kind:"method",key:"willUpdate",value:function(e){(0,p.Z)((0,h.Z)(f.prototype),"willUpdate",this).call(this,e),e.has("value")&&this._filename&&this.value!==this._filename.fileId&&(this._filename=void 0)}},{kind:"method",key:"_uploadFile",value:(i=(0,l.Z)((0,n.Z)().mark((function e(t){var i,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._busy=!0,i=t.detail.files[0],e.prev=2,e.next=5,_(this.hass,i);case 5:a=e.sent,this._filename={fileId:a,name:i.name},(0,m.B)(this,"value-changed",{value:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),(0,b.Ys)(this,{text:this.hass.localize("ui.components.selectors.file.upload_failed",{reason:e.t0.message||e.t0})});case 13:return e.prev=13,this._busy=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[2,10,13,16]])}))),function(e){return i.apply(this,arguments)})},{kind:"field",key:"_removeFile",value:function(){var e=this;return(0,l.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e._busy=!0,t.prev=1,t.next=4,y(e.hass,e.value);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:return t.prev=8,e._busy=!1,t.finish(8);case 11:e._filename=void 0,(0,m.B)(e,"value-changed",{value:""});case 13:case"end":return t.stop()}}),t,null,[[1,6,8,11]])})))}}]}}),v.oi))}}]);
//# sourceMappingURL=549-w87ysy4Wu9c.js.map