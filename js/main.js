let span=document.querySelector(".upTodown");
window.onscroll=function () {
    if(this.scrollY >= 800)
    {
        span.classList.add("show");
    }
    else
    {
        span.classList.remove("show");
    }
    
};
span.onclick =function () {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
    
};
class LandingShuflle
{
    constructor()
    {
        this.image=[];
        this.image[0]="url(../image/land-circle.jpg)";
        this.image[1]="url(../image/land-future.jpg)";
        this.image[2]="url(../image/land-electron.jpg)";
        this.counter=0;
        this.changeShufle();
        setInterval(() => {
            this.changeShufle();
            
        }, 5000);
        

    }
    changeShufle()
    {
        if (this.counter< this.image.length - 1) {
            this.counter++;
            
        }
        else
        {
            this.counter=0;
        }
        document.getElementById("imglanding").style.backgroundImage=this.image[this.counter];
        
        

    }
}
onload=new LandingShuflle();