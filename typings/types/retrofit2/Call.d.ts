import type { Object } from '../java/lang/Object.d.ts'
import type { Cloneable } from '../java/lang/Cloneable.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
import type { Callback } from '../retrofit2/Callback.d.ts'
import type { Response } from '../retrofit2/Response.d.ts'
export interface Call<T extends unknown> extends Object, Cloneable{
    cancel(): void;
    clone(): Call<T>;
    enqueue(arg0: Callback<T>): void;
    execute(): Response<T>;
    isCanceled(): boolean;
    isExecuted(): boolean;
    request(): Request;
    timeout(): Timeout;
}