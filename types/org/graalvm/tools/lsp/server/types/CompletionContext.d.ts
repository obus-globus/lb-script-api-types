import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CompletionTriggerKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionTriggerKind.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CompletionContext extends JSONBase {
    static create(paramtriggerKind: CompletionTriggerKind): CompletionContext;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTriggerCharacter(): string;
    getTriggerKind(): CompletionTriggerKind;
    hashCode(): number;
    setTriggerCharacter(triggerCharacter: string): CompletionContext;
    setTriggerKind(triggerKind: CompletionTriggerKind): CompletionContext;
}