import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class DataBreakpointInfoResponse$ResponseBody extends JSONBase {
    static create(paramdataId: string, paramdescription: string): DataBreakpointInfoResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAccessTypes(): string[];
    getCanPersist(): boolean;
    getDataId(): string;
    getDescription(): string;
    hashCode(): number;
    setAccessTypes(accessTypes: string[]): DataBreakpointInfoResponse$ResponseBody;
    setCanPersist(canPersist: boolean): DataBreakpointInfoResponse$ResponseBody;
    setDataId(dataId: string): DataBreakpointInfoResponse$ResponseBody;
    setDescription(description: string): DataBreakpointInfoResponse$ResponseBody;
}