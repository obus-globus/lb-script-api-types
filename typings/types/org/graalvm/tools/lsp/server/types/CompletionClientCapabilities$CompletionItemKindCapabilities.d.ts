import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CompletionItemKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItemKind.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CompletionClientCapabilities$CompletionItemKindCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getValueSet(): CompletionItemKind[];
    hashCode(): number;
    setValueSet(valueSet: CompletionItemKind[]): CompletionClientCapabilities$CompletionItemKindCapabilities;
}