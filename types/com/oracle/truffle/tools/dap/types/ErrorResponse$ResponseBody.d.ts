import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Message } from '../../../../../../com/oracle/truffle/tools/dap/types/Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ErrorResponse$ResponseBody extends JSONBase {
    static create(): ErrorResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getError(): Message;
    hashCode(): number;
    setError(error: Message): ErrorResponse$ResponseBody;
}