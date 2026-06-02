import type { CompilationBuffer } from '../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompressedCodePointSet extends Object {
    static create(paramcps: (Object | null)[], paramcompilationBuffer: CompilationBuffer): CompressedCodePointSet;
    private constructor(ranges: number[], bitSets: number[][])
    readonly bitSets: number[][];
    readonly ranges: number[];
    equals(obj: Object | null): boolean;
    getBitSet(i: number): number[];
    getBitSets(): number[][];
    getHi(i: number): number;
    getLo(i: number): number;
    getRanges(): number[];
    hasBitSet(i: number): boolean;
    hasBitSets(): boolean;
    hashCode(): number;
    size(): number;
    toString(): string;
}