import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { SaveOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/SaveOptions.d.ts'
import type { TextDocumentSyncKind } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentSyncKind.d.ts'
export class TextDocumentSyncOptions extends JSONBase {
    static create(): TextDocumentSyncOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getChange(): TextDocumentSyncKind;
    getOpenClose(): boolean;
    getSave(): SaveOptions;
    getWillSave(): boolean;
    getWillSaveWaitUntil(): boolean;
    hashCode(): number;
    setChange(change: TextDocumentSyncKind): TextDocumentSyncOptions;
    setOpenClose(openClose: boolean): TextDocumentSyncOptions;
    setSave(save: SaveOptions): TextDocumentSyncOptions;
    setWillSave(willSave: boolean): TextDocumentSyncOptions;
    setWillSaveWaitUntil(willSaveWaitUntil: boolean): TextDocumentSyncOptions;
}