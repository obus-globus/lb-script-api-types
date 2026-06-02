import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ExtendedBiome extends Object{
    getBiomeCategory(): number;
    getDownfall(): number;
    setBiomeCategory(arg0: number): void;
}