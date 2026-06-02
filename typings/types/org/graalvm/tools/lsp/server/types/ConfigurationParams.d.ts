import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { ConfigurationItem } from '../../../../../../org/graalvm/tools/lsp/server/types/ConfigurationItem.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class ConfigurationParams extends JSONBase {
    static create(paramitems: ConfigurationItem[]): ConfigurationParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getItems(): ConfigurationItem[];
    hashCode(): number;
    setItems(items: ConfigurationItem[]): ConfigurationParams;
}