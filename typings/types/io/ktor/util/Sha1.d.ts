import type { HashFunction } from '../../../io/ktor/util/HashFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Sha1 extends Object implements HashFunction {
    constructor()
    // private h0: number;
    // private h1: number;
    // private h2: number;
    // private h3: number;
    // private h4: number;
    // private messageLength: number;
    // private unprocessed: number[];
    // private unprocessedLimit: number;
    // private words: number[];
    digest(): number[];
    // private processChunk(input: number[], pos: number): void;
    // private reset(): void;
    update(input: number[], offset: number, length: number): void;
}