import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { VariablePresentationHint } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablePresentationHint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Variable extends JSONBase {
    static create(paramname: string, paramvalue: string, paramvariablesReference: number): Variable;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getEvaluateName(): string;
    getIndexedVariables(): number;
    getMemoryReference(): string;
    getName(): string;
    getNamedVariables(): number;
    getPresentationHint(): VariablePresentationHint;
    getType(): string;
    getValue(): string;
    getVariablesReference(): number;
    hashCode(): number;
    setEvaluateName(evaluateName: string): Variable;
    setIndexedVariables(indexedVariables: number): Variable;
    setMemoryReference(memoryReference: string): Variable;
    setName(name: string): Variable;
    setNamedVariables(namedVariables: number): Variable;
    setPresentationHint(presentationHint: VariablePresentationHint): Variable;
    setType(type: string): Variable;
    setValue(value: string): Variable;
    setVariablesReference(variablesReference: number): Variable;
}