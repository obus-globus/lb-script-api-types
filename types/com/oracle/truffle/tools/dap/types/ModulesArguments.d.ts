import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ModulesArguments extends JSONBase {
    static create(): ModulesArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getModuleCount(): number;
    getStartModule(): number;
    hashCode(): number;
    setModuleCount(moduleCount: number): ModulesArguments;
    setStartModule(startModule: number): ModulesArguments;
}