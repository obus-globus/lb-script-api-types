import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { Transition } from '../../../../../org/antlr/v4/runtime/atn/Transition.d.ts'
export abstract class CodePointTransitions extends Object {
    static createWithCodePoint(paramarg0: ATNState, paramarg1: number): Transition;
    static createWithCodePointRange(paramarg0: ATNState, paramarg1: number, paramarg2: number): Transition;
    constructor()
}