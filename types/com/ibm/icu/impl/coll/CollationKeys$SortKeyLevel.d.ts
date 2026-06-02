import type { CollationKeys$SortKeyByteSink } from '../../../../../com/ibm/icu/impl/coll/CollationKeys$SortKeyByteSink.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationKeys$SortKeyLevel extends Object {
    constructor()
    // private buffer: number[];
    // private len: number;
    appendByte(arg0: number): void;
    appendReverseWeight16(arg0: number): void;
    appendTo(arg0: CollationKeys$SortKeyByteSink): void;
    appendWeight16(arg0: number): void;
    appendWeight32(arg0: number): void;
    data(): number[];
    // private ensureCapacity(arg0: number): boolean;
    getAt(arg0: number): number;
    isEmpty(): boolean;
    length(): number;
}