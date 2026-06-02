import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Variable } from '../../../../../../com/oracle/truffle/tools/dap/types/Variable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class VariablesResponse$ResponseBody extends JSONBase {
    static create(paramvariables: Variable[]): VariablesResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getVariables(): Variable[];
    hashCode(): number;
    setVariables(variables: Variable[]): VariablesResponse$ResponseBody;
}