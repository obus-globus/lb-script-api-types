import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Sneaky extends Object {
    static fake<T extends Throwable>(paramarg0: Class<T>): void;
    static sneakyThrow(paramarg0: Throwable): void;
    private constructor()
}