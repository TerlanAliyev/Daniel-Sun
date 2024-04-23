window.addEventListener('scroll',function(){
    console.log(window.scrollY);
if (window.scrollY<500) {
        document.querySelector('.website').style.animationName="website"
        document.querySelector('.branding').style.animationName="branding"
        document.querySelector('.illustration').style.animationName="illustration"
        document.querySelector('.interface').style.animationName="interface"
        document.querySelector('.animationn').style.animationName="animationn"
    }

if(window.scrollY>500 || window.scrollY<1100 ){
    document.querySelector('.story .top').style.animationName='top'
    document.querySelector('.story .bottom').style.animationName='bottom'
}
})
