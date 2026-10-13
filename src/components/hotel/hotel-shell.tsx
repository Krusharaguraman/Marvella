import { createContext, useContext, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StayPlanner } from './stay-planner';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const BookingContext = createContext<(arrival?: string, departure?: string, guests?: string, room?: string) => void>(() => {});
export const useBooking = () => useContext(BookingContext);
const links = [ {to:'/' as const,label:'HOME'}, {to:'/rooms' as const,label:'ROOMS & SUITES'}, {to:'/dining' as const,label:'DINING'}, {to:'/experiences' as const,label:'EXPERIENCES'}, {to:'/celebrations' as const,label:'CELEBRATIONS'} ];
export function Brand() { return <span className="brand"><span className="brand-monogram">ℳ</span><span className="brand-name">THE MARVELLA</span><span className="brand-caption">EXCEPTIONAL BY NATURE</span></span>; }
export function HotelShell({children}:{children:ReactNode}) {
 const [open,setOpen]=useState(false); const [menu,setMenu]=useState(false); const [arrival,setArrival]=useState(''); const [departure,setDeparture]=useState(''); const [guests,setGuests]=useState('2'); const [selectedRoom,setSelectedRoom]=useState(''); const [plannerKey,setPlannerKey]=useState(0);
 const book=(a='',d='',g='2',r='')=>{setArrival(a);setDeparture(d);setGuests(g);setSelectedRoom(r);setPlannerKey(k=>k+1);setOpen(true);setMenu(false);};
 return <BookingContext.Provider value={book}>
  <header className="hotel-header"><Link to="/" aria-label="The Marvella home"><Brand/></Link><nav className="hotel-nav" aria-label="Main navigation">{links.map(l=><Link key={l.to} to={l.to} activeOptions={{exact:true}}>{l.label}</Link>)}</nav><div className="flex items-center gap-3"><Button variant="hotel" onClick={()=>book()} className="hidden sm:inline-flex">RESERVE YOUR STAY <ArrowRight/></Button><Button variant="image" size="icon" className="md:hidden" aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button></div>{menu&&<nav className="mobile-menu" aria-label="Mobile navigation">{links.map(l=><Link key={l.to} to={l.to} onClick={()=>setMenu(false)} className="text-xs tracking-widest">{l.label}</Link>)}<Button variant="hotel" onClick={()=>book()}>RESERVE YOUR STAY <ArrowRight/></Button></nav>}</header>
  {children}
  <footer className="hotel-footer"><div className="footer-top"><Link to="/" aria-label="The Marvella home"><Brand/></Link><div className="footer-links"><Link to="/rooms">Rooms & suites</Link><Link to="/dining">Dining</Link><Link to="/experiences">Experiences</Link><Link to="/celebrations">Celebrations</Link></div><span className="eyebrow text-muted-foreground">INDIAN SOUL. TIMELESS LUXURY.</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} The Marvella. All rights reserved.</span><span>A world apart. A feeling like home.</span></div></footer>
  <Dialog open={open} onOpenChange={setOpen}><DialogContent className="booking-dialog"><DialogTitle className="font-display text-4xl font-normal">Your Marvella escape</DialogTitle><DialogDescription>A beautiful stay begins with the details.</DialogDescription><StayPlanner key={plannerKey} initialArrival={arrival} initialDeparture={departure} initialGuests={guests} initialRoom={selectedRoom}/></DialogContent></Dialog>
 </BookingContext.Provider>;
}
