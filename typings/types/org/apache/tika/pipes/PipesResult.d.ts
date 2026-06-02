import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PipesResult$STATUS } from '../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
import type { EmitData } from '../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
export class PipesResult extends Object {
    static CLIENT_UNAVAILABLE_WITHIN_MS: PipesResult;
    static EMIT_SUCCESS: PipesResult;
    static EMPTY_OUTPUT: PipesResult;
    static INTERRUPTED_EXCEPTION: PipesResult;
    static OOM: PipesResult;
    static TIMEOUT: PipesResult;
    static UNSPECIFIED_CRASH: PipesResult;
    constructor(arg0: PipesResult$STATUS)
    constructor(arg0: PipesResult$STATUS, arg1: string)
    constructor(arg0: PipesResult$STATUS, arg1: EmitData, arg2: boolean)
    private constructor(arg0: PipesResult$STATUS, arg1: EmitData, arg2: string, arg3: boolean)
    constructor(arg0: EmitData)
    constructor(arg0: EmitData, arg1: string)
    readonly emitData: EmitData;
    readonly intermediate: boolean;
    readonly message: string;
    readonly status: PipesResult$STATUS;
    getEmitData(): EmitData;
    getMessage(): string;
    getStatus(): PipesResult$STATUS;
    isIntermediate(): boolean;
    toString(): string;
}