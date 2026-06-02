import type { Consumer } from '../java/util/function/Consumer.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { UShort } from '../kotlin/UShort.d.ts'
import type { Iterator } from '../java/util/Iterator.d.ts'
export class UShortArray$Iterator extends Object implements Iterator<UShort> {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): UShort;
}