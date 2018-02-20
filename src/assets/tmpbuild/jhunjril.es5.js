/*! Built with http://stenciljs.com */
index.loadComponents(function(e,t,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"container"},t("h2",null,"Basic usage"),t("scb-file-input",{class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},"<scb-file-input></scb-file-input>"),t("h2",null,"Bootstrap styles"),t("scb-file-input",{type:"info",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input type="info"></scb-file-input>'),t("h2",null,"Max length"),t("scb-file-input",{"max-files":"3",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input max-files="3"></scb-file-input>'),t("h2",null,"No multiple"),t("scb-file-input",{"max-files":"1",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input max-files="1"></scb-file-input>'),t("h2",null,"No drag and drop"),t("scb-file-input",{nodrop:!0,class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},"<scb-file-input nodrop></scb-file-input>"),t("h2",null,"Upload Request Properties"),t("scb-file-input",{method:"post",target:"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage","form-data-name":"file",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input method="post" target="https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage" form-data-name="file"></scb-file-input>'),t("h2",null,"Custom drop label"),t("scb-file-input",{class:"mb-0"},t("span",{slot:"label"},"Drop your files here")),t("code",{class:"mb-3 d-block p-3"},t("div",null,"<scb-file-input>"),t("div",{class:"ml-2"},'<span slot="label">Drop your files here</span>'),t("div",null,"</scb-file-input>")),t("h2",null,"Custom button"),t("scb-file-input",{class:"mb-0"},t("button",{slot:"button"},"Select files")),t("code",{class:"mb-3 d-block p-3"},t("div",null,"<scb-file-input>"),t("div",{class:"ml-2"},'<button slot="button">Select files</button>'),t("div",null,"</scb-file-input>")),t("h2",null,"Setting Restrictions on Files to Upload"),'accept="image/*" maxFileSize="1000000"',t("scb-file-input",{accept:"image/*","max-file-size":"1000000",class:"mb-0"},t("span",{slot:"label"},"Drop images(up to 1 MB) here...")),t("code",{class:"mb-3 d-block p-3"},t("div",null,'<scb-file-input accept="image/*" max-file-size="1000000">'),t("div",{class:"ml-2"},'<span slot="label">Drop images(up to 1 MB) here...</span>'),t("div",null,"</scb-file-input>")),t("h2",null,"Customizing the Upload Request"),t("scb-file-input",{id:"customizingRequestDemo",method:"post",target:"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage","form-data-name":"file",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input id="customizingRequestDemo" method="post" target="https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage" form-data-name="file"></scb-file-input>',t("br",null),t("br",null),"<script>",t("div",{class:"ml-3"},"window.addEventListener('DOMContentLoaded', function() {",t("div",{class:"ml-3"},"var upload = document.querySelector('scb-file-input#customizingRequestDemo');",t("br",null),t("br",null),"upload.addEventListener('upload-before', function(event) {",t("div",{class:"ml-3"},"console.log('upload xhr before open: ', event.detail.xhr);",t("br",null),t("br",null),"// Prevent the upload request:",t("br",null),"// event.preventDefault();",t("br",null),t("br",null),"var file = event.detail.file;",t("br",null),"// Custom upload request url for file",t("br",null),"file.uploadTarget = upload.target + '/' + file.name;",t("br",null),t("br",null),"// Custom name in the Content-Disposition header",t("br",null),"file.formDataName = 'attachment';"),"});",t("br",null),t("br",null),"upload.addEventListener('upload-request', function(event) {",t("div",{class:"ml-3"},"console.log('upload xhr after open: ', event.detail.xhr);",t("br",null),t("br",null),"event.detail.xhr.setRequestHeader('X-File-Name', event.detail.file.name);",t("br",null),"event.detail.formData.append('documentId', 1234);"),"});",t("br",null),t("br",null),"upload.addEventListener('upload-start', function(event) {",t("div",{class:"ml-3"},"console.log('upload xhr after send: ', event.detail.xhr);"),"});"),"});"),"<\/script>"),t("h2",null,"Sending Files Without Wrapping in FormData"),t("scb-file-input",{id:"rawFilesDemo",method:"post",target:"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage","form-data-name":"file",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input id="rawFilesDemo" method="post" target="https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage" form-data-name="file"></scb-file-input>',t("br",null),t("br",null),"<script>",t("div",{class:"ml-3"},"window.addEventListener('DOMContentLoaded', function() {",t("div",{class:"ml-3"},"var upload = document.querySelector('scb-file-input#rawFilesDemo');",t("br",null),t("br",null),"upload.addEventListener('upload-request', function(event) {",t("div",{class:"ml-3"},"event.preventDefault();",t("br",null),"event.detail.xhr.send(event.detail.file);"),"});"),"});"),"<\/script>"),t("h2",null,"Custom Reaction on Server Response"),t("scb-file-input",{id:"responseDemo",method:"post",target:"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage","form-data-name":"file",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input id="responseDemo" method="post" target="https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage" form-data-name="file"></scb-file-input>',t("br",null),t("br",null),"<script>",t("div",{class:"ml-3"},"window.addEventListener('DOMContentLoaded', function() {",t("div",{class:"ml-3"},"var upload = document.querySelector('scb-file-input#responseDemo');",t("br",null),t("br",null),"upload.addEventListener('upload-response', function(event) {",t("div",{class:"ml-3"},"console.log('upload xhr after server response: ', event.detail.xhr);",t("br",null),"event.detail.file.error = 'Custom server error message.';",t("br",null),t("br",null),"// Interpret any server response as success:",t("br",null),"// event.detail.xhr.status = 200;"),"});"),"});"),"<\/script>"),t("h2",null,"Pre-Filling the File List in Advance"),t("scb-file-input",{id:"preFillDemo",method:"post",target:"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage",accept:"application/pdf","form-data-name":"file",class:"mb-0"}),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input id="preFillDemo" method="post" target="https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage" accept="application/pdf" form-data-name="file"></scb-file-input>',t("br",null),t("br",null),"<script>",t("div",{class:"ml-3"},"window.addEventListener('DOMContentLoaded', function() {",t("div",{class:"ml-3"},"var upload = document.querySelector('scb-file-input#preFillDemo');",t("br",null),t("br",null),"upload.files = [",t("div",{class:"ml-3"},"{name: 'Josh_CV.pdf', loadStatus: 100, uploaded: true},",t("br",null),"{name: 'Alex_CV.pdf', loadStatus: 100, uploaded: true}"),"];"),"});"),"<\/script>"),t("h2",null,"Manual Upload Trigger"),t("scb-file-input",{id:"manualUploadDemo","no-auto":!0,method:"post",target:"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage","form-data-name":"file",class:"mb-0"}),t("button",{id:"uploadButton"},"Start Upload(s)"),t("code",{class:"mb-3 d-block p-3"},'<scb-file-input id="manualUploadDemo" no-auto method="post" target="https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage" form-data-name="file"></scb-file-input>',t("br",null),'<button id="uploadButton">Start Upload</button>',t("br",null),t("br",null),"<script>",t("div",{class:"ml-3"},"window.addEventListener('DOMContentLoaded', function() {",t("div",{class:"ml-3"},"var upload = document.querySelector('scb-file-input#manualUploadDemo');",t("br",null),"var uploadButton = document.getElementById('uploadButton');",t("br",null),t("br",null),"uploadButton.addEventListener('click', function() {",t("div",{class:"ml-3"},"upload.uploadFiles();"),"});"),"});"),"<\/script>"))},e.prototype.componentDidLoad=function(){this.initCustomizingRequestDemo(),this.initRawFilesDemo(),this.initPreFillDemo(),this.initManualUploadDemo(),this.initResponseDemo()},e.prototype.addScript=function(e,t){var l=document.createElement("script"),n=document.querySelector(e);l.innerHTML=t,n.parentNode.appendChild(l)},e.prototype.initCustomizingRequestDemo=function(){this.addScript("scb-file-input#customizingRequestDemo","var upload = document.querySelector('scb-file-input#customizingRequestDemo');\n\n    upload.addEventListener('upload-before', function(event) {\n      console.log('upload xhr before open: ', event.detail.xhr);\n\n      // Prevent the upload request:\n      // event.preventDefault();\n\n      var file = event.detail.file;\n\n      // Custom upload request url for file\n      file.uploadTarget = upload.target + '/' + file.name;\n\n      // Custom name in the Content-Disposition header\n      file.formDataName = 'attachment';\n    });\n\n    upload.addEventListener('upload-request', function(event) {\n      console.log('upload xhr after open: ', event.detail.xhr);\n\n      event.detail.xhr.setRequestHeader('X-File-Name', event.detail.file.name);\n      event.detail.formData.append('documentId', 1234);\n    });\n\n    upload.addEventListener('upload-start', function(event) {\n      console.log('upload xhr after send: ', event.detail.xhr);\n    });")},e.prototype.initRawFilesDemo=function(){this.addScript("scb-file-input#rawFilesDemo","              var upload = document.querySelector('scb-file-input#rawFilesDemo');\n  \n              upload.addEventListener('upload-request', function(event) {\n                event.preventDefault();\n                event.detail.xhr.send(event.detail.file);\n              });\n")},e.prototype.initPreFillDemo=function(){this.addScript("scb-file-input#preFillDemo","var upload = document.querySelector('scb-file-input#preFillDemo');\n    upload.files = [\n      {name: 'Josh_CV.pdf', loadStatus: 100, uploaded: true},\n      {name: 'Alex_CV.pdf', loadStatus: 100, uploaded: true}\n    ];")},e.prototype.initManualUploadDemo=function(){this.addScript("scb-file-input#manualUploadDemo","var manualUploadDemo = document.querySelector('scb-file-input#manualUploadDemo');\n           var uploadButton = document.getElementById('uploadButton');\n\n           uploadButton.addEventListener('click', function() {\n             manualUploadDemo.uploadFiles();\n           });")},e.prototype.initResponseDemo=function(){this.addScript("scb-file-input#responseDemo","var upload = document.querySelector('scb-file-input#responseDemo');\n\n              upload.addEventListener('upload-response', function(event) {\n                console.log('upload xhr after server response: ', event.detail.xhr);\n                event.detail.file.error = 'Custom server error message.';\n\n                // Interpret any server response as success:\n                // event.detail.xhr.status = 200;\n              });")},Object.defineProperty(e,"is",{get:function(){return"file-input-page"},enumerable:!0,configurable:!0}),e}();e.FileInputPage=n},"jhunjril");