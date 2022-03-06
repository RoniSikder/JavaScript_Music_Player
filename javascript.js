console.log("Music Player");
let progressValue;
let control=0;
let masterPrv=document.getElementById('prv')
let masterPly=document.getElementById('ply')
let masterAft=document.getElementById('aft')
let progress=document.getElementById('pogbar')
let song=[
    {name:"Let Me Love You",path:"Let Me Love You.mp3"},
    {name:"Shape Of You",path:"Shape of You.mp3"},
    {name:"Diamond Heart",path:"Diamond Heart.mp3"},
    {name:"Lily",path:"Lily.mp3"},
    {name:"ColdPlay",path:"Coldplay.mp3"}
]
let songItem = new Audio(song[0].path);
let songBuffer;

masterPly.addEventListener('click',()=>{
    if(songItem.paused){
        console.log("1");
        progressUpdate();
        songItem.play();
    }
    else{
        console.log("2")
        songItem.pause()
    }
})
masterPrv.addEventListener('click',()=>{
    songItem.pause();
    control=control-1;
    songItem=new Audio(song[control].path);
    progressUpdate();
    songItem.play();
})
masterAft.addEventListener('click',()=>{
    songItem.pause();
    control=control+1;
    songItem=new Audio(song[control].path);
    progressUpdate();
    songItem.play();
})
progress.addEventListener('change',()=>{
    songItem.currentTime=parseInt((progress.value*songItem.duration)/100000);
})
function fuck(inp){
    songItem.pause();
    songItem = new Audio(song[inp].path);
    progressUpdate();
    songItem.play();
    control=inp;
}

function progressUpdate(){
    songItem.addEventListener('timeupdate',()=>{
        progressValue=parseInt((songItem.currentTime/songItem.duration)*100000);
        progress.value=progressValue;
    })
}