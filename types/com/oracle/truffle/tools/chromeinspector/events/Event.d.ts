import type { Params } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { Result } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Result.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Event extends Object {
    constructor(id: number, result: Result)
    constructor(method: string, params: Params)
    // private json: JSONObject;
    toJSON(): JSONObject;
    toJSONString(): string;
}