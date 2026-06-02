import type { DebugException } from '../../../../../../com/oracle/truffle/api/debug/DebugException.d.ts'
import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExceptionDetails extends Object {
    static resetIDs(): void;
    constructor(debugException: DebugException)
    constructor(errorMessage: string)
    // private debugException: DebugException;
    // private errorMessage: string;
    // private exceptionId: number;
    createJSON(context: InspectorExecutionContext): JSONObject;
}