import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class DocumentLink extends JSONBase {
    static create(paramrange: Range, paramtarget: string, paramdata: Object): DocumentLink;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getData(): Object;
    getRange(): Range;
    getTarget(): string;
    getTooltip(): string;
    hashCode(): number;
    setData(data: Object): DocumentLink;
    setRange(range: Range): DocumentLink;
    setTarget(target: string): DocumentLink;
    setTooltip(tooltip: string): DocumentLink;
}