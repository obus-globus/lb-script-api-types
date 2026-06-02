import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class DidChangeConfigurationClientCapabilities extends JSONBase {
    static create(): DidChangeConfigurationClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDynamicRegistration(): boolean;
    hashCode(): number;
    setDynamicRegistration(dynamicRegistration: boolean): DidChangeConfigurationClientCapabilities;
}