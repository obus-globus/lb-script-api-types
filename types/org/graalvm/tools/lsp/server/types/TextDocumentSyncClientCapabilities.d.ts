import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class TextDocumentSyncClientCapabilities extends JSONBase {
    static create(): TextDocumentSyncClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDidSave(): boolean;
    getDynamicRegistration(): boolean;
    getWillSave(): boolean;
    getWillSaveWaitUntil(): boolean;
    hashCode(): number;
    setDidSave(didSave: boolean): TextDocumentSyncClientCapabilities;
    setDynamicRegistration(dynamicRegistration: boolean): TextDocumentSyncClientCapabilities;
    setWillSave(willSave: boolean): TextDocumentSyncClientCapabilities;
    setWillSaveWaitUntil(willSaveWaitUntil: boolean): TextDocumentSyncClientCapabilities;
}