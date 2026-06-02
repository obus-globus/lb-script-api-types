import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class Throwables extends Object {
    static getRootCause(paramthrowable: Throwable): Throwable;
    static rethrow(paramt: Throwable): void;
    static toStringList(paramthrowable: Throwable): string[];
    private constructor()
}