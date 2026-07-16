import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CodeActionKind extends Enum<CodeActionKind> {
    static Empty: CodeActionKind;
    static QuickFix: CodeActionKind;
    static Refactor: CodeActionKind;
    static RefactorExtract: CodeActionKind;
    static RefactorInline: CodeActionKind;
    static RefactorRewrite: CodeActionKind;
    static Source: CodeActionKind;
    static SourceFixAll: CodeActionKind;
    static SourceOrganizeImports: CodeActionKind;
    static get(paramstringValue: string): CodeActionKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CodeActionKind;
    static values(): CodeActionKind[];
    private constructor(stringValue: string)
    readonly stringValue: string;
    getStringValue(): string;
    name(): "Empty" | "QuickFix" | "Refactor" | "RefactorExtract" | "RefactorInline" | "RefactorRewrite" | "Source" | "SourceOrganizeImports" | "SourceFixAll";
}