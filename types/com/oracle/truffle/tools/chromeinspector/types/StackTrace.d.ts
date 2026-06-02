import type { DebugStackTraceElement } from '../../../../../../com/oracle/truffle/api/debug/DebugStackTraceElement.d.ts'
import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StackTrace extends Object {
    constructor(context: InspectorExecutionContext, stacks: DebugStackTraceElement[][])
    // private jsonObject: JSONObject;
    toJSON(): JSONObject;
}