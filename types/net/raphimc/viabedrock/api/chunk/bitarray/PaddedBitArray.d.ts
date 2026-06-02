import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BitArray } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArray.d.ts'
import type { BitArrayVersion } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArrayVersion.d.ts'
export class PaddedBitArray extends Object implements BitArray {
    constructor(arg0: BitArrayVersion, arg1: number, arg2: number[])
    // private size: number;
    readonly version: BitArrayVersion;
    readonly words: number[];
    clone(): PaddedBitArray;
    get(arg0: number): number;
    getVersion(): BitArrayVersion;
    getWords(): number[];
    set(arg0: number, arg1: number): void;
    size(): number;
}