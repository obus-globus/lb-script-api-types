import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetVariableResponse$ResponseBody extends JSONBase {
    static create(paramvalue: string): SetVariableResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getIndexedVariables(): number;
    getNamedVariables(): number;
    getType(): string;
    getValue(): string;
    getVariablesReference(): number;
    hashCode(): number;
    setIndexedVariables(indexedVariables: number): SetVariableResponse$ResponseBody;
    setNamedVariables(namedVariables: number): SetVariableResponse$ResponseBody;
    setType(type: string): SetVariableResponse$ResponseBody;
    setValue(value: string): SetVariableResponse$ResponseBody;
    setVariablesReference(variablesReference: number): SetVariableResponse$ResponseBody;
}