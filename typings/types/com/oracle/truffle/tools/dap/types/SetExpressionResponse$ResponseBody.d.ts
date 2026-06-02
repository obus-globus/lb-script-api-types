import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { VariablePresentationHint } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablePresentationHint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetExpressionResponse$ResponseBody extends JSONBase {
    static create(paramvalue: string): SetExpressionResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getIndexedVariables(): number;
    getNamedVariables(): number;
    getPresentationHint(): VariablePresentationHint;
    getType(): string;
    getValue(): string;
    getVariablesReference(): number;
    hashCode(): number;
    setIndexedVariables(indexedVariables: number): SetExpressionResponse$ResponseBody;
    setNamedVariables(namedVariables: number): SetExpressionResponse$ResponseBody;
    setPresentationHint(presentationHint: VariablePresentationHint): SetExpressionResponse$ResponseBody;
    setType(type: string): SetExpressionResponse$ResponseBody;
    setValue(value: string): SetExpressionResponse$ResponseBody;
    setVariablesReference(variablesReference: number): SetExpressionResponse$ResponseBody;
}