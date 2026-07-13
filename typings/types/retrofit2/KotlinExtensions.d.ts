import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
import type { Continuation } from '../kotlin/coroutines/Continuation.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
import type { Retrofit } from '../retrofit2/Retrofit.d.ts'
export class KotlinExtensions extends Object {
    static await(paramarg0: Call<Object>, paramarg1: Continuation<Object>): Object;
    static awaitNullable(paramarg0: Call<Object>, paramarg1: Continuation<Object>): Object;
    static awaitResponse(paramarg0: Call<Object>, paramarg1: Continuation<Object>): Object;
    static awaitUnit(paramarg0: Call<void>, paramarg1: Continuation<Object>): Object;
    static create(paramarg0: Retrofit): Object | null;
    static suspendAndThrow(paramarg0: Throwable, paramarg1: Continuation<Object>): Object;
}