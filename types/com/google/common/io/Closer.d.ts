import type { Closer$Suppressor } from '../../../../com/google/common/io/Closer$Suppressor.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Closer extends Object implements Closeable {
    static create(): Closer;
    constructor(suppressor: Closer$Suppressor)
    // private stack: Closeable[];
    // private suppressor: Closer$Suppressor;
    // private thrown: Throwable;
    close(): void;
    register<C extends Closeable>(closeable: C): C;
    rethrow(e: Throwable): RuntimeException;
    rethrow(e: Throwable, declaredType: Class<X>): RuntimeException;
    rethrow(e: Throwable, declaredType1: Class<X1>, declaredType2: Class<X2>): RuntimeException;
}