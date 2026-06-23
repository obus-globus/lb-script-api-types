import type { ObjectIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterators$AbstractIndexBasedIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectIterators$AbstractIndexBasedListIterator<K extends unknown> extends ObjectIterators$AbstractIndexBasedIterator<K> implements ObjectListIterator<K> {
    constructor(arg0: number, arg1: number)
    add(arg0: K): void;
    add(arg0: number, arg1: K): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous(): K;
    previousIndex(): number;
    remove(): void;
    set(arg0: K): void;
    set(arg0: number, arg1: K): void;
}