import * as ActionTypes from './AppConstants';
import API from './Utilities/Api';

const fetchData = async (url, headers, options) => (await API.get(url, headers, options));

export const fetchAwsSummary = (options) => ({
    type: ActionTypes.AWS_SUMMARY_FETCH,
    payload: fetchData(ActionTypes.AWS_SUMMARY_FETCH_URL, {}, options).data
});

export const fetchComplianceSummary = (options) => ({
    type: ActionTypes.COMPLIANCE_FETCH,
    payload: fetchData(ActionTypes.COMPLIANCE_FETCH_URL, {}, options).data
});

export const fetchConfigAssessment = (options) => ({
    type: ActionTypes.CONFIG_ASSESSMENT_FETCH,
    payload: fetchData(ActionTypes.CONFIG_ASSESSMENT_FETCH_URL, {}, options).data
});

export const fetchOcpSummary = (options) => ({
    type: ActionTypes.OCP_SUMMARY_FETCH,
    payload: fetchData(ActionTypes.OCP_SUMMARY_FETCH_URL, {}, options).data
});

export const fetchVulnerabilities = (options) => ({
    type: ActionTypes.VULNERABILITIES_FETCH,
    payload: fetchData(ActionTypes.VULNERABILITIES_FETCH_URL, {}, options)
});
