import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Color } from '../../../../../../org/graalvm/tools/lsp/server/types/Color.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class ColorInformation extends JSONBase {
    static create(paramrange: Range, paramcolor: Color): ColorInformation;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColor(): Color;
    getRange(): Range;
    hashCode(): number;
    setColor(color: Color): ColorInformation;
    setRange(range: Range): ColorInformation;
}