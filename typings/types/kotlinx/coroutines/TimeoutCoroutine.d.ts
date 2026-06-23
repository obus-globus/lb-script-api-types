import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { ScopeCoroutine } from '../../kotlinx/coroutines/internal/ScopeCoroutine.d.ts'
export class TimeoutCoroutine<U extends unknown, T extends U> extends ScopeCoroutine<T> implements Runnable {
    static Key: Job$Key;
    constructor(time: number, uCont: Continuation<U>)
    time: number;
    nameString(): string;
    run(): void;
}