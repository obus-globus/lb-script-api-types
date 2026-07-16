import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export abstract class AbstractSupplier<T extends unknown, B extends AbstractSupplier<T, B, E>, E extends Throwable> extends Object implements FailableSupplier<T, E> {
    static NUL: () => Object | null;
    static nul<T extends unknown, E extends Exception>(): () => T;
    constructor()
    asThis(): B;
}