import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
export class Random$Default extends Random implements Serializable {
    static Default: Random$Default;
    // private defaultRandom: Random;
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
    // private readObject(input: ObjectInputStream): void;
    // private writeReplace(): Object;
}