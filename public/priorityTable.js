import { StacheElement, type, ObservableObject, stache } from "//unpkg.com/can@6/core.mjs";

export class PriorityTable extends StacheElement {
    static view = `
        <table class="table .table-bordered">
            <thead>
                <tr>
                    <th scope="col">Epic</th>
                    <th scope="col">Reach</th>
                    <th scope="col">Impact</th>
                    <th scope="col">Confidence</th>
                    <th scope="col">Effort</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {{#each(epicsBetweenDates)}}
                    <tr>
                        <td>{{this.name}}</td>
                        <td>{{this.reach}}</td>
                        <td>{{this.impact}}</td>
                        <td>{{this.confidence}}</td>
                        <td>{{this.effort}}</td>
                        <td>{{this.score}}</td>
                    </tr>
                {{/each}}
            </tbody>
        </table>
    `;

    static props = {
        epicsBetweenDates: {
            type: type.maybe(Array),
            default: [],
        },
    };


}

customElements.define('priority-table', PriorityTable);