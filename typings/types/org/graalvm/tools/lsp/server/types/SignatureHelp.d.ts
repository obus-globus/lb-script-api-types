import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { SignatureInformation } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureInformation.d.ts'
export class SignatureHelp extends JSONBase {
    static create(paramsignatures: SignatureInformation[], paramactiveSignature: number, paramactiveParameter: number): SignatureHelp;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getActiveParameter(): number;
    getActiveSignature(): number;
    getSignatures(): SignatureInformation[];
    hashCode(): number;
    setActiveParameter(activeParameter: number): SignatureHelp;
    setActiveSignature(activeSignature: number): SignatureHelp;
    setSignatures(signatures: SignatureInformation[]): SignatureHelp;
}