import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { ValueFormat } from '../../../../../../com/oracle/truffle/tools/dap/types/ValueFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class VariablesArguments extends JSONBase {
    static create(paramvariablesReference: number): VariablesArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCount(): number;
    getFilter(): string;
    getFormat(): ValueFormat;
    getStart(): number;
    getVariablesReference(): number;
    hashCode(): number;
    setCount(count: number): VariablesArguments;
    setFilter(filter: string): VariablesArguments;
    setFormat(format: ValueFormat): VariablesArguments;
    setStart(start: number): VariablesArguments;
    setVariablesReference(variablesReference: number): VariablesArguments;
}