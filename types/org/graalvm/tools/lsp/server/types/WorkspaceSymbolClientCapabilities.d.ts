import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { WorkspaceSymbolClientCapabilities$SymbolKindCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceSymbolClientCapabilities$SymbolKindCapabilities.d.ts'
export class WorkspaceSymbolClientCapabilities extends JSONBase {
    static create(): WorkspaceSymbolClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDynamicRegistration(): boolean;
    getSymbolKind(): WorkspaceSymbolClientCapabilities$SymbolKindCapabilities;
    hashCode(): number;
    setDynamicRegistration(dynamicRegistration: boolean): WorkspaceSymbolClientCapabilities;
    setSymbolKind(symbolKind: WorkspaceSymbolClientCapabilities$SymbolKindCapabilities): WorkspaceSymbolClientCapabilities;
}