/*! Built with http://stenciljs.com */
const{h,Context}=window.index;class AlertsPage{constructor(){this.hasAnimatableDismissibleAlert=!0,this.hasDismissibleAlert=!0,this.alertTypes=["primary","secondary","success","danger","warning","info","light","dark"]}onAnimatableAlertDismiss(){this.hasAnimatableDismissibleAlert=!1}onAlertDismiss(){this.hasDismissibleAlert=!1}render(){return[this.alertTypes.map(t=>h("scb-alert",{type:t},"This is a ",t," alert-check it out!")),h("div",null,h("h2",null,"Content Projection"),h("h4",null,"Link Color"),h("scb-alert",{type:"primary"},"This is a primary alert with ",h("a",{href:"#",class:"alert-link"},"an example link"),". Give it a click if you like."),h("h4",null,"More Content"),h("scb-alert",{type:"success"},h("h4",{class:"alert-heading"},"Well done!"),h("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),h("hr",null),h("p",{class:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))),h("div",{id:"dismissible-alert-container"},h("h2",null,"Dismissable Alerts"),h("h4",null,"With fade transition"),this.hasAnimatableDismissibleAlert?this.getDismissibleAlert(!0):this.getCreateAlertButton(!0),h("h4",null,"Without fade transition"),this.hasDismissibleAlert?this.getDismissibleAlert(!1):this.getCreateAlertButton(!1))]}getDismissibleAlert(t){return h("scb-alert",{type:"warning",dismissible:!0,onDismiss:(()=>t?this.onAnimatableAlertDismiss():this.onAlertDismiss()).bind(this),animatable:t},h("strong",null,"Holy guacamole!")," You should check in on some of those fields below.")}getCreateAlertButton(t){return h("button",{class:"btn btn-link",onClick:(()=>t?this.hasAnimatableDismissibleAlert=!0:this.hasDismissibleAlert=!0).bind(this)},"Show ",t&&"Animatable "," Dismissible Alert")}static get is(){return"alerts-page"}static get properties(){return{hasAnimatableDismissibleAlert:{state:!0},hasDismissibleAlert:{state:!0}}}}class ScbAlert{constructor(){this.dismissible=!1,this.animatable=!0,this.show=!0}toggleVisibilityHandler(t){this.toggleVisibility.emit(t)}dismiss(){return this.dismissible?!this.animatable&&this.onDismiss?this.onDismiss(this.el):(this.show=!1,this.toggleVisibilityHandler(this.show),void(this.onDismiss&&setTimeout(()=>{this.onDismiss(this.el)},150))):console.warn("This alert is not dismissible!",this.el)}componentWillLoad(){this.setShowFadeState()}render(){return h("div",{class:{alert:!0,[`alert-${this.type||"info"}`]:!0,"alert-dismissible":this.dismissible,show:this.animatable&&this.show,fade:this.animatable&&this.fade},role:"alert"},this.getDismissButton(),h("slot",null))}setShowFadeState(){this.animatable&&(this.show=!0,this.fade=!0)}getDismissButton(){return this.dismissible?h("button",{type:"button",class:"close","aria-label":"Close",onClick:this.dismiss.bind(this)},h("span",{"aria-hidden":"true"},"×")):null}static get is(){return"scb-alert"}static get properties(){return{animatable:{type:Boolean,attr:"animatable",watchCallbacks:["componentWillLoad"]},dismiss:{method:!0},dismissible:{type:Boolean,attr:"dismissible"},el:{elementRef:!0},fade:{state:!0},onDismiss:{type:"Any"},show:{type:Boolean,attr:"show"},type:{type:String,attr:"type"}}}static get events(){return[{name:"toggleVisibility",method:"toggleVisibility",bubbles:!0,cancelable:!0,composed:!0}]}}class StencilBootstrapDemo{render(){return h("div",{class:"container-fluid"},h("div",{class:"row"},h("div",{class:"col-12 text-center"},h("h1",null,"Web Components for Bootstrap 4 Beta"),h("p",null,"Built with ",h("a",{href:"https://stenciljs.com",target:"blank"},"Stencil")," <3"))),h("div",{class:"row"},h("div",{class:"col-12 col-md-3"},h("ul",null,h("li",null,h("stencil-route-link",{url:"/alerts",urlMatch:["/","/alerts"],activeClass:"active",exact:!0},"Alerts")),h("li",null,h("stencil-route-link",{url:"/badge",urlMatch:["/badge"],activeClass:"active",exact:!0},"Badge")),h("li",null,h("stencil-route-link",{url:"/breadcrumb",urlMatch:["/breadcrumb"],activeClass:"active",exact:!0},"Breadcrumb")),h("li",null,h("stencil-route-link",{url:"/video-player",urlMatch:["/video-player"],activeClass:"active",exact:!0},"Video Player")),h("li",null,h("stencil-route-link",{url:"/fcl-image",urlMatch:["/fcl-image"],activeClass:"active",exact:!0},"Fcl Image")),h("li",null,h("stencil-route-link",{url:"/list",urlMatch:["/list"],activeClass:"active",exact:!0},"List")),h("li",null,h("stencil-route-link",{url:"/file-input",urlMatch:["/file-input"],activeClass:"active",exact:!0},"File Input")),h("li",null,h("stencil-route-link",{url:"/dropdown",urlMatch:["/dropdown"],activeClass:"active",exact:!0},"Dropdown")),h("li",null,h("stencil-route-link",{url:"/typeahead",urlMatch:["/typeahead"],activeClass:"active",exact:!0},"Typeahead")),h("li",null,h("stencil-route-link",{url:"/multiselect",urlMatch:["/multiselect"],activeClass:"active",exact:!0},"Multiselect")),"  ",h("li",null,h("stencil-route-link",{url:"/tag",urlMatch:["/tag"],activeClass:"active",exact:!0},"Tag")),h("li",null,h("stencil-route-link",{url:"/form",urlMatch:["/form"],activeClass:"active",exact:!0},"Form")),h("li",null,h("stencil-route-link",{url:"/dialog",urlMatch:["/dialog"],activeClass:"active",exact:!0},"Dialog")),h("li",null,h("stencil-route-link",{url:"/tooltip",urlMatch:["/tooltip"],activeClass:"active",exact:!0},"Tooltip")),h("li",null,h("stencil-route-link",{url:"/navbar",urlMatch:["/navbar"],activeClass:"active",exact:!0},"Navbar")))),h("div",{class:"col-12 col-md-9"},h("stencil-router",{id:"router"},h("stencil-route",{url:["/","/alerts"],component:"alerts-page",exact:!0}),h("stencil-route",{url:["/badge"],component:"badge-page",exact:!0}),h("stencil-route",{url:["/breadcrumb"],component:"breadcrumb-page",exact:!0}),h("stencil-route",{url:["/video-player"],component:"video-player-page",exact:!0}),h("stencil-route",{url:["/fcl-image"],component:"fcl-image-page",exact:!0}),h("stencil-route",{url:["/file-input"],component:"file-input-page",exact:!0}),h("stencil-route",{url:["/list"],component:"list-page",exact:!0}),h("stencil-route",{url:["/dropdown"],component:"dropdown-page",exact:!0}),h("stencil-route",{url:["/typeahead"],component:"typeahead-page",exact:!0}),h("stencil-route",{url:["/multiselect"],component:"multiselect-page",exact:!0})," ",h("stencil-route",{url:["/tag"],component:"tag-page",exact:!0}),h("stencil-route",{url:["/form"],component:"form-page",exact:!0}),h("stencil-route",{url:["/dialog"],component:"dialog-page",exact:!0}),h("stencil-route",{url:["/tooltip"],component:"tooltip-page",exact:!0}),h("stencil-route",{url:["/navbar"],component:"navbar-page",exact:!0})))))}static get is(){return"stencil-bootstrap-demo"}}export{AlertsPage,ScbAlert,StencilBootstrapDemo};