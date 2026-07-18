import type { ScriptEnvironment$Builder } from '../../../../com/oracle/js/parser/ScriptEnvironment$Builder.d.ts'
import type { ScriptEnvironment$FunctionStatementBehavior } from '../../../../com/oracle/js/parser/ScriptEnvironment$FunctionStatementBehavior.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScriptEnvironment extends Object {
    static ES_2015: number;
    static ES_2016: number;
    static ES_2017: number;
    static ES_2018: number;
    static ES_2019: number;
    static ES_2020: number;
    static ES_2021: number;
    static ES_2022: number;
    static ES_2023: number;
    static ES_2024: number;
    static ES_STAGING: number;
    static builder(): ScriptEnvironment$Builder;
    constructor(strict: boolean, ecmaScriptVersion: number, emptyStatements: boolean, syntaxExtensions: boolean, scripting: boolean, shebang: boolean, constAsVar: boolean, allowBigInt: boolean, annexB: boolean, classFields: boolean, importAttributes: boolean, importAssertions: boolean, sourcePhaseImports: boolean, privateFieldsIn: boolean, topLevelAwait: boolean, v8Intrinsics: boolean, functionStatementBehavior: ScriptEnvironment$FunctionStatementBehavior)
    // private allowBigInt: boolean;
    // private annexB: boolean;
    // private classFields: boolean;
    // private constAsVar: boolean;
    // private ecmaScriptVersion: number;
    // private emptyStatements: boolean;
    // private functionStatement: ScriptEnvironment$FunctionStatementBehavior;
    // private importAssertions: boolean;
    // private importAttributes: boolean;
    // private privateFieldsIn: boolean;
    // private scripting: boolean;
    // private shebang: boolean;
    // private sourcePhaseImports: boolean;
    readonly strict: boolean;
    // private syntaxExtensions: boolean;
    // private topLevelAwait: boolean;
    // private v8Intrinsics: boolean;
    isStrict(): boolean;
}