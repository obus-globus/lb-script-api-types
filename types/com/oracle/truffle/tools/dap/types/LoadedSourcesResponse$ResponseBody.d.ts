import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class LoadedSourcesResponse$ResponseBody extends JSONBase {
    static create(paramsources: Source[]): LoadedSourcesResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getSources(): Source[];
    hashCode(): number;
    setSources(sources: Source[]): LoadedSourcesResponse$ResponseBody;
}