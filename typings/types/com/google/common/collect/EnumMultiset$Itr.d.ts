import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class EnumMultiset$Itr<T extends unknown> extends Object implements Iterator<T> {
    constructor(null_: E[])
    // private index: number;
    // private toRemove: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    output(index: number): T;
    remove(): void;
}