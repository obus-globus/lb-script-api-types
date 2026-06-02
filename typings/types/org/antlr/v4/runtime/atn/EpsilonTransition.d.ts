import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { Transition } from '../../../../../org/antlr/v4/runtime/atn/Transition.d.ts'
export class EpsilonTransition extends Transition {
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
    static serializationTypes: Map<Object | null, number>;
    constructor(arg0: ATNState)
    constructor(arg0: ATNState, arg1: number)
    // private outermostPrecedenceReturn: number;
    getSerializationType(): number;
    isEpsilon(): boolean;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    outermostPrecedenceReturn(): number;
    toString(): string;
}