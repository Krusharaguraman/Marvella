import {describe,it,expect} from 'vitest';
import {calculateStay} from '@/lib/hotel-catalogue';
describe('stay estimates',()=>{
 it('calculates three nights across a month boundary',()=>{expect(calculateStay('2026-10-30','2026-11-02',14500)).toEqual({nights:3,total:43500});});
 it('multiplies the nightly estimate by the room count',()=>{expect(calculateStay('2026-12-01','2026-12-04',24500,2)?.total).toBe(147000);});
 it('rejects departure on or before arrival',()=>{expect(calculateStay('2026-12-04','2026-12-04',14500)).toBeNull();expect(calculateStay('2026-12-04','2026-12-01',14500)).toBeNull();});
 it('rejects missing dates',()=>{expect(calculateStay('','',14500)).toBeNull();});
});
