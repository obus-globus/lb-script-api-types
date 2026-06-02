import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class TextDocumentIdentifier extends JSONBase {
    static create(paramuri: string): TextDocumentIdentifier;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getUri(): string;
    hashCode(): number;
    setUri(uri: string): TextDocumentIdentifier;
}