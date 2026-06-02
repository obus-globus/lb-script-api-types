import type { ScriptEngine } from '../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ScriptEngineFactory extends Object{
    getEngineName(): string;
    getEngineVersion(): string;
    getExtensions(): string[];
    getLanguageName(): string;
    getLanguageVersion(): string;
    getMethodCallSyntax(arg0: string, arg1: string, arg2: string[]): string;
    getMimeTypes(): string[];
    getNames(): string[];
    getOutputStatement(arg0: string): string;
    getParameter(arg0: string): Object;
    getProgram(arg0: string[]): string;
    getScriptEngine(): ScriptEngine;
}