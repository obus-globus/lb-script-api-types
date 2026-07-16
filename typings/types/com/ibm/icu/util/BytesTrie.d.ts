import type { BytesTrie$Iterator } from '../../../../com/ibm/icu/util/BytesTrie$Iterator.d.ts'
export class BytesTrie {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static iterator(paramarg0: number[], paramarg1: number, paramarg2: number): BytesTrie$Iterator;
    static jumpByDelta(paramarg0: number[], paramarg1: number): number;
}