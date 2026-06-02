import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionKind.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities$CodeActionKindCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getValueSet(): CodeActionKind[];
    hashCode(): number;
    setValueSet(valueSet: CodeActionKind[]): CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities$CodeActionKindCapabilities;
}