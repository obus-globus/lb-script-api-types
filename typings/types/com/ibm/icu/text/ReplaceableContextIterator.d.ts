import type { UCaseProps$ContextIterator } from '../../../../com/ibm/icu/impl/UCaseProps$ContextIterator.d.ts'
import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReplaceableContextIterator extends Object implements UCaseProps$ContextIterator {
    constructor()
    // private contextLimit: number;
    // private contextStart: number;
    // private cpLimit: number;
    // private cpStart: number;
    // private dir: number;
    index: number;
    limit: number;
    // private reachedLimit: boolean;
    // private rep: Replaceable;
    didReachLimit(): boolean;
    getCaseMapCPStart(): number;
    next(): number;
    nextCaseMapCP(): number;
    replace(arg0: string): number;
    reset(arg0: number): void;
    setContextLimits(arg0: number, arg1: number): void;
    setIndex(arg0: number): void;
    setLimit(arg0: number): void;
    setText(arg0: Replaceable): void;
}