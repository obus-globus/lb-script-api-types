import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { MessageType } from '../../../../../../org/graalvm/tools/lsp/server/types/MessageType.d.ts'
export class ShowMessageParams extends JSONBase {
    static create(paramtype: MessageType, parammessage: string): ShowMessageParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getMessage(): string;
    getType(): MessageType;
    hashCode(): number;
    setMessage(message: string): ShowMessageParams;
    setType(type: MessageType): ShowMessageParams;
}