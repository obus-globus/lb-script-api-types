import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { ServerCapabilities$WorkspaceCapabilities$WorkspaceFoldersCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ServerCapabilities$WorkspaceCapabilities$WorkspaceFoldersCapabilities.d.ts'
export class ServerCapabilities$WorkspaceCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getWorkspaceFolders(): ServerCapabilities$WorkspaceCapabilities$WorkspaceFoldersCapabilities;
    hashCode(): number;
    setWorkspaceFolders(workspaceFolders: ServerCapabilities$WorkspaceCapabilities$WorkspaceFoldersCapabilities): ServerCapabilities$WorkspaceCapabilities;
}