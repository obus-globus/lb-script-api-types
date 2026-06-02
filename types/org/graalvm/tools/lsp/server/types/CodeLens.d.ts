import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Command } from '../../../../../../org/graalvm/tools/lsp/server/types/Command.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class CodeLens extends JSONBase {
    static create(paramrange: Range, paramdata: Object): CodeLens;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCommand(): Command;
    getData(): Object;
    getRange(): Range;
    hashCode(): number;
    setCommand(command: Command): CodeLens;
    setData(data: Object): CodeLens;
    setRange(range: Range): CodeLens;
}