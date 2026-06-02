import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Module } from '../../../../../../com/oracle/truffle/tools/dap/types/Module.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ModulesResponse$ResponseBody extends JSONBase {
    static create(parammodules: Module[]): ModulesResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getModules(): Module[];
    getTotalModules(): number;
    hashCode(): number;
    setModules(modules: Module[]): ModulesResponse$ResponseBody;
    setTotalModules(totalModules: number): ModulesResponse$ResponseBody;
}