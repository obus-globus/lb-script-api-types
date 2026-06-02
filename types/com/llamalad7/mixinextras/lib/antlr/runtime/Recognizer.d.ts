import type { ANTLRErrorListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ANTLRErrorListener.d.ts'
import type { RuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { Vocabulary } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Vocabulary.d.ts'
import type { ATN } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { ATNSimulator } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNSimulator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Recognizer<Symbol extends Object | number | string | boolean, ATNInterpreter extends ATNSimulator> extends Object {
    constructor()
    // private _interp: ATNInterpreter;
    // private _listeners: ANTLRErrorListener[];
    // private _stateNumber: number;
    action(arg0: RuleContext, arg1: number, arg2: number): void;
    addErrorListener(arg0: ANTLRErrorListener): void;
    getATN(): ATN;
    getErrorListenerDispatch(): ANTLRErrorListener;
    getErrorListeners(): ANTLRErrorListener[];
    getInterpreter(): ATNInterpreter;
    getRuleNames(): string[];
    getState(): number;
    getTokenNames(): string[];
    getVocabulary(): Vocabulary;
    precpred(arg0: RuleContext, arg1: number): boolean;
    removeErrorListeners(): void;
    sempred(arg0: RuleContext, arg1: number, arg2: number): boolean;
    setState(arg0: number): void;
}