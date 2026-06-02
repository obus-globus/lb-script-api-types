import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Unregistration } from '../../../../../../org/graalvm/tools/lsp/server/types/Unregistration.d.ts'
export class UnregistrationParams extends JSONBase {
    static create(paramunregisterations: Unregistration[]): UnregistrationParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getUnregisterations(): Unregistration[];
    hashCode(): number;
    setUnregisterations(unregisterations: Unregistration[]): UnregistrationParams;
}