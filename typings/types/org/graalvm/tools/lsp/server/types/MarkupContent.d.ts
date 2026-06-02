import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { MarkupKind } from '../../../../../../org/graalvm/tools/lsp/server/types/MarkupKind.d.ts'
export class MarkupContent extends JSONBase {
    static create(paramkind: MarkupKind, paramvalue: string): MarkupContent;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getKind(): MarkupKind;
    getValue(): string;
    hashCode(): number;
    setKind(kind: MarkupKind): MarkupContent;
    setValue(value: string): MarkupContent;
}