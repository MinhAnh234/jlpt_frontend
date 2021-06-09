window.onload=function() {
    a=parseInt(2);
    b=parseInt(2);
    c=parseInt(10);
    run=true;
    function start() {
        this.c--;
        if(run) {
            if(this.c==-1){
                this.b-=1;
                this.c=59;
            }
            if(this.b==-1) {
                this.a-=1;
                this.b=59;
            }
            if(this.a-=1) {
                this.a=0;
               
            }
        console.log(a+":"+b+":"+(this.c));
        timeout = setTimeout(function(){
            start();
       },1000)
    }
    }
    start();

    
   

    
}
