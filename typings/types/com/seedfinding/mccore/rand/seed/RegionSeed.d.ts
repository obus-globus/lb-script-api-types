import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegionSeed extends Object {
    static A: number;
    static B: number;
    static areNeighbors(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static areNeighbors(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): boolean;
    static getIncrement(paramarg0: number, paramarg1: number): number;
    static getNeighbor(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static toWorldSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static translate(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}