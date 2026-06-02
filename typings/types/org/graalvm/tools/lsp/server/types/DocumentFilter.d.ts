import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class DocumentFilter extends JSONBase {
    static create(): DocumentFilter;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getLanguage(): string;
    getPattern(): string;
    getScheme(): string;
    hashCode(): number;
    setLanguage(language: string): DocumentFilter;
    setPattern(pattern: string): DocumentFilter;
    setScheme(scheme: string): DocumentFilter;
}