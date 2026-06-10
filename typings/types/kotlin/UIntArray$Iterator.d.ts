import type { Consumer } from '../java/util/function/Consumer.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { UInt } from '../kotlin/UInt.d.ts'
import type { Iterator } from '../java/util/Iterator.d.ts'
export class UIntArray$Iterator extends Object implements Iterator<UInt> {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    forEachRemaining(arg0: (param0: UInt) => void): void;
    hasNext(): boolean;
    next(): UInt;
}