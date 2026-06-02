import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCaseProps$ContextIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCaseProps$ContextIterator.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
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
    replace(text: string): number;
    reset(direction: number): void;
    setContextLimits(contextStart: number, contextLimit: number): void;
    setIndex(index: number): void;
    setLimit(lim: number): void;
    setText(rep: Replaceable): void;
}