import type { JSLanguageOptions } from '../../../../../com/oracle/truffle/js/runtime/JSLanguageOptions.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSParserOptions extends Record {
    static fromLanguageOptions(paramoptions: JSLanguageOptions): JSParserOptions;
    // private allowBigInt: boolean;
    // private annexB: boolean;
    // private classFields: boolean;
    // private constAsVar: boolean;
    // private ecmaScriptVersion: number;
    // private emptyStatements: boolean;
    // private functionStatementError: boolean;
    // private importAssertions: boolean;
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
    functionStatementError(): boolean;
    hashCode(): number;
    importAssertions(): boolean;
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