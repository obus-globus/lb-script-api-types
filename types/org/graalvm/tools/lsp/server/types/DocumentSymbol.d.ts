import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
import type { SymbolKind } from '../../../../../../org/graalvm/tools/lsp/server/types/SymbolKind.d.ts'
export class DocumentSymbol extends JSONBase {
    static create(paramname: string, paramdetail: string, paramkind: SymbolKind, paramrange: Range, paramselectionRange: Range, paramchildren: DocumentSymbol[]): DocumentSymbol;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getChildren(): DocumentSymbol[];
    getDeprecated(): boolean;
    getDetail(): string;
    getKind(): SymbolKind;
    getName(): string;
    getRange(): Range;
    getSelectionRange(): Range;
    hashCode(): number;
    setChildren(children: DocumentSymbol[]): DocumentSymbol;
    setDeprecated(deprecated: boolean): DocumentSymbol;
    setDetail(detail: string): DocumentSymbol;
    setKind(kind: SymbolKind): DocumentSymbol;
    setName(name: string): DocumentSymbol;
    setRange(range: Range): DocumentSymbol;
    setSelectionRange(selectionRange: Range): DocumentSymbol;
}