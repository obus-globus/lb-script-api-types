import type { JsonToken } from '../../../com/azure/json/JsonToken.d.ts'
import type { JsonWriteState } from '../../../com/azure/json/JsonWriteState.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class JsonWriteContext extends Object {
    static COMPLETED: JsonWriteContext;
    static ROOT: JsonWriteContext;
    private constructor(arg0: JsonWriteContext, arg1: JsonWriteState)
    // private context: JsonWriteState;
    readonly parent: JsonWriteContext;
    getParent(): JsonWriteContext;
    getWriteState(): JsonWriteState;
    updateContext(arg0: JsonToken): JsonWriteContext;
    validateToken(arg0: JsonToken): void;
}