import type { BytesTrie$Entry } from '../../../../com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class BytesTrie$Iterator extends Object implements Iterator<BytesTrie$Entry> {
    private constructor(arg0: number[], arg1: number, arg2: number, arg3: number)
    // private bytes_: number[];
    // private entry_: BytesTrie$Entry;
    // private initialPos_: number;
    // private initialRemainingMatchLength_: number;
    // private maxLength_: number;
    // private pos_: number;
    // private remainingMatchLength_: number;
    // private stack_: number[];
    // private branchNext(arg0: number, arg1: number): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): BytesTrie$Entry;
    remove(): void;
    reset(): BytesTrie$Iterator;
    // private truncateAndStop(): BytesTrie$Entry;
}