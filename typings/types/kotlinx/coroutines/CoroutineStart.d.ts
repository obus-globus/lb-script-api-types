import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
export class CoroutineStart extends Enum<CoroutineStart> {
    static ATOMIC: CoroutineStart;
    static DEFAULT: CoroutineStart;
    static LAZY: CoroutineStart;
    static UNDISPATCHED: CoroutineStart;
    static getEntries(): CoroutineStart[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CoroutineStart;
    static values(): (Object | null)[];
    private constructor()
    /*not mapped: */ isLazy(): boolean;
    invoke<R extends Object | number | string | boolean>(block: Function2<Object, Object, Object>, receiver: R, completion: Continuation<T>): void;
    name(): "DEFAULT" | "LAZY" | "ATOMIC" | "UNDISPATCHED";
}