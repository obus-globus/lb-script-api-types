import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { AbstractPredicateTransition } from '../../../../../org/antlr/v4/runtime/atn/AbstractPredicateTransition.d.ts'
import type { SemanticContext$PrecedencePredicate } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext$PrecedencePredicate.d.ts'
import type { Transition } from '../../../../../org/antlr/v4/runtime/atn/Transition.d.ts'
export class PrecedencePredicateTransition extends AbstractPredicateTransition {
    static ACTION: number;
    static ATOM: number;
    static EPSILON: number;
    static NOT_SET: number;
    static PRECEDENCE: number;
    static PREDICATE: number;
    static RANGE: number;
    static RULE: number;
    static SET: number;
    static WILDCARD: number;
    static serializationNames: string[];
    static serializationTypes: JavaMap<Class<Transition>, number>;
    constructor(arg0: ATNState, arg1: number)
    precedence: number;
    getPredicate(): SemanticContext$PrecedencePredicate;
    getSerializationType(): number;
    isEpsilon(): boolean;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}