import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotLimits extends Object {
    constructor(statementLimit: number, statementLimitSourcePredicate: (param0: Object) => kotlin.Boolean, onEvent: (param0: Object) => void)
    // private onEvent: (param0: Object) => void;
    // private statementLimit: number;
    // private statementLimitSourcePredicate: (param0: Object) => kotlin.Boolean;
}