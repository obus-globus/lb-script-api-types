import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { ValueFormat } from '../../../../../../com/oracle/truffle/tools/dap/types/ValueFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetVariableArguments extends JSONBase {
    static create(paramvariablesReference: number, paramname: string, paramvalue: string): SetVariableArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getFormat(): ValueFormat;
    getName(): string;
    getValue(): string;
    getVariablesReference(): number;
    hashCode(): number;
    setFormat(format: ValueFormat): SetVariableArguments;
    setName(name: string): SetVariableArguments;
    setValue(value: string): SetVariableArguments;
    setVariablesReference(variablesReference: number): SetVariableArguments;
}