import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
export class VersionedTextDocumentIdentifier extends TextDocumentIdentifier {
    static create(paramuri: string): TextDocumentIdentifier;
    static create(paramuri: string, paramversion: number): VersionedTextDocumentIdentifier;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getVersion(): number;
    hashCode(): number;
    setVersion(version: number): VersionedTextDocumentIdentifier;
}