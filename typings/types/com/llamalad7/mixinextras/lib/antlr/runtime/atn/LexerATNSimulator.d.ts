import type { CharStream } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Lexer.d.ts'
import type { ATN } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { ATNSimulator } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNSimulator.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { LexerATNConfig } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerATNConfig.d.ts'
import type { LexerATNSimulator$SimState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerATNSimulator$SimState.d.ts'
import type { LexerActionExecutor } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerActionExecutor.d.ts'
import type { PredictionContextCache } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContextCache.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { DFA } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFA.d.ts'
import type { DFAState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFAState.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LexerATNSimulator extends ATNSimulator {
    static ERROR: DFAState;
    constructor(arg0: Lexer, arg1: ATN, arg2: DFA[], arg3: PredictionContextCache)
    charPositionInLine: number;
    decisionToDFA: DFA[];
    line: number;
    // private mode: number;
    // private prevAccept: LexerATNSimulator$SimState;
    // private recog: Lexer;
    // private startIndex: number;
    accept(arg0: CharStream, arg1: LexerActionExecutor, arg2: number, arg3: number, arg4: number, arg5: number): void;
    addDFAEdge(arg0: DFAState, arg1: number, arg2: (Object | null)[]): DFAState;
    addDFAEdge(arg0: DFAState, arg1: number, arg2: DFAState): void;
    addDFAState(arg0: (Object | null)[]): DFAState;
    captureSimState(arg0: LexerATNSimulator$SimState, arg1: CharStream, arg2: DFAState): void;
    closure(arg0: CharStream, arg1: LexerATNConfig, arg2: (Object | null)[], arg3: boolean, arg4: boolean, arg5: boolean): boolean;
    computeStartState(arg0: CharStream, arg1: ATNState): (Object | null)[];
    computeTargetState(arg0: CharStream, arg1: DFAState, arg2: number): DFAState;
    consume(arg0: CharStream): void;
    evaluatePredicate(arg0: CharStream, arg1: number, arg2: number, arg3: boolean): boolean;
    execATN(arg0: CharStream, arg1: DFAState): number;
    failOrAccept(arg0: LexerATNSimulator$SimState, arg1: CharStream, arg2: (Object | null)[], arg3: number): number;
    getCharPositionInLine(): number;
    getEpsilonTarget(arg0: CharStream, arg1: LexerATNConfig, arg2: Transition, arg3: (Object | null)[], arg4: boolean, arg5: boolean): LexerATNConfig;
    getExistingTargetState(arg0: DFAState, arg1: number): DFAState;
    getLine(): number;
    getReachableConfigSet(arg0: CharStream, arg1: (Object | null)[], arg2: (Object | null)[], arg3: number): void;
    getReachableTarget(arg0: Transition, arg1: number): ATNState;
    getText(arg0: CharStream): string;
    match(arg0: CharStream, arg1: number): number;
    matchATN(arg0: CharStream): number;
    reset(): void;
}