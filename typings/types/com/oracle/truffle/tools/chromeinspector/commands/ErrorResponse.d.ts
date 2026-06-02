import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ErrorResponse extends Object {
    constructor(id: number, code: number, message: string)
    // private code: number;
    // private id: number;
    // private message: string;
    toJSON(): JSONObject;
    toJSONString(): string;
}