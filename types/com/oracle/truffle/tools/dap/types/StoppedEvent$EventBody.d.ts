import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StoppedEvent$EventBody extends JSONBase {
    static create(paramreason: string): StoppedEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAllThreadsStopped(): boolean;
    getDescription(): string;
    getPreserveFocusHint(): boolean;
    getReason(): string;
    getText(): string;
    getThreadId(): number;
    hashCode(): number;
    setAllThreadsStopped(allThreadsStopped: boolean): StoppedEvent$EventBody;
    setDescription(description: string): StoppedEvent$EventBody;
    setPreserveFocusHint(preserveFocusHint: boolean): StoppedEvent$EventBody;
    setReason(reason: string): StoppedEvent$EventBody;
    setText(text: string): StoppedEvent$EventBody;
    setThreadId(threadId: number): StoppedEvent$EventBody;
}