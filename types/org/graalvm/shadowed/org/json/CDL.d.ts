import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONTokener } from '../../../../../org/graalvm/shadowed/org/json/JSONTokener.d.ts'
export class CDL extends Object {
    static rowToJSONArray(paramx: JSONTokener): Object[];
    static rowToJSONArray(paramx: JSONTokener, paramdelimiter: string): Object[];
    static rowToJSONObject(paramnames: Object[], paramx: JSONTokener): JSONObject;
    static rowToJSONObject(paramnames: Object[], paramx: JSONTokener, paramdelimiter: string): JSONObject;
    static rowToString(paramja: Object[]): string;
    static rowToString(paramja: Object[], paramdelimiter: string): string;
    static toJSONArray(paramstring: string): Object[];
    static toJSONArray(paramstring: string, paramdelimiter: string): Object[];
    static toJSONArray(paramnames: Object[], paramstring: string): Object[];
    static toJSONArray(paramnames: Object[], paramstring: string, paramdelimiter: string): Object[];
    static toJSONArray(paramnames: Object[], paramx: JSONTokener): Object[];
    static toJSONArray(paramnames: Object[], paramx: JSONTokener, paramdelimiter: string): Object[];
    static toJSONArray(paramx: JSONTokener): Object[];
    static toJSONArray(paramx: JSONTokener, paramdelimiter: string): Object[];
    static toString(paramja: Object[]): string;
    static toString(paramja: Object[], paramdelimiter: string): string;
    static toString(paramnames: Object[], paramja: Object[]): string;
    static toString(paramnames: Object[], paramja: Object[], paramdelimiter: string): string;
    constructor()
}