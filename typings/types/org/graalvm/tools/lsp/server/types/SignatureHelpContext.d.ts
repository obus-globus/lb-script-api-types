import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { SignatureHelp } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelp.d.ts'
import type { SignatureHelpTriggerKind } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelpTriggerKind.d.ts'
export class SignatureHelpContext extends JSONBase {
    static create(paramtriggerKind: SignatureHelpTriggerKind, paramisRetrigger: boolean): SignatureHelpContext;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getActiveSignatureHelp(): SignatureHelp;
    getTriggerCharacter(): string;
    getTriggerKind(): SignatureHelpTriggerKind;
    hashCode(): number;
    isRetrigger(): boolean;
    setActiveSignatureHelp(activeSignatureHelp: SignatureHelp): SignatureHelpContext;
    setRetrigger(isRetrigger: boolean): SignatureHelpContext;
    setTriggerCharacter(triggerCharacter: string): SignatureHelpContext;
    setTriggerKind(triggerKind: SignatureHelpTriggerKind): SignatureHelpContext;
}