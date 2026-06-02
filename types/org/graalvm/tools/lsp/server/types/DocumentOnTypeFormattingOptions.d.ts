import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class DocumentOnTypeFormattingOptions extends JSONBase {
    static create(paramfirstTriggerCharacter: string): DocumentOnTypeFormattingOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getFirstTriggerCharacter(): string;
    getMoreTriggerCharacter(): string[];
    hashCode(): number;
    setFirstTriggerCharacter(firstTriggerCharacter: string): DocumentOnTypeFormattingOptions;
    setMoreTriggerCharacter(moreTriggerCharacter: string[]): DocumentOnTypeFormattingOptions;
}