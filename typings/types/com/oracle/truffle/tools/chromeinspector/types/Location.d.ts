import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Location extends Object {
    static create(paramlocation: JSONObject): Location;
    constructor(scriptId: number, line: number, column: number)
    readonly column: number;
    readonly line: number;
    readonly scriptId: number;
    getColumn(): number;
    getLine(): number;
    getScriptId(): number;
    toJSON(): JSONObject;
}