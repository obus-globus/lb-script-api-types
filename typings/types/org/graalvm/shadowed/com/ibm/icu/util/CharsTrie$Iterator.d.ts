import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { CharsTrie$Entry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrie$Entry.d.ts'
export class CharsTrie$Iterator extends Object implements Iterator<CharsTrie$Entry> {
    private constructor(trieChars: CharSequence, offset: number, remainingMatchLength: number, maxStringLength: number)
    // private chars_: CharSequence;
    // private entry_: CharsTrie$Entry;
    // private initialPos_: number;
    // private initialRemainingMatchLength_: number;
    // private maxLength_: number;
    // private pos_: number;
    // private remainingMatchLength_: number;
    // private skipValue_: boolean;
    // private stack_: number[];
    // private str_: StringBuilder;
    // private branchNext(pos: number, length: number): number;
    forEachRemaining(arg0: (param0: CharsTrie$Entry) => void): void;
    hasNext(): boolean;
    next(): CharsTrie$Entry;
    remove(): void;
    reset(): CharsTrie$Iterator;
    // private truncateAndStop(): CharsTrie$Entry;
}