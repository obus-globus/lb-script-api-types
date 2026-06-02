import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationKeys$SortKeyByteSink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationKeys$SortKeyByteSink.d.ts'
export class CollationKeys$SortKeyLevel extends Object {
    constructor()
    // private buffer: number[];
    // private len: number;
    appendByte(b: number): void;
    appendReverseWeight16(w: number): void;
    appendTo(sink: CollationKeys$SortKeyByteSink): void;
    appendWeight16(w: number): void;
    appendWeight32(w: number): void;
    data(): number[];
    // private ensureCapacity(appendCapacity: number): boolean;
    getAt(index: number): number;
    isEmpty(): boolean;
    length(): number;
}