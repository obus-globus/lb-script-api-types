import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { DiagnosticTag } from '../../../../../../org/graalvm/tools/lsp/server/types/DiagnosticTag.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class PublishDiagnosticsClientCapabilities$TagSupportCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getValueSet(): DiagnosticTag[];
    hashCode(): number;
    setValueSet(valueSet: DiagnosticTag[]): PublishDiagnosticsClientCapabilities$TagSupportCapabilities;
}