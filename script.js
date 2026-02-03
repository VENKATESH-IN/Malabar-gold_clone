let img =document.querySelector("#slideshow-image");

let imgarr =["img-assets/boi-offer-web-final.jpg","img-assets/Men-In-Platinum-web.jpg","img-assets/vyana-web.jpg",
             "img-assets/Nuwa-web-banner.jpg","img-assets/Tanvika-Collection-web.jpg","img-assets/Diamond-Jewellery-web1.jpg"
              ,"img-assets/GOld-chain1.jpg"]
img.attributes[0].nodeValue = imgarr[0];


for(num=0;num<imgarr.length;num++){
    console.log(num);
}