import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class OutputEvent$EventBody extends JSONBase {
    static create(paramoutput: string): OutputEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCategory(): string;
    getColumn(): number;
    getData(): Object;
    getGroup(): string;
    getLine(): number;
    getOutput(): string;
    getSource(): Source;
    getVariablesReference(): number;
    hashCode(): number;
    setCategory(category: string): OutputEvent$EventBody;
    setColumn(column: number): OutputEvent$EventBody;
    setData(data: Object): OutputEvent$EventBody;
    setGroup(group: string): OutputEvent$EventBody;
    setLine(line: number): OutputEvent$EventBody;
    setOutput(output: string): OutputEvent$EventBody;
    setSource(source: Source): OutputEvent$EventBody;
    setVariablesReference(variablesReference: number): OutputEvent$EventBody;
}