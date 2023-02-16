//import f from 'fs';
const form = document.getElementById('survey-form');
form.addEventListener('submit', callbackFunction);
                      
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
   
    var oldItems = JSON.parse(localStorage.getItem('Datas')) || [];
    oldItems.push(formDataObj);
    localStorage.setItem('Datas', JSON.stringify(oldItems));
  /*  // File is ufff...
    let json_f = fs.readFileSync("datas.json","utf-8");
    let users = JSON.parse(json_f)||[];
    users.push(formDataObj);
    usersjson = JSON.stringify(users);
    fs.writeFileSync("datas.json",JSON.stringify(formDataObj),(err)=>{
    if(err)
    console.log(err);
    });
*/
    form.reset();
};

