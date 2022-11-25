function generateCV()
{
   let nameField = document.getElementById('nameField').value;
   let nameT1 = document.getElementById('nameT1');
   nameT1.innerHTML = nameField;

   document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

   document.getElementById('addressT').innerHTML = document.getElementById('AddressField').value;

   document.getElementById('gmailT').innerHTML = document.getElementById('gmailField').value;

   document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;

   document.getElementById('linkedT').innerHTML = document.getElementById('linkedinField').value;

   document.getElementById('gitT').innerHTML =document.getElementById('githubField').value;

   document.getElementById('aboutT').innerHTML = document.getElementById('aboutField').value;

   document.getElementById('hT').innerHTML = document.getElementById('hField').value;

   let ses = document.getElementsByClassName('skillField');

   let str2 = "";

   for (let e of ses) {
      str2 = str2 + `<li> ${e.value} </li>`;
   }
   document.getElementById('skillT').innerHTML = str2;
 

   let wes = document.getElementsByClassName('weField');

   let str = "";

   for (let e of wes) {
      str = str + `<li> ${e.value} </li>`;
   }
   document.getElementById('weT').innerHTML = str;



   let aqs = document.getElementsByClassName('eqField');

   let str1 = "";
   
   for (let e of aqs) {
      str1 = str1 + `<li> ${e.value} </li>`;
   }

   document.getElementById('eqT').innerHTML = str1;

   document.getElementById('resume-form').style.display = 'none';
   document.getElementById('resumetemplate').style.display = 'block';

}

window.onload = function()
{
   document.getElementById("download").addEventListener("click",()=>{
      const resumetemplate = this.document.getElementById("resumetemplate");
      console.log("printing");
      console.log(window);
      html2pdf().from(resumetemplate).save();
   })
}

