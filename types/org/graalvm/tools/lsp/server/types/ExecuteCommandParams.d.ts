import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class ExecuteCommandParams extends WorkDoneProgressParams {
    static create(paramcommand: string): ExecuteCommandParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getArguments(): Object[];
    getCommand(): string;
    hashCode(): number;
    setArguments(arguments: Object[]): ExecuteCommandParams;
    setCommand(command: string): ExecuteCommandParams;
}