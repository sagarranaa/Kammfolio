'use client';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
export function Picker({value,onChange,options,label}:{value:string;onChange:(s:string)=>void;options:string[];label:string}){return <Select value={value} onValueChange={onChange}><SelectTrigger aria-label={label}><SelectValue/></SelectTrigger><SelectContent>{options.map(v=><SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent></Select>}
export function Avatar({name,large=false}:{name:string;large?:boolean}){return <span className={'avatar '+(large?'large':'')}>{name.split(' ').map(n=>n[0]).slice(0,2).join('')}</span>}
