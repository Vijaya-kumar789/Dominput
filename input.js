/*var ele = document.createElement("div")
ele.innerHTML = "this is div"
ele.className="main"
ele.id="main1"var a= document.createElement("a")
a.setAttribute("href","https://www.google.com");
a.setAttribute("target","_blank")
a.innerHTML="this is link for google"
document.body.append(ele,a)

var div=document.createElement("div");
div.className="container"
var div1=document.createElement("div");
div1.className="row"
var div2=document.createElement("div");
div2.className="col"
div2.innerHTML="this is col"

div1.append(div2);
div.append(div1);
document.body.append(div)*/

/*var label_first=document.createElement("label")
label_first.setAttribute("for","firstname");
label_first.innerHTML="Firstname"
var break1=document.createElement("br")
var first_input=document.createElement("input");
first_input.setAttribute("type","text");
first_input.setAttribute("id","firstname")
var break2=document.createElement("br")
var button=document.createElement("button")
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");

button.innerHTML="click me"

document.body.append(label_first,break1,first_input,break2,button)

function foo(){
    var first=document.getElementById("firstname").value ;
    console.log(`Firstname:${first}`)
}
*/

function label_create(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content
    return ele;
}

function break_create() {
    var ele = document.createElement("br");
    return ele;
}

function input_create(tagname, attr1name, attr1value, attr2name, attr2value) {
    var input = document.createElement(tagname)
    input.setAttribute(attr1name, attr1value);
    input.setAttribute(attr2name, attr2value);
    return input;
}



var Firstname = label_create("label", "for", "firstname", "Firstname");
var Firstname_brake = break_create();
var Firstname_input = input_create("input", "type", "text", "id", "firstname");
var input1_brake = break_create();
var Middlename = label_create("label", "for", "middlename", "Middlename");
var Middlename_brake = break_create();
var Middlename_input = input_create("input", "type", "text", "id", "middlename");
var input2_brake = break_create();
var Lastname = label_create("label", "for", "lastname", "Lastname");
var Lastname_brake = break_create();
var Lastname_input = input_create("input", "type", "text", "id", "lastname");
var input3_brake = break_create();
var email = label_create("label", "for", "email", "Email");
var email_brake = break_create();
var email_input = input_create("input", "type", "email", "id", "email");
var input4_brake = break_create();
var password = label_create("label", "for", "password", "Password");
var password_brake = break_create();
var password_input = input_create("input", "type", "password", "id", "password");
var input5_brake = break_create();

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()")
button.innerHTML="click me"




document.body.append(Firstname, Firstname_brake, Firstname_input, input1_brake, Middlename, Middlename_brake, Middlename_input, input2_brake, Lastname, Lastname_brake, Lastname_input, input3_brake,email,email_brake,email_input,input4_brake,password,password_brake,password_input,input5_brake,button)
