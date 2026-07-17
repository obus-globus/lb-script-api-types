import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { AbstractPredicateTransition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/AbstractPredicateTransition.d.ts'
import type { SemanticContext$Predicate } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext$Predicate.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
export class PredicateTransition extends AbstractPredicateTransition {
    static serializationNames: string[];
    static serializationTypes: JavaMap<Class<Transition>, number>;
    constructor(arg0: ATNState, arg1: number, arg2: number, arg3: boolean)
    isCtxDependent: boolean;
    predIndex: number;
    ruleIndex: number;
    getPredicate(): SemanticContext$Predicate;
    getSerializationType(): number;
    isEpsilon(): boolean;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}