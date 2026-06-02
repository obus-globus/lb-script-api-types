import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class MarkedString extends JSONBase {
    static create(paramlanguage: string, paramvalue: string): MarkedString;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getLanguage(): string;
    getValue(): string;
    hashCode(): number;
    setLanguage(language: string): MarkedString;
    setValue(value: string): MarkedString;
}