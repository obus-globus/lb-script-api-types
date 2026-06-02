import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class MessageActionItem extends JSONBase {
    static create(paramtitle: string): MessageActionItem;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTitle(): string;
    hashCode(): number;
    setTitle(title: string): MessageActionItem;
}