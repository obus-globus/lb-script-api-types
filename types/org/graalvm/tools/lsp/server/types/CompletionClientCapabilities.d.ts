import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CompletionClientCapabilities$CompletionItemCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionClientCapabilities$CompletionItemCapabilities.d.ts'
import type { CompletionClientCapabilities$CompletionItemKindCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionClientCapabilities$CompletionItemKindCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CompletionClientCapabilities extends JSONBase {
    static create(): CompletionClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCompletionItem(): CompletionClientCapabilities$CompletionItemCapabilities;
    getCompletionItemKind(): CompletionClientCapabilities$CompletionItemKindCapabilities;
    getContextSupport(): boolean;
    getDynamicRegistration(): boolean;
    hashCode(): number;
    setCompletionItem(completionItem: CompletionClientCapabilities$CompletionItemCapabilities): CompletionClientCapabilities;
    setCompletionItemKind(completionItemKind: CompletionClientCapabilities$CompletionItemKindCapabilities): CompletionClientCapabilities;
    setContextSupport(contextSupport: boolean): CompletionClientCapabilities;
    setDynamicRegistration(dynamicRegistration: boolean): CompletionClientCapabilities;
}