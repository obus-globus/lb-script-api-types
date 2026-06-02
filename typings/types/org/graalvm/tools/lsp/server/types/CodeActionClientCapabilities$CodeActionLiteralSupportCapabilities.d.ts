import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities$CodeActionKindCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities$CodeActionKindCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCodeActionKind(): CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities$CodeActionKindCapabilities;
    hashCode(): number;
    setCodeActionKind(codeActionKind: CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities$CodeActionKindCapabilities): CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities;
}