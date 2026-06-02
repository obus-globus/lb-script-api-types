import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { Transition } from '../../../../../org/antlr/v4/runtime/atn/Transition.d.ts'
import type { IntervalSet } from '../../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class RangeTransition extends Transition {
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
    constructor(arg0: ATNState, arg1: number, arg2: number)
    from: number;
    to: number;
    getSerializationType(): number;
    label(): IntervalSet;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}