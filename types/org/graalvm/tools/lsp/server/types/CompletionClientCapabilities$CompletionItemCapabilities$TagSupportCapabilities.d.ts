import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CompletionItemTag } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItemTag.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CompletionClientCapabilities$CompletionItemCapabilities$TagSupportCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getValueSet(): CompletionItemTag[];
    hashCode(): number;
    setValueSet(valueSet: CompletionItemTag[]): CompletionClientCapabilities$CompletionItemCapabilities$TagSupportCapabilities;
}