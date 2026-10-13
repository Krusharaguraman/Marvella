import deluxe from '@/assets/marvella-deluxe.jpg';
import suite from '@/assets/marvella-suite.jpg';
import royal from '@/assets/marvella-royal.jpg';
export const rooms = [
 {id:'deluxe',name:'Palace Deluxe Room',category:'Rooms',image:deluxe,size:42,capacity:2,view:'Garden view',price:14500,tag:'EFFORTLESS ELEGANCE',description:'A restful retreat with a king-size bed, soft sage accents, hand-finished details and a sunlit sitting area.',amenities:['King-size bed','Marble bathroom','Rain shower','Tea & coffee station','Wi-Fi','Garden views']},
 {id:'heritage',name:'Heritage Garden Suite',category:'Suites',image:suite,size:76,capacity:3,view:'Courtyard view',price:24500,tag:'OUR SIGNATURE STAY',description:'Gracious proportions, beautifully carved arches and a private lounge overlooking the gardens. A little more room to linger.',amenities:['King-size bed','Separate lounge','Soaking bathtub','Walk-in wardrobe','Wi-Fi','Courtyard views']},
 {id:'royal',name:'The Marvella Royal Suite',category:'Suites',image:royal,size:128,capacity:4,view:'Panoramic garden view',price:42500,tag:'THE HEIGHT OF GRANDEUR',description:'An expansive residence with an elegant drawing room, intricate palace detailing and a beautifully appointed master bedroom.',amenities:['Master bedroom','Separate living room','Dining area','Marble bathroom','Wi-Fi','Panoramic views']},
];
export type Room = (typeof rooms)[number];
export const formatINR=(amount:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(amount);
export function calculateStay(arrival:string,departure:string,nightly:number,roomCount=1){
 const start=Date.parse(arrival+'T00:00:00Z'),end=Date.parse(departure+'T00:00:00Z');
 if(!Number.isFinite(start)||!Number.isFinite(end)||end<=start||roomCount<1) return null;
 const nights=Math.round((end-start)/86400000);return {nights,total:nights*nightly*roomCount};
}
