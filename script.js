setTimeout(()=>{
    document.getElementById('count').innerHTML = 10;
    setTimeout(()=>{
        document.getElementById('count').innerHTML = 9;
        setTimeout(()=>{
            document.getElementById('count').innerHTML = 8;
            setTimeout(()=>{
                document.getElementById('count').innerHTML = 7;
                    setTimeout(()=>{
                        document.getElementById('count').innerHTML = 6;
                            setTimeout(()=>{
                                document.getElementById('count').innerHTML = 5;
                                setTimeout(()=>{
                                    document.getElementById('count').innerHTML = 4;
                                        setTimeout(()=>{
                                                document.getElementById('count').innerHTML = 3;
                                            setTimeout(()=>{
                                                document.getElementById('count').innerHTML = 2;
                                                    setTimeout(()=>{
                                                        document.getElementById('count').innerHTML = 1;
                                                        setTimeout(()=>{
                                                            document.getElementById('count').innerHTML = "Happy New Year";
                                                        },1000)
                                                    },1000)
                                            },1000)
                                        },1000)
                                },1000)
                            },1000)
                    },1000)  
            },1000)  
        },1000)   
    },1000)
},0)