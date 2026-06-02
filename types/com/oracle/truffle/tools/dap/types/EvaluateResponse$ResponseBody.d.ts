import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { VariablePresentationHint } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablePresentationHint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class EvaluateResponse$ResponseBody extends JSONBase {
    static create(paramresult: string, paramvariablesReference: number): EvaluateResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getIndexedVariables(): number;
    getMemoryReference(): string;
    getNamedVariables(): number;
    getPresentationHint(): VariablePresentationHint;
    getResult(): string;
    getType(): string;
    getVariablesReference(): number;
    hashCode(): number;
    setIndexedVariables(indexedVariables: number): EvaluateResponse$ResponseBody;
    setMemoryReference(memoryReference: string): EvaluateResponse$ResponseBody;
    setNamedVariables(namedVariables: number): EvaluateResponse$ResponseBody;
    setPresentationHint(presentationHint: VariablePresentationHint): EvaluateResponse$ResponseBody;
    setResult(result: string): EvaluateResponse$ResponseBody;
    setType(type: string): EvaluateResponse$ResponseBody;
    setVariablesReference(variablesReference: number): EvaluateResponse$ResponseBody;
}