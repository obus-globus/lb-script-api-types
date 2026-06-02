import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { DocumentSymbolClientCapabilities$SymbolKindCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentSymbolClientCapabilities$SymbolKindCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class DocumentSymbolClientCapabilities extends JSONBase {
    static create(): DocumentSymbolClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDynamicRegistration(): boolean;
    getHierarchicalDocumentSymbolSupport(): boolean;
    getSymbolKind(): DocumentSymbolClientCapabilities$SymbolKindCapabilities;
    hashCode(): number;
    setDynamicRegistration(dynamicRegistration: boolean): DocumentSymbolClientCapabilities;
    setHierarchicalDocumentSymbolSupport(hierarchicalDocumentSymbolSupport: boolean): DocumentSymbolClientCapabilities;
    setSymbolKind(symbolKind: DocumentSymbolClientCapabilities$SymbolKindCapabilities): DocumentSymbolClientCapabilities;
}