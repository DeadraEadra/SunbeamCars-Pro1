// (function () {
//     const TEMPLATE = document.createElement("template");
//     const TEMPLATECONTENT = `
    
// 	<p id="output"></p>`;

//     TEMPLATE.innerHTML = TEMPLATECONTENT;

//     class LM extends HTMLElement {
//         constructor() {
//             super();
//             this.attachShadow({
//                 mode: 'open'
//             });

//             this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
//         }

//         connectedCallback() {

//             const output = this.shadowRoot.getElementById("output");

//             // Type in your last modify Javascript codes here and 
//             // send the result to the output element

//             const modifiedTime = document.lastModified;
//             output.innerHTML = "Last modified: " + modifiedTime;

//         }
//     }

//     // Change the YYYYY with your new tag name, like m-lastmodified	
//     window.customElements.define('m-lastmodified', LM);
// })();