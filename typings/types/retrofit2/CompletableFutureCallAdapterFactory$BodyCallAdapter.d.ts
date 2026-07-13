import type { Type } from '../java/lang/reflect/Type.d.ts'
import type { CompletableFuture } from '../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
import type { CallAdapter } from '../retrofit2/CallAdapter.d.ts'
export class CompletableFutureCallAdapterFactory$BodyCallAdapter<R extends unknown> extends Object implements CallAdapter<R, CompletableFuture<R>> {
    constructor(arg0: Type)
    // private responseType: Type;
    adapt(arg0: Call<R>): CompletableFuture<R>;
    responseType(): Type;
}