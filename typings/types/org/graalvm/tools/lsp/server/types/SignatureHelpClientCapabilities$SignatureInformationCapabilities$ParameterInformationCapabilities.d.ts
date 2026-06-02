import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class SignatureHelpClientCapabilities$SignatureInformationCapabilities$ParameterInformationCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getLabelOffsetSupport(): boolean;
    hashCode(): number;
    setLabelOffsetSupport(labelOffsetSupport: boolean): SignatureHelpClientCapabilities$SignatureInformationCapabilities$ParameterInformationCapabilities;
}