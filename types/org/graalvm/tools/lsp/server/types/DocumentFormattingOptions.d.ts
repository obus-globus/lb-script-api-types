import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class DocumentFormattingOptions extends WorkDoneProgressOptions {
    static create(): DocumentFormattingOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    hashCode(): number;
}