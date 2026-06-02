import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Scope } from '../../../../../../com/oracle/truffle/tools/dap/types/Scope.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ScopesResponse$ResponseBody extends JSONBase {
    static create(paramscopes: Scope[]): ScopesResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getScopes(): Scope[];
    hashCode(): number;
    setScopes(scopes: Scope[]): ScopesResponse$ResponseBody;
}