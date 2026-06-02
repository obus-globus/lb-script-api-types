import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceOpenHashSet$SetIterator extends Object implements ObjectIterator<K> {
    private constructor(null_: ReferenceOpenHashSet$SetIterator)
    // private c: number;
    // private last: number;
    // private mustReturnNull: boolean;
    // private pos: number;
    // private wrapped: K[];
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    next<K extends Object | number | string | boolean>(): K;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}