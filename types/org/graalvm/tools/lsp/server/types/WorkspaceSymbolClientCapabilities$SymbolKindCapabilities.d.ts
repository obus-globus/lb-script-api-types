import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { SymbolKind } from '../../../../../../org/graalvm/tools/lsp/server/types/SymbolKind.d.ts'
export class WorkspaceSymbolClientCapabilities$SymbolKindCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getValueSet(): SymbolKind[];
    hashCode(): number;
    setValueSet(valueSet: SymbolKind[]): WorkspaceSymbolClientCapabilities$SymbolKindCapabilities;
}