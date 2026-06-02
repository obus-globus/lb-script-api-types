import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class TextEdit extends JSONBase {
    static del(paramrange: Range): TextEdit;
    static insert(paramposition: Position, paramnewText: string): TextEdit;
    static replace(paramrange: Range, paramnewText: string): TextEdit;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getNewText(): string;
    getRange(): Range;
    hashCode(): number;
    setNewText(newText: string): TextEdit;
    setRange(range: Range): TextEdit;
}