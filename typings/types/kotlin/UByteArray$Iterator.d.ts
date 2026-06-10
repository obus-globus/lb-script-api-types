import type { Consumer } from '../java/util/function/Consumer.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { UByte } from '../kotlin/UByte.d.ts'
import type { Iterator } from '../java/util/Iterator.d.ts'
export class UByteArray$Iterator extends Object implements Iterator<UByte> {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    forEachRemaining(arg0: (param0: UByte) => void): void;
    hasNext(): boolean;
    next(): UByte;
}