// ======== RSG CONFIG (edit these) ========
const COMPANY_NAME = "RSG Logistics, LLC";

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
