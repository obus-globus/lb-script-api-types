import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class ResultKt extends Object {
    static createFailure(paramarg0: Throwable): Object;
    static throwOnFailure(paramarg0: Object): void;
}