import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionKind.d.ts'
import type { Diagnostic } from '../../../../../../org/graalvm/tools/lsp/server/types/Diagnostic.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CodeActionContext extends JSONBase {
    static create(paramdiagnostics: Diagnostic[], paramonly: CodeActionKind[]): CodeActionContext;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDiagnostics(): Diagnostic[];
    getOnly(): CodeActionKind[];
    hashCode(): number;
    setDiagnostics(diagnostics: Diagnostic[]): CodeActionContext;
    setOnly(only: CodeActionKind[]): CodeActionContext;
}