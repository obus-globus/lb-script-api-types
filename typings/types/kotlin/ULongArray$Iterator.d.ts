import type { Consumer } from '../java/util/function/Consumer.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { ULong } from '../kotlin/ULong.d.ts'
import type { Iterator } from '../java/util/Iterator.d.ts'
export class ULongArray$Iterator extends Object implements Iterator<ULong> {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    forEachRemaining(arg0: (param0: ULong) => void): void;
    hasNext(): boolean;
    next(): ULong;
}