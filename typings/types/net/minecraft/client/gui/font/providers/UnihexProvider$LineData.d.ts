import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface UnihexProvider$LineData extends Object{
    bitWidth(): number;
    calculateWidth(): number;
    line(index: number): number;
    mask(): number;
}