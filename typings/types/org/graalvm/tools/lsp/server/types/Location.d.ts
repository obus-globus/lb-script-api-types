import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class Location extends JSONBase {
    static create(paramuri: string, paramrange: Range): Location;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRange(): Range;
    getUri(): string;
    hashCode(): number;
    setRange(range: Range): Location;
    setUri(uri: string): Location;
}