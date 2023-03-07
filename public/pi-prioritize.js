import { StacheElement, type, ObservableObject, stache } from "//unpkg.com/can@6/core.mjs";

export class PIPrioritize extends StacheElement {
    static view = `
        <h1>PI Prioritize</h1>
        
        <div class="container">
            Hi
        </div>
    `;


}

customElements.define('pi-prioritize', PIPrioritize);