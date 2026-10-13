import { ArrowRight, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBooking } from './hotel-shell';
export function ExperiencePage({title,eyebrow,subtitle,image,heading,copy,details}:{title:string;eyebrow:string;subtitle:string;image:string;heading:string;copy:string;details:string[]}) {
 const book=useBooking();
 return <main><section className="hero detail-hero"><img className="hero-image" src={image} alt={title+' at The Marvella'} width={1920} height={1088}/><div className="hero-content"><div className="hero-ornament"><Diamond size={13}/></div><p className="eyebrow text-gold">{eyebrow}</p><h1>{title}</h1><p className="hero-subtitle">{subtitle}</p></div></section><section className="section-wrap intro"><p className="eyebrow text-muted-foreground">THE MARVELLA COLLECTION</p><h2 className="section-title">{heading}</h2><p className="section-copy">{copy}</p><div className="mt-12 grid gap-8 border-y py-8 md:grid-cols-3">{details.map((d,i)=><div key={d}><span className="text-gold text-xs">0{i+1}</span><h3 className="mt-3 text-2xl">{d}</h3></div>)}</div><Button variant="hotel" className="mt-10" onClick={()=>book()}>PLAN YOUR STAY <ArrowRight/></Button></section></main>;
}
