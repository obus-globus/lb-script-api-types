import type { Object } from '../../java/lang/Object.d.ts'
export interface VirtualMemory extends Object{
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}