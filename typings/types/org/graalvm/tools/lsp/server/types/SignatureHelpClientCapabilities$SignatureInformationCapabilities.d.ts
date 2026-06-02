import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { MarkupKind } from '../../../../../../org/graalvm/tools/lsp/server/types/MarkupKind.d.ts'
import type { SignatureHelpClientCapabilities$SignatureInformationCapabilities$ParameterInformationCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelpClientCapabilities$SignatureInformationCapabilities$ParameterInformationCapabilities.d.ts'
export class SignatureHelpClientCapabilities$SignatureInformationCapabilities extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentationFormat(): MarkupKind[];
    getParameterInformation(): SignatureHelpClientCapabilities$SignatureInformationCapabilities$ParameterInformationCapabilities;
    hashCode(): number;
    setDocumentationFormat(documentationFormat: MarkupKind[]): SignatureHelpClientCapabilities$SignatureInformationCapabilities;
    setParameterInformation(parameterInformation: SignatureHelpClientCapabilities$SignatureInformationCapabilities$ParameterInformationCapabilities): SignatureHelpClientCapabilities$SignatureInformationCapabilities;
}