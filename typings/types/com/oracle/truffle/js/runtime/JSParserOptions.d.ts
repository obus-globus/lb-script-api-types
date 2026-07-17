import type { JSLanguageOptions } from '../../../../../com/oracle/truffle/js/runtime/JSLanguageOptions.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSParserOptions extends Record {
    static fromLanguageOptions(paramoptions: JSLanguageOptions): JSParserOptions;
    constructor(strict: boolean, scripting: boolean, shebang: boolean, ecmaScriptVersion: number, syntaxExtensions: boolean, constAsVar: boolean, functionStatementError: boolean, emptyStatements: boolean, annexB: boolean, allowBigInt: boolean, classFields: boolean, importAttributes: boolean, sourcePhaseImports: boolean, privateFieldsIn: boolean, topLevelAwait: boolean, explicitResourceManagement: boolean, v8Intrinsics: boolean)
    // private allowBigInt: boolean;
    // private annexB: boolean;
    // private classFields: boolean;
    // private constAsVar: boolean;
    // private ecmaScriptVersion: number;
    // private emptyStatements: boolean;
    // private explicitResourceManagement: boolean;
    // private functionStatementError: boolean;
    // private importAttributes: boolean;
    // private privateFieldsIn: boolean;
    // private scripting: boolean;
    // private shebang: boolean;
    // private sourcePhaseImports: boolean;
    // private strict: boolean;
    // private syntaxExtensions: boolean;
    // private topLevelAwait: boolean;
    // private v8Intrinsics: boolean;
    allowBigInt(): boolean;
    annexB(): boolean;
    classFields(): boolean;
    constAsVar(): boolean;
    ecmaScriptVersion(): number;
    emptyStatements(): boolean;
    equals(o: Object | null): boolean;
    explicitResourceManagement(): boolean;
    functionStatementError(): boolean;
    hashCode(): number;
    importAttributes(): boolean;
    privateFieldsIn(): boolean;
    scripting(): boolean;
    shebang(): boolean;
    sourcePhaseImports(): boolean;
    strict(): boolean;
    syntaxExtensions(): boolean;
    toString(): string;
    topLevelAwait(): boolean;
    v8Intrinsics(): boolean;
    withStrict(strict: boolean): JSParserOptions;
}