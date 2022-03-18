(function () {
    const TEMPLATE = document.createElement("template");
    const TEMPLATECONTENT = `
    
	<p id="output"></p>`;

    TEMPLATE.innerHTML = TEMPLATECONTENT;

    class CT extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });

            this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        }

        connectedCallback() {

            const output = this.shadowRoot.getElementById("output");

            // Type in your current time Javascript codes here and 
            // send the result to the output element	

            const date = new Date();
            const currentDay = date.getDate();
            const currentMonth = date.getMonth()+1;
            const currentYear = date.getFullYear();
            const currentHour = date.getHours();
            const currentMinute = date.getMinutes();

            output.innerHTML = "Date: "+ currentDay + "-" + currentMonth + "-" + currentYear + " " + currentHour + ":" + currentMinute;

        }
    }

    // Change the XXXXX with your new tag name, like m-currenttime	
    window.customElements.define('m-currenttime', CT);
})();