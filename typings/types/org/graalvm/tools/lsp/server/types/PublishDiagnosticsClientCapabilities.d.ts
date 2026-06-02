import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { PublishDiagnosticsClientCapabilities$TagSupportCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/PublishDiagnosticsClientCapabilities$TagSupportCapabilities.d.ts'
export class PublishDiagnosticsClientCapabilities extends JSONBase {
    static create(): PublishDiagnosticsClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRelatedInformation(): boolean;
    getTagSupport(): PublishDiagnosticsClientCapabilities$TagSupportCapabilities;
    getVersionSupport(): boolean;
    hashCode(): number;
    setRelatedInformation(relatedInformation: boolean): PublishDiagnosticsClientCapabilities;
    setTagSupport(tagSupport: PublishDiagnosticsClientCapabilities$TagSupportCapabilities): PublishDiagnosticsClientCapabilities;
    setVersionSupport(versionSupport: boolean): PublishDiagnosticsClientCapabilities;
}