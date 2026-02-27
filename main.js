// Show form
function startBuilding(){
document.getElementById("formSection").style.display="block";
}

// Manual resume preview
function generateResume(){
let name=document.getElementById("name").value;
let role=document.getElementById("role").value;
let skills=document.getElementById("skills").value;
let experience=document.getElementById("experience").value;

document.getElementById("preview").innerHTML=
`<h2>${name}</h2>
<p><b>Position:</b> ${role}</p>
<p><b>Skills:</b> ${skills}</p>
<p><b>Experience:</b> ${experience}</p>`;
}

// Premium AI placeholder
function aiFeature(){
alert("This is a premium feature! Upgrade to unlock AI summaries 🚀");
}

// Download PDF
async function downloadPDF(){
const { jsPDF } = window.jspdf;
let doc=new jsPDF();

let name=document.getElementById("name").value;
let role=document.getElementById("role").value;
let skills=document.getElementById("skills").value;
let experience=document.getElementById("experience").value;

let y=30;
doc.setFontSize(18); doc.text(name,20,y); y+=10;
doc.setFontSize(12);
doc.text("Position: "+role,20,y); y+=10;
doc.text("Skills: "+skills,20,y); y+=10;
doc.text("Experience: "+experience,20,y);

doc.save("Premium_Resume.pdf");
}
