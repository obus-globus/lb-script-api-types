import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SourceArguments extends JSONBase {
    static create(paramsourceReference: number): SourceArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getSource(): Source;
    getSourceReference(): number;
    hashCode(): number;
    setSource(source: Source): SourceArguments;
    setSourceReference(sourceReference: number): SourceArguments;
}