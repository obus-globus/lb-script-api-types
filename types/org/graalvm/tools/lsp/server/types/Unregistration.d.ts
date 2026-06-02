import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class Unregistration extends JSONBase {
    static create(paramid: string, parammethod: string): Unregistration;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getId(): string;
    getMethod(): string;
    hashCode(): number;
    setId(id: string): Unregistration;
    setMethod(method: string): Unregistration;
}