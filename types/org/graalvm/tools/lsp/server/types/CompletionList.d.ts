import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CompletionItem } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItem.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CompletionList extends JSONBase {
    static create(paramitems: CompletionItem[], paramisIncomplete: boolean): CompletionList;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getItems(): CompletionItem[];
    hashCode(): number;
    isIncomplete(): boolean;
    setIncomplete(isIncomplete: boolean): CompletionList;
    setItems(items: CompletionItem[]): CompletionList;
}