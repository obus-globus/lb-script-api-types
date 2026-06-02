import type { Params } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Result extends Object {
    static emptyResult(paramid: number): JSONObject;
    constructor(params: Params)
    // private resultJSON: JSONObject;
    toJSON(id: number): JSONObject;
}