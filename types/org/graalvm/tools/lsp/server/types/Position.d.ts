import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class Position extends JSONBase {
    static create(paramline: number, paramcharacter: number): Position;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCharacter(): number;
    getLine(): number;
    hashCode(): number;
    setCharacter(character: number): Position;
    setLine(line: number): Position;
}