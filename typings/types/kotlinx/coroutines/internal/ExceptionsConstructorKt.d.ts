import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ExceptionsConstructorKt extends Object {
    static tryCopyException<E extends Throwable>(exception: E): E | null;
}