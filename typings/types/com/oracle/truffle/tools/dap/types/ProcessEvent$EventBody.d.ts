import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ProcessEvent$EventBody extends JSONBase {
    static create(paramname: string): ProcessEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getIsLocalProcess(): boolean;
    getName(): string;
    getPointerSize(): number;
    getStartMethod(): string;
    getSystemProcessId(): number;
    hashCode(): number;
    setIsLocalProcess(isLocalProcess: boolean): ProcessEvent$EventBody;
    setName(name: string): ProcessEvent$EventBody;
    setPointerSize(pointerSize: number): ProcessEvent$EventBody;
    setStartMethod(startMethod: string): ProcessEvent$EventBody;
    setSystemProcessId(systemProcessId: number): ProcessEvent$EventBody;
}