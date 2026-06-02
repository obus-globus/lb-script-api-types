import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CompletionClientCapabilities$CompletionItemCapabilities$TagSupportCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionClientCapabilities$CompletionItemCapabilities$TagSupportCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { MarkupKind } from '../../../../../../org/graalvm/tools/lsp/server/types/MarkupKind.d.ts'
export class CompletionClientCapabilities$CompletionItemCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCommitCharactersSupport(): boolean;
    getDeprecatedSupport(): boolean;
    getDocumentationFormat(): MarkupKind[];
    getPreselectSupport(): boolean;
    getSnippetSupport(): boolean;
    getTagSupport(): CompletionClientCapabilities$CompletionItemCapabilities$TagSupportCapabilities;
    hashCode(): number;
    setCommitCharactersSupport(commitCharactersSupport: boolean): CompletionClientCapabilities$CompletionItemCapabilities;
    setDeprecatedSupport(deprecatedSupport: boolean): CompletionClientCapabilities$CompletionItemCapabilities;
    setDocumentationFormat(documentationFormat: MarkupKind[]): CompletionClientCapabilities$CompletionItemCapabilities;
    setPreselectSupport(preselectSupport: boolean): CompletionClientCapabilities$CompletionItemCapabilities;
    setSnippetSupport(snippetSupport: boolean): CompletionClientCapabilities$CompletionItemCapabilities;
    setTagSupport(tagSupport: CompletionClientCapabilities$CompletionItemCapabilities$TagSupportCapabilities): CompletionClientCapabilities$CompletionItemCapabilities;
}