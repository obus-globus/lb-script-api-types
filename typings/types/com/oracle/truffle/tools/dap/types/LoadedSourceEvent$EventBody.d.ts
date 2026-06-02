import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class LoadedSourceEvent$EventBody extends JSONBase {
    static create(paramreason: string, paramsource: Source): LoadedSourceEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getReason(): string;
    getSource(): Source;
    hashCode(): number;
    setReason(reason: string): LoadedSourceEvent$EventBody;
    setSource(source: Source): LoadedSourceEvent$EventBody;
}