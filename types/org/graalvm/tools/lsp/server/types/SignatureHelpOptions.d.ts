import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class SignatureHelpOptions extends WorkDoneProgressOptions {
    static create(): SignatureHelpOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRetriggerCharacters(): string[];
    getTriggerCharacters(): string[];
    hashCode(): number;
    setRetriggerCharacters(retriggerCharacters: string[]): SignatureHelpOptions;
    setTriggerCharacters(triggerCharacters: string[]): SignatureHelpOptions;
}