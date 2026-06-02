import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BlockChangeRecord extends Object{
    getBlockId(): number;
    getSectionX(): number;
    getSectionY(): number;
    getSectionZ(): number;
    getY(): number;
    getY(arg0: number): number;
    setBlockId(arg0: number): void;
}