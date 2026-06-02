import type { Closeable } from '../../../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { Closer$Suppressor } from '../../../../../../../org/spongepowered/include/com/google/common/io/Closer$Suppressor.d.ts'
export class Closer$LoggingSuppressor extends Object implements Closer$Suppressor {
    constructor()
    suppress(arg0: Closeable, arg1: Throwable, arg2: Throwable): void;
}