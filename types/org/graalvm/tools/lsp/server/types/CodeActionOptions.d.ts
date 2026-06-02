import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionKind.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class CodeActionOptions extends WorkDoneProgressOptions {
    static create(): CodeActionOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCodeActionKinds(): CodeActionKind[];
    hashCode(): number;
    setCodeActionKinds(codeActionKinds: CodeActionKind[]): CodeActionOptions;
}