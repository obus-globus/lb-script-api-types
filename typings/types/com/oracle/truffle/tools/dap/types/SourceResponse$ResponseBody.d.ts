import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SourceResponse$ResponseBody extends JSONBase {
    static create(paramcontent: string): SourceResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContent(): string;
    getMimeType(): string;
    hashCode(): number;
    setContent(content: string): SourceResponse$ResponseBody;
    setMimeType(mimeType: string): SourceResponse$ResponseBody;
}