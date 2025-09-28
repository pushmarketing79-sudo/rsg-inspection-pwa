// ======== RSG CONFIG (edit these) ========
const COMPANY_NAME = "RSG Logistics, LLC";
function doPost(e) {
try {
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sh = ss.getActiveSheet();

const body = e.postData && e.postData.contents ? e.postData.contents : "{}";
const data = JSON.parse(body);

const row = [
data.timestamp || "",
data.driver_name || "",
data.unit_number || "",
Number(data.odometer || 0),
data.inspection_type || "",
(data.checks || []).join(", "),
data.defects_found === true ? "TRUE" : "FALSE",
data.roadworthy === false ? "FALSE" : "TRUE",
data.notes || "",
data.client_meta && data.client_meta.userAgent || "",
data.client_meta && data.client_meta.tz || "",
data.client_meta && data.client_meta.when || new Date().toISOString()
];

sh.appendRow(row);

return ContentService
.createTextOutput(JSON.stringify({ ok: true }))
.setMimeType(ContentService.MimeType.JSON);
} catch (err) {
return ContentService
.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
.setMimeType(ContentService.MimeType.JSON);
}
}
https://script.google.com/macros/s/AKfycbzmWFnZYlloDuzSNyQgy3sh1gQCmf-jYHGZlf5bIIafsKv3Q3RvY0pt57sZlU4UNLjY/exec

// Support contacts (prefilled)
const SUPPORT_EMAIL = "rsg.support@example.com";
const SUPPORT_PHONE = "tel:+1-859-000-0000";

// ======== DO NOT EDIT BELOW (unless you know what you're doing) ========
(function wireFooter(){
const elCompany = document.getElementById("companyName");
const elEmail = document.getElementById("supportEmail");
const elPhone = document.getElementById("supportPhone");
if (elCompany) elCompany.textContent = COMPANY_NAME;
if (elEmail) {
elEmail.textContent = SUPPORT_EMAIL.replace("mailto:","");
elEmail.href = `mailto:${SUPPORT_EMAIL.replace("mailto:","")}`;
}
if (elPhone) {
elPhone.textContent = SUPPORT_PHONE.replace("tel:","");
elPhone.href = SUPPORT_PHONE;
}
})();
