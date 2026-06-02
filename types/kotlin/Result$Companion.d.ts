import type { Object } from '../java/lang/Object.d.ts'
import type { Result } from '../kotlin/Result.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class Result$Companion extends Object {
    failure(exception: Throwable): Result<T>;
    success<T extends Object | number | string | boolean>(value: T): Result<T>;
}