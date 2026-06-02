import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class CompletionOptions extends WorkDoneProgressOptions {
    static create(): CompletionOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAllCommitCharacters(): string[];
    getResolveProvider(): boolean;
    getTriggerCharacters(): string[];
    hashCode(): number;
    setAllCommitCharacters(allCommitCharacters: string[]): CompletionOptions;
    setResolveProvider(resolveProvider: boolean): CompletionOptions;
    setTriggerCharacters(triggerCharacters: string[]): CompletionOptions;
}