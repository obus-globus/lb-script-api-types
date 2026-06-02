import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class GotoTargetsArguments extends JSONBase {
    static create(paramsource: Source, paramline: number): GotoTargetsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getLine(): number;
    getSource(): Source;
    hashCode(): number;
    setColumn(column: number): GotoTargetsArguments;
    setLine(line: number): GotoTargetsArguments;
    setSource(source: Source): GotoTargetsArguments;
}