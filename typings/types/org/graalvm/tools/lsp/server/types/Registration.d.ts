import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class Registration extends JSONBase {
    static create(paramid: string, parammethod: string): Registration;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getId(): string;
    getMethod(): string;
    getRegisterOptions(): Object;
    hashCode(): number;
    setId(id: string): Registration;
    setMethod(method: string): Registration;
    setRegisterOptions(registerOptions: Object): Registration;
}