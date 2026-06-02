import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class JSONWriter extends Object {
    static valueToString(paramvalue: Object): string;
    constructor(w: Appendable)
    // private comma: boolean;
    // private mode: string;
    // private stack: JSONObject[];
    // private top: number;
    // private writer: Appendable;
    // private append(string: string): JSONWriter;
    array(): JSONWriter;
    // private end(m: string, c: string): JSONWriter;
    endArray(): JSONWriter;
    endObject(): JSONWriter;
    key(string: string): JSONWriter;
    object(): JSONWriter;
    // private pop(c: string): void;
    // private push(jo: JSONObject): void;
    value(object: Object): JSONWriter;
    value(b: boolean): JSONWriter;
    value(d: number): JSONWriter;
    value(l: number): JSONWriter;
}