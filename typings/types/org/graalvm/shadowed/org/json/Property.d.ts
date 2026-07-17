import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Property extends Object {
    static toJSONObject(paramproperties: JavaMap<any, any>): JSONObject;
    static toProperties(paramjo: JSONObject): JavaMap<any, any>;
    constructor()
}