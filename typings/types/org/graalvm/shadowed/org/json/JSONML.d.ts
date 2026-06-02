import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONMLParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/JSONMLParserConfiguration.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { XMLTokener } from '../../../../../org/graalvm/shadowed/org/json/XMLTokener.d.ts'
export class JSONML extends Object {
    static toJSONArray(paramstring: string): Object[];
    static toJSONArray(paramstring: string, paramkeepStrings: boolean): Object[];
    static toJSONArray(paramstring: string, paramconfig: JSONMLParserConfiguration): Object[];
    static toJSONArray(paramx: XMLTokener): Object[];
    static toJSONArray(paramx: XMLTokener, paramkeepStrings: boolean): Object[];
    static toJSONArray(paramx: XMLTokener, paramconfig: JSONMLParserConfiguration): Object[];
    static toJSONObject(paramstring: string): JSONObject;
    static toJSONObject(paramstring: string, paramkeepStrings: boolean): JSONObject;
    static toJSONObject(paramstring: string, paramconfig: JSONMLParserConfiguration): JSONObject;
    static toJSONObject(paramx: XMLTokener): JSONObject;
    static toJSONObject(paramx: XMLTokener, paramkeepStrings: boolean): JSONObject;
    static toJSONObject(paramx: XMLTokener, paramconfig: JSONMLParserConfiguration): JSONObject;
    static toString(paramja: Object[]): string;
    static toString(paramjo: JSONObject): string;
    constructor()
}