import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class RenameClientCapabilities extends JSONBase {
    static create(): RenameClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDynamicRegistration(): boolean;
    getPrepareSupport(): boolean;
    hashCode(): number;
    setDynamicRegistration(dynamicRegistration: boolean): RenameClientCapabilities;
    setPrepareSupport(prepareSupport: boolean): RenameClientCapabilities;
}