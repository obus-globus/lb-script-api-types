import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class TextDocumentItem extends JSONBase {
    static create(paramuri: string, paramlanguageId: string, paramversion: number, paramtext: string): TextDocumentItem;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getLanguageId(): string;
    getText(): string;
    getUri(): string;
    getVersion(): number;
    hashCode(): number;
    setLanguageId(languageId: string): TextDocumentItem;
    setText(text: string): TextDocumentItem;
    setUri(uri: string): TextDocumentItem;
    setVersion(version: number): TextDocumentItem;
}