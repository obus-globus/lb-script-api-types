import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
export class DebugStringsKt extends Object {
    static getClassSimpleName(paramarg0: Object): string;
    static getHexAddress(paramarg0: Object): string;
    static toDebugString(paramarg0: Continuation<Object>): string;
}