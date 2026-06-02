import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { SignatureHelpClientCapabilities$SignatureInformationCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelpClientCapabilities$SignatureInformationCapabilities.d.ts'
export class SignatureHelpClientCapabilities extends JSONBase {
    static create(): SignatureHelpClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContextSupport(): boolean;
    getDynamicRegistration(): boolean;
    getSignatureInformation(): SignatureHelpClientCapabilities$SignatureInformationCapabilities;
    hashCode(): number;
    setContextSupport(contextSupport: boolean): SignatureHelpClientCapabilities;
    setDynamicRegistration(dynamicRegistration: boolean): SignatureHelpClientCapabilities;
    setSignatureInformation(signatureInformation: SignatureHelpClientCapabilities$SignatureInformationCapabilities): SignatureHelpClientCapabilities;
}