import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export class ImprovedNoise extends Object {
    constructor(random: RandomSource)
    // private p: number[];
    xo: number;
    yo: number;
    zo: number;
    noise(_x: number, _y: number, _z: number): number;
    noise(_x: number, _y: number, _z: number, yScale: number, yFudge: number): number;
    noiseWithDerivative(_x: number, _y: number, _z: number, derivativeOut: number[]): number;
    // private p(x: number): number;
    parityConfigString(sb: StringBuilder): void;
    // private sampleAndLerp(x: number, y: number, z: number, xr: number, yr: number, zr: number, yrOriginal: number): number;
    // private sampleWithDerivative(x: number, y: number, z: number, xr: number, yr: number, zr: number, derivativeOut: number[]): number;
}