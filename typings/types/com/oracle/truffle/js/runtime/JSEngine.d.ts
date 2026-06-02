import type { TruffleLanguage$Env } from '../../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { JavaScriptLanguage } from '../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { Evaluator } from '../../../../../com/oracle/truffle/js/runtime/Evaluator.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSEngine extends Object {
    static createJSContext(paramlanguage: JavaScriptLanguage, paramenv: TruffleLanguage$Env): JSContext;
    static getInstance(): JSEngine;
    private constructor()
    readonly parser: Evaluator;
    // private createContext(language: JavaScriptLanguage, env: TruffleLanguage$Env): JSContext;
    getEvaluator(): Evaluator;
    getParser(): Evaluator;
}