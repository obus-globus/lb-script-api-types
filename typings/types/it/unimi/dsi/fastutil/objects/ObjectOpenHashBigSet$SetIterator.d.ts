import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectOpenHashBigSet$SetIterator extends Object implements ObjectIterator<K> {
    constructor(null_: Object[], arg1: any)
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