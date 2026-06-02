import type { UCaseProps$ContextIterator } from '../../../../com/ibm/icu/impl/UCaseProps$ContextIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CaseMapImpl$StringContextIterator extends Object implements UCaseProps$ContextIterator {
    constructor(arg0: CharSequence)
    constructor(arg0: CharSequence, arg1: number, arg2: number)
    // private cpLimit: number;
    // private cpStart: number;
    // private dir: number;
    // private index: number;
    limit: number;
    // private s: CharSequence;
    getCPLength(): number;
    getCPLimit(): number;
    getCPStart(): number;
    moveTo(arg0: number): void;
    moveToLimit(): void;
    next(): number;
    nextCaseMapCP(): number;
    reset(arg0: number): void;
    setCPStartAndLimit(arg0: number, arg1: number): void;
    setLimit(arg0: number): void;
}