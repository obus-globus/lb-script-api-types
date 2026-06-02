import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Location } from '../../../../../../org/graalvm/tools/lsp/server/types/Location.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
import type { SymbolKind } from '../../../../../../org/graalvm/tools/lsp/server/types/SymbolKind.d.ts'
export class SymbolInformation extends JSONBase {
    static create(paramname: string, paramkind: SymbolKind, paramrange: Range, paramuri: string, paramcontainerName: string): SymbolInformation;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContainerName(): string;
    getDeprecated(): boolean;
    getKind(): SymbolKind;
    getLocation(): Location;
    getName(): string;
    hashCode(): number;
    setContainerName(containerName: string): SymbolInformation;
    setDeprecated(deprecated: boolean): SymbolInformation;
    setKind(kind: SymbolKind): SymbolInformation;
    setLocation(location: Location): SymbolInformation;
    setName(name: string): SymbolInformation;
}