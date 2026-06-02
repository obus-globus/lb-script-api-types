import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class FoldingRange extends JSONBase {
    static create(paramstartLine: number, paramendLine: number, paramstartCharacter: number, paramendCharacter: number, paramkind: string): FoldingRange;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getEndCharacter(): number;
    getEndLine(): number;
    getKind(): string;
    getStartCharacter(): number;
    getStartLine(): number;
    hashCode(): number;
    setEndCharacter(endCharacter: number): FoldingRange;
    setEndLine(endLine: number): FoldingRange;
    setKind(kind: string): FoldingRange;
    setStartCharacter(startCharacter: number): FoldingRange;
    setStartLine(startLine: number): FoldingRange;
}