import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ApplicationCall } from '../../../../../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
export class ModuleRequest extends Record {
    constructor(name: string)
    // private name: string;
    /*not mapped: */ name(): string;
    component1(): string;
    copy(name: string): ModuleRequest;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    handle(call: ApplicationCall, $completion: Continuation<void>): any;
    hashCode(): number;
    toString(): string;
}