import type { BytesTrie$Iterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BytesTrie$Iterator.d.ts'
export class BytesTrie {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static iterator(paramtrieBytes: number[], paramoffset: number, parammaxStringLength: number): BytesTrie$Iterator;
    static jumpByDelta(parambytes: number[], parampos: number): number;
}