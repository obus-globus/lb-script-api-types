import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Registration } from '../../../../../../org/graalvm/tools/lsp/server/types/Registration.d.ts'
export class RegistrationParams extends JSONBase {
    static create(paramregistrations: Registration[]): RegistrationParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRegistrations(): Registration[];
    hashCode(): number;
    setRegistrations(registrations: Registration[]): RegistrationParams;
}