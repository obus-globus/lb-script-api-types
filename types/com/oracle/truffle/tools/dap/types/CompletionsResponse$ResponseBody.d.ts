import type { CompletionItem } from '../../../../../../com/oracle/truffle/tools/dap/types/CompletionItem.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CompletionsResponse$ResponseBody extends JSONBase {
    static create(paramtargets: CompletionItem[]): CompletionsResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTargets(): CompletionItem[];
    hashCode(): number;
    setTargets(targets: CompletionItem[]): CompletionsResponse$ResponseBody;
}