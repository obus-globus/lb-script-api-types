import type { Closeable } from '../../../../../../../java/io/Closeable.d.ts'
import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { Closer$Suppressor } from '../../../../../../../org/spongepowered/include/com/google/common/io/Closer$Suppressor.d.ts'
export class Closer extends Object implements Closeable {
    static create(): Closer;
    constructor(arg0: Closer$Suppressor)
    // private stack: Closeable[];
    // private suppressor: Closer$Suppressor;
    // private thrown: Throwable;
    close(): void;
    register<C extends Closeable>(arg0: C): C;
    rethrow(arg0: Throwable): RuntimeException;
}