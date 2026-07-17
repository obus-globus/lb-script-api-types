import type { ScriptEnvironment } from '../../../../com/oracle/js/parser/ScriptEnvironment.d.ts'
import type { ScriptEnvironment$FunctionStatementBehavior } from '../../../../com/oracle/js/parser/ScriptEnvironment$FunctionStatementBehavior.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScriptEnvironment$Builder extends Object {
    private constructor()
    // private allowBigInt: boolean;
    // private annexB: boolean;
    // private classFields: boolean;
    // private constAsVar: boolean;
    // private ecmaScriptVersion: number;
    // private emptyStatements: boolean;
    // private explicitResourceManagement: boolean;
    // private functionStatementBehavior: ScriptEnvironment$FunctionStatementBehavior;
    // private importAttributes: boolean;
    // private privateFieldsIn: boolean;
    // private scripting: boolean;
    // private shebang: boolean;
    // private sourcePhaseImports: boolean;
    // private strict: boolean;
    // private syntaxExtensions: boolean;
    // private topLevelAwait: boolean;
    // private v8Intrinsics: boolean;
    allowBigInt(allowBigInt: boolean): ScriptEnvironment$Builder;
    annexB(annexB: boolean): ScriptEnvironment$Builder;
    build(): ScriptEnvironment;
    classFields(classFields: boolean): ScriptEnvironment$Builder;
    constAsVar(constAsVar: boolean): ScriptEnvironment$Builder;
    ecmaScriptVersion(ecmaScriptVersion: number): ScriptEnvironment$Builder;
    emptyStatements(emptyStatements: boolean): ScriptEnvironment$Builder;
    explicitResourceManagement(explicitResourceManagement: boolean): ScriptEnvironment$Builder;
    functionStatementBehavior(functionStatementBehavior: ScriptEnvironment$FunctionStatementBehavior): ScriptEnvironment$Builder;
    importAttributes(importAttributes: boolean): ScriptEnvironment$Builder;
    privateFieldsIn(privateFieldsIn: boolean): ScriptEnvironment$Builder;
    scripting(scripting: boolean): ScriptEnvironment$Builder;
    shebang(shebang: boolean): ScriptEnvironment$Builder;
    sourcePhaseImports(sourcePhaseImports: boolean): void;
    strict(strict: boolean): ScriptEnvironment$Builder;
    syntaxExtensions(syntaxExtensions: boolean): ScriptEnvironment$Builder;
    topLevelAwait(topLevelAwait: boolean): ScriptEnvironment$Builder;
    v8Intrinsics(v8Intrinsics: boolean): ScriptEnvironment$Builder;
}