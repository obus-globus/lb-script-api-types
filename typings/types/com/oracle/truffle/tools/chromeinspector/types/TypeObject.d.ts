import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class TypeObject extends Object {
    constructor(name: string)
    readonly name: string;
    getName(): string;
    // private toJSON(): JSONObject;
}