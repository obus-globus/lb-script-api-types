import type { Capabilities } from '../../../../../../com/oracle/truffle/tools/dap/types/Capabilities.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CapabilitiesEvent$EventBody extends JSONBase {
    static create(paramcapabilities: Capabilities): CapabilitiesEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCapabilities(): Capabilities;
    hashCode(): number;
    setCapabilities(capabilities: Capabilities): CapabilitiesEvent$EventBody;
}