       var randomString = function () {
            var a, b, c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", d = "";
            for (a = 0; 12 > a; a++)b = Math.floor(Math.random() * c.length), d += c.substring(b, b + 1);
            return d
        };
        var x=0;
        var ca =document.cookie.split(';');
        for(c in ca)
        if(ca[c].indexOf("back_woop")>=0){x= !0;break;};
        x=(x==!0)?x:randomString();
        var d = new Date();
        var n = new Date(d.getFullYear()+2, d.getMonth(),d.getDate());

        document.cookie =
                'back_woop='+x +'; expires='+ n.toUTCString()+'; path=/';