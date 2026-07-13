import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
import type { Response } from '../retrofit2/Response.d.ts'
export interface Callback<T extends unknown> extends Object{
    onFailure(arg0: Call<T>, arg1: Throwable): void;
    onResponse(arg0: Call<T>, arg1: Response<T>): void;
}