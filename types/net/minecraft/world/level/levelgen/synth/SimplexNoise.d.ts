import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export class SimplexNoise extends Object {
    constructor(random: RandomSource)
    // private p: number[];
    xo: number;
    yo: number;
    zo: number;
    // private getCornerNoise3D(index: number, x: number, y: number, z: number, base: number): number;
    getValue(xin: number, yin: number): number;
    getValue(xin: number, yin: number, zin: number): number;
    // private p(x: number): number;
}