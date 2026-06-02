import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Cookie extends Object {
    static escape(paramstring: string): string;
    static toJSONObject(paramstring: string): JSONObject;
    static toString(paramjo: JSONObject): string;
    static unescape(paramstring: string): string;
    constructor()
}