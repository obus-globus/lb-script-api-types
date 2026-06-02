import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CallArgument extends Object {
    static get(paramjson: JSONObject): CallArgument;
    private constructor(value: Object, objectId: string, undefined: boolean)
    readonly objectId: string;
    readonly undefined: boolean;
    // private value: Object;
    getObjectId(): string;
    getPrimitiveValue(): Object;
    isUndefined(): boolean;
}