var imgs =Array.from(document.querySelectorAll(".item img")) ;
var lightBoxContainer = document.getElementById('lightBoxContainer');
var lightBoxItem = document.getElementById('lightBoxItem');
var nextBtn =document.getElementById('next');
var prevBtn =document.getElementById('prev');
var closeBtn =document.getElementById('close');

var currentIndex =0;


for(var i=0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click", function(imgInfo){

        currentIndex=imgs.indexOf(imgInfo.target);

        var imgSrc= imgInfo.target.getAttribute('src');

        lightBoxItem.style.backgroundImage ='url('+imgSrc+')';

        lightBoxContainer.style.display ="flex";

    })
}

function nextItem (){
currentIndex++;

if(currentIndex==imgs.length){
    currentIndex=0;
}
var imgSrc= imgs[currentIndex].getAttribute('src');

lightBoxItem.style.backgroundImage ='url('+imgSrc+')';

}

function prevItem (){
    currentIndex--;
    
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
    var imgSrc= imgs[currentIndex].getAttribute('src');
    
    lightBoxItem.style.backgroundImage ='url('+imgSrc+')';
    
    }


    function closeItem (){
        lightBoxContainer.style.display ='none';
    }

document.addEventListener('keydown',function(eventInfo){

if(eventInfo.code == 'ArrowRight' ){
    nextItem();
}
else if(eventInfo.code == 'ArrowLeft' ){
    prevItem();
}
else if(eventInfo.code == 'Escape'|| eventInfo.code == 'Space' ){
    closeItem();
}
})


    closeBtn.addEventListener('click',closeItem);
    prevBtn.addEventListener('click',prevItem);
    nextBtn.addEventListener('click',nextItem);
