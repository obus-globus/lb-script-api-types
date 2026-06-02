import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { ATN } from '../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { ATNSimulator } from '../../../../../org/antlr/v4/runtime/atn/ATNSimulator.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { LexerATNConfig } from '../../../../../org/antlr/v4/runtime/atn/LexerATNConfig.d.ts'
import type { LexerATNSimulator$SimState } from '../../../../../org/antlr/v4/runtime/atn/LexerATNSimulator$SimState.d.ts'
import type { LexerActionExecutor } from '../../../../../org/antlr/v4/runtime/atn/LexerActionExecutor.d.ts'
import type { PredictionContextCache } from '../../../../../org/antlr/v4/runtime/atn/PredictionContextCache.d.ts'
import type { Transition } from '../../../../../org/antlr/v4/runtime/atn/Transition.d.ts'
import type { DFA } from '../../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
import type { DFAState } from '../../../../../org/antlr/v4/runtime/dfa/DFAState.d.ts'
export class LexerATNSimulator extends ATNSimulator {
    static ERROR: DFAState;
    static MAX_DFA_EDGE: number;
    static MIN_DFA_EDGE: number;
    static debug: boolean;
    static dfa_debug: boolean;
    constructor(arg0: Lexer, arg1: ATN, arg2: DFA[], arg3: PredictionContextCache)
    constructor(arg0: ATN, arg1: DFA[], arg2: PredictionContextCache)
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
    clearDFA(): void;
    closure(arg0: CharStream, arg1: LexerATNConfig, arg2: (Object | null)[], arg3: boolean, arg4: boolean, arg5: boolean): boolean;
    computeStartState(arg0: CharStream, arg1: ATNState): (Object | null)[];
    computeTargetState(arg0: CharStream, arg1: DFAState, arg2: number): DFAState;
    consume(arg0: CharStream): void;
    copyState(arg0: LexerATNSimulator): void;
    evaluatePredicate(arg0: CharStream, arg1: number, arg2: number, arg3: boolean): boolean;
    execATN(arg0: CharStream, arg1: DFAState): number;
    failOrAccept(arg0: LexerATNSimulator$SimState, arg1: CharStream, arg2: (Object | null)[], arg3: number): number;
    getCharPositionInLine(): number;
    getDFA(arg0: number): DFA;
    getEpsilonTarget(arg0: CharStream, arg1: LexerATNConfig, arg2: Transition, arg3: (Object | null)[], arg4: boolean, arg5: boolean): LexerATNConfig;
    getExistingTargetState(arg0: DFAState, arg1: number): DFAState;
    getLine(): number;
    getReachableConfigSet(arg0: CharStream, arg1: (Object | null)[], arg2: (Object | null)[], arg3: number): void;
    getReachableTarget(arg0: Transition, arg1: number): ATNState;
    getText(arg0: CharStream): string;
    getTokenName(arg0: number): string;
    match(arg0: CharStream, arg1: number): number;
    matchATN(arg0: CharStream): number;
    reset(): void;
    setCharPositionInLine(arg0: number): void;
    setLine(arg0: number): void;
}