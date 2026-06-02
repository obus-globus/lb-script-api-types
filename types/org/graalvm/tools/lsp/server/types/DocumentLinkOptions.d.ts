import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class DocumentLinkOptions extends WorkDoneProgressOptions {
    static create(): DocumentLinkOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getResolveProvider(): boolean;
    hashCode(): number;
    setResolveProvider(resolveProvider: boolean): DocumentLinkOptions;
}