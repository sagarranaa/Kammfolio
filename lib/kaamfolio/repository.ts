import { initialProfile } from './data';
import type {Professional} from './types';
// Device-local demo adapter. Replace with an HTTP repository when the API is ready.
// Domain models and repository contracts can be shared with a future React Native app.
export type DemoState={version:1;profile:Professional;saved:string[]};
export const demoRepository={
 load():DemoState {try {const x=JSON.parse(localStorage.getItem('kaamfolio:v1')||'null');if(x?.version===1 && Array.isArray(x.saved) && x.profile?.id==='me' && Array.isArray(x.profile.work) && Array.isArray(x.profile.tools))return x;}catch{} return {version:1,profile:initialProfile,saved:[]};},
 save(state:DemoState){localStorage.setItem('kaamfolio:v1',JSON.stringify(state));}
};
