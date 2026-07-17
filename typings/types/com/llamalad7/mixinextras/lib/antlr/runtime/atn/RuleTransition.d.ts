import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { RuleStartState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/RuleStartState.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
export class RuleTransition extends Transition {
    static serializationNames: string[];
    static serializationTypes: JavaMap<Class<Transition>, number>;
    constructor(arg0: RuleStartState, arg1: number, arg2: number, arg3: ATNState)
    followState: ATNState;
    precedence: number;
    ruleIndex: number;
    getSerializationType(): number;
    isEpsilon(): boolean;
    matches(arg0: number, arg1: number, arg2: number): boolean;
}