import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Property extends Object {
    static toJSONObject(paramproperties: Properties): JSONObject;
    static toProperties(paramjo: JSONObject): Properties;
    constructor()
}