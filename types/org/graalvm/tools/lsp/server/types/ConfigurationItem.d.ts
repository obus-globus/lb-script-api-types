import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class ConfigurationItem extends JSONBase {
    static create(): ConfigurationItem;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getScopeUri(): string;
    getSection(): string;
    hashCode(): number;
    setScopeUri(scopeUri: string): ConfigurationItem;
    setSection(section: string): ConfigurationItem;
}