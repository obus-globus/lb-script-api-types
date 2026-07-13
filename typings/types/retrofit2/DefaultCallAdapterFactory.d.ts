import type { Type } from '../java/lang/reflect/Type.d.ts'
import type { Executor } from '../java/util/concurrent/Executor.d.ts'
import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { CallAdapter } from '../retrofit2/CallAdapter.d.ts'
import type { CallAdapter$Factory } from '../retrofit2/CallAdapter$Factory.d.ts'
import type { Retrofit } from '../retrofit2/Retrofit.d.ts'
export class DefaultCallAdapterFactory extends CallAdapter$Factory {
    constructor(arg0: Executor)
    // private callbackExecutor: Executor;
    get(arg0: Type, arg1: Annotation[], arg2: Retrofit): CallAdapter<Object, Object>;
}