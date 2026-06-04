import type { ObjectBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterator.d.ts'
import type { ObjectBigListIterators$AbstractIndexBasedBigIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterators$AbstractIndexBasedBigIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectBigListIterators$AbstractIndexBasedBigListIterator<K extends Object | number | string | boolean> extends ObjectBigListIterators$AbstractIndexBasedBigIterator<K> implements ObjectBigListIterator<K> {
    constructor(arg0: number, arg1: number)
    add(arg0: K): void;
    add(arg0: number, arg1: K): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous(): K;
    previousIndex(): number;
    set(arg0: K): void;
    set(arg0: number, arg1: K): void;
    skip(arg0: number): number;
}