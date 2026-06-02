import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class TextDocumentRegistrationOptions extends JSONBase {
    static create(paramdocumentSelector: Object[]): TextDocumentRegistrationOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentSelector(): Object[];
    hashCode(): number;
    setDocumentSelector(documentSelector: Object[]): TextDocumentRegistrationOptions;
}