import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Module } from '../../../../../../com/oracle/truffle/tools/dap/types/Module.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ModuleEvent$EventBody extends JSONBase {
    static create(paramreason: string, parammodule: Module): ModuleEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getModule(): Module;
    getReason(): string;
    hashCode(): number;
    setModule(module: Module): ModuleEvent$EventBody;
    setReason(reason: string): ModuleEvent$EventBody;
}