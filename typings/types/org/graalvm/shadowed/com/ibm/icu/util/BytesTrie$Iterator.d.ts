import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { BytesTrie$Entry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BytesTrie$Entry.d.ts'
export class BytesTrie$Iterator extends Object implements Iterator<BytesTrie$Entry> {
    private constructor(trieBytes: number[], offset: number, remainingMatchLength: number, maxStringLength: number)
    // private bytes_: number[];
    // private entry_: BytesTrie$Entry;
    // private initialPos_: number;
    // private initialRemainingMatchLength_: number;
    // private maxLength_: number;
    // private pos_: number;
    // private remainingMatchLength_: number;
    // private stack_: number[];
    // private branchNext(pos: number, length: number): number;
    forEachRemaining(arg0: (param0: BytesTrie$Entry) => void): void;
    hasNext(): boolean;
    next(): BytesTrie$Entry;
    remove(): void;
    reset(): BytesTrie$Iterator;
    // private truncateAndStop(): BytesTrie$Entry;
}