import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { MessageActionItem } from '../../../../../../org/graalvm/tools/lsp/server/types/MessageActionItem.d.ts'
import type { MessageType } from '../../../../../../org/graalvm/tools/lsp/server/types/MessageType.d.ts'
export class ShowMessageRequestParams extends JSONBase {
    static create(paramtype: MessageType, parammessage: string): ShowMessageRequestParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getActions(): MessageActionItem[];
    getMessage(): string;
    getType(): MessageType;
    hashCode(): number;
    setActions(actions: MessageActionItem[]): ShowMessageRequestParams;
    setMessage(message: string): ShowMessageRequestParams;
    setType(type: MessageType): ShowMessageRequestParams;
}