import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class ExecuteCommandOptions extends WorkDoneProgressOptions {
    static create(paramcommands: string[]): ExecuteCommandOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCommands(): string[];
    hashCode(): number;
    setCommands(commands: string[]): ExecuteCommandOptions;
}