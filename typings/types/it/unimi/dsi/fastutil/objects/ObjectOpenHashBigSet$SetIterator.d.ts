import type { ObjectOpenHashBigSet$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectOpenHashBigSet$SetIterator extends Object implements ObjectIterator<K> {
    private constructor(null_: K[])
    constructor(null_: K[], arg1: ObjectOpenHashBigSet$1)
    // private base: number;
    // private c: number;
    // private displ: number;
    // private last: number;
    // private mustReturnNull: boolean;
    // private wrapped: K[];
    hasNext(): boolean;
    next<K extends unknown>(): K;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}