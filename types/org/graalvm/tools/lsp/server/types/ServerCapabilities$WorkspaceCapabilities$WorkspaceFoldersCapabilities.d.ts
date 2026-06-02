import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class ServerCapabilities$WorkspaceCapabilities$WorkspaceFoldersCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getChangeNotifications(): Object;
    getSupported(): boolean;
    hashCode(): number;
    setChangeNotifications(changeNotifications: Object): ServerCapabilities$WorkspaceCapabilities$WorkspaceFoldersCapabilities;
    setSupported(supported: boolean): ServerCapabilities$WorkspaceCapabilities$WorkspaceFoldersCapabilities;
}