import { PIPrioritize } from './pi-prioritize.js'
import { route, RoutePushstate } from "//unpkg.com/can@6/core.mjs";
// import qaMetrics from "./qa-metrics/main.js";

export default async function main(jiraHelpers) {

	mainElement.textContent = "Checking for Jira Access Token";

	if (!jiraHelpers.hasValidAccessToken()) {
		await sleep(100);
		mainElement.textContent = "Getting access token";
		const accessToken = await jiraHelpers.getAccessToken();
		return;
	}

	const accessToken = await jiraHelpers.getAccessToken();

	mainElement.textContent = "Got Access Token";
	mainElement.style.display = "none";

	const report = new PIPrioritize();
	report.jiraHelpers = jiraHelpers;
	report.mode = "TEAMS";
	document.body.append(report);

}


function sleep(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time)
	})
}