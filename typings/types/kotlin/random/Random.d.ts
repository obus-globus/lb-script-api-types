import type { Object } from '../../java/lang/Object.d.ts'
import type { Random$Default } from '../../kotlin/random/Random$Default.d.ts'
export abstract class Random extends Object {
    static Default: Random$Default;
    constructor()
    nextBits(bitCount: number): number;
    nextBoolean(): boolean;
    nextBytes(array: number[]): number[];
    nextBytes(array: number[], fromIndex: number, toIndex: number): number[];
    nextBytes(size: number): number[];
    nextDouble(): number;
    nextDouble(until: number): number;
    nextDouble(from: number, until: number): number;
    nextFloat(): number;
    nextInt(): number;
    nextInt(until: number): number;
    nextInt(from: number, until: number): number;
    nextLong(): number;
    nextLong(until: number): number;
    nextLong(from: number, until: number): number;
}