import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { InitializeResult$ServerInfoResult } from '../../../../../../org/graalvm/tools/lsp/server/types/InitializeResult$ServerInfoResult.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { ServerCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ServerCapabilities.d.ts'
export class InitializeResult extends JSONBase {
    static create(paramcapabilities: ServerCapabilities): InitializeResult;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    get(key: string): Object;
    getCapabilities(): ServerCapabilities;
    getServerInfo(): InitializeResult$ServerInfoResult;
    hashCode(): number;
    set(key: string, value: Object): InitializeResult;
    setCapabilities(capabilities: ServerCapabilities): InitializeResult;
    setServerInfo(serverInfo: InitializeResult$ServerInfoResult): InitializeResult;
}