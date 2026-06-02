import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { AbstractPredicateTransition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/AbstractPredicateTransition.d.ts'
import type { SemanticContext$PrecedencePredicate } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext$PrecedencePredicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PrecedencePredicateTransition extends AbstractPredicateTransition {
    static serializationNames: string[];
    static serializationTypes: Map<Object | null, number>;
    constructor(arg0: ATNState, arg1: number)
    precedence: number;
    getPredicate(): SemanticContext$PrecedencePredicate;
    getSerializationType(): number;
    isEpsilon(): boolean;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}