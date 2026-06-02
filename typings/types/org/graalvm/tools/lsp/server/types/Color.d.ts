import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class Color extends JSONBase {
    static create(paramred: number, paramgreen: number, paramblue: number, paramalpha: number): Color;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAlpha(): number;
    getBlue(): number;
    getGreen(): number;
    getRed(): number;
    hashCode(): number;
}