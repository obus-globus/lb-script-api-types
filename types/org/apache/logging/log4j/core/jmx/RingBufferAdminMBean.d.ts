import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RingBufferAdminMBean extends Object{
    getBufferSize(): number;
    getRemainingCapacity(): number;
}