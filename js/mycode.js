function show() {
    var a = document.getElementById("email");
    var b = document.getElementById("phonenum");
    var name = document.getElementById("full-name");
    a.readOnly=false;
    b.readOnly=false;
    name.readOnly=false;
    alert("Shoes.vn has received your infomation\nWe will contact you as soon as possible");
}

function check() {
    var a = document.getElementById("email");
    var b = document.getElementById("phonenum");
    var name = document.getElementById("full-name");
    var radio = document.getElementById("Validate");


    if (radio.checked) {
        var pattern1 = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        var pattern2 =new RegExp("^\s*?[0-9]{10}\s*$");
        var res1 = pattern1.test(a.value);
        var res2 = pattern2.test(b.value);
        if ((res1&res2) == false) {
            //console.log(res1+" "+res2);
            alert("Invalid! Please re-input");
            if (!res1) a.value="";
            if (!res2) b.value="";
            radio.checked=false;
        } else {
            //console.log(res1+" "+res2);
            var x = document.getElementById("submit");
            switch (x.style.display) {
                //case 'null': x.style.display='block'; break;
                case 'none': 
                    x.style.display='block'; 
                    a.readOnly=true;
                    b.readOnly=true;
                    name.readOnly=true;
                    break;
                case 'block': 
                    a.readOnly=false;
                    b.readOnly=false;
                    name.readOnly=false;
                    x.style.display='none'; 
                    break;
            }
        
        }
    } else {
        var x = document.getElementById("submit");
        x.style.display='none';
    }


}
