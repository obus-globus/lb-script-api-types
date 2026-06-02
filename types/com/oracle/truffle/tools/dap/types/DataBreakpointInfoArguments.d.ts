import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class DataBreakpointInfoArguments extends JSONBase {
    static create(paramname: string): DataBreakpointInfoArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getName(): string;
    getVariablesReference(): number;
    hashCode(): number;
    setName(name: string): DataBreakpointInfoArguments;
    setVariablesReference(variablesReference: number): DataBreakpointInfoArguments;
}