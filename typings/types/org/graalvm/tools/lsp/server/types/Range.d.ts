import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
export class Range extends JSONBase {
    static create(paramstartLine: number, paramstartCharacter: number, paramendLine: number, paramendCharacter: number): Range;
    static create(paramone: Object, paramtwo: Object, paramthree: number, paramfour: number): Range;
    static create(paramstart: Position, paramend: Position): Range;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getEnd(): Position;
    getStart(): Position;
    hashCode(): number;
    setEnd(end: Position): Range;
    setStart(start: Position): Range;
}