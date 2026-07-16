import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
import type { Response } from '../retrofit2/Response.d.ts'
import type { Retrofit } from '../retrofit2/Retrofit.d.ts'
export class KotlinExtensions extends Object {
    static await<T extends unknown>(self: Call<T>): T;
    static awaitNullable<T extends unknown>(self: Call<T>): T | null;
    static awaitResponse<T extends unknown>(self: Call<T>): Response<T>;
    static awaitUnit(self: Call<void>): void;
    static create<T extends unknown>(self: Retrofit): T;
    static suspendAndThrow(self: Throwable): void;
}