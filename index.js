// loaded category buttons on the fetch api
const lodedButton= async()=>{
   const res=await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
   const data=await res.json()
     displayButton(data.categories)
}
// display data
const displayButton=(data)=>{
   const category_buttons=document.getElementById("category_buttons")
   data.forEach(data => {
     category_buttons.innerHTML=`
       <button class="btn">${data.category}</button>
        <button class="btn">${data.category}</button>
        <button class="btn">${data.category}</button>
     `     
   });
   
}
lodedButton()

const lodedVideos=async()=>{
    const res=await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    const data= await res.json()
    displayVideo(data.videos)
}
const displayVideo=(videos)=>{
    const videosContainer=document.getElementById("video_container")
   for(const video of videos){
    
    videosContainer.innerHTML+=`
     <div class="card w-80 rounded-lg border  border-gray-300 mt-3">
          <div class="card-img">
            <img class="w-full h-50 rounded-lg" src=${video.thumbnail} alt="" />
          </div>
          <div class="flex gap-2 mt-2 p-2">
            <div class="profile_img">
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img
                    src=${video.authors[0].profile_picture}
                  />
                </div>
              </div>
            </div>
            <div class="info">
              <h1 class="text-lg font-bold">${video.description.slice(0, 50)}</h1>
              <p class="flex items-center gap-1">${video.authors[0].profile_name} ${
                video.authors[0].verified?`<span title="Verified" id="verified"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-500 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>`:""
              } </p>
              <p>91K Views</p>
            </div>
          </div>
        </div>
    `
    console.log(video);
    
   }
   
}
lodedVideos()