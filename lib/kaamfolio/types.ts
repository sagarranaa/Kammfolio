export type Trade = 'Plumber' | 'Electrician' | 'Carpenter' | 'Painter' | 'AC technician';
export type Work = {id:string; title:string; description:string; kind:'image'|'video'; src:string; tools:string[]};
export type Professional = {id:string; name:string; trade:Trade; city:string; area:string; experience:number; rating:number; reviews:number; rate:number; available:boolean; skills:string[]; tools:string[]; bio:string; work:Work[]};
