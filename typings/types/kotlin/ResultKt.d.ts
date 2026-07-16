import type { Object } from '../java/lang/Object.d.ts'
import type { Result } from '../kotlin/Result.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class ResultKt extends Object {
    static createFailure(exception: Throwable): Object;
    static throwOnFailure(self: Result<Object>): void;
}