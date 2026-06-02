import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class ReferenceContext extends JSONBase {
    static create(paramincludeDeclaration: boolean): ReferenceContext;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    hashCode(): number;
    isIncludeDeclaration(): boolean;
    setIncludeDeclaration(includeDeclaration: boolean): ReferenceContext;
}