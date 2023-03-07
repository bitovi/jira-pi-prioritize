import { StacheElement, type, ObservableObject, stache } from "//unpkg.com/can@6/core.mjs";
import './navbar.js';
import './jql-input.js';
import './dateRange.js';
import './priorityTable.js';

export class PIPrioritize extends StacheElement {
    static view = `
        <nav-bar />
        
        <div class="container mb-3 mt-3">
            <div class="row mb-3">
                <jql-input jql:to="jql" />
            </div>
			<div class="row mb-3">
				<date-range startDate:to="startDate" endDate:to="endDate" />
			</div>
        </div>
        
        <div class="container">
            <priority-table  epicsBetweenDates:from="this.epicsBetweenDates" />
        </div>
    `;


    static props = {
        jql: {
            type: String,
        },
        startDate: {
            type: type.convert(Date),
        },
        endDate: {
            type: type.convert(Date),
        },
        epicsBetweenDates: {
            type: type.maybe(Array),
            default: [
                {
                    name: "[IMP-2] an ideas epic",
                    reach: 10,
                    impact: 7.5,
                    confidence: 5,
                    effort: 2.5,
                    score: 10 * 7.55 * 5 / 2.5
                },
                {
                    name: "[IMP-3] record mode",
                    reach: 10,
                    impact: 10,
                    confidence: 10,
                    effort: 10,
                    score: 10 * 10 * 10 / 10
                },
                {
                    name: "[IMP-4] language packs",
                    reach: 5,
                    impact: 5,
                    confidence: 5,
                    effort: 5,
                    score: 5 * 5 * 5 / 5
                }
            ],
        },
        // rawIssues: {
        //     async(resolve) {
        //         if (this.jql) {
        //             const serverInfoPromise = this.jiraHelpers.getServerInfo();

        //             const issuesPromise = this.jiraHelpers.fetchAllJiraIssuesWithJQLAndFetchAllChangelogUsingNamedFields({
        //                 jql: this.jql,
        //                 fields: ["summary",
        //                     "Start date",
        //                     "Due date",
        //                     "Issue Type",
        //                     "Fix versions",
        //                     "Story Points",
        //                     "Confidence",
        //                     "Product Target Release"], // LABELS_KEY, STATUS_KEY ],
        //                 expand: ["changelog"]
        //             });

        //             return Promise.all([
        //                 issuesPromise, serverInfoPromise
        //             ]).then(([issues, serverInfo]) => {
        //                 return addWorkingBusinessDays(toCVSFormat(issues, serverInfo));
        //             })

        //         }

        //         return Promise.resolve();
        //     }
        // },
        // get epicsBetweenDates() {
        //     if (this.rawIssues && this.startDate && this.endDate) {
        //         return this.rawIssues.filter((issue) => {
        //             if (issue["Issue Type"] === "Epic") {
        //                 if (issue["Start date"] || issue["Due date"]) {
        //                     const epicStart = issue["Start date"] ? new Date(issue["Start date"]).getTime() : 0;
        //                     const epicEnd = issue["Due date"] ? new Date(issue["Due date"]).getTime() : Infinity;
        //                     return this.startDate.getTime() <= epicEnd && epicStart <= this.endDate.getTime()
        //                 }

        //             }
        //             return false;
        //         }).map((epic) => {
        //             let epicStart = epic["Start date"] ? new Date(epic["Start date"]) : this.startDate;
        //             let epicEnd = epic["Due date"] ? new Date(epic["Due date"]) : this.endDate;
        //             if (epicStart <= this.startDate) {
        //                 epicStart = this.startDate
        //             }
        //             if (epicEnd >= this.endDate) {
        //                 epicEnd = this.endDate
        //             }

        //             return {
        //                 ...epic,
        //                 workingDaysInPeriod: getBusinessDatesCount(epicStart, epicEnd)
        //             }
        //         })
        //     }
        // }
    }
};

customElements.define('pi-prioritize', PIPrioritize);