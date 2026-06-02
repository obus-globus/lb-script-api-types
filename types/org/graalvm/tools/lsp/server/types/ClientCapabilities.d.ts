import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { ClientCapabilities$WindowCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ClientCapabilities$WindowCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextDocumentClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentClientCapabilities.d.ts'
import type { WorkspaceClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceClientCapabilities.d.ts'
export class ClientCapabilities extends JSONBase {
    static create(): ClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getExperimental(): Object;
    getTextDocument(): TextDocumentClientCapabilities;
    getWindow(): ClientCapabilities$WindowCapabilities;
    getWorkspace(): WorkspaceClientCapabilities;
    hashCode(): number;
    setExperimental(experimental: Object): ClientCapabilities;
    setTextDocument(textDocument: TextDocumentClientCapabilities): ClientCapabilities;
    setWindow(window: ClientCapabilities$WindowCapabilities): ClientCapabilities;
    setWorkspace(workspace: WorkspaceClientCapabilities): ClientCapabilities;
}