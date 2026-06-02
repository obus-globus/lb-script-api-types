import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExitedEvent$EventBody extends JSONBase {
    static create(paramexitCode: number): ExitedEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getExitCode(): number;
    hashCode(): number;
    setExitCode(exitCode: number): ExitedEvent$EventBody;
}