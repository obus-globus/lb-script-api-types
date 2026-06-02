import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATN } from '../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { ATNDeserializationOptions } from '../../../../../org/antlr/v4/runtime/atn/ATNDeserializationOptions.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { LexerAction } from '../../../../../org/antlr/v4/runtime/atn/LexerAction.d.ts'
import type { LexerActionType } from '../../../../../org/antlr/v4/runtime/atn/LexerActionType.d.ts'
import type { Transition } from '../../../../../org/antlr/v4/runtime/atn/Transition.d.ts'
import type { IntegerList } from '../../../../../org/antlr/v4/runtime/misc/IntegerList.d.ts'
import type { IntervalSet } from '../../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class ATNDeserializer extends Object {
    static SERIALIZED_VERSION: number;
    static decodeIntsEncodedAs16BitWords(paramarg0: string[]): number[];
    static decodeIntsEncodedAs16BitWords(paramarg0: string[], paramarg1: boolean): number[];
    static encodeIntsWith16BitWords(paramarg0: IntegerList): IntegerList;
    constructor()
    constructor(arg0: ATNDeserializationOptions)
    // private deserializationOptions: ATNDeserializationOptions;
    checkCondition(arg0: boolean): void;
    checkCondition(arg0: boolean, arg1: string): void;
    deserialize(arg0: string[]): ATN;
    deserialize(arg0: number[]): ATN;
    // private deserializeSets(arg0: number[], arg1: number, arg2: IntervalSet[]): number;
    edgeFactory(arg0: ATN, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: IntervalSet[]): Transition;
    lexerActionFactory(arg0: LexerActionType, arg1: number, arg2: number): LexerAction;
    markPrecedenceDecisions(arg0: ATN): void;
    stateFactory(arg0: number, arg1: number): ATNState;
    verifyATN(arg0: ATN): void;
}