import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BitArray } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArray.d.ts'
import type { BitArrayVersion } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArrayVersion.d.ts'
export class SingletonBitArray extends Object implements BitArray {
    static INSTANCE: SingletonBitArray;
    private constructor()
    clone(): SingletonBitArray;
    get(arg0: number): number;
    getVersion(): BitArrayVersion;
    getWords(): number[];
    set(arg0: number, arg1: number): void;
    size(): number;
}