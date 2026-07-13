import type { Type } from '../java/lang/reflect/Type.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
export interface CallAdapter<R extends unknown, T extends unknown> extends Object{
    adapt(arg0: Call<R>): T;
    responseType(): Type;
}