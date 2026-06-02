import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { UCaseProps$ContextIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCaseProps$ContextIterator.d.ts'
export class CaseMapImpl$StringContextIterator extends Object implements UCaseProps$ContextIterator {
    constructor(src: CharSequence)
    constructor(src: CharSequence, cpStart: number, cpLimit: number)
    // private cpLimit: number;
    // private cpStart: number;
    // private dir: number;
    // private index: number;
    limit: number;
    // private s: CharSequence;
    getCPLength(): number;
    getCPLimit(): number;
    getCPStart(): number;
    moveTo(i: number): void;
    moveToLimit(): void;
    next(): number;
    nextCaseMapCP(): number;
    reset(direction: number): void;
    setCPStartAndLimit(s: number, l: number): void;
    setLimit(lim: number): void;
}