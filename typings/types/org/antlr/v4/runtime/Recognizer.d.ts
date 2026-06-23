import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ANTLRErrorListener } from '../../../../org/antlr/v4/runtime/ANTLRErrorListener.d.ts'
import type { IntStream } from '../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { RuleContext } from '../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../org/antlr/v4/runtime/TokenFactory.d.ts'
import type { Vocabulary } from '../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
import type { ATN } from '../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { ATNSimulator } from '../../../../org/antlr/v4/runtime/atn/ATNSimulator.d.ts'
import type { ParseInfo } from '../../../../org/antlr/v4/runtime/atn/ParseInfo.d.ts'
export abstract class Recognizer<Symbol extends unknown, ATNInterpreter extends ATNSimulator> extends Object {
    static EOF: number;
    constructor()
    // private _interp: ATNInterpreter;
    // private _listeners: ANTLRErrorListener[];
    // private _stateNumber: number;
    action(arg0: RuleContext, arg1: number, arg2: number): void;
    addErrorListener(arg0: ANTLRErrorListener): void;
    getATN(): ATN;
    getErrorHeader(arg0: RecognitionException): string;
    getErrorListenerDispatch(): ANTLRErrorListener;
    getErrorListeners(): ANTLRErrorListener[];
    getGrammarFileName(): string;
    getInputStream(): IntStream;
    getInterpreter(): ATNInterpreter;
    getParseInfo(): ParseInfo;
    getRuleIndexMap(): { [key: string]: number };
    getRuleNames(): string[];
    getSerializedATN(): string;
    getState(): number;
    getTokenErrorDisplay(arg0: Token): string;
    getTokenFactory(): TokenFactory<any>;
    getTokenNames(): string[];
    getTokenType(arg0: string): number;
    getTokenTypeMap(): { [key: string]: number };
    getVocabulary(): Vocabulary;
    precpred(arg0: RuleContext, arg1: number): boolean;
    removeErrorListener(arg0: ANTLRErrorListener): void;
    removeErrorListeners(): void;
    sempred(arg0: RuleContext, arg1: number, arg2: number): boolean;
    setInputStream(arg0: IntStream): void;
    setInterpreter(arg0: ATNInterpreter): void;
    setState(arg0: number): void;
    setTokenFactory(arg0: TokenFactory<any>): void;
}