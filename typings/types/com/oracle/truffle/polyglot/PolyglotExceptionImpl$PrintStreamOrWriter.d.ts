import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class PolyglotExceptionImpl$PrintStreamOrWriter extends Object {
    private constructor()
    lock(): Object;
    print(o: Object): void;
    printStackTrace(t: Throwable): void;
    println(o: Object): void;
}