import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { BitArray } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArray.d.ts'
export class BitArrayVersion extends Enum<BitArrayVersion> {
    static V0: BitArrayVersion;
    static V1: BitArrayVersion;
    static V16: BitArrayVersion;
    static V2: BitArrayVersion;
    static V3: BitArrayVersion;
    static V4: BitArrayVersion;
    static V5: BitArrayVersion;
    static V6: BitArrayVersion;
    static V8: BitArrayVersion;
    static forBitsCeil(paramarg0: number): BitArrayVersion;
    static get(paramarg0: number, paramarg1: boolean): BitArrayVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BitArrayVersion;
    static values(): BitArrayVersion[];
    private constructor(arg2: number, arg3: number, arg4: BitArrayVersion)
    readonly bits: number;
    readonly entriesPerWord: number;
    readonly maxEntryValue: number;
    readonly next: BitArrayVersion;
    createArray(arg0: number): BitArray;
    createArray(arg0: number, arg1: number[]): BitArray;
    getBits(): number;
    getEntriesPerWord(): number;
    getMaxEntryValue(): number;
    getNext(): BitArrayVersion;
    getWordsForSize(arg0: number): number;
    name(): "V16" | "V8" | "V6" | "V5" | "V4" | "V3" | "V2" | "V1" | "V0";
}