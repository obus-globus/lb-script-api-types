import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FilterCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterCoder.d.ts'
export abstract class LZMA2Coder extends Object implements FilterCoder {
    static FILTER_ID: number;
    constructor()
    changesSize(): boolean;
    lastOK(): boolean;
    nonLastOK(): boolean;
}